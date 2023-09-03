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
            if(livro != null)
            {
                _context.Livros.Add(livro);
                _context.SaveChanges();
            }
        }
        public IEnumerable<Livro> GetAll()
        {
            return _context.Livros.ToList();
        }
        public Livro GetLivro(int id)
        {
            var livro = _context.Livros.FirstOrDefault(p => p.LivroId == id);
            return livro;
        }
        public void UpdateLivro(Livro livro)
        {
           _context.Entry(livro).State = EntityState.Modified;
           _context.SaveChanges();
        }
        public void Delete(int id)
        {
           var livro =  _context.Livros.FirstOrDefault(p => p.LivroId == id);
            _context.Livros.Remove(livro);
            _context.SaveChanges();
        }
        
    }
}
