using Microsoft.AspNetCore.Mvc;

namespace ProjetoGerenciar.Repositories.Interfaces
{
    public interface IFaturamentoService
    {
        Task<IEnumerable<Faturamento>> Get();
        Task<ActionResult<Faturamento>> GetById(string id);
        Task<ActionResult<List<Faturamento>>> GetByDate(int Ano, int? Mes);
        Task<ActionResult<Faturamento>> Create(Faturamento lancamento);
        Task<IActionResult> Update(string id, Faturamento lancamentoIn);
        Task<IActionResult> Delete(string id);
    }
}
