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

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly MongoDBContext _context;
    private readonly IUserService _userService;

    public UserController(MongoDBContext context, IUserService userService)
    {
        _context = context;
        _userService = userService;
    }
    [HttpGet]
    [AllowAnonymous]
    public async Task<IEnumerable<User>> Get()
    {
        return await _userService.Get();
    }
    [HttpGet("{id}")]
    [AllowAnonymous]
    public async Task<ActionResult<User>> GetById(string id)
    {
        return await _userService.GetById(id);
    }
    [AllowAnonymous]
    [HttpPost]
    public async Task<ActionResult<User>> Create(UserDto user)
    {
        return await _userService.Create(user);
    }
    [HttpPut("{id}")]
    [Authorize(Roles = "AdminRh,AdminGeral")]
    public async Task<IActionResult> Update(string id, UserDto userIn)
    {

        try
        {
            return await _userService.Update(id, userIn, User);
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
            return await _userService.Delete(id, User);
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