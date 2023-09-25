using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ProjetoGerenciar.Models
{
    public class UserDto
    {
            [BsonId]
            [BsonRepresentation(BsonType.ObjectId)]
            public string? Id { get; set; }
            [Required]
            [BsonElement("Nome")]
            public string? Nome { get; set; }
            [Required]
            [BsonElement("Email")]
            public string? Email { get; set; }
            [Required]
            [BsonElement("Senha")]
            public string? Senha { get; set; }
            public Perfil Perfil { get; set; }

    }
}
