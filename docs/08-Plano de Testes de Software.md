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


