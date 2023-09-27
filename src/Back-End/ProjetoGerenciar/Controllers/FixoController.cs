using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace ProjetoGerenciar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FixoController : ControllerBase
    {
        private readonly MongoDBContext _context;

        public FixoController(MongoDBContext context)
        {
            _context = context;
        }

    }
}