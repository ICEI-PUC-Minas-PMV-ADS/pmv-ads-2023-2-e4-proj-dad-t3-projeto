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
public class EstoqueController : ControllerBase
{
    private readonly IEstoqueService _estoqueService;

    public EstoqueController(IEstoqueService service)
    {
        _estoqueService = service;
    }

    [HttpGet]
    [Authorize(Roles = "AdminEstoque, Usuario, AdminGeral,AdminRh")]
    public async Task<ActionResult<EstoqueDto>> Get()
    {
       return await _estoqueService.Get();  
    }

    [HttpGet("{id}")]
    [Authorize(Roles = "AdminEstoque, Usuario, AdminGeral,AdminRh")]
    public async Task<ActionResult<Estoque>> GetById(string id)
    {
        try
        {
            return await _estoqueService.GetById(id);
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }

    [HttpGet("data")]
    //[Authorize(Roles = "AdminEstoque, Usuario, AdminGeral,AdminRh")]
    [AllowAnonymous]
    public async Task<ActionResult<EstoqueDto>> GetByDate(int Ano, int? Mes)
    {
        try
        {
            return await _estoqueService.GetByDate(Ano, Mes);
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
            return await _estoqueService.Create(product);
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
            return await _estoqueService.Update(id, productIn);
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
            return await _estoqueService.Delete(id);
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }
}