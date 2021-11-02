using API.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Submission
    {
        public UserDto user { get; set; }
        public string Programme { get; set; }
        public List<string> HostOrganizations { get; set; }
        public List<string> CertificatesUrl { get; set; }
    }
}
