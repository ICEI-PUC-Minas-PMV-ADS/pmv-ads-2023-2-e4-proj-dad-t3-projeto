namespace ProjetoGerenciar.Models
{
    public class EstoqueDto
    {
        public IEnumerable<Estoque> Produtos { get; set; }
        public double Total { get; set; }
    }
}
