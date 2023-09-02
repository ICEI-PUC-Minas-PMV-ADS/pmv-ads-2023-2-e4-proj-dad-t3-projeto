using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace APIEmpresarial.Model;

[Table("Categoria")]
public class Categoria
{
    [Key]
    [Required]
    public int CategoriaId { get; set; }
    [Required]
    [MaxLength(80)]
    public string? Nome { get; set; }
    [Required]
    [MaxLength(300)]
    public string? ImagemUrl { get; set; }
    [JsonIgnore]
    public Collection<Livro>? Livros { get; set;}  
    public Categoria()
    {
        Livros = new Collection<Livro>();      
    }
 
}
