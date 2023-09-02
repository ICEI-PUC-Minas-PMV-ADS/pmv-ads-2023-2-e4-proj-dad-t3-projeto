using System.Collections;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace APIEmpresarial.Model
{
    public class Estoque
    {
        [Key]
        public int EstoqueId { get; set; }  
        public Collection<Livro>? _Livros { get; set; }
        [Required]
        [MaxLength(300)]
        public float? Quantidade { get; set; }

    }
  
}
