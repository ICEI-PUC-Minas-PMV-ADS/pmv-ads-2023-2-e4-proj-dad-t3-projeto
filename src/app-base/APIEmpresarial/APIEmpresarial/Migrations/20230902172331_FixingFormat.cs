using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIEmpresarial.Migrations
{
    /// <inheritdoc />
    public partial class FixingFormat : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Livros_Estoques_EstoqueId",
                table: "Livros");

            migrationBuilder.DropForeignKey(
                name: "FK_Livros_Vends_VendaId",
                table: "Livros");

            migrationBuilder.DropIndex(
                name: "IX_Livros_EstoqueId",
                table: "Livros");

            migrationBuilder.DropIndex(
                name: "IX_Livros_VendaId",
                table: "Livros");

            migrationBuilder.DropColumn(
                name: "EstoqueId",
                table: "Livros");

            migrationBuilder.RenameColumn(
                name: "VendaId",
                table: "Livros",
                newName: "Quantidade");

            migrationBuilder.AddColumn<int>(
                name: "VendasVendaId",
                table: "Livros",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "_EstoqueEstoqueId",
                table: "Livros",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Livros__EstoqueEstoqueId",
                table: "Livros",
                column: "_EstoqueEstoqueId");

            migrationBuilder.CreateIndex(
                name: "IX_Livros_VendasVendaId",
                table: "Livros",
                column: "VendasVendaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Livros_Estoques__EstoqueEstoqueId",
                table: "Livros",
                column: "_EstoqueEstoqueId",
                principalTable: "Estoques",
                principalColumn: "EstoqueId");

            migrationBuilder.AddForeignKey(
                name: "FK_Livros_Vends_VendasVendaId",
                table: "Livros",
                column: "VendasVendaId",
                principalTable: "Vends",
                principalColumn: "VendaId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Livros_Estoques__EstoqueEstoqueId",
                table: "Livros");

            migrationBuilder.DropForeignKey(
                name: "FK_Livros_Vends_VendasVendaId",
                table: "Livros");

            migrationBuilder.DropIndex(
                name: "IX_Livros__EstoqueEstoqueId",
                table: "Livros");

            migrationBuilder.DropIndex(
                name: "IX_Livros_VendasVendaId",
                table: "Livros");

            migrationBuilder.DropColumn(
                name: "VendasVendaId",
                table: "Livros");

            migrationBuilder.DropColumn(
                name: "_EstoqueEstoqueId",
                table: "Livros");

            migrationBuilder.RenameColumn(
                name: "Quantidade",
                table: "Livros",
                newName: "VendaId");

            migrationBuilder.AddColumn<int>(
                name: "EstoqueId",
                table: "Livros",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Livros_EstoqueId",
                table: "Livros",
                column: "EstoqueId");

            migrationBuilder.CreateIndex(
                name: "IX_Livros_VendaId",
                table: "Livros",
                column: "VendaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Livros_Estoques_EstoqueId",
                table: "Livros",
                column: "EstoqueId",
                principalTable: "Estoques",
                principalColumn: "EstoqueId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Livros_Vends_VendaId",
                table: "Livros",
                column: "VendaId",
                principalTable: "Vends",
                principalColumn: "VendaId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
