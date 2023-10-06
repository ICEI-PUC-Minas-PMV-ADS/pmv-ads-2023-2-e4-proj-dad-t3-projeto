using MongoDB.Driver;
using ProjetoGerenciar.Models;

public class MongoDBContext
    {
    private readonly IMongoDatabase _database;

    public MongoDBContext(string connectionString, string databaseName)
    {
        var client = new MongoClient(connectionString);
        _database = client.GetDatabase(databaseName);

        var usersCollection = _database.GetCollection<User>("User");
        var emailIndex = Builders<User>.IndexKeys.Ascending(u => u.Email);
        var uniqueEmailIndexModel = new CreateIndexModel<User>(emailIndex, new CreateIndexOptions { Unique = true });
    }

    public IMongoCollection<Estoque> Produtos => _database.GetCollection<Estoque>("Estoque");
    public IMongoCollection<Rh> Pessoas => _database.GetCollection<Rh>("Rh");
    public IMongoCollection<User> Users => _database.GetCollection<User>("User");
    public IMongoCollection<Fixo> Fixos => _database.GetCollection<Fixo>("Fixo");
    public IMongoCollection<Variavel> Variaveis => _database.GetCollection<Variavel>("Variavel");
    public IMongoCollection<Faturamento> Lancamentos => _database.GetCollection<Faturamento>("Faturamento");
}

