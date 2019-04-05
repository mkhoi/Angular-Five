using System.Web.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            /*DatabaseContext db = new DatabaseContext();
            db.Users.Add(new User("Ku", "Bin", "KuBin"));
            db.SaveChanges();*/

            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
