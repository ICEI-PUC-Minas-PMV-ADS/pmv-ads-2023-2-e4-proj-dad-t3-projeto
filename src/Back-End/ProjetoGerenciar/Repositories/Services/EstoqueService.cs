using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ProjetoGerenciar.Models;
using ProjetoGerenciar.Repositories.Interfaces;

namespace ProjetoGerenciar.Repositories.Services
{
    public class EstoqueService : IEstoqueService
    {
        private readonly MongoDBContext _context;
        public EstoqueService(MongoDBContext context)
        {
            _context = context;
        }

        public async Task<ActionResult<EstoqueDto>> Get()
        {
            var estoque = await _context.Produtos.Find(_ => true).ToListAsync();
            var resultado = new EstoqueDto();
            {
                resultado.Produtos = estoque;
                resultado.TotalEstoque = estoque.Sum(p => p.ValorTotal);
            }
            return resultado;
        }

        public async Task<ActionResult<Estoque>> GetById(string id)
        {
            var product = await _context.Produtos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return new NotFoundResult();
            }
            return product;
        }

        public async Task<ActionResult<EstoqueDto>> GetByDate(int Ano, int? Mes)
        {
            List<Estoque> product = new();

            if (!Mes.HasValue)
            {
                product = await _context.Produtos.Find(p => p.AnoLancamento == Ano).ToListAsync();
            }
            else
            {
                product = await _context.Produtos.Find(p => p.MesLancamento == Mes && p.AnoLancamento == Ano).ToListAsync();
            }


            if (product == null)
            {
                return new NotFoundResult();
            }

            var resultado = new EstoqueDto();
            {
                resultado.Produtos = product;
                resultado.TotalEstoque = product.Sum(p => p.ValorTotal);
            }

            return resultado;
        }

        public async Task<ActionResult<Estoque>> Create(Estoque product)
        {
            await _context.Produtos.InsertOneAsync(product);

            return new CreatedAtRouteResult(new { id = product.Id }, product);
        }

        public async Task<IActionResult> Update(string id, Estoque productIn)
        {
            var product = await _context.Produtos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return new NotFoundResult();
            }

            await _context.Produtos.ReplaceOneAsync(p => p.Id == id, productIn);

            return new NoContentResult();
        }

        public async Task<IActionResult> Delete(string id)
        {
            var product = await _context.Produtos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return new NotFoundResult();
            }

            await _context.Produtos.DeleteOneAsync(p => p.Id == id);

            return new OkObjectResult(product);
        }
    }
}
