using Microsoft.EntityFrameworkCore;
using StudentEnrollment.API.Models;

namespace StudentEnrollment.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>().HasData(
                new Student { Id = 1, StudentName = "Almonder", Programme = "Software Engineering", EnrollmentStatus = "Active" },
                new Student { Id = 2, StudentName = "Awed", Programme = "Data Science", EnrollmentStatus = "Pending" },
                new Student { Id = 3, StudentName = "Betaher", Programme = "Information Systems", EnrollmentStatus = "Active" }
            );
        }
    }
}
