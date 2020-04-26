namespace WebService.Extensions
{
    using GrpcWebApp.Data.Models;
    using GrpcWebApp.Proto.Employee;

    public static class EmployeeMappingExtensions
    {
        public static EmployeeEntity ToEmployeeEntity(this Employee employee) => new EmployeeEntity()
        {
            Id = employee.EmployeeId,
            FirstName = employee.FirstName,
            LastName = employee.LastName,
        };

        public static Employee ToEmployee(this EmployeeEntity employeeEntity) => new Employee()
        {
            EmployeeId = employeeEntity.Id,
            FirstName = employeeEntity.FirstName,
            LastName = employeeEntity.LastName,
        };
    }
}
