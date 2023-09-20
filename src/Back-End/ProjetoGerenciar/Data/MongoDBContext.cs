using MongoDB.Driver;

public class MongoDBContext
    {
    private readonly IMongoDatabase _database;

    public MongoDBContext(string connectionString, string databaseName)
    {
        var client = new MongoClient(connectionString);
        _database = client.GetDatabase(databaseName);
    }

    public IMongoCollection<Estoque> Products => _database.GetCollection<Estoque>("Estoque");
    public IMongoCollection<Rh> Pessoas => _database.GetCollection<Rh>("Rh");
}

