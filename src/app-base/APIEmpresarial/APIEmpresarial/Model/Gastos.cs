using System.Collections.ObjectModel;

namespace APIEmpresarial.Model
{
    public class Gastos
    {
        public int GastosId { get; set; }   
        public int VendaId { get; set; }
        public Collection<Vendas>? _Vendas { get; set; }
        public double? TotalMes { get; set; }
    }
}
