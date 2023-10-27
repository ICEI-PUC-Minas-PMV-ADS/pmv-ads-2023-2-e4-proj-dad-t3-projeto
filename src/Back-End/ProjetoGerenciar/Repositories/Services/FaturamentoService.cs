using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ProjetoGerenciar.Repositories.Interfaces;

namespace ProjetoGerenciar.Repositories.Services
{
    public class FaturamentoService : IFaturamentoService
    {
        private readonly MongoDBContext _context;
        public FaturamentoService(MongoDBContext context)
        {
            _context = context;
        }
        public async Task<ActionResult<Faturamento>> Create(Faturamento lancamento)
        {
            await _context.Lancamentos.InsertOneAsync(lancamento);
            return new CreatedAtRouteResult(new { id = lancamento.Id }, lancamento);
        }

        public async Task<IActionResult> Delete(string id)
        {
            var lancamento = await _context.Lancamentos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (lancamento == null)
            {
                return new NotFoundResult();
            }

            await _context.Lancamentos.DeleteOneAsync(p => p.Id == id);

            return new NoContentResult();
        }

        public async Task<IEnumerable<Faturamento>> Get()
        {
            return await _context.Lancamentos.Find(_ => true).ToListAsync();
        }

        public async Task<ActionResult<List<Faturamento>>> GetByDate(int Ano, int? Mes)
        {
            List<Faturamento> lancamento = new();

            if (!Mes.HasValue)
            {
                lancamento = await _context.Lancamentos.Find(p => p.AnoLancamento == Ano).ToListAsync();
            }
            else
            {
                lancamento = await _context.Lancamentos.Find(p => p.MesLancamento == Mes && p.AnoLancamento == Ano).ToListAsync();
            }


            if (lancamento == null)
            {
                return new NotFoundResult();
            }

            return lancamento;
        }

        public async Task<ActionResult<Faturamento>> GetById(string id)
        {
            var lancamento = await _context.Lancamentos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (lancamento == null)
            {
                return new NotFoundResult();
            }

            return lancamento;

        }

        public async Task<IActionResult> Update(string id, Faturamento lancamentoIn)
        {
            var lancamento = await _context.Lancamentos.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (lancamento == null)
            {
                return new NotFoundResult();
            }

            await _context.Lancamentos.ReplaceOneAsync(p => p.Id == id, lancamentoIn);

            return new NoContentResult();
        }
    }
}
