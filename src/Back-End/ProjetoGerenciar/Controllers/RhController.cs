using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
    [HttpGet]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IEnumerable<Rh>> Get()
    {
        return await _context.Pessoas.Find(_ => true).ToListAsync();
    }
    [HttpGet("{id}")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<ActionResult<Rh>> GetById(string id)
    {
        var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (pessoa == null)
        {
            return NotFound();
        }
        return pessoa;
    }
    [HttpGet("data")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
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
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<ActionResult<Rh>> Create(Rh pessoa)
    {
        await _context.Pessoas.InsertOneAsync(pessoa);
        return CreatedAtRoute(new { id = pessoa.Id }, pessoa);
    }
    [HttpPut("{id}")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IActionResult> Update(string id, Rh pessoaIn)
    {
        try
        {
            var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (pessoa == null)
            {
                return NotFound();
            }
            await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoaIn);
            return NoContent();
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }
    [Authorize(Roles = "AdminRh")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        try
        {
            var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();
            if (pessoa == null)
            {
                return NotFound();
            }
            await _context.Pessoas.DeleteOneAsync(p => p.Id == id);
            return NoContent();
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
}

    [HttpPut("{id}/salariobruto")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IActionResult> UpdateSalaryBruto(string id, [FromBody] double novoSalarioBruto)
    {
        var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (pessoa == null)
        {
            return NotFound();
        }

        pessoa.SalarioBruto = novoSalarioBruto;
        await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoa);
        return NoContent();
    }

    [HttpPatch("{id}/nome")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IActionResult> UpdateName(string id, [FromBody] string nome)
    {
        var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (pessoa == null)
        {
            return NotFound();
        }

        pessoa.Nome = nome;
        await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoa);
        return NoContent();
    }

    [HttpPatch("{id}/cargo")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IActionResult> UpdatePosition(string id, [FromBody] string cargo)
    {
        var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (pessoa == null)
        {
            return NotFound();
        }

        pessoa.Cargo = cargo;
        await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoa);
        return NoContent();
    }

    [HttpPatch("{id}/setor")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IActionResult> UpdateSector(string id, [FromBody] string setor)
    {
        var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (pessoa == null)
        {
            return NotFound();
        }

        pessoa.Setor = setor;
        await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoa);
        return NoContent();
    }

    [HttpPatch("{id}/meslancamento")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IActionResult> UpdateLaunchMonth(string id, [FromBody] string mesLancamento)
    {
        var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (pessoa == null)
        {
            return NotFound();
        }

        pessoa.MesLancamento = mesLancamento;
        await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoa);
        return NoContent();
    }

    [HttpPatch("{id}/anolancamento")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IActionResult> UpdateLaunchYear(string id, [FromBody] int anoLancamento)
    {
        var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (pessoa == null)
        {
            return NotFound();
        }

        pessoa.AnoLancamento = anoLancamento;
        await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoa);
        return NoContent();
    }
}
