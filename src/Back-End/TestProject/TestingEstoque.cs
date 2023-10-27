using Microsoft.AspNetCore.Mvc;
using ProjetoGerenciar.Models;
using ProjetoGerenciar.Repositories.Interfaces;

namespace TestServices
{
    public class TestingEstoque
    {
        EstoqueController _controller;
        IEstoqueService _service;
        public TestingEstoque()
        {
            _service = new BaseTestServiceEstoque();
            _controller = new EstoqueController(_service);
        }
        [Fact]
        public void Get_WhenCalled_IsType()
        {
            var okResult = _controller.Get();
            Assert.NotNull(okResult);
            Assert.IsType<Task<ActionResult<EstoqueDto>>>(okResult);
        }
        [Fact]
        public async Task Create_WhenCalled_IsCreatedAtRouteResult()
        {
            Estoque testProduct = new Estoque("3", "Produto3", 20, 15.0, 7, 2023);

            var result = await _controller.Create(testProduct);

            Assert.IsType<ActionResult<Estoque>>(result);
            var createObjectResult = Assert.IsType<CreatedAtRouteResult>(result.Result);
            Assert.IsType<Estoque>(createObjectResult.Value);
        }
        [Fact]
        public async Task Delete_WhenCalled_IsOkObjectResult()
        {
            Estoque testProduct = new Estoque("10", "Produto10", 7, 45.0, 2, 2024);
            if (testProduct.Id is not null)
            {
                var result = await _controller.Delete(testProduct.Id);
                Assert.IsType<OkObjectResult>(result);
                var okObjectResult = (OkObjectResult)result;
                Assert.IsType<Estoque>(okObjectResult.Value);
            }
        }
        [Fact]
        public async Task Update_WhenCalled_IsOkObjectResult()
        {
            Estoque testProduct = new Estoque("10", "Produto12", 7, 45.0, 2, 2024);

            var result = await _controller.Update("10", testProduct);
            Assert.IsType<OkObjectResult>(result);
            var okObjectResult = (OkObjectResult)result;
            Assert.IsType<Estoque>(okObjectResult.Value);
        }
        [Fact]
        public async Task GetByDate_WhenCalledWithYearAndMonth_ReturnsEstoqueDto()
        {
            int ano = 2023;
            int mes = 5;

            var result = await _controller.GetByDate(ano, mes);

            Assert.IsType<ActionResult<EstoqueDto>>(result);
        }




    }
}
