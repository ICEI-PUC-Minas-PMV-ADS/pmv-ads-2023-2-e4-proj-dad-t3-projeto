using API.Context;
using APIEmpresarial.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;

namespace APIEmpresarial.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EstoqueController
    {
        private readonly AppDbContext _context;
        public EstoqueController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Estoque>> GetEstoque()
        {
           return _context.Estoques.AsNoTracking().ToList();  // Falta implementar a interface..
        }
    }
}
