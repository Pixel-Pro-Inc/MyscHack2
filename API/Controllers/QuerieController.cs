using API.Data;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class QuerieController : BaseApiController
    {
        private readonly FirebaseDataContext _firebaseDataContext;
        private readonly ITokenService _tokenService;
        private readonly string dir = "Querie";
        public QuerieController(ITokenService tokenService)
        {
            _tokenService = tokenService;
            _firebaseDataContext = new FirebaseDataContext();
        }
        [HttpPost("submit")]
        public async Task<ActionResult<Querie>> Submit(Querie sub)
        {
            int n = new Random().Next(100000, 999999);

            _firebaseDataContext.StoreData(dir + "/" + sub.user.OmangNumber + "/" + n, sub);

            return sub;
        }
        [HttpGet("get/{id}")]
        public async Task<ActionResult<List<Querie>>> GetSubs(string id)
        {
            var response = await _firebaseDataContext.GetData(dir + "/" + id);
            List<Querie> qs = new List<Querie>();

            foreach (var item in response)
            {
                Querie q = JsonConvert.DeserializeObject<Querie>(((JObject)item).ToString());

                qs.Add(q);
            }

            return qs;
        }
    }
}
