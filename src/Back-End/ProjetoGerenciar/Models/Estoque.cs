using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
public class Estoque
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    [Required]
    [BsonElement("Nome")]
    public string? Nome { get; set; }
    [Required]
    [BsonElement("Quantidade")]
    public int Quantidade { get; set; }
    [Required]
    [BsonElement("Preço")]
    public double Preco { get; set; }
    [BsonElement("ValorTotal")]
    public double ValorTotal { get; private set; }

    [Required]
    [BsonElement("MesLancamento")]
    public int MesLancamento { get; set; }
    [Required]
    [BsonElement("AnoLancamento")]
    public int AnoLancamento { get; set; }

    public Estoque(string nome, int quantidade, double preco, int mesLancamento, int anoLancamento)
    {
        Nome = nome;
        Quantidade = quantidade;
        Preco = preco;
        MesLancamento = mesLancamento;
        AnoLancamento = anoLancamento;
        ValorTotal = Quantidade * Preco;
    }
}