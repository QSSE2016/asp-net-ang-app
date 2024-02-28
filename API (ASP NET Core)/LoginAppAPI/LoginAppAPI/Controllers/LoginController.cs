using LoginAppAPI.Models.DTOs;
using LoginAppAPI.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;

namespace LoginAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private readonly ILoginRepository repo;

        public LoginController(ILoginRepository repo)
        {
            this.repo = repo;
        }

        // in case of 401 alert user through angular or something.
        [HttpPost]
        public async Task<IActionResult> CheckIfClientCanLogIn(LoginCheckDto loginInfo)
        {
            bool okToLogin = await repo.CanLogin(loginInfo);
            return !okToLogin ? StatusCode(401,new { Value = ""}) : Ok(new {Value = loginInfo.Username });
        }
    }
}
