using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class RhController : ControllerBase
{
    private readonly MongoDBContext _context;

    public RhController(MongoDBContext context)
    {
        _context = context;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IEnumerable<Rh>> Get()
    {
        return await _context.Pessoas.Find(_ => true).ToListAsync();
    }

    [AllowAnonymous]
    [HttpGet("{id}")]
    public async Task<ActionResult<Rh>> GetById(string id)
    {
        var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (pessoa == null)
        {
            return NotFound();
        }

        return pessoa;
    }

    [AllowAnonymous]
    [HttpGet("data")]
    public async Task<ActionResult<List<Rh>>> GetByDate(int Ano, string? Mes)
    {
        List<Rh> pessoa = new();

        if (string.IsNullOrEmpty(Mes))
        {
            pessoa = await _context.Pessoas.Find(p => p.AnoLancamento == Ano).ToListAsync();
        }
        else
        {
            pessoa = await _context.Pessoas.Find(p => p.MesLancamento == Mes && p.AnoLancamento == Ano).ToListAsync();
        }

        if (pessoa == null)
        {
            return NotFound();
        }

        return pessoa;
    }

    [HttpPost]
    public async Task<ActionResult<Rh>> Create(Rh pessoa)
    {
        await _context.Pessoas.InsertOneAsync(pessoa);
        return CreatedAtRoute(new { id = pessoa.Id }, pessoa);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, Rh pessoaIn)
    {
        var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (pessoa == null)
        {
            return NotFound();
        }

        await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoaIn);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (pessoa == null)
        {
            return NotFound();
        }

        await _context.Pessoas.DeleteOneAsync(p => p.Id == id);

        return NoContent();
    }
}