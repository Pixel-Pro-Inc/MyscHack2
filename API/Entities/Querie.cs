using API.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Querie
    {
        public UserDto user { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
    }
}
