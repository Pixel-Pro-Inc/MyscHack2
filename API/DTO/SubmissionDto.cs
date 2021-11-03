using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTO
{
    public class SubmissionDto
    {
        public UserDto user { get; set; }
        public string Programme { get; set; }
        public string HostOrganizations { get; set; }
        public string CertificateUrl { get; set; }
    }
}
