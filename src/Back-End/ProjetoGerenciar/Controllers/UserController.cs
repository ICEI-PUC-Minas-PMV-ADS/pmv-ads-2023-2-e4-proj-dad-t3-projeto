using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Bson;
using MongoDB.Driver;
using ProjetoGerenciar.Models;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly MongoDBContext _context;

    public UserController(MongoDBContext context)
    {
        _context = context;
    }
    [HttpGet]
    [AllowAnonymous]
    public async Task<IEnumerable<User>> Get()
    {
        return await _context.Users.Find(_ => true).ToListAsync();
    }
    [HttpGet("{id}")]
    [AllowAnonymous]
    public async Task<ActionResult<User>> GetById(string id)
    {
        var user = await _context.Users.Find(p => p.Id == id).FirstOrDefaultAsync();

        if (user == null)
        {
            return NotFound();
        }
        return user;
    }
    [AllowAnonymous]
    [HttpPost]
    public async Task<ActionResult<User>> Create(UserDto user)
    {
        var findEmail = await _context.Users.Find(e => e.Email == user.Email).FirstOrDefaultAsync();

        if (findEmail != null)
        {
            return BadRequest("E-mail já cadastrado no sistema");
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
        return CreatedAtRoute(new { id = novoUser.Id }, novoUser);
    }
    [HttpPut("{id}")]
    [Authorize(Roles = "AdminRh,AdminGeral")]
    public async Task<IActionResult> Update(string id, UserDto userIn)
    {
        var user = await _context.Users.Find(u => u.Id == id).FirstOrDefaultAsync();
        try
        {
            if (user == null)
            {
                return NotFound();
            }
            var userHasPermission = User.IsInRole("AdminRh") || User.IsInRole("AdminGeral");
            if (!userHasPermission)
            {
                return Unauthorized("Usuário não autorizado");
            }
            User novoUser = new User()
            {
                Nome = user.Nome,
                Senha = BCrypt.Net.BCrypt.HashPassword(user.Senha),
                Email = user.Email,
                Perfil = user.Perfil
            };
            await _context.Users.ReplaceOneAsync(u => u.Id == id, novoUser);
            return NoContent();
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }
    [HttpDelete("{id}")]
    [Authorize(Roles = "AdminRh,AdminGeral")]
    public async Task<IActionResult> Delete(string id)
    {
        try
        {
            var user = await _context.Users.Find(u => u.Id == id).FirstOrDefaultAsync();

            if (user == null)
            {
                return NotFound();
            }
            var userHasPermission = User.IsInRole("AdminRh") || User.IsInRole("AdminGeral");

            if (!userHasPermission)
            {
                return Unauthorized("Usuário não autorizado");
            }
            await _context.Users.DeleteOneAsync(u => u.Id == id);
            return NoContent();
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Usuário não autorizado");
        }
    }

    [AllowAnonymous]
    [HttpPost("authenticate")]
    public async Task<IActionResult> Authenticate(AuthenticateDto model)
    {
        var user = await _context.Users.Find(e => e.Email == model.Email).FirstOrDefaultAsync();
        if (user == null || !BCrypt.Net.BCrypt.Verify(model.Senha, user.Senha))
        {
            return Unauthorized();
        }
        var jwt = GenerateJwtToken(user);
        return Ok(new { jwtToken = jwt });
    }
    private string GenerateJwtToken(User model)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes("eyJhbGciOiJIUzI1NiJ9eyJSb2xlIjoi");
        var claims = new ClaimsIdentity(new Claim[]
        {
            new Claim(ClaimTypes.NameIdentifier, model.Id.ToString()),
            new Claim(ClaimTypes.Role, model.Perfil.ToString())
        });
        var TokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = claims,
            Expires = DateTime.UtcNow.AddHours(24),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(TokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}