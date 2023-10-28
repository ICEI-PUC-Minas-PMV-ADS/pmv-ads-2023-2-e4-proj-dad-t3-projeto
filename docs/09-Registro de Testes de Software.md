# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação
Os testes foram executados com sucesso, validando a robustez e funcionalidade dos serviços. A equipe dedicou-se a garantir uma cobertura abrangente, resultando em um conjunto de testes confiável para a API. O GitHub Actions contribuiu para uma integração contínua eficiente.

## Testes Unitários

### Cenário de Teste 1:  Resultado do teste do Método `Get`
  
**Evidência:**

![Teste 1 - Método Get do IEstoqueService](img/teste_unitario_get_estoque.png)

### Cenário de Teste 2: Resultado do teste do Método `Create`

**Evidência:**

![Teste 2 - Método Create do IEstoqueService](img/teste_unitario_create_estoque.png)

### Cenário de Teste 3: Resultado do teste do Método `Delete` 
**Evidência:**

![Teste 3 - Método Delete do IEstoqueService](img/teste_unitario_delete_estoque.png)

### Cenário de Teste 4: Resultado do teste do Método `Update` 

**Evidência:**

![Teste 4 - Método Update do IEstoqueService](img/teste_unitario_update_estoque.png)

### Cenário de Teste 5: Resultado do teste do Método `GetByDate` 

**Evidência:**

![Teste 5 - Método GetByDate do IEstoqueService](img/teste_unitario_get_by_date_estoque.png)

### Cenário de Teste 6: Resultado do teste do Método `Get` 

**Evidência:**

![Teste 6 - Método Get do ICustoService](img/teste_unitario_get_custo.png)

### Cenário de Teste 7: Resultado do teste do Método `Create` 

**Evidência:**

![Teste 7 - Método Create do ICustoService](img/teste_unitario_create_custo.png)

### Cenário de Teste 8: Resultado do teste do Método `Delete` 

**Evidência:**

![Teste 8 - Método Delete do ICustoService](img/teste_unitario_delete_custo.png)

### Cenário de Teste 9 Resultado do teste do Método `Update` 

**Evidência:**

![Teste 9 - Método Update do ICustoService](img/teste_unitario_update_custo.png)

### Cenário de Teste 10: Resultado do teste do Método `GetByDate` 
**Evidência:**

![Teste 10 - Método GetByDate do ICustoService](img/teste_unitario_get_by_date_custo.png)

# Testes de Integração com Swagger
## Objetivo

Realizar testes de integração utilizando o Swagger para verificar o correto funcionamento dos endpoints da API. Certifique-se de que os serviços associados aos endpoints estão corretamente implementados.

## Testes Realizados

### Cenário de Teste 1: Execução do Endpoint de Recuperação de Dados de Estoque

- **Endpoint Testado:** `GET /api/estoque`
   
**Evidência:**
![Teste 1 - Recuperação de Dados de Estoque](img/teste_swagger_estoque.png)

### Cenário de Teste 2: Execução do Endpoint de Criação de Registro de Estoque

- **Endpoint Testado:** `POST /api/estoque`

**Evidência:**
![Teste 2 - Criação de Registro de Estoque](img/teste_swagger_criacao_estoque.png)

### Cenário de Teste 3: Execução do Endpoint de Exclusão de Registro de Estoque

- **Endpoint Testado:** `DELETE /api/estoque/{id}`

**Evidência:**
![Teste 3 - Exclusão de Registro de Estoque](img/teste_swagger_exclusao_estoque.png)

### Cenário de Teste 4: Execução do Endpoint de Atualização de Registro de Estoque

- **Endpoint Testado:** `PUT /api/estoque/{id}`

**Evidência:**
![Teste 4 - Atualização de Registro de Estoque](img/teste_swagger_atualizacao_estoque.png)

### Cenário de Teste 5: Execução do Endpoint de Recuperação de Dados de Custo

- **Endpoint Testado:** `GET /api/custo`

**Evidência:**
![Teste 5 - Recuperação de Dados de Custo](img/teste_swagger_custo.png)

### Cenário de Teste 6: Execução do Endpoint de Criação de Registro de Custo

- **Endpoint Testado:** `POST /api/custo`
  
**Evidência:**
![Teste 6 - Criação de Registro de Custo](img/teste_swagger_criacao_custo.png)

### Cenário de Teste 7: Execução do Endpoint de Exclusão de Registro de Custo

- **Endpoint Testado:** `DELETE /api/custo/{id}`
   
**Evidência:**
![Teste 7 - Exclusão de Registro de Custo](img/teste_swagger_exclusao_custo.png)

### Cenário de Teste 8: Execução do Endpoint de Atualização de Registro de Custo

- **Endpoint Testado:** `PUT /api/custo/{id}`

**Evidência:**
![Teste 8 - Atualização de Registro de Custo](img/teste_swagger_atualizacao_custo.png)

### Cenário de Teste 9: Execução do Endpoint de Recuperação de Dados de Custo por Data

- **Endpoint Testado:** `GET /api/custo/data`

**Evidência:**
![Teste 9 - Recuperação de Dados de Custo por Data](img/teste_swagger_custo_data.png)

## Comentários e Avalições da equipe de desenvolvedores
- Eduardo: "investi tempo extra para entender a autenticação no Swagger, contribuindo para a integração perfeita."
- Alex: "dediquei esforços adicionais na integração dos testes de custo com o Swagger, resultando em uma solução eficiente."
- Fernando: "otimizei os testes unitários do estoque, investindo tempo para garantir uma cobertura abrangente."
- Erick: "superei desafios na configuração inicial do Swagger, destacando sua habilidade em resolver problemas."
- Mike: "refinei os testes de integração, investindo tempo na geração realista de dados para os testes de custo."
- Leticia: "aprimorei os testes de atualização do estoque, garantindo a sincronização eficiente com o banco de dados."
