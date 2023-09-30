using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Rh
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [Required]
    [BsonElement("Nome")]
    public string? Nome { get; set; }

    [Required]
    [BsonElement("Cargo")]
    public string? Cargo { get; set; }

    [Required]
    [BsonElement("Setor")]
    public string? Setor { get; set; }

    private double salarioBruto;
    [Required]
    [BsonElement("SalarioBruto")]
    public double SalarioBruto
    {
        get => salarioBruto;
        set
        {
            salarioBruto = value;
            SalarioLiquido = CalcularSalarioLiquido();
        }
    }

    [BsonElement("SalarioLiquido")]
    public double SalarioLiquido { get; private set; }

    [Required]
    [BsonElement("MesLancamento")]
    public string? MesLancamento { get; set; }

    [Required]
    [BsonElement("AnoLancamento")]
    public int AnoLancamento { get; set; }

    private double CalcularSalarioLiquido()
    {
        double descontoInss = CalcularDescontoINSS();
        double descontoIr = CalcularDescontoIR(salarioBruto - descontoInss);
        return salarioBruto - descontoInss - descontoIr;
    }

    private double CalcularDescontoINSS()
    {
        double desconto;
        if (salarioBruto <= 1320)
        {
            desconto = salarioBruto * 0.075;
        }
        else if (salarioBruto >= 1320.01 && salarioBruto <= 2571.29)
        {
            desconto = (1320 * 0.075) + ((salarioBruto - 1320.01) * 0.09);
        }
        else if (salarioBruto >= 2571.30 && salarioBruto <= 3856.94)
        {
            desconto = (1320 * 0.075) + ((2571.29 - 1320.01) * 0.09) + ((salarioBruto - 2571.30) * 0.12);
        }
        else if (salarioBruto >= 3856.95 && salarioBruto <= 7507.49)
        {
            desconto = (1320 * 0.075) + ((2571.29 - 1320.01) * 0.09) + ((3856.94 - 2571.30) * 0.12) + ((salarioBruto - 3856.94) * 0.14);
        }
        else
        {
            desconto = 877.24;
        }
        return desconto;
    }

    private double CalcularDescontoIR(double salarioDescontado)
    {
        double desconto;
        if (salarioDescontado <= 2112)
        {
            desconto = 0;
        }
        else if (salarioDescontado >= 2112.01 && salarioDescontado <= 2826.65)
        {
            desconto = (salarioDescontado * 0.075) - 158.40;
        }
        else if (salarioDescontado >= 2826.66 && salarioDescontado <= 3751.05)
        {
            desconto = (salarioDescontado * 0.15) - 370.40;
        }
        else if (salarioDescontado >= 3751.06 && salarioDescontado <= 4664.68)
        {
            desconto = (salarioDescontado * 0.225) - 651.73;
        }
        else
        {
            desconto = (salarioDescontado * 0.275) - 884.96;
        }
        return desconto;
    }
}
