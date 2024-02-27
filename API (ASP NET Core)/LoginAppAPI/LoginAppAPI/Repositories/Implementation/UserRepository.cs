using LoginAppAPI.Data;
using LoginAppAPI.Models;
using LoginAppAPI.Repositories.Interface;
using System;

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
    }
}
