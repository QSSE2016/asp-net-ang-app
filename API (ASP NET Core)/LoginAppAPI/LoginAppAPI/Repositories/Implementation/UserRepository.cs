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

        public async Task<User> CreateAsync(User user)
        {
            await context.AddAsync(user);
            await context.SaveChangesAsync();

            return user;
        }

        // Not making this async, since i have very little users. Though in serious projects
        // you probably want async functions
        public IEnumerable<string> GetAllUsers()
        {
            return context.Users.ToList().Select(x => x.Name);
        }
    }
}
