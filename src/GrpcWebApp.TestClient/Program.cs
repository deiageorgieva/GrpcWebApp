namespace GrpcWebApp.TestClient
{
    using System;
    using System.Linq;
    using System.Net.Http;
    using System.Threading.Tasks;
    using Grpc.Core;
    using Grpc.Net.Client;
    using Grpc.Net.Client.Web;
    using GrpcWebApp.Proto.Employee;

    public class Program
    {
        public static async Task Main(string[] args)
        {
            var handler = new GrpcWebHandler(GrpcWebMode.GrpcWebText, new HttpClientHandler());

            var channel = GrpcChannel.ForAddress("https://localhost:5001", new GrpcChannelOptions
            {
                HttpClient = new HttpClient(handler)
            });

            var client = new EmployeeService.EmployeeServiceClient(channel);
            try
            {
                var employee = new Employee
                {
                    FirstName = "test",
                    LastName = "test"
                };
                var reply = await client.InsertAsync(employee);
                Console.WriteLine(reply.Message);
            }
            catch (RpcException ex)
            {
                Console.WriteLine(ex.Message);
                Console.WriteLine(ex.InnerException.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            try
            {
                var reply = await client.SelectAllAsync(new Empty());
                Console.WriteLine(reply.EmployeesList.First().FirstName);
            }
            catch (RpcException ex)
            {
                Console.WriteLine(ex.Message);
                Console.WriteLine(ex.InnerException.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                channel.ShutdownAsync().Wait();
            }
        }
    }
}
