namespace StudentEnrollment.API.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string StudentName { get; set; } = string.Empty;
        public string Programme { get; set; } = string.Empty;
        public string EnrollmentStatus { get; set; } = string.Empty;
    }
}
