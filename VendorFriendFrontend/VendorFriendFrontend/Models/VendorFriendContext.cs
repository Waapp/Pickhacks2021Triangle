using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace VendorFriendFrontend.Models
{
    public partial class VendorFriendContext : DbContext
    {
        public VendorFriendContext()
        {
        }

        public VendorFriendContext(DbContextOptions<VendorFriendContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Event> Events { get; set; }
        public virtual DbSet<Owner> Owners { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Vendor> Vendors { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySQL("server=pickhacks2021.cpyouxawgxzw.us-east-2.rds.amazonaws.com ;port=3306;user=Triangle;password=weMakeCode;database=VendorFriend");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Event>(entity =>
            {
                entity.ToTable("event");

                entity.HasIndex(e => e.OwnerId, "owner_fk");

                entity.Property(e => e.EventId).HasColumnName("event_id");

                entity.Property(e => e.EventActive).HasColumnName("event_active");

                entity.Property(e => e.EventDescription)
                    .HasMaxLength(255)
                    .HasColumnName("event_description");

                entity.Property(e => e.EventHours)
                    .HasMaxLength(255)
                    .HasColumnName("event_hours");

                entity.Property(e => e.EventLocation)
                    .HasMaxLength(255)
                    .HasColumnName("event_location");

                entity.Property(e => e.EventName)
                    .HasMaxLength(255)
                    .HasColumnName("event_name");

                entity.Property(e => e.OwnerId).HasColumnName("owner_id");

                entity.HasOne(d => d.Owner)
                    .WithMany(p => p.Events)
                    .HasForeignKey(d => d.OwnerId)
                    .HasConstraintName("owner_fk");
            });

            modelBuilder.Entity<Owner>(entity =>
            {
                entity.ToTable("owner");

                entity.Property(e => e.OwnerId).HasColumnName("owner_id");

                entity.Property(e => e.OwnerName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("owner_name");

                entity.Property(e => e.OwnerPassword)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("owner_password");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("product");

                entity.HasIndex(e => e.VendorId, "vendor_fk");

                entity.Property(e => e.ProductId).HasColumnName("product_id");

                entity.Property(e => e.ProductAvailableOnline).HasColumnName("product_available_online");

                entity.Property(e => e.ProductCost)
                    .HasColumnType("decimal(19,2)")
                    .HasColumnName("product_cost");

                entity.Property(e => e.ProductDescription)
                    .HasMaxLength(255)
                    .HasColumnName("product_description");

                entity.Property(e => e.ProductQuantity).HasColumnName("product_quantity");

                entity.Property(e => e.VendorId).HasColumnName("vendor_id");

                entity.HasOne(d => d.Vendor)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.VendorId)
                    .HasConstraintName("vendor_fk");
            });

            modelBuilder.Entity<Vendor>(entity =>
            {
                entity.ToTable("vendor");

                entity.HasIndex(e => e.EventId, "event_fk");

                entity.HasIndex(e => e.OwnerId, "owner_vendor_fk");

                entity.Property(e => e.VendorId).HasColumnName("vendor_id");

                entity.Property(e => e.ApprovedVendor).HasColumnName("approved_vendor");

                entity.Property(e => e.EventId).HasColumnName("event_id");

                entity.Property(e => e.OwnerId).HasColumnName("owner_id");

                entity.Property(e => e.VendorDescription)
                    .HasMaxLength(255)
                    .HasColumnName("vendor_description");

                entity.Property(e => e.VendorHours)
                    .HasMaxLength(255)
                    .HasColumnName("vendor_hours");

                entity.Property(e => e.VendorLocation)
                    .HasMaxLength(255)
                    .HasColumnName("vendor_location");

                entity.Property(e => e.VendorName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("vendor_name");

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.Vendors)
                    .HasForeignKey(d => d.EventId)
                    .HasConstraintName("event_fk");

                entity.HasOne(d => d.Owner)
                    .WithMany(p => p.Vendors)
                    .HasForeignKey(d => d.OwnerId)
                    .HasConstraintName("owner_vendor_fk");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
