using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace APIEmpresarial.Model
{
    public class Vendas
    {
        [Key]
        public int VendaId { get; set; }
        public Collection<Livro>? Livros { get; set; }
        public DateTime? DataVenda { get; set; }
        public int LivroId { get; set; }    
        public int? Quantidade { get; set; }
        [Required]
        public double? ValorTotal { get; set; }

    }
}
