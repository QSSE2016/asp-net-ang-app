using LoginAppAPI.Models.DTOs;

namespace LoginAppAPI.Repositories.Interface
{
    public interface ILoginRepository
    {
        Task<bool> CanLogin(LoginCheckDto loginInfo);
    }
}
