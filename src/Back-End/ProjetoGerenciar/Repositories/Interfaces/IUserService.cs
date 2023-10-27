using Microsoft.AspNetCore.Mvc;
using ProjetoGerenciar.Models;
using System.Security.Claims;

namespace ProjetoGerenciar.Repositories.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<User>> Get();
        Task<ActionResult<User>> GetById(string id);
        Task<ActionResult<User>> Create(UserDto user);
        Task<IActionResult> Update(string id, UserDto userIn, ClaimsPrincipal User);
        Task<IActionResult> Delete(string id, ClaimsPrincipal User);
    }
}
