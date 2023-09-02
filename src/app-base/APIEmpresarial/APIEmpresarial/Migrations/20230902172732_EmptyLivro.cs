using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIEmpresarial.Migrations
{
    /// <inheritdoc />
    public partial class EmptyLivro : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder mb)
        {
            mb.Sql("INSERT INTO livros (Nome, CategoriaId, Sinopse, Preco, ImagemUrl, DataCadastro) " +
       "VALUES ('Harry Potter', 4, 'A ordem da fenix ressurge!', 243.90, 'harrypotter.jpg', NOW())");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder mb)
        {
            mb.Sql("DELETE FROM livros");
        }
    }
}
