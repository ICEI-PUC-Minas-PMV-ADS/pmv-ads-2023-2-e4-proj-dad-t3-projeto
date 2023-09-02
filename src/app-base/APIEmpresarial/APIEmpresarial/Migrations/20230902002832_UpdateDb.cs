using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIEmpresarial.Migrations
{
    /// <inheritdoc />
    public partial class UpdateDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Livros_Vends_VendaId",
                table: "Livros");

            migrationBuilder.AlterColumn<int>(
                name: "VendaId",
                table: "Livros",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Livros_Vends_VendaId",
                table: "Livros",
                column: "VendaId",
                principalTable: "Vends",
                principalColumn: "VendaId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Livros_Vends_VendaId",
                table: "Livros");

            migrationBuilder.AlterColumn<int>(
                name: "VendaId",
                table: "Livros",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Livros_Vends_VendaId",
                table: "Livros",
                column: "VendaId",
                principalTable: "Vends",
                principalColumn: "VendaId");
        }
    }
}
