using System.ComponentModel.DataAnnotations;

namespace APIEmpresarial.Model.Entities
{
    public class RecursosHumanos
    {
        [Key]
        public int RecursosHumanosId { get; set; }
        public HashSet<Funcionario>? _Funcionario { get; set; }
        [Required]
        public double ImpostoFuncionario { get; set; }

    }
}
