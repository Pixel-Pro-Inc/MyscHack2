using API.Data;
using API.DTO;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class SubmissionController : BaseApiController
    {
        private readonly FirebaseDataContext _firebaseDataContext;
        private readonly ITokenService _tokenService;
        private readonly IFileService _fileService;
        private readonly string dir = "Submissions";
        public SubmissionController(ITokenService tokenService, IFileService fileService)
        {
            _tokenService = tokenService;
            _fileService = fileService;
            _firebaseDataContext = new FirebaseDataContext();
        }
        [Authorize]
        [HttpPost("submit")]
        public async Task<ActionResult<SubmissionDto>> Submit(SubmissionDto submissionDto)
        {
            Submission sub = new Submission()
            {
                user = submissionDto.user,
                CertificatesUrl = submissionDto.CertificatesUrl,
                HostOrganizations = submissionDto.HostOrganizations,
                Programme = submissionDto.Programme
            };

            for (int i = 0; i < submissionDto.CertificatesUrl.Count; i++)
            {
                if(submissionDto.CertificatesUrl[i] != null && submissionDto.CertificatesUrl[i] != "")
                {
                    var result = await _fileService.Submit(submissionDto.CertificatesUrl[i]);

                    if (result.Error != null) return BadRequest(result.Error.Message);

                    sub.CertificatesUrl[i] = result.SecureUrl.AbsoluteUri;
                }
            }

            int n = new Random().Next(100000, 999999);

            _firebaseDataContext.StoreData(dir + "/" + sub.user.OmangNumber + "/"+ n, sub);

            return submissionDto;
        }
        [Authorize]
        [HttpGet("get/{id}")]
        public async Task<ActionResult<List<Submission>>> GetSubs(string id)
        {
            var response = await _firebaseDataContext.GetData(dir + "/" + id);
            List<Submission> subs = new List<Submission>();

            foreach (var item in response)
            {
                Submission submission = JsonConvert.DeserializeObject<Submission>(((JObject)item).ToString());

                subs.Add(submission);
            }

            return subs;
        }
    }
}
