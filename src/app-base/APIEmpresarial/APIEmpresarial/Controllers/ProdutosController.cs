using API.Context;
using APIEmpresarial.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APIEmpresarial.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProdutosController : ControllerBase
    {
        private readonly AppDbContext _context;
        public ProdutosController(AppDbContext appDbContext)
        {
            _context = appDbContext;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Livro>> GetLivros()
        {
            return _context.Livros.ToList();
        }
        [HttpGet("{id:int}", Name = "ObterProduto")]
        public ActionResult<Livro> GetLivro(int id)
        {

            var produto = _context.Livros.FirstOrDefault(l => l.LivroId == id);
            if (produto is null)
            {
                return NotFound("Livro não encontrado!");
            }
            return produto;

        }
        [HttpPost]
        public ActionResult Post(Livro livro)
        {

            if (livro is null) { return BadRequest(); }
            _context.Livros.Add(livro);
            _context.SaveChanges();
            return new CreatedAtRouteResult("ObterProduto",
                new { id = livro.LivroId }, livro);

        }
        [HttpPut("{id:int}")]
        public ActionResult Put(int id, Livro livro)
        {
            if (livro is null) { return NotFound(livro); }
            if (id != livro.LivroId) { return BadRequest(); }
            _context.Livros.Entry(livro).State = EntityState.Modified;
            _context.SaveChanges();
            return Ok(livro);
        }
        [HttpDelete("{id:int}")]
        public ActionResult Delete(int id)
        {
            var livro = _context.Livros.FirstOrDefault(p => p.LivroId == id);
            if(livro is null)
            {
                return NotFound(livro);
            }
            _context.Livros.Remove(livro);
            _context.SaveChanges();
            return Ok(livro);   
        }
    }
}
