using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjetoGerenciar.Models;
using ProjetoGerenciar.Repositories.Interfaces;
using ProjetoGerenciar.Repositories.Services;

namespace TestServices
{
    public class BaseTestServiceEstoque : IEstoqueService
    {
        public List<Estoque> estoques;
        public BaseTestServiceEstoque()
        {
            estoques = new List<Estoque>()
            {
                  new Estoque("1", "Produto1", 10, 20.0, 5, 2023),
                  new Estoque("2", "Produto2", 15, 30.0, 5, 2023),
                  new Estoque("3", "Produto3", 20, 15.0, 7, 2023),
                  new Estoque("4", "Produto4", 8, 40.0, 8, 2023),
                  new Estoque("5", "Produto5", 12, 20.0, 9, 2023),
                  new Estoque("6", "Produto6", 25, 18.0, 10, 2023),
                  new Estoque("7", "Produto7", 5, 50.0, 11, 2023),
                  new Estoque("8", "Produto8", 18, 22.0, 12, 2023),
                  new Estoque("9", "Produto9", 30, 35.0, 1, 2024),
                  new Estoque("10", "Produto10", 7, 45.0, 2, 2024)
            };
        }
        public async Task<ActionResult<Estoque>> Create(Estoque product)
        {
            estoques.Add(product);
            return await Task.FromResult(new CreatedAtRouteResult(new { id = product.Id }, product));
        }
        public Task<IActionResult> Delete(string id)
        {
            var product = estoques.FirstOrDefault(p => p.Id == id);

            if (product == null)
            {
                return Task.FromResult<IActionResult>(new NotFoundResult());
            }
            estoques.Remove(product);
            return Task.FromResult<IActionResult>(new OkObjectResult(product));
        }
        public Task<ActionResult<EstoqueDto>> Get()
        {
            var estoque = estoques;
            var resultado = new EstoqueDto
            {
                Produtos = estoque,
                TotalEstoque = estoque.Sum(p => p.ValorTotal)
            };
            return Task.FromResult<ActionResult<EstoqueDto>>(new OkObjectResult(resultado));
        }
        public Task<ActionResult<EstoqueDto>> GetByDate(int Ano, int? Mes)
        {
            List<Estoque> product = new();
            if (!Mes.HasValue)
            {
                if (!Mes.HasValue)
                {
                    var estoque = estoques.FirstOrDefault(p => p.AnoLancamento == Ano);
                    if (estoque is not null)
                    {
                        product.Add(estoque);
                    }
                }
            }
            else
            {
                var estoque = estoques.Find(p => p.MesLancamento == Mes && p.AnoLancamento == Ano);
                if (estoque is not null)
                {
                    product.Add(estoque);
                }
            }
            if (product == null)
            {
                return Task.FromResult<ActionResult<EstoqueDto>>(new NotFoundResult());
            }
            var resultado = new EstoqueDto();
            {
                resultado.Produtos = product;
                resultado.TotalEstoque = product.Sum(p => p.ValorTotal);
            }

            return Task.FromResult<ActionResult<EstoqueDto>>(resultado);
        }
        public Task<ActionResult<Estoque>> GetById(string id)
        {
            var product = estoques.Find(p => p.Id == id);

            if (product == null)
            {
                return Task.FromResult<ActionResult<Estoque>>(new NotFoundResult());
            }
            return Task.FromResult<ActionResult<Estoque>>(product);

        }
        public Task<IActionResult> Update(string id, Estoque productIn)
        {
            var product = estoques.Find(p => p.Id == id);
            if (product == null)
            {
                return Task.FromResult<IActionResult>(new NotFoundResult());
            }
            estoques.Remove(product);
            return Task.FromResult<IActionResult>(new OkObjectResult(product));
        }
    }
}
