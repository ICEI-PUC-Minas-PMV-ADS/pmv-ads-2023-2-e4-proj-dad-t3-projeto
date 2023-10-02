using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ProjetoGerenciar.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class EstoqueController : ControllerBase
{
    private readonly MongoDBContext _context;

    public EstoqueController(MongoDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Authorize(Roles = "AdminEstoque, Usuario, AdminGeral,AdminRh")]
    public async Task<ActionResult<EstoqueDto>> Get()
    {
        var estoque = await _context.Produtos.Find(_ => true).ToListAsync();
        var resultado = new EstoqueDto();
        {
            resultado.Produtos = estoque;
            resultado.TotalEstoque = estoque.Sum(p => p.ValorTotal);
        }
        return resultado;
    }

    [HttpGet("{id}")]
    [Authorize(Roles = "AdminEstoque, Usuario, AdminGeral,AdminRh")]
    public async Task<ActionResult<Estoque>> GetById(string id)
    {
        try
        {
            var product = await _context.Produtos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }

    [HttpGet("data")]
    [Authorize(Roles = "AdminEstoque, Usuario, AdminGeral,AdminRh")]
    public async Task<ActionResult<EstoqueDto>> GetByDate(int Ano, string? Mes)
    {
        try
        {
            List<Estoque> product = new();

            if (string.IsNullOrEmpty(Mes))
            {
                product = await _context.Produtos.Find(p => p.AnoLancamento == Ano).ToListAsync();
            }
            else
            {
                product = await _context.Produtos.Find(p => p.MesLancamento == Mes && p.AnoLancamento == Ano).ToListAsync();
            }


            if (product == null)
            {
                return NotFound();
            }

            var resultado = new EstoqueDto();
            {
                resultado.Produtos = product;
                resultado.TotalEstoque = product.Sum(p => p.ValorTotal);
            }

            return resultado;
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }

    }

    [HttpPost]
    [Authorize(Roles = "AdminEstoque,AdminGeral")]
    public async Task<ActionResult<Estoque>> Create(Estoque product)
    {
        try
        {
            await _context.Produtos.InsertOneAsync(product);
            return CreatedAtRoute(new { id = product.Id }, product);
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }

    }

    [HttpPut("{id}")]
    [Authorize(Roles = "AdminEstoque, AdminGeral")]
    public async Task<IActionResult> Update(string id, Estoque productIn)
    {
        try
        {
            var product = await _context.Produtos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return NotFound();
            }

            await _context.Produtos.ReplaceOneAsync(p => p.Id == id, productIn);

            return NoContent();
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "AdminEstoque,AdminGeral")]
    public async Task<IActionResult> Delete(string id)
    {
        try
        {
            var product = await _context.Produtos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return NotFound();
            }

            await _context.Produtos.DeleteOneAsync(p => p.Id == id);

            return NoContent();
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }
}