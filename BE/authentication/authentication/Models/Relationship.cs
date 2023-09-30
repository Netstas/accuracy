namespace authentication.Models
{
    public class Relationship
    {
        public int Id { get; set; }
        public string RelationshipType { get; set; }
        public int UserId { get; set; }
        public int PhotoId { get; set; }
        public User User { get; set; }
        public Photo Photo { get; set; }
    }
}
