using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ProjetoGerenciar.Models;
using ProjetoGerenciar.Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class FaturamentoController : ControllerBase
{
    private readonly IFaturamentoService _faturamentoService;

    public FaturamentoController(IFaturamentoService service)
    {
        _faturamentoService = service;
    }

    [HttpGet]
    [Authorize(Roles = "AdminEstoque, Usuario, AdminGeral,AdminRh")]
    public async Task<IEnumerable<Faturamento>> Get()
    {
        return await _faturamentoService.Get();
    }

    [HttpGet("{id}")]
    [Authorize(Roles = "AdminEstoque, Usuario, AdminGeral,AdminRh")]
    public async Task<ActionResult<Faturamento>> GetById(string id)
    {
        try
        {
            return await _faturamentoService.GetById(id);
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }

    [HttpGet("data")]
    //[Authorize(Roles = "AdminGeral, AdminCusto")]
    [AllowAnonymous]
    public async Task<ActionResult<List<Faturamento>>> GetByDate(int Ano, int? Mes)
    {
        try
        {
            return await _faturamentoService.GetByDate(Ano, Mes);
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
            return await _faturamentoService.Create(lancamento);
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
            return await _faturamentoService.Update(id, lancamentoIn);
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
            return await _faturamentoService.Delete(id);
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }
}