using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ProjetoGerenciar.Models;
using ProjetoGerenciar.Repositories.Interfaces;

namespace ProjetoGerenciar.Repositories.Services
{
    public class CustoService : ICustoService
    {
        private readonly MongoDBContext _context;
        public CustoService(MongoDBContext context)
        {
            _context = context;
        }
        public async Task<ActionResult<Custo>> Create(Custo product)
        {
            await _context.Custos.InsertOneAsync(product);
            return new CreatedAtRouteResult(new { id = product.Id }, product);
        }

        public async Task<IActionResult> Delete(string id)
        {
            var product = await _context.Custos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return new NotFoundResult();
            }

            await _context.Custos.DeleteOneAsync(p => p.Id == id);

            return new OkObjectResult("Custo deletado com sucesso!");
        }

        public async Task<IEnumerable<Custo>> Get()
        {
            return await _context.Custos.Find(_ => true).ToListAsync();
        }

        public async Task<ActionResult<List<Custo>>> GetByDate(int Ano, int? Mes)
        {
            List<Custo> product = new();

            if (!Mes.HasValue)
            {
                product = await _context.Custos.Find(p => p.AnoLancamento == Ano).ToListAsync();
            }
            else
            {
                product = await _context.Custos.Find(p => p.MesLancamento == Mes && p.AnoLancamento == Ano).ToListAsync();
            }

            if (product == null)
            {
                return new NotFoundResult();
            }

            return product;
        }

        public async Task<ActionResult<Custo>> GetById(string id)
        {
            var product = await _context.Custos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return new NotFoundResult();
            }

            return product;
        }

        public async Task<IActionResult> Update(string id, Custo productIn)
        {
            var product = await _context.Custos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return new NotFoundResult();
            }

            await _context.Custos.ReplaceOneAsync(p => p.Id == id, productIn);

            return new OkObjectResult("Atualização concluida com sucesso!");
        }
    }
}
