using API.Context;
using APIEmpresarial.Model;
using Microsoft.AspNetCore.Mvc;

namespace APIEmpresarial.Interfaces
{
    public interface ILivroInterface
    {
        
        void Create(Livro livro);
        ActionResult<IEnumerable<Livro>> GetAll();
        ActionResult<Livro> GetLivro(int id);
        ActionResult UpdateLivro(Livro livro);
        ActionResult Delete(int id);
    }
}
