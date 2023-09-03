using APIEmpresarial.Model;
using Microsoft.AspNetCore.Mvc;

namespace APIEmpresarial.Interfaces
{
    public interface ICategoriaInterface
    {
        void Create(Categoria categoria);
        ActionResult<IEnumerable<Categoria>> GetAll();
        ActionResult<Categoria> GetCategoria(int id);
        void Delete(int id);
        void Update(int id);
        
    }
}
