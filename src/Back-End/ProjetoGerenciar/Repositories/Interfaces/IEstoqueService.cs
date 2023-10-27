using Microsoft.AspNetCore.Mvc;
using ProjetoGerenciar.Models;

namespace ProjetoGerenciar.Repositories.Interfaces
{
    public interface IEstoqueService
    {
        Task<ActionResult<EstoqueDto>> Get();
        Task<ActionResult<Estoque>> GetById(string id);
        Task<ActionResult<EstoqueDto>> GetByDate(int Ano, int? Mes);
        Task<ActionResult<Estoque>> Create(Estoque product);
        Task<IActionResult> Update(string id, Estoque productIn);
        Task<IActionResult> Delete(string id);
    }
}
