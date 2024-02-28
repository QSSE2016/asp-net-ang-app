using LoginAppAPI.Models;

namespace LoginAppAPI.Repositories.Interface
{
    // Unfortunately this has to be done no matter what. Love me some boilerplate.
    public interface IUserRepository
    {
        Task<User?> CreateAsync(User user);
        IEnumerable<string> GetAllUsers();
    }
}
