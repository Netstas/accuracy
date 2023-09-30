namespace authentication.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public int PhotoId { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
