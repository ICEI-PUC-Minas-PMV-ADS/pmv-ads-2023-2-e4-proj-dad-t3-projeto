using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ProjetoGerenciar.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        [Required]
        [BsonElement("Nome")]
        public string? Nome { get; set; }
        [BsonElement("Email")]
        [Required]
        public string? Email { get; set; }
        [Required]
        [BsonElement("Senha")]
        [JsonIgnore]
        public string? Senha { get; set; }
        [Required]
        [BsonElement("Perfil")]
        public Perfil Perfil {get; set;}
    }
    public enum Perfil
    {
        Usuario,
        AdminRh,
        AdminEstoque,
        AdminGeral,
        AdminCusto,
        AdminSistema
    }
   
}
