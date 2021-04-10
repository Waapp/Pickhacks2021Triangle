using System;
using System.Collections.Generic;

#nullable disable

namespace VendorFriendFrontend.Models
{
    public partial class Vendor
    {
        public Vendor()
        {
            Products = new HashSet<Product>();
        }

        public int VendorId { get; set; }
        public string VendorName { get; set; }
        public bool ApprovedVendor { get; set; }
        public string VendorLocation { get; set; }
        public string VendorDescription { get; set; }
        public string VendorHours { get; set; }
        public int? EventId { get; set; }
        public int? OwnerId { get; set; }

        public virtual Event Event { get; set; }
        public virtual Owner Owner { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
