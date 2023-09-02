using System.ComponentModel.DataAnnotations;

namespace APIEmpresarial.Model.Entities
{
    public class Funcionario : IComparable 
    {
        [Key]
        public int FuncionarioId { get; set; }
        [Required]
        [StringLength(300)]
        public string? Nome { get; set; }
        [Required]
        public double? Salario { get; set; }
        public int RecursosHumanosId { get; set; }
        public override int GetHashCode()
        {
            return FuncionarioId.GetHashCode();
        }
        public int CompareTo(object? obj)
        {
           Funcionario other = obj as Funcionario;
           return FuncionarioId.CompareTo(other.FuncionarioId);
        }
    }
}
