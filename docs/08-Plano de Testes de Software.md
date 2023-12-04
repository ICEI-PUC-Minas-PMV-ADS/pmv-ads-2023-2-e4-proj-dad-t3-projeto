# Plano de Testes de Software

# Testes Unitários
Testes unitários foram realizados visando testar unidades individuais do código, incluindo serviços e controladores.

## Cenários de Testes Selecionados

### Cenário de Teste 1: Verificação do Método `Get` do Controlador de Estoque.

- **Funcionalidade Avaliada:** Recuperação de dados de estoque.
- **Grupo de Usuários:** Administradores e Usuários.
- **Objetivo do Teste:** Verificar se o método `Get` do controlador de estoque, que utiliza o serviço `IEstoqueService`, retorna um objeto do tipo `EstoqueDto` (`Task<ActionResult<EstoqueDto>>`).

### Cenário de Teste 2: Validação do Método `Create` do Controlador de Estoque.

- **Funcionalidade Avaliada:** Criação de novos registros de estoque.
- **Objetivo do Teste:** Garantir que o método `Create` do controlador de estoque, que utiliza o serviço `IEstoqueService`, cria novos registros e retorna um objeto do tipo `CreatedAtRouteResult`.

### Cenário de Teste 3: Verificação do Método `Delete` do Controlador de Estoque.

- **Funcionalidade Avaliada:** Exclusão de registros de estoque.
- **Objetivo do Teste:** Testar se o método `Delete` do controlador de estoque, que utiliza o serviço `IEstoqueService`, exclui registros e retorna um objeto do tipo `OkObjectResult`.

### Cenário de Teste 4: Avaliação do Método `Update` do Controlador de Estoque.

- **Funcionalidade Avaliada:** Atualização de informações de estoque.
- **Objetivo do Teste:** Certificar-se de que o método `Update` do controlador de estoque, que utiliza o serviço `IEstoqueService`, atualiza registros e retorna um objeto do tipo `OkObjectResult`.

### Cenário de Teste 5: Teste do Método `GetByDate` do Controlador de Estoque.

- **Funcionalidade Avaliada:** Recuperação de registros de estoque por data.
- **Objetivo do Teste:** Verificar se o método `GetByDate` do controlador de estoque, que utiliza o serviço `IEstoqueService`, retorna um objeto do tipo `ActionResult<EstoqueDto>`.

### Cenário de Teste 6: Verificação do Método `Get` Controlador de Custo.

- **Funcionalidade Avaliada:** Recuperação de dados de custos.
- **Grupo de Usuários:** Administradores e Usuários.
- **Objetivo do Teste:** Verificar se o método `Get` do controlador de custo, que utiliza o serviço `ICustoService`, retorna um objeto do tipo `Custo` (`Task<IEnumerable<Custo>>`).

### Cenário de Teste 7: Validação do Método `Create` do Controlador de Custo.

- **Funcionalidade Avaliada:** Criação de novos registros de custo.
- **Objetivo do Teste:** Garantir que o método `Create` do controlador de custo, que utiliza o serviço `ICustoService`, cria novos registros e retorna um objeto do tipo `CreatedAtRouteResult`.

### Cenário de Teste 8: Verificação do Método `Delete` do Controlador de Custo.

- **Funcionalidade Avaliada:** Exclusão de registros de custo.
- **Objetivo do Teste:** Testar se o método `Delete` do controlador de custo, que utiliza o serviço `ICustoService`, exclui registros e retorna um objeto do tipo `OkObjectResult`.

### Cenário de Teste 9: Avaliação do Método `Update` do Controlador de Custo.

- **Funcionalidade Avaliada:** Atualização de informações de custo.
- **Objetivo do Teste:** Certificar-se de que o método `Update` do controlador de custo, que utiliza o serviço `ICustoService`, atualiza registros e retorna um objeto do tipo `OkObjectResult`.

### Cenário de Teste 10: Teste do Método `GetByDate` do Controlador de Custo.

- **Funcionalidade Avaliada:** Recuperação de registros de custo por data.
- **Objetivo do Teste:** Verificar se o método `GetByDate` do controlador de custo, que utiliza o serviço `ICustoService`, retorna um objeto do tipo `ActionResult<List<Custo>>`.

<br>

# Testes de Integração com Swagger

## Objetivo

Realizar testes de integração utilizando o Swagger para verificar o correto funcionamento dos endpoints da API. Certifique-se de que os serviços associados aos endpoints estão corretamente implementados.

## Testes Realizados

### Cenário de Teste 1: Execução do Endpoint de Recuperação de Dados de Estoque

- **Endpoint Testado:** `GET /api/estoque`
- **Objetivo do Teste:** Verificar se o endpoint de recuperação de dados de estoque está funcionando corretamente.
- **Resultado Esperado:** Status 200 (OK) e retorno de dados de estoque.

### Cenário de Teste 2: Execução do Endpoint de Criação de Registro de Estoque

- **Endpoint Testado:** `POST /api/estoque`
- **Objetivo do Teste:** Verificar se o endpoint de criação de registros de estoque está funcionando corretamente.
- **Resultado Esperado:** Status 201 (Created) e retorno do novo registro de estoque.

### Cenário de Teste 3: Execução do Endpoint de Exclusão de Registro de Estoque

- **Endpoint Testado:** `DELETE /api/estoque/{id}`
- **Objetivo do Teste:** Verificar se o endpoint de exclusão de registros de estoque está funcionando corretamente.
- **Resultado Esperado:** Status 200 (OK) e retorno do registro excluído.

### Cenário de Teste 4: Execução do Endpoint de Atualização de Registro de Estoque

