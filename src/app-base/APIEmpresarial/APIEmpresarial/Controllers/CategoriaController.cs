using API.Context;
using APIEmpresarial.Interfaces;
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
        private ICategoriaInterface _categoriainterface;
        public CategoriaController(AppDbContext context, ICategoriaInterface categoriaInterface)
        {
            _context = context;
            _categoriainterface = categoriaInterface;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Categoria>> GetCategoriasProdutos()
        {
            return _categoriainterface.GetAll();
        }
        [HttpGet("ObterProdutos")]
        public ActionResult<IEnumerable<Categoria>> Get()
        {
            try
            {
                return _categoriainterface.GetAll();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        [HttpGet("{id:int}", Name = "ObterCategoria")]
        public ActionResult<Categoria> Get(int id)
        {
            try
            {
                return _categoriainterface.GetCategoria(id);
            }
            catch (NullReferenceException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        [HttpPost("NovaCategoria")]
        public ActionResult Post(Categoria categoria)
        {
            try
            {
                _categoriainterface.Create(categoria);
                return new CreatedAtRouteResult("ObterCategoria", new { id = categoria.CategoriaId }, categoria);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest, categoria);
            }

        }
        [HttpPut("{id:int}")]
        public ActionResult Put(int id, Categoria categoria)
        {
            if (categoria is null) { return NotFound(); }
            if (id != categoria.CategoriaId) { return BadRequest(); }
            try
            {
                _categoriainterface.Update(id);
                return Ok(categoria);
            }
            catch (NullReferenceException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        [HttpDelete("{id:int}")]
        public ActionResult Delete(int id)
        {
            try
            {
                _categoriainterface.Delete(id);
                return Ok();
            }
            catch (NullReferenceException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}

