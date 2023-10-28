using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;

namespace ProjetoGerenciar.Models
{
    public class Custo
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [Required]
        [BsonElement("TipoCusto")]
        public TipoCusto TipoCusto { get; set; }

        [Required]
        [BsonElement("Nome")]
        public string? Nome { get; set; }

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
        public Custo(string? id, TipoCusto tipoCusto, string? nome, double valor, string? observacao, int mesLancamento, int anoLancamento)
        {
            Id = id;
            TipoCusto = tipoCusto;
            Nome = nome;
            Valor = valor;
            Observacao = observacao;
            MesLancamento = mesLancamento;
            AnoLancamento = anoLancamento;
        }
        public Custo()
        {

        }
    }

    public enum TipoCusto
    {
        [Display(Name = "Custo Fixo")]
        CustoFixo = 0,
        [Display(Name = "Custo Variável")]
        CustoVariavel = 1
    }
}
