using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
public class Rh
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    [Required]
    [BsonElement("Nome")]
    public string? Nome { get; set; }
    [Required]
    [BsonElement("Cargo")]
    public string? Cargo { get; set; }
    [Required]
    [BsonElement("Setor")]
    public string? Setor { get; set; }
    [Required]
    [BsonElement("Salário")]
    public double Salario { get; set; }
    [Required]
    [BsonElement("MesLancamento")]
    public string? MesLancamento { get; set; }
    [Required]
    [BsonElement("AnoLancamento")]
    public int AnoLancamento { get; set; }
}