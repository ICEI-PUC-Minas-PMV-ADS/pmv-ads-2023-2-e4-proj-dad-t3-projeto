using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;

namespace ProjetoGerenciar.Models
{
    public class Fixo
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public int Id { get; set; }

        [Required]
        [BsonElement("Custo")]
        public string? Custo { get; set; }

        [Required]
        [BsonElement("Valor")]
        public double Valor { get; set; }

        [BsonElement("Observação")]
        public string? Observacao { get; set; }

        [Required]
        [BsonElement("MesLancamento")]
        public string? MesLancamento { get; set; }

        [Required]
        [BsonElement("AnoLancamento")]
        public int AnoLancamento { get; set; }
    }
}
