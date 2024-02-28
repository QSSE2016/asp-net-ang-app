using LoginAppAPI.Data;
using LoginAppAPI.Models;
using LoginAppAPI.Models.DTOs;
using LoginAppAPI.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace LoginAppAPI.Repositories.Implementation
{
    public class LoginRepository : ILoginRepository
    {
        private readonly AppDbContext context;

        public LoginRepository(AppDbContext context)
        {
            this.context = context;
        }

        // I haven't encrypted passwords cause i'm too lazy, but all that would change is just adding a few steps to the checking process.
        public async Task<bool> CanLogin(LoginCheckDto loginInfo)
        {
            List<User> l =  await context.Users.Where(x => x.Name == loginInfo.Username && x.Password == loginInfo.Password).ToListAsync();
            return l.Count == 1;
        }
    }
}
