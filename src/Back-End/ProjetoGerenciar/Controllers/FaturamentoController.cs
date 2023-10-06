using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ProjetoGerenciar.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class FaturamentoController : ControllerBase
{
    private readonly MongoDBContext _context;

    public FaturamentoController(MongoDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Authorize(Roles = "AdminEstoque, Usuario, AdminGeral,AdminRh")]
    public async Task<IEnumerable<Faturamento>> Get()
    {
        return await _context.Lancamentos.Find(_ => true).ToListAsync();
    }

    [HttpGet("{id}")]
    [Authorize(Roles = "AdminEstoque, Usuario, AdminGeral,AdminRh")]
    public async Task<ActionResult<Faturamento>> GetById(string id)
    {
        try
        {
            var lancamento = await _context.Lancamentos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (lancamento == null)
            {
                return NotFound();
            }

            return lancamento;
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }

    [HttpGet("data")]
    [Authorize(Roles = "AdminGeral, AdminCusto")]
    public async Task<ActionResult<List<Faturamento>>> GetByDate(int Ano, string? Mes)
    {
        try
        {
            List<Faturamento> lancamento = new();

            if (string.IsNullOrEmpty(Mes))
            {
                lancamento = await _context.Lancamentos.Find(p => p.AnoLancamento == Ano).ToListAsync();
            }
            else
            {
                lancamento = await _context.Lancamentos.Find(p => p.MesLancamento == Mes && p.AnoLancamento == Ano).ToListAsync();
            }


            if (lancamento == null)
            {
                return NotFound();
            }

            return lancamento;
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }


    [HttpPost]
    [Authorize(Roles = "AdminEstoque,AdminGeral")]
    public async Task<ActionResult<Faturamento>> Create(Faturamento lancamento)
    {
        try
        {
            await _context.Lancamentos.InsertOneAsync(lancamento);
            return CreatedAtRoute(new { id = lancamento.Id }, lancamento);
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }

    }

    [HttpPut("{id}")]
    [Authorize(Roles = "AdminEstoque, AdminGeral")]
    public async Task<IActionResult> Update(string id, Faturamento lancamentoIn)
    {
        try
        {
            var lancamento = await _context.Lancamentos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (lancamento == null)
            {
                return NotFound();
            }

            await _context.Lancamentos.ReplaceOneAsync(p => p.Id == id, lancamentoIn);

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
            var lancamento = await _context.Lancamentos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (lancamento == null)
            {
                return NotFound();
            }

            await _context.Lancamentos.DeleteOneAsync(p => p.Id == id);

            return NoContent();
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }
}