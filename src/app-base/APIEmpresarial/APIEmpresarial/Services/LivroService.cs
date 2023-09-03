using API.Context;
using APIEmpresarial.Interfaces;
using APIEmpresarial.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APIEmpresarial.Services
{
    public class LivroService : ILivroInterface
    {
        private readonly AppDbContext _context;
        public LivroService(AppDbContext context)
        {
            _context = context;
        }
        public void Create(Livro livro)
        {
            if (_context.Livros is not null)
            {
                _context.Livros.Add(livro);
                _context.SaveChanges();
            }
        }
        public ActionResult<IEnumerable<Livro>> GetAll()
        {
            if (_context.Livros is not null)
            {
                return _context.Livros.ToList();
            }
            else
            {
                return new BadRequestResult();
            }
        }
        public ActionResult<Livro> GetLivro(int id)
        {
            if (_context.Livros is not null)
            {
                var livro = _context.Livros.FirstOrDefault(p => p.LivroId == id);
                if (livro != null)
                {
                    return livro;
                }
            }
            return new NotFoundResult();
        }
        public ActionResult UpdateLivro(Livro livro)
        {
            _context.Entry(livro).State = EntityState.Modified;
            _context.SaveChanges();
            return new OkResult();
        }
        public ActionResult Delete(int id)
        {
            if (_context.Livros is not null)
            {
                var livro = _context.Livros.FirstOrDefault(p => p.LivroId == id);
                if (livro != null)
                {
                    _context.Livros.Remove(livro);
                    _context.SaveChanges();
                }
            }
            return new NotFoundResult();
        }
    }
}
