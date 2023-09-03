using API.Context;
using APIEmpresarial.Interfaces;
using APIEmpresarial.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.ObjectModel;

namespace APIEmpresarial.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProdutosController : ControllerBase
    {
        private readonly ILivroInterface _livrointerface;
        public ProdutosController(ILivroInterface livroInterface)
        {
            _livrointerface = livroInterface;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Livro>> GetLivros()
        {
            return _livrointerface.GetAll();
        }
        [HttpGet("{id:int}", Name = "ObterProduto")]
        public ActionResult<Livro> GetLivro(int id)
        {
            try
            {
                var livro = _livrointerface.GetLivro(id);
                    return livro;
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        [HttpPost("NovoProduto")]
        public ActionResult Post(Livro livro)
        {
            try
            {
                _livrointerface.Create(livro);
                return new CreatedAtRouteResult("ObterProduto",
                new { id = livro.LivroId }, livro);
            }
            catch (Exception)
            {
                return BadRequest();
            }


        }
        [HttpPut("{id:int}")]
        public ActionResult Put(int id, Livro livro)
        {
            try
            {
                if (livro is null) { return NotFound(livro); }
                if (id != livro.LivroId) { return BadRequest(); }
                _livrointerface.UpdateLivro(livro);
                return Ok(livro);
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
                _livrointerface.Delete(id);
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Ocorreu um erro ao deletar o item!");
            }

        }
    }
}
