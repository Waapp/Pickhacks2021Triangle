using System;
using System.Collections.Generic;

#nullable disable

namespace VendorFriendFrontend.Models
{
    public partial class Owner
    {
        public Owner()
        {
            Events = new HashSet<Event>();
            Vendors = new HashSet<Vendor>();
        }

        public int OwnerId { get; set; }
        public string OwnerName { get; set; }
        public string OwnerPassword { get; set; }

        public virtual ICollection<Event> Events { get; set; }
        public virtual ICollection<Vendor> Vendors { get; set; }
    }
}
