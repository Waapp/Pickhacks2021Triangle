using System;
using System.Collections.Generic;

#nullable disable

namespace VendorFriendFrontend.Models
{
    public partial class Product
    {
        public int ProductId { get; set; }
        public decimal? ProductCost { get; set; }
        public string ProductDescription { get; set; }
        public int? ProductQuantity { get; set; }
        public bool? ProductAvailableOnline { get; set; }
        public int? VendorId { get; set; }
        public string ProductName { get; set; }

        public virtual Vendor Vendor { get; set; }
    }
}
