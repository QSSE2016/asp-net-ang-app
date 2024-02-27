namespace LoginAppAPI.Models.DTOs
{
    public class CreateUserRequestDto
    {
        public string Name { get; set; } = null!;
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}
