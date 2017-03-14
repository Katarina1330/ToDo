using System;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace ToDo
{
    public partial class ToDoEntities : DbContext
    {
        public ToDoEntities()
            : base("name=ToDoEntities")
        {
        }

        public virtual DbSet<Task> Tasks { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
