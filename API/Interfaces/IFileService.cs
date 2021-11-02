using CloudinaryDotNet.Actions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IFileService
    {
        Task<ImageUploadResult> Submit(string base64);
    }
}
