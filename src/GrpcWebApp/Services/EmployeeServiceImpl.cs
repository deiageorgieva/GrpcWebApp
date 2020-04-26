namespace GrpcWebApp.Services
{
    using System.Linq;
    using System.Threading.Tasks;
    using Grpc.Core;
    using GrpcWebApp.Data;
    using GrpcWebApp.Proto.Employee;
    using WebService.Extensions;

    public class EmployeeServiceImpl : EmployeeService.EmployeeServiceBase
    {
        private ApplicationDbContext dbContext = null;

        //   private readonly ILogger _logger;
        public EmployeeServiceImpl(ApplicationDbContext db)//, ILogger logger)
        {
            this.dbContext = db;
        }

        public override async Task<Employees> SelectAll(Empty requestData, ServerCallContext context)
        {
            var responseData = new Employees();
            var query = dbContext.Employees.Select(empl => empl.ToEmployee());

            responseData.EmployeesList.AddRange(query.ToArray());
            try
            {
                return await Task.FromResult(responseData);
            }
            catch (System.Exception ex)
            {

                throw new RpcException(Status.DefaultCancelled);
            }
        }

        public override async Task<Employee> SelectById(EmployeeFilter requestData, ServerCallContext context)
        {
            var employee = dbContext.Employees.Find(requestData.EmployeeId).ToEmployee();

            return await Task.FromResult(employee);
        }

        public override async Task<Result> Insert(Employee requestData, ServerCallContext context)
        {
            dbContext.Add(requestData.ToEmployeeEntity());
            dbContext.SaveChanges();

            return await Task.FromResult(new Result() { Message = "Successful insert" });
        }

        public override async Task<Result> Update(Employee requestData, ServerCallContext context)
        {
            dbContext.Employees.Update(requestData.ToEmployeeEntity());
            dbContext.SaveChanges();

            return await Task.FromResult(new Result() { Message = "Successful update" });
        }

        public override async Task<Result> Delete(EmployeeFilter requestData, ServerCallContext context)
        {
            var employeeToDelete = dbContext.Employees.Find(requestData.EmployeeId);
            dbContext.Remove(employeeToDelete);
            dbContext.SaveChanges();

            return await Task.FromResult(new Result() { Message = "Successful delete" });
        }
    }
}
