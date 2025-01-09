using Microsoft.AspNetCore.Mvc;

namespace ClientServiceDemo.Server.Controllers
{
    [ApiController]
    [Route("api/{controller}")]
    public abstract class BaseController<TResource> : ControllerBase
    {
        [HttpPost]
        public virtual IActionResult Create(TResource resource)
        {
            throw new NotImplementedException();
        }

        [HttpGet("{id}")]
        public virtual IActionResult Get(int id) 
        {
            throw new NotImplementedException();
        }

        [HttpGet]
        public virtual IActionResult Query() 
        {
            throw new NotImplementedException();
        }
    }
}
