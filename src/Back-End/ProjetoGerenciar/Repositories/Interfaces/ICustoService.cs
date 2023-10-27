using Microsoft.AspNetCore.Mvc;
using ProjetoGerenciar.Models;

namespace ProjetoGerenciar.Repositories.Interfaces
{
    public interface ICustoService
    {
        Task<IEnumerable<Custo>> Get();
        Task<ActionResult<Custo>> GetById(string id);
        Task<ActionResult<List<Custo>>> GetByDate(int Ano, int? Mes);
        Task<ActionResult<Custo>> Create(Custo product);
        Task<IActionResult> Update(string id, Custo productIn);
        Task<IActionResult> Delete(string id);
    }
}
