using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

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
    public async Task<IEnumerable<Estoque>> Get()
    {
        return await _context.Products.Find(_ => true).ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Estoque>> GetById(string id)
    {
        var product = await _context.Products.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (product == null)
        {
            return NotFound();
        }

        return product;
    }

    [HttpGet("data")]
    public async Task<ActionResult<List<Estoque>>> GetByDate(int Ano, string? Mes)
    {
        List<Estoque> product = new();

        if (string.IsNullOrEmpty(Mes))
        {
            product = await _context.Products.Find(p => p.AnoLancamento == Ano).ToListAsync();
        }
        else
        {
            product = await _context.Products.Find(p => p.MesLancamento == Mes && p.AnoLancamento == Ano).ToListAsync();
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
        await _context.Products.InsertOneAsync(product);
        return CreatedAtRoute(new { id = product.Id }, product);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, Estoque productIn)
    {
        var product = await _context.Products.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (product == null)
        {
            return NotFound();
        }

        await _context.Products.ReplaceOneAsync(p => p.Id == id, productIn);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var product = await _context.Products.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (product == null)
        {
            return NotFound();
        }

        await _context.Products.DeleteOneAsync(p => p.Id == id);

        return NoContent();
    }
}