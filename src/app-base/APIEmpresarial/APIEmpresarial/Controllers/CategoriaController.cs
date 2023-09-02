using API.Context;
using APIEmpresarial.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APIEmpresarial.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class CategoriaController : ControllerBase
    {
        private readonly AppDbContext _context;
        public CategoriaController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet("ProdutosCategoria")]
        public ActionResult<IEnumerable<Categoria>> GetCategoriasProdutos()
        {
            return _context.Categorias.AsNoTracking().Include(p => p.Livros).Where(c => c.CategoriaId <= 5).ToList();
        }
        [HttpGet("ObterCategoria")]
        public ActionResult<IEnumerable<Categoria>> Get()
        {
            var categoria = _context.Categorias.AsNoTracking().ToList();
            if (categoria is null)
            {
                return BadRequest();
            }
            return categoria;
        }
        [HttpGet("{id:int}")]
        public ActionResult<Categoria> Get(int id)
        {
            var categoria = _context.Categorias.AsNoTracking().FirstOrDefault(c => c.CategoriaId == id);
            if (categoria is null) { return NotFound(); }
            return categoria;
        }
        [HttpPost("NovaCategoria")]
        public ActionResult Post(Categoria categoria)
        {
            if (categoria is null) { return BadRequest(); }
            _context.Categorias.Add(categoria);
            _context.SaveChanges();
            return new CreatedAtRouteResult("ObterCategoria", new { id = categoria.CategoriaId }, categoria);
        }
        [HttpPut("{id:int}")]
        public ActionResult Put(int id, Categoria categoria)
        {
            if (categoria is null) { return NotFound(); }
            if (id != categoria.CategoriaId) { return BadRequest(); }
            _context.Entry(categoria).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return Ok(categoria);
        }
        [HttpDelete("{id:int}")]
        public ActionResult Delete(int id)
        {
            var categoria = _context.Categorias.FirstOrDefault(c => c.CategoriaId == id);
            _context.Categorias.Remove(categoria);
            _context.SaveChanges();
            return Ok(categoria);
        }
    }
}

