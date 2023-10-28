using Microsoft.AspNetCore.Mvc;
using ProjetoGerenciar.Models;
using ProjetoGerenciar.Repositories.Interfaces;
using ProjetoGerenciar.Repositories.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace TestProject
{
    public class BaseTestServiceCusto : ICustoService
    {
        List<Custo> _custos;
        public BaseTestServiceCusto()
        {
            _custos = new List<Custo>()
            {
             new Custo("1", TipoCusto.CustoFixo, "Aluguel da sede", 1500.0, "Pagamento mensal", 5, 2023),
             new Custo("2", TipoCusto.CustoVariavel, "Conta de energia", 200.0, "Consumo do mês", 5, 2023),
             new Custo("3", TipoCusto.CustoVariavel, "Compra de materiais", 500.0, "Insumos para produção", 6, 2023),
             new Custo("4", TipoCusto.CustoVariavel, "Campanha publicitária", 1000.0, "Divulgação online", 7, 2023),
             new Custo("5", TipoCusto.CustoFixo, "Pagamento de salários", 3000.0, "Folha de pagamento", 7, 2023),
             new Custo("6", TipoCusto.CustoVariavel, "Manutenção de equipamentos", 800.0, "Reparos e ajustes", 8, 2023),
             new Custo("7", TipoCusto.CustoFixo, "Conta de telefone/internet", 120.0, "Serviços de comunicação", 8, 2023),
             new Custo("8", TipoCusto.CustoVariavel, "Despesas com logística", 600.0, "Transporte de mercadorias", 9, 2023),
             new Custo("9", TipoCusto.CustoFixo, "Pagamento de impostos", 1500.0, "Tributos mensais", 10, 2023),
             new Custo("10", TipoCusto.CustoVariavel, "Serviços de segurança", 300.0, "Monitoramento 24h", 11, 2023),

        };
        }
        public Task<ActionResult<Custo>> Create(Custo product)
        {
            _custos.Add(product);
            return Task.FromResult<ActionResult<Custo>>(new CreatedAtRouteResult(new { id = product.Id }, product));
        }

        public Task<IActionResult> Delete(string id)
        {
            var product = _custos.Find(p => p.Id == id);

            if (product == null)
            {
                return Task.FromResult<IActionResult>(new NotFoundResult());
            }

            _custos.Remove(product);

            return Task.FromResult<IActionResult>(new OkObjectResult(product));
        }

        public Task<IEnumerable<Custo>> Get()
        {
            return Task.FromResult<IEnumerable<Custo>>((IEnumerable<Custo>)_custos.Find(_ => true));
        }

        public Task<ActionResult<List<Custo>>> GetByDate(int Ano, int? Mes)
        {
            List<Custo> product = new();

            if (!Mes.HasValue)
            {
                var custo = _custos.FirstOrDefault(p => p.AnoLancamento == Ano);
                if(custo is not null)
                {
                    product.Add(custo);
                }
            }
            else
            {
                var custo = _custos.Find(p => p.MesLancamento == Mes && p.AnoLancamento == Ano);
                if (custo is not null)
                {
                    product.Add(custo);
                }
            }

            if (product == null)
            {
                return Task.FromResult<ActionResult<List<Custo>>>(new NotFoundResult());
            }

            return Task.FromResult<ActionResult<List<Custo>>>(product);
        }

        public Task<ActionResult<Custo>> GetById(string id)
        {
            var product =  _custos.Find(p => p.Id == id);

            if (product == null)
            {
                return Task.FromResult<ActionResult<Custo>>(new NotFoundResult());
            }

            return Task.FromResult<ActionResult<Custo>>(product);
        }

        public Task<IActionResult> Update(string id, Custo productIn)
        {
            var product = _custos.Find(p => p.Id == id);
            if (product == null)
            {
                return Task.FromResult<IActionResult>(new NotFoundResult());
            }
            product.TipoCusto = productIn.TipoCusto;
            product.Nome = productIn.Nome;
            product.Valor = productIn.Valor;
            product.Observacao = productIn.Observacao;
            product.MesLancamento = productIn.MesLancamento;
            product.AnoLancamento = productIn.AnoLancamento;
            return Task.FromResult<IActionResult>(new OkObjectResult(product));
        }
    }
}
