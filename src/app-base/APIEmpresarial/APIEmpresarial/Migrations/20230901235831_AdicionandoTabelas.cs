using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIEmpresarial.Migrations
{
    /// <inheritdoc />
    public partial class AdicionandoTabelas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Livros_Estoque_EstoqueId",
                table: "Livros");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Estoque",
                table: "Estoque");

            migrationBuilder.DropColumn(
                name: "TotalEstoque",
                table: "Estoque");

            migrationBuilder.RenameTable(
                name: "Estoque",
                newName: "Estoques");

            migrationBuilder.AddColumn<int>(
                name: "VendaId",
                table: "Livros",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Estoques",
                table: "Estoques",
                column: "EstoqueId");

            migrationBuilder.CreateTable(
                name: "Gastos",
                columns: table => new
                {
                    GastosId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    VendaId = table.Column<int>(type: "int", nullable: false),
                    TotalMes = table.Column<double>(type: "double", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gastos", x => x.GastosId);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "RecursHumanos",
                columns: table => new
                {
                    RecursosHumanosId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ImpostoFuncionario = table.Column<double>(type: "double", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RecursHumanos", x => x.RecursosHumanosId);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Vends",
                columns: table => new
                {
                    VendaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    DataVenda = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    LivroId = table.Column<int>(type: "int", nullable: false),
                    Quantidade = table.Column<int>(type: "int", nullable: true),
                    ValorTotal = table.Column<double>(type: "double", nullable: false),
                    GastosId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vends", x => x.VendaId);
                    table.ForeignKey(
                        name: "FK_Vends_Gastos_GastosId",
                        column: x => x.GastosId,
                        principalTable: "Gastos",
                        principalColumn: "GastosId");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Funcionarios",
                columns: table => new
                {
                    FuncionarioId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(type: "varchar(300)", maxLength: 300, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Salario = table.Column<double>(type: "double", nullable: false),
                    RecursosHumanosId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Funcionarios", x => x.FuncionarioId);
                    table.ForeignKey(
                        name: "FK_Funcionarios_RecursHumanos_RecursosHumanosId",
                        column: x => x.RecursosHumanosId,
                        principalTable: "RecursHumanos",
                        principalColumn: "RecursosHumanosId",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Livros_VendaId",
                table: "Livros",
                column: "VendaId");

            migrationBuilder.CreateIndex(
                name: "IX_Funcionarios_RecursosHumanosId",
                table: "Funcionarios",
                column: "RecursosHumanosId");

            migrationBuilder.CreateIndex(
                name: "IX_Vends_GastosId",
                table: "Vends",
                column: "GastosId");

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
                principalColumn: "VendaId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Livros_Estoques_EstoqueId",
                table: "Livros");

            migrationBuilder.DropForeignKey(
                name: "FK_Livros_Vends_VendaId",
                table: "Livros");

            migrationBuilder.DropTable(
                name: "Funcionarios");

            migrationBuilder.DropTable(
                name: "Vends");

            migrationBuilder.DropTable(
                name: "RecursHumanos");

            migrationBuilder.DropTable(
                name: "Gastos");

            migrationBuilder.DropIndex(
                name: "IX_Livros_VendaId",
                table: "Livros");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Estoques",
                table: "Estoques");

            migrationBuilder.DropColumn(
                name: "VendaId",
                table: "Livros");

            migrationBuilder.RenameTable(
                name: "Estoques",
                newName: "Estoque");

            migrationBuilder.AddColumn<double>(
                name: "TotalEstoque",
                table: "Estoque",
                type: "double",
                maxLength: 2000,
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Estoque",
                table: "Estoque",
                column: "EstoqueId");

            migrationBuilder.AddForeignKey(
                name: "FK_Livros_Estoque_EstoqueId",
                table: "Livros",
                column: "EstoqueId",
                principalTable: "Estoque",
                principalColumn: "EstoqueId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
