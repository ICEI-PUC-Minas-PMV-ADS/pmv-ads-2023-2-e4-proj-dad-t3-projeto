using API.Context;
using APIEmpresarial.Model;

namespace APIEmpresarial.Interfaces
{
    public interface ILivroInterface
    {
        
        void Create(Livro livro);
        IEnumerable<Livro> GetAll();
        Livro GetLivro(int id);
        void UpdateLivro(Livro livro);
        void Delete(int id);
    }
}
