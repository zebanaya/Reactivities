namespace Domain
{
    public class UserFollowing
    {
        public string ObserverId { get; set; }
        public AppUser Obsearver { get; set; }
        public string TargetId { get; set; }
        public AppUser Target { get; set; }
    }
}