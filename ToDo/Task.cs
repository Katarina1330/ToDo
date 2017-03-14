using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;

namespace ToDo
{
    [Table("Task")]
    public partial class Task
    {
        public int ID { get; set; }

        [StringLength(50)]
        public string Title { get; set; }

        public DateTime? CreatedDate { get; set; }

        public string Description { get; set; }

        [StringLength(50)]
        public string State { get; set; }

        public DateTime? DeadlineDate { get; set; }
    }
}
