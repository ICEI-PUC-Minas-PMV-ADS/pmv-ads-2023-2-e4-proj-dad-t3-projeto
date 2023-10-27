using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ProjetoGerenciar.Models;
using ProjetoGerenciar.Repositories.Interfaces;

namespace ProjetoGerenciar.Repositories.Services
{
    public class RhService : IRhService
    {
        private readonly MongoDBContext _context;

        public RhService(MongoDBContext context)
        {
            _context = context;
        }
        public async Task<ActionResult<Rh>> Create(Rh pessoa)
        {
            await _context.Pessoas.InsertOneAsync(pessoa);
            return new CreatedAtRouteResult(new { id = pessoa.Id }, pessoa);
        }

        public async Task<IActionResult> Delete(string id)
        {
            var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();
            if (pessoa == null)
            {
                return new  NotFoundResult();
            }
            await _context.Pessoas.DeleteOneAsync(p => p.Id == id);
            return new OkObjectResult(pessoa);
        }

        public async Task<IEnumerable<Rh>> Get()
        {
            return await _context.Pessoas.Find(_ => true).ToListAsync();
        }

        public async Task<ActionResult<List<Rh>>> GetByDate(int Ano, int? Mes)
        {
            List<Rh> pessoa = new();

            if (!Mes.HasValue)
            {
                pessoa = await _context.Pessoas.Find(p => p.AnoLancamento == Ano).ToListAsync();
            }
            else
            {
                pessoa = await _context.Pessoas.Find(p => p.MesLancamento == Mes && p.AnoLancamento == Ano).ToListAsync();
            }

            if (pessoa == null)
            {
                return new NotFoundResult();
            }
            return pessoa;
        }

        public async Task<ActionResult<Rh>> GetById(string id)
        {
            var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (pessoa == null)
            {
                return new NotFoundResult();
            }
            return pessoa;
        }

        public async Task<IActionResult> Update(string id, Rh pessoaIn)
        {
            var user = await _context.Users.Find(u => u.Id == id).FirstOrDefaultAsync();

            User novoUser = new User()
            {
                Nome = user.Nome,
                Senha = BCrypt.Net.BCrypt.HashPassword(user.Senha),
                Email = user.Email,
                Perfil = user.Perfil
            };
            await _context.Users.ReplaceOneAsync(u => u.Id == id, novoUser);
            return new OkObjectResult(novoUser);
        }

        public async Task<IActionResult> UpdateLaunchMonth(string id, [FromBody] int mesLancamento)
        {
            var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (pessoa == null)
            {
                return new NotFoundResult();
            }

            pessoa.MesLancamento = mesLancamento;
            await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoa);
            return new OkResult();
        }

        public async Task<IActionResult> UpdateLaunchYear(string id, [FromBody] int anoLancamento)
        {
            var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (pessoa == null)
            {
                return new NotFoundResult();
            }

            pessoa.AnoLancamento = anoLancamento;
            await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoa);
            return new OkObjectResult(pessoa);
        }

        public async Task<IActionResult> UpdateName(string id, [FromBody] string nome)
        {
            var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (pessoa == null)
            {
                return new NotFoundResult();
            }

            pessoa.Nome = nome;
            await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoa);
            return new OkResult();
        }

        public async Task<IActionResult> UpdatePosition(string id, [FromBody] string cargo)
        {
            var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (pessoa == null)
            {
                return new NotFoundResult();
            }

            pessoa.Cargo = cargo;
            await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoa);
            return new NoContentResult();
        }

        public async Task<IActionResult> UpdateSalaryBruto(string id, [FromBody] double novoSalarioBruto)
        {
            var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (pessoa == null)
            {
                return new NotFoundResult();
            }

            pessoa.SalarioBruto = novoSalarioBruto;
            await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoa);
            return new OkObjectResult(pessoa);
        }

        public async Task<IActionResult> UpdateSector(string id, [FromBody] string setor)
        {
            var pessoa = await _context.Pessoas.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (pessoa == null)
            {
                return new NotFoundResult();
            }

            pessoa.Setor = setor;
            await _context.Pessoas.ReplaceOneAsync(p => p.Id == id, pessoa);
            return new NoContentResult();
        }
    }
}
