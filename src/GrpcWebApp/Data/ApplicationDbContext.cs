namespace GrpcWebApp.Data
{
    using GrpcWebApp.Data.Models;
    using Microsoft.EntityFrameworkCore;

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<EmployeeEntity> Employees { get; set; }
    }
}
