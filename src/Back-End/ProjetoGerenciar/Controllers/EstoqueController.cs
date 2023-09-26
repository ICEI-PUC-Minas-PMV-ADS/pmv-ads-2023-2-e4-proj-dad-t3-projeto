using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
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

    [AllowAnonymous]
    [HttpGet]
    public async Task<IEnumerable<Estoque>> Get()
    {
        return await _context.Produtos.Find(_ => true).ToListAsync();
    }

    [AllowAnonymous]
    [HttpGet("{id}")]
    public async Task<ActionResult<Estoque>> GetById(string id)
    {
        var product = await _context.Produtos.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (product == null)
        {
            return NotFound();
        }

        return product;
    }

    [AllowAnonymous]
    [HttpGet("data")]
    public async Task<ActionResult<List<Estoque>>> GetByDate(int Ano, string? Mes)
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

        return product;
    }

    [HttpPost]
    public async Task<ActionResult<Estoque>> Create(Estoque product)
    {
        await _context.Produtos.InsertOneAsync(product);
        return CreatedAtRoute(new { id = product.Id }, product);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, Estoque productIn)
    {
        var product = await _context.Produtos.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (product == null)
        {
            return NotFound();
        }

        await _context.Produtos.ReplaceOneAsync(p => p.Id == id, productIn);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var product = await _context.Produtos.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (product == null)
        {
            return NotFound();
        }

        await _context.Produtos.DeleteOneAsync(p => p.Id == id);

        return NoContent();
    }
}