using FireSharp.Config;
using FireSharp.Interfaces;
using FireSharp.Response;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data
{
    public class FirebaseDataContext
    {
        IFirebaseConfig config = new FirebaseConfig
        {
            AuthSecret = "Jqamw5dh43Ut3G9p0uO9YIOH2MOcKKHK60kOGW1y",
            BasePath = "https://mysc-db69f-default-rtdb.firebaseio.com/"
        };

        IFirebaseClient client;

        public FirebaseDataContext()
        {
            client = new FireSharp.FirebaseClient(config);
        }

        public async void StoreData(string path, object data)
        {
            client = new FireSharp.FirebaseClient(config);

            var response = await client.SetAsync(path, data);
        }
        public async Task<List<object>> GetData(string path)
        {
            List<object> objects = new List<object>();

            client = new FireSharp.FirebaseClient(config);

            FirebaseResponse response = await client.GetAsync(path);

            dynamic data = JsonConvert.DeserializeObject<dynamic>(response.Body);

            if (data != null)
            {
                foreach (var item in data)
                {
                    object _object = new object();

                    if (item.GetType() == typeof(JProperty))
                    {
                        _object = JsonConvert.DeserializeObject<object>(((JProperty)item).Value.ToString());
                    }
                    else
                    {
                        _object = JsonConvert.DeserializeObject<object>(((JObject)item).ToString());
                    }

                    objects.Add(_object);
                }
            }

            return objects;
        }
        public async void EditData(string path, object data)
        {
            client = new FireSharp.FirebaseClient(config);

            var response = await client.UpdateAsync(path, data);
        }
    }
}
