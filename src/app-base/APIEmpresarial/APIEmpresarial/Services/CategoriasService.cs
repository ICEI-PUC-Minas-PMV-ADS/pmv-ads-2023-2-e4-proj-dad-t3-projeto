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
            if(_context.Categorias is not null)
            {
                _context.Categorias.Add(categoria);
                _context.SaveChanges();
            }
        }
        public ActionResult<IEnumerable<Categoria>> GetAll()
        {
            if(_context.Categorias is not null)
            {
                return _context.Categorias.AsNoTracking().Include(p => p.Livros).Where(c => c.CategoriaId <= 5).ToList();
            }
            else
            {
                return new BadRequestResult();
            }
        }
        public ActionResult<Categoria> GetCategoria(int id)
        {
            if (_context.Categorias is not null)
            {
                var categoria = _context.Categorias.FirstOrDefault(p => p.CategoriaId == id);
                if (categoria != null)
                {
                    return categoria;
                }
            }

            return new NotFoundResult();
        }
        public void Delete(int id)
        {
            if (_context.Categorias is not null)
            {
                var categoria = _context.Categorias.FirstOrDefault(p => p.CategoriaId == id);
                if (categoria != null)
                {
                    _context.Categorias.Remove(categoria);
                    _context.SaveChanges();
                }
            }
        }
        public void Update(int id)
        {
            if (_context.Categorias is not null)
            {
                var categoria = _context.Categorias.FirstOrDefault(p => p.CategoriaId == id);
                if (categoria != null)
                {
                    _context.Categorias.Entry(categoria).State = EntityState.Modified;
                    _context.SaveChanges();
                }
            }
        }
    }
}

