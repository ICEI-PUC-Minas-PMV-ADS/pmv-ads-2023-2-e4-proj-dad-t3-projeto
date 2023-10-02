namespace ProjetoGerenciar.Models
{
    public class EstoqueDto
    {
        public IEnumerable<Estoque> Produtos { get; set; }
        public double TotalEstoque { get; set; }
    }
}