using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Faturamento
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    [Required]
    public int ClientesAtendidos { get; set; }
    [Required]
    public int NumeroVendas { get; set; }
    [Required]
    public double TaxaConversao { get; private set; }
    [Required]
    public int NumeroItensVendidos { get; set; }
    [Required]
    public double PrecoMedioProduto { get; private set; }
    [Required]
    public double ValorFaturadoMes { get; set; }
    [Required]
    public int MesLancamento { get; set; }
    [Required]
    public int AnoLancamento { get; set; }

    public Faturamento(int clientesAtendidos, int numeroVendas, int numeroItensVendidos, double valorFaturadoMes, int mesLancamento, int anoLancamento)
    {
        ClientesAtendidos = clientesAtendidos;
        NumeroVendas = numeroVendas;
        NumeroItensVendidos = numeroItensVendidos;
        ValorFaturadoMes = valorFaturadoMes;
        MesLancamento = mesLancamento;
        AnoLancamento = anoLancamento;
        TaxaConversao = (double)numeroVendas / clientesAtendidos * 100;
        PrecoMedioProduto = valorFaturadoMes / numeroItensVendidos;

    }

}