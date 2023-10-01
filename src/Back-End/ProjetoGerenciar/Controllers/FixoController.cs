using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ProjetoGerenciar.Models;
using System.Collections;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class FixoController : ControllerBase
{
    private readonly MongoDBContext _context;

    public FixoController(MongoDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Authorize(Roles = "AdminGeral, AdminCusto")]
    public async Task<IEnumerable<Fixo>> Get()
    {
        return await _context.Fixos.Find(_ => true).ToListAsync();
    }

    [HttpGet("{id}")]
    [Authorize(Roles = "AdminGeral, AdminCusto")]
    public async Task<ActionResult<Fixo>> GetById(string id)
    {
        try
        {
            var product = await _context.Fixos.Find(p => p.Id == id).FirstOrDefaultAsync();

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
    [Authorize(Roles = "AdminGeral, AdminCusto")]
    public async Task<ActionResult<List<Fixo>>> GetByDate(int Ano, string? Mes)
    {
        try
        {
            List<Fixo> product = new();

            if (string.IsNullOrEmpty(Mes))
            {
                product = await _context.Fixos.Find(p => p.AnoLancamento == Ano).ToListAsync();
            }
            else
            {
                product = await _context.Fixos.Find(p => p.MesLancamento == Mes && p.AnoLancamento == Ano).ToListAsync();
            }


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

    [HttpPost]
    [Authorize(Roles = "AdminCusto,AdminGeral")]
    public async Task<ActionResult<Fixo>> Create(Fixo product)
    {
        try
        {
            await _context.Fixos.InsertOneAsync(product);
            return CreatedAtRoute(new { id = product.Id }, product);
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "AdminCusto, AdminGeral")]
    public async Task<IActionResult> Update(string id, Fixo productIn)
    {
        try
        {
            var product = await _context.Fixos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return NotFound();
            }

            await _context.Fixos.ReplaceOneAsync(p => p.Id == id, productIn);

            return Content("Atualização concluida com sucesso!");
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "AdminCusto,AdminGeral")]
    public async Task<IActionResult> Delete(string id)
    {
        try
        {
            var product = await _context.Fixos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return NotFound();
            }

            await _context.Fixos.DeleteOneAsync(p => p.Id == id);

            return Content("Custo deletado com sucesso!");
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }
}