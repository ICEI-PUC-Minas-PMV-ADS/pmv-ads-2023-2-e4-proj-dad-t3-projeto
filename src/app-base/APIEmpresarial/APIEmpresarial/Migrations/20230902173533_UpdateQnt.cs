using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIEmpresarial.Migrations
{
    /// <inheritdoc />
    public partial class UpdateQnt : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder mb)
        {
            mb.Sql("UPDATE livros " +
                "SET Quantidade = 4 WHERE LivroId = 3");

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder mb)
        {
            mb.Sql("Delete from livro");
        }
    }
}
