using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ProjetoGerenciar.Repositories.Interfaces;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class RhController : ControllerBase
{
    private readonly IRhService _rhService;

    public RhController(IRhService rhService)
    {
        _rhService = rhService;
    }
    [HttpGet]
    // [Authorize(Roles = "AdminRh, AdminGeral")]
    [AllowAnonymous]
    public async Task<IEnumerable<Rh>> Get()
    {
        return await _rhService.Get();
    }
    [HttpGet("{id}")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<ActionResult<Rh>> GetById(string id)
    {
        return await _rhService.GetById(id);
    }
    [HttpGet("data")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    [AllowAnonymous]
    public async Task<ActionResult<List<Rh>>> GetByDate(int Ano, int? Mes)
    {
        return await _rhService.GetByDate(Ano, Mes);
    }
    [HttpPost]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<ActionResult<Rh>> Create(Rh pessoa)
    {
        return await _rhService.Create(pessoa);
    }
    [HttpPut("{id}")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IActionResult> Update(string id, Rh pessoaIn)
    {
        try
        {
            return await _rhService.Update(id, pessoaIn);
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }
    // [Authorize(Roles = "AdminRh, AdminGeral")]
    [AllowAnonymous]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        try
        {
            return await _rhService.Delete(id);
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
        return await _rhService.UpdateSalaryBruto(id, novoSalarioBruto);
    }

    [HttpPatch("{id}/nome")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IActionResult> UpdateName(string id, [FromBody] string nome)
    {
        return await _rhService.UpdateName(id, nome);
    }

    [HttpPatch("{id}/cargo")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IActionResult> UpdatePosition(string id, [FromBody] string cargo)
    {
        return await _rhService.UpdatePosition(id, cargo);
    }

    [HttpPatch("{id}/setor")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IActionResult> UpdateSector(string id, [FromBody] string setor)
    {
        return await _rhService.UpdateSector(id, setor);
    }

    [HttpPatch("{id}/meslancamento")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IActionResult> UpdateLaunchMonth(string id, [FromBody] int mesLancamento)
    {
        return await _rhService.UpdateLaunchMonth(id, mesLancamento);
    }

    [HttpPatch("{id}/anolancamento")]
    [Authorize(Roles = "AdminRh, AdminGeral")]
    public async Task<IActionResult> UpdateLaunchYear(string id, [FromBody] int anoLancamento)
    {
        return await _rhService.UpdateLaunchYear(id, anoLancamento);
    }
}
