using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace APIEmpresarial.Model
{
    [Table("Livros")]
    public class Livro
    {
        [Key]
        public int LivroId { get; set; }
        [Required]
        [StringLength(80)]
        public string? Nome { get; set; }
        [Required]
        [StringLength(300)]
        public string? Sinopse { get; set; }
        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Preco { get; set; }
        [Required]
        [MaxLength(300)]
        public string? ImagemUrl { get; set; }
        public int EstoqueId { get; set; }
        public Estoque?  _Estoque { get; set; }
        
        public DateTime DataCadastro { get; set; }
        public int CategoriaId { get; set; }
        [JsonIgnore]
        public Categoria? Categoria { get; set; }
        public Vendas? Venda { get; set; }
    }
}
