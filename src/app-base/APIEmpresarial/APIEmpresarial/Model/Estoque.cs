using System.Collections;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace APIEmpresarial.Model
{
    public class Estoque
    {
        [Key]
        public int EstoqueId { get; set; }
        [JsonIgnore]
        public Collection<Livro>? _Livros { get; set; }
        [Required]
        [MaxLength(300)]
        public float? Quantidade { get; set; }

    }
  
}
