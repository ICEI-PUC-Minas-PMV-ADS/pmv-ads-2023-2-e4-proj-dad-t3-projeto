using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ProjetoGerenciar.Models;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class CustoController : ControllerBase
{
    private readonly MongoDBContext _context;

    public CustoController(MongoDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Authorize(Roles = "AdminGeral, AdminCusto")]
    public async Task<IEnumerable<Custo>> Get()
    {
        return await _context.Custos.Find(_ => true).ToListAsync();
    }

    [HttpGet("{id}")]
    [Authorize(Roles = "AdminGeral, AdminCusto")]
    public async Task<ActionResult<Custo>> GetById(string id)
    {
        try
        {
            var product = await _context.Custos.Find(p => p.Id == id).FirstOrDefaultAsync();

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
    //[Authorize(Roles = "AdminGeral, AdminCusto")]
    [AllowAnonymous]
    public async Task<ActionResult<List<Custo>>> GetByDate(int Ano, int? Mes)
    {
        try
        {
            List<Custo> product = new();

            if (!Mes.HasValue)
            {
                product = await _context.Custos.Find(p => p.AnoLancamento == Ano).ToListAsync();
            }
            else
            {
                product = await _context.Custos.Find(p => p.MesLancamento == Mes && p.AnoLancamento == Ano).ToListAsync();
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
    public async Task<ActionResult<Custo>> Create(Custo product)
    {
        try
        {
            await _context.Custos.InsertOneAsync(product);
            return CreatedAtRoute(new { id = product.Id }, product);
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "AdminCusto, AdminGeral")]
    public async Task<IActionResult> Update(string id, Custo productIn)
    {
        try
        {
            var product = await _context.Custos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return NotFound();
            }

            await _context.Custos.ReplaceOneAsync(p => p.Id == id, productIn);

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
            var product = await _context.Custos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return NotFound();
            }

            await _context.Custos.DeleteOneAsync(p => p.Id == id);

            return Content("Custo deletado com sucesso!");
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }
}