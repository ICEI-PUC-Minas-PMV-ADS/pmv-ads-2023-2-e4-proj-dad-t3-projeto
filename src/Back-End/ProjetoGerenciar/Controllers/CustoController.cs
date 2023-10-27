using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ProjetoGerenciar.Models;
using ProjetoGerenciar.Repositories.Interfaces;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class CustoController : ControllerBase
{
    private readonly ICustoService _custoService;
    public CustoController(ICustoService custoService)
    {
        _custoService = custoService;
    }

   
    [HttpGet]
    [Authorize(Roles = "AdminGeral, AdminCusto")]
    public async Task<IEnumerable<Custo>> Get()
    {
        return await _custoService.Get();
    }

    [HttpGet("{id}")]
    [Authorize(Roles = "AdminGeral, AdminCusto")]
    public async Task<ActionResult<Custo>> GetById(string id)
    {
        try
        {
            return await _custoService.GetById(id);
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
            return await _custoService.GetByDate(Ano, Mes);
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
            return await _custoService.Create(product);
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
           return await _custoService.Update(id, productIn);
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
            return await _custoService.Delete(id);
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }
}