using Microsoft.AspNetCore.Mvc;
using ProjetoGerenciar.Models;
using ProjetoGerenciar.Repositories.Interfaces;
using ProjetoGerenciar.Repositories.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace TestProject
{
    public class TestingCusto
    {
        CustoController _controller;
        ICustoService _service;
        public TestingCusto()
        {
            _service = new BaseTestServiceCusto();
            _controller = new CustoController(_service);
        }
        [Fact]
        public async Task Create_WhenCalled_CreatedAtRouteResult()
        {
            Custo custo = new Custo("9", TipoCusto.CustoFixo, "Pagamento de impostos", 1500.0, "Tributos mensais", 10, 2023);
            var result = await _controller.Create(custo);
            Assert.NotNull(result);
            Assert.IsType<ActionResult<Custo>>(result);
            var createObjectResult = Assert.IsType<CreatedAtRouteResult>(result.Result);
            Assert.IsType<Custo>(createObjectResult.Value);
        }
        [Fact]
        public void  Get_WhenCalled_IsType()
        {
            var okResult = _controller.Get();
            Assert.NotNull(okResult);
            Assert.IsType<Task<IEnumerable<Custo>>>(okResult);
        }
        [Fact]
        public async Task Delete_WhenCalled_IsOkObjectResult()
        {
         Custo custo = new Custo("9", TipoCusto.CustoFixo, "Pagamento de impostos", 1500.0, "Tributos mensais", 10, 2023);
            if (custo.Id is not null)
            {
                var result = await _controller.Delete(custo.Id);
                Assert.IsType<OkObjectResult>(result);
                var okObjectResult = (OkObjectResult)result;
                Assert.IsType<Custo>(okObjectResult.Value);
            }
        }
        [Fact]
        public async Task GetByDate_WhenCalledWithYearAndMonth_ReturnsCusto()
        {
            int ano = 2023;
            int mes = 7;

            var result = await _controller.GetByDate(ano, mes);

            Assert.IsType<ActionResult<List<Custo>>>(result);
        }
        [Fact]
        public async Task GetById_WhenCalled_IsNotNull()
        {
            Custo custo = new Custo("1", TipoCusto.CustoFixo, "Aluguel da sede", 1500.0, "Pagamento mensal", 5, 2023);
            if(custo.Id is not null)
            {
                var result = await _controller.GetById(custo.Id);
                Assert.NotNull(result);
            }
        }
        [Fact]
        public async Task Update_WhenCalled_IsOkObjectResult()
        {
            Custo custo = new Custo("6", TipoCusto.CustoVariavel, "Manutenção", 800.0, "Reparos e ajustes", 8, 2023);

            var result = await _controller.Update("6", custo);
            Assert.IsType<OkObjectResult>(result);
            var okObjectResult = (OkObjectResult)result;
            Assert.IsType<Custo>(okObjectResult.Value);

        }
    }
}
