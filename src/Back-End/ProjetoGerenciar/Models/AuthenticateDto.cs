using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace ProjetoGerenciar.Models
{
    public class AuthenticateDto
    {
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Senha { get; set; }
        [Required]
        public Perfil? Perfil { get; set; }
    }
}
