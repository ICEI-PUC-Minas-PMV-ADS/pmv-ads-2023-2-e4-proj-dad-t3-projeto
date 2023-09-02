using System.Collections.ObjectModel;
using System.Text.Json.Serialization;

namespace APIEmpresarial.Model
{
    public class Gastos
    {
        public int GastosId { get; set; }   
        public int VendaId { get; set; }
        [JsonIgnore]
        public Collection<Vendas>? _Vendas { get; set; }
        public double? TotalMes { get; set; }
    }
}
