namespace authentication.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public List<Photo> Photos { get; set; }
        public List<Relationship> Relationships { get; set; }
    }
}
