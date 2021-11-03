using API.Data;
using API.DTO;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class UserController : BaseApiController
    {
        private readonly FirebaseDataContext _firebaseDataContext;
        private readonly ITokenService _tokenService;
        private readonly string dir = "Users";
        public UserController(ITokenService tokenService)
        {
            _tokenService = tokenService;
            _firebaseDataContext = new FirebaseDataContext();
        }
        [HttpPost("register")]
        public async Task<ActionResult<RegisterDto>> RegisterUser(RegisterDto registerDto)
        {
            if (await UserTaken(registerDto.OmangNumber))
                return BadRequest("Username is not available.");

            using var hmac = new HMACSHA512();

            User user = new User()
            {
                OmangNumber = registerDto.OmangNumber,
                DateOfBirth = registerDto.DateOfBirth,
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key,
                PhoneNumber = registerDto.PhoneNumber
            };

            int n = new Random().Next(100000, 999999);
            
            _firebaseDataContext.StoreData(dir + "/" + n, user);

            return registerDto;
        }
        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            if (!(await UserTaken(loginDto.OmangNumber)))
                return Unauthorized("Username doesn't exist");

            User user = (await GetUser(loginDto.OmangNumber));

            using var hmac = new HMACSHA512(user.PasswordSalt);
            Byte[] computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i])
                    return Unauthorized("Wrong password");
            }

            //Successful
            return new UserDto()
            {
                FirstName = user.FirstName,
                OmangNumber = user.OmangNumber,
                Token = _tokenService.CreateToken(user)
            };
        }
        public async Task<bool> UserTaken(int OmangNumber)
        {
            var response = await _firebaseDataContext.GetData(dir);
            foreach (var item in response)
            {
                User user = JsonConvert.DeserializeObject<User>(((JObject)item).ToString());
                if(user.OmangNumber == OmangNumber)
                {
                    return true;
                }
            }

            return false;
        }
        public async Task<User> GetUser(int OmangNumber)
        {
            var response = await _firebaseDataContext.GetData(dir);
            foreach (var item in response)
            {
                User user = JsonConvert.DeserializeObject<User>(((JObject)item).ToString());
                if (user.OmangNumber == OmangNumber)
                    return user;
            }

            return new User();
        }

    }
}
