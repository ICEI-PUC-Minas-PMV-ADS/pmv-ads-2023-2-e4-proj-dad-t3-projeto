using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Bson;
using MongoDB.Driver;
using ProjetoGerenciar.Models;
using ProjetoGerenciar.Repositories.Interfaces;

namespace ProjetoGerenciar.Repositories.Services
{
    public class UserService : IUserService
    {
        private readonly MongoDBContext _context;
        public UserService(MongoDBContext context)
        {
            _context = context;
        }
        public async Task<ActionResult<User>> Create(UserDto user)
        {
            var findEmail = await _context.Users.Find(e => e.Email == user.Email).FirstOrDefaultAsync();

            if (findEmail != null)
            {
                return new BadRequestObjectResult("E-mail já cadastrado no sistema");
            }
            User novoUser = new User()
            {
                Id = user.Id,
                Nome = user.Nome,
                Senha = BCrypt.Net.BCrypt.HashPassword(user.Senha),
                Email = user.Email,
                Perfil = user.Perfil
            };
            await _context.Users.InsertOneAsync(novoUser);
            return new CreatedAtRouteResult(new { id = novoUser.Id }, novoUser);
        }

        public async Task<IActionResult> Delete(string id, ClaimsPrincipal User)
        {

            var user = await _context.Users.Find(u => u.Id == id).FirstOrDefaultAsync();

            if (user == null)
            {
                return new NotFoundResult();
            }
            var userHasPermission = User.IsInRole("AdminRh") || User.IsInRole("AdminGeral");

            if (!userHasPermission)
            {
                return new UnauthorizedObjectResult("Usuário não autorizado");
            }
            await _context.Users.DeleteOneAsync(u => u.Id == id);
            return new OkObjectResult(user);
        }

        public async Task<IEnumerable<User>> Get()
        {
            return await _context.Users.Find(_ => true).ToListAsync();
        }

        public async Task<ActionResult<User>> GetById(string id)
        {
            var user = await _context.Users.Find(p => p.Id == id).FirstOrDefaultAsync();

            if (user == null)
            {
                return new NotFoundResult();
            }
            return user;
        }

        public async Task<IActionResult> Update(string id, UserDto userIn, ClaimsPrincipal User)
        {
            var user = await _context.Users.Find(u => u.Id == id).FirstOrDefaultAsync();
            if (user == null)
            {
                return new NotFoundResult();
            }
            var userHasPermission = User.IsInRole("AdminRh") || User.IsInRole("AdminGeral");
            if (!userHasPermission)
            {
                return new UnauthorizedObjectResult("Usuário não autorizado");
            }
            User novoUser = new User()
            {
                Nome = user.Nome,
                Senha = BCrypt.Net.BCrypt.HashPassword(user.Senha),
                Email = user.Email,
                Perfil = user.Perfil
            };
            await _context.Users.ReplaceOneAsync(u => u.Id == id, novoUser);
            return new NoContentResult();
        }
    }
}
