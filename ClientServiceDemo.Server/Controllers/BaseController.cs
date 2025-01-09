using Microsoft.AspNetCore.Mvc;

namespace ClientServiceDemo.Server.Controllers
{
    [ApiController]
    [Route("api/{controller}")]
    public abstract class BaseController : ControllerBase
    {
        [HttpPost]
        public IActionResult Create()
        {
            throw new NotImplementedException();
        }

        [HttpGet("{id}")]
        public IActionResult Get(string id) 
        {
            throw new NotImplementedException();
        }

        [HttpGet]
        public IActionResult Query() 
        {
            throw new NotImplementedException();
        }
    }
}
