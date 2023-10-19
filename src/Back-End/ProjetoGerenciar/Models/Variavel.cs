using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;

namespace ProjetoGerenciar.Models
{
    public class Variavel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

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
        public int MesLancamento { get; set; }

        [Required]
        [BsonElement("AnoLancamento")]
        public int AnoLancamento { get; set; }
    }
}
