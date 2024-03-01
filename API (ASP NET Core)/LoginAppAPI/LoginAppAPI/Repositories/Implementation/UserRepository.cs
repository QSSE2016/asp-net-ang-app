using LoginAppAPI.Data;
using LoginAppAPI.Models;
using LoginAppAPI.Repositories.Interface;

namespace LoginAppAPI.Repositories.Implementation
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext context;

        public UserRepository(AppDbContext context)
        {
            this.context = context;
        }

        // I'm going to assume different names for every user, but if you want to take that into account, maybe don't use only the username for checking if someone is you lol.
        public async Task<User?> CreateAsync(User user)
        {
            if(context.Users.Any(u => u.Name == user.Name && u.Password == user.Password))
                return null;

            await context.AddAsync(user);
            await context.SaveChangesAsync();

            return user;
        }

        // Again you probably want async here. As in definetely. Best practises and such.
        public bool Delete(string userToDelete)
        {
            User? u = context.Users.FirstOrDefault(user => user.Name == userToDelete);
            if (u == null)
                return false;

            context.Users.Remove(u);
            context.SaveChanges();
            return true;
        }

        // Not making this async, since i have very little users. Though in serious projects
        // you probably want async functions
        public IEnumerable<string> GetAllUsers()
        {
            return context.Users.ToList().Select(x => x.Name);
        }

        public bool ShouldntDelete()
        {
            return context.Users.Count() == 1;
        }
    }
}
