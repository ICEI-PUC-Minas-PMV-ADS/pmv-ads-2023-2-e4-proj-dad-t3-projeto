using Microsoft.AspNetCore.Mvc;

namespace ProjetoGerenciar.Repositories.Interfaces
{
    public interface IRhService
    {
        Task<IEnumerable<Rh>> Get();
        Task<ActionResult<Rh>> GetById(string id);
        Task<ActionResult<List<Rh>>> GetByDate(int Ano, int? Mes);
        Task<ActionResult<Rh>> Create(Rh pessoa);
        Task<IActionResult> Update(string id, Rh pessoaIn);
        Task<IActionResult> Delete(string id);
        Task<IActionResult> UpdateSalaryBruto(string id, [FromBody] double novoSalarioBruto);
        Task<IActionResult> UpdateName(string id, [FromBody] string nome);
        Task<IActionResult> UpdatePosition(string id, [FromBody] string cargo);
        Task<IActionResult> UpdateSector(string id, [FromBody] string setor);
        Task<IActionResult> UpdateLaunchMonth(string id, [FromBody] int mesLancamento);
        Task<IActionResult> UpdateLaunchYear(string id, [FromBody] int anoLancamento);
    }
}
