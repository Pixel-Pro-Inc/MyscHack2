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
using Twilio;
using Twilio.Clients;
using Twilio.Rest.Api.V2010.Account;

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
                CertificateUrl = submissionDto.CertificateUrl,
                HostOrganizations = submissionDto.HostOrganizations,
                Programme = submissionDto.Programme
            };

            var result = await _fileService.Submit(submissionDto.CertificateUrl);

            if (result.Error != null) return BadRequest(result.Error.Message);

            sub.CertificateUrl = result.SecureUrl.AbsoluteUri;

            int n = new Random().Next(100000, 999999);

            _firebaseDataContext.StoreData(dir + "/" + sub.user.OmangNumber + "/"+ n, sub);

            SendSMS("", sub.user.PhoneNumber.ToString());

            return submissionDto;
        }
        [Authorize]
        [HttpGet("/submissions/get/{id}")]
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

        void SendSMS(string programme, string number)
        {
            // Find your Account SID and Auth Token at twilio.com/console
            // and set the environment variables. See http://twil.io/secure
            string accountSid = "ACb6bff2fe1dd75e7f0ef7ec2c0d4d7b84";
            string authToken = "bbd92d17562432a3dc52945087110dd0";

            TwilioClient.Init(accountSid, authToken);

            var message = MessageResource.Create(
                body: "Thank you for your application to the program! You will get notified about your application via sms or you can visit the my applications page of the website.",
                from: new Twilio.Types.PhoneNumber("+18453823904"),
                to: new Twilio.Types.PhoneNumber("+267" + number)
            );
        }
    }
}
