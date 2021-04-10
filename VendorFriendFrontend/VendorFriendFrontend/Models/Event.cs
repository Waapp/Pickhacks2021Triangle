using System;
using System.Collections.Generic;

#nullable disable

namespace VendorFriendFrontend.Models
{
    public partial class Event
    {
        public Event()
        {
            Vendors = new HashSet<Vendor>();
        }

        public int EventId { get; set; }
        public string EventName { get; set; }
        public string EventLocation { get; set; }
        public string EventDescription { get; set; }
        public string EventHours { get; set; }
        public bool EventActive { get; set; }
        public int? OwnerId { get; set; }

        public virtual Owner Owner { get; set; }
        public virtual ICollection<Vendor> Vendors { get; set; }
    }
}
