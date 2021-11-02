using API.Helpers;
using API.Interfaces;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public class FileService : IFileService
    {
        private readonly Cloudinary _cloudinary;
        public FileService(IOptions<CloudinarySettings> config)
        {
            var acc = new Account
                (
                config.Value.CloudName,
                config.Value.ApiKey,
                config.Value.ApiSecret
                );

            _cloudinary = new Cloudinary(acc);
        }
        public async Task<ImageUploadResult> Submit(string path)
        {
            var uploadResult = new ImageUploadResult();

            int n = path.IndexOf("base64,");

            path = path.Remove(0, n + 7);
            var bytes = Convert.FromBase64String(path);

            FormFile file;

            var myStream = new MemoryStream(bytes);
            file = new FormFile(myStream, 0, myStream.Length, null, "docName");

            if (file.Length > 0)
            {
                using var stream = file.OpenReadStream();
                var uploadParams = new ImageUploadParams
                {
                    File = new FileDescription("pdfDoc", stream)
                };

                uploadResult = await _cloudinary.UploadAsync(uploadParams);
            }

            return uploadResult;
        }
    }
}
