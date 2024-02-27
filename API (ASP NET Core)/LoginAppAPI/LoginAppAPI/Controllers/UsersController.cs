﻿using LoginAppAPI.Data;
using LoginAppAPI.Models;
using LoginAppAPI.Models.DTOs;
using LoginAppAPI.Repositories.Implementation;
using LoginAppAPI.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;

namespace LoginAppAPI.Controllers
{
    // I will be using DTO's for managing what comes in and out of a given request.
    // http://localhost:xxxx/api/users . Controllers define a set of actions (in our case CRUD at endpoints)
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly IUserRepository repo;

        public UsersController(IUserRepository repo)
        {
            this.repo = repo;
        }




        // Define POST action
        [HttpPost]
        public async Task<IActionResult> CreateUser(CreateUserRequestDto payload)
        {
            // 1. create the object we want to add.
            User u = new User()
            {
                Name = payload.Name,
                Email = payload.Email,
                Password = payload.Password,
            };


            // 2. store it (through the repository)
            await repo.CreateAsync(u);

            // 3. turn it back to a DTO (this time containing only the info we want). In my case i only want the name, so i'm passing the name only without a DTO
            return Ok(payload.Name);
        }
    }
}
