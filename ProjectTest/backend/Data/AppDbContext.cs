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
                new Student { Id = 1, StudentName = "John Tan", Programme = "Software Engineering", EnrollmentStatus = "Active" },
                new Student { Id = 2, StudentName = "Nur Aisyah", Programme = "Data Science", EnrollmentStatus = "Pending" },
                new Student { Id = 3, StudentName = "Lim Wei Jian", Programme = "Information Systems", EnrollmentStatus = "Active" }
            );
        }
    }
}
