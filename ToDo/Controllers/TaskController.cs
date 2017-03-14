using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ToDo.Controllers
{
    public class TaskController : ApiController
    {
        private ToDoEntities dataContext = new ToDoEntities();

        // Read
        [HttpGet]
        public IEnumerable<Task> GetAllTasks()
        {
            return dataContext.Tasks;
        }

        [HttpGet]
        public IHttpActionResult GetTask(int id)
        {

            var taks = dataContext.Tasks.FirstOrDefault((p) => p.ID == id);
            if (taks == null)
            {
                return NotFound();
            }
            return Ok(taks);
        }

        // Create
        [HttpPost]
        public IHttpActionResult Add(Task newTask)
        {

            using (var dbCtx = new ToDoEntities())
            {
                //Add newtask object into Task DBset
                dbCtx.Tasks.Add(newTask);


                // Druga varijanta:
                // dbCtx.Entry(newTask).State = System.Data.Entity.EntityState.Added;


                // call SaveChanges method to save Task into database
                dbCtx.SaveChanges();
            }

            return Ok("Successfully created new task!");
        }

        // Update
        [HttpPost]
        public IHttpActionResult Update(Task task)
        {
            using (var dbCtx = new ToDoEntities())
            {
                // Druga varijanta:
                //dbCtx.Entry(task).State = System.Data.Entity.EntityState.Modified;

                var x = dbCtx.Tasks.Single(p => p.ID == task.ID);
                //dbCtx.Tasks.Attach(x);

                x.ID = task.ID;
                x.Title = task.Title;
                x.CreatedDate = task.CreatedDate;
                x.Description = task.Description;
                x.State = task.State;
                x.DeadlineDate = task.DeadlineDate;

                dbCtx.SaveChanges();
            }

            return Ok("Successfully update task!");
        }

        // Delete
        [HttpPost]
        public IHttpActionResult Delete(Task deleteTask)
        {
            using (var dbCtx = new ToDoEntities())
            {
                // Druga varijanta:
                // dbCtx.Entry(deleteTask).State = System.Data.Entity.EntityState.Deleted;

                var x = dbCtx.Tasks.Single(p => p.ID == deleteTask.ID);

                dbCtx.Tasks.Remove(x);

                dbCtx.SaveChanges();

            }

            return Ok("Successfully delete task!");
        }

    }
}
