using API.Context;
using APIEmpresarial.Interfaces;
using APIEmpresarial.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APIEmpresarial.Services
{
    public class CategoriasService : ICategoriaInterface
    {
        private readonly AppDbContext _context;
        public CategoriasService(AppDbContext context)
        {
            _context = context;
        }
        public void Create(Categoria categoria)
        {
            if (categoria != null)
            {
                _context.Categorias.Add(categoria);
                _context.SaveChanges();
            }
        }
        public ActionResult<IEnumerable<Categoria>> GetAll()
        {
            return _context.Categorias.ToList();
        }
        public ActionResult<Categoria> GetCategoria(int id)
        {
            var categoria = _context.Categorias.FirstOrDefault(p => p.CategoriaId == id);
            return categoria;
        }
        public void Delete(int id)
        {
            var categoria = _context.Categorias.FirstOrDefault(p => p.CategoriaId == id);
            _context.Categorias.Remove(categoria);
            _context.SaveChanges();
        }
        public void Update(int id)
        {
            var categoria = _context.Categorias.FirstOrDefault(p => p.CategoriaId == id);
            _context.Categorias.Entry(categoria).State = EntityState.Modified;
            _context.SaveChanges();
        }
        
    }
}