- **Endpoint Testado:** `PUT /api/estoque/{id}`
- **Objetivo do Teste:** Verificar se o endpoint de atualização de registros de estoque está funcionando corretamente.
- **Resultado Esperado:** Status 200 (OK) e retorno do registro atualizado.

### Cenário de Teste 5: Execução do Endpoint de Recuperação de Dados de Custo

- **Endpoint Testado:** `GET /api/custo`
- **Objetivo do Teste:** Verificar se o endpoint de recuperação de dados de custo está funcionando corretamente.
- **Resultado Esperado:** Status 200 (OK) e retorno de dados de custo.

### Cenário de Teste 6: Execução do Endpoint de Criação de Registro de Custo

- **Endpoint Testado:** `POST /api/custo`
- **Objetivo do Teste:** Verificar se o endpoint de criação de registros de custo está funcionando corretamente.
- **Resultado Esperado:** Status 201 (Created) e retorno do novo registro de custo.

### Cenário de Teste 7: Execução do Endpoint de Exclusão de Registro de Custo

- **Endpoint Testado:** `DELETE /api/custo/{id}`
- **Objetivo do Teste:** Verificar se o endpoint de exclusão de registros de custo está funcionando corretamente.
- **Resultado Esperado:** Status 200 (OK) e retorno do registro excluído.

### Cenário de Teste 8: Execução do Endpoint de Atualização de Registro de Custo

- **Endpoint Testado:** `PUT /api/custo/{id}`
- **Objetivo do Teste:** Verificar se o endpoint de atualização de registros de custo está funcionando corretamente.
- **Resultado Esperado:** Status 200 (OK) e retorno do registro atualizado.

### Cenário de Teste 9: Execução do Endpoint de Recuperação de Dados de Custo por Data

- **Endpoint Testado:** `GET /api/custo/data`
- **Objetivo do Teste:** Verificar se o endpoint de recuperação de dados de custo por data está funcionando corretamente.
- **Resultado Esperado:** Status 200 (OK) e retorno de dados de custo com base nos parâmetros de data.

<br>
<br>

# Testes de Integração

## Objetivo

Realizar testes de integração utilizando o navegador e a aplicação mobile para verificar o correto funcionamento da aplicação. Certifique-se de que a aplicação está funcionando da maneira correta para os usuários.

## Testes Realizados

<br>

## Função tela de dashboard

### Cenário 1: Verificar a exibição inicial do Dashboard
- Dado que estou na tela de "Dashboard"
- E não realizei nenhuma ação
- Então o subtítulo "Acompanhe suas finanças" deve ser visível
- E a mensagem "Nenhum dado foi encontrado" deve ser exibida
- E o seletor de data deve estar presente para seleção do período desejado

### Cenário 2: Atualizar dados após mudança de data
- Dado que estou na tela de "Dashboard"
- Quando eu altero a data no seletor de data
- Então uma solicitação deve ser enviada para atualizar os dados de faturamento com base no mês e ano selecionados
- E os novos dados de faturamento devem ser exibidos na tela

### Cenário 3: Verificar a resposta para grandes volumes de dados
- Dado que estou na tela de "Dashboard"
- E o período selecionado contém um grande volume de dados de faturamento
- Quando eu atualizo a tela
- Então os dados de faturamento devem ser carregados e exibidos de forma eficiente sem prejudicar o desempenho do aplicativo

### Cenário 4: Resposta da aplicação a uma mudança rápida de datas
- Dado que estou na tela de "Dashboard"
- Quando eu altero rapidamente a seleção de datas várias vezes
- Então o aplicativo deve responder corretamente, atualizando os dados de faturamento para corresponder à última data selecionada

<br>

## Função tela de estoque e adição de produto no estoque

### Cenário 1: Adicionar um produto ao estoque
- Dado que estou na tela de "Estoque"
- E não há produtos listados
- Quando eu pressiono o botão "Adicionar"
- E preencho os campos "Nome do Produto", "Quantidade do Produto" e "Preço do Produto" com dados válidos
- E pressiono o botão "Adicionar" no modal
- Então o novo produto deve ser listado na tela com a quantidade e preço especificados

### Cenário 2: Tentativa de adicionar produto sem preencher todos os campos
- Dado que estou na tela de "Estoque"
- Quando eu pressiono o botão "Adicionar"
- E preencho o campo "Nome do Produto" mas deixo "Quantidade do Produto" e "Preço do Produto" em branco
- E pressiono o botão "Adicionar" no modal
- Então uma mensagem de erro deve ser exibida solicitando que todos os campos sejam preenchidos

### Cenário 3: Cancelar a adição de um novo produto
- Dado que estou na tela de "Estoque"
- Quando eu pressiono o botão "Adicionar"
- E o modal de adicionar produto é exibido
- E eu pressiono o botão de fechar (X) no modal
- Então o modal deve ser fechado e nenhum novo produto deve ser adicionado ao estoque

### Cenário 4: Atualizar a lista de produtos após adicionar um novo produto
- Dado que estou na tela de "Estoque"
- E já existem produtos listados
- Quando eu adiciono um novo produto com dados válidos
- E pressiono o botão "Adicionar" no modal
- Então a lista de produtos deve ser atualizada com o novo produto adicionado

### Cenário 5: Verificar cálculo do valor total após adicionar produto
- Dado que estou na tela de "Estoque"
- Quando eu adiciono um novo produto com a quantidade e preço por unidade especificados
- E pressiono o botão "Adicionar" no modal
- Então o valor total do produto adicionado deve ser calculado e exibido corretamente baseado na quantidade e preço por unidade
