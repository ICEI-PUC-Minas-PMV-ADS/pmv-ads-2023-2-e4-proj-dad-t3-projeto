# Especificações do Projeto

Nesta seção abordaremos a especificação do projeto, focando na resolução do problema identificado por meio da perspectiva do usuário. Para alcançar esse objetivo, utilizaremos uma série de técnicas e ferramentas que nos ajudarão a definir claramente as necessidades, expectativas e requisitos do público-alvo. A seguir, enumeramos os principais pontos que serão abordados nesta seção:

Diagrama de Personas:
Apresentaremos as personas que nos ajudará a visualizar as características, necessidades e expectativas dos usuários de forma mais tangível.

Histórias de Usuários:
Listaremos cenários e situações em que os usuários interagem com a solução. Isso nos permitirá entender como eles usarão a ferramenta em situações reais e quais objetivos esperam alcançar.

Requisitos Funcionais e Não Funcionais:
Especificaremos os recursos e funcionalidades que a solução deve incluir para atender às necessidades dos usuários. Além disso, abordaremos requisitos não funcionais, como desempenho, segurança e usabilidade.

Restrições do Projeto:
Identificaremos quaisquer limitações técnicas, financeiras ou de tempo que possam impactar o desenvolvimento da solução. Isso nos ajudará a definir um escopo realista para o projeto.

Ao abordar cada um desses pontos de maneira abrangente e organizada, nossa especificação do projeto se tornará uma base sólida para o desenvolvimento da solução, garantindo que as necessidades dos usuários sejam atendidas de forma eficaz e satisfatória.

///

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

<table>
 <tbody>
  <tr>
   <td rowspan="3"><img src="img/people_images/Kellen_araujo.jpg" width="300"  /></td>
   <td colspan="3"><strong> Kellen Araújo</strong></td>
  </tr>
  
  <tr>
   <td>33 Anos</td>
   <td>Timóteo/MG </td>
   <td>Empreendedora</td>
  </tr>
  
  <tr>
   <td colspan="3">
    <strong>Personalidade</strong>: Prestativa, detalhista e dedicada
   </td>
  </tr>
  
  <tr>
   <td colspan="4">
    <strong>Biografia</strong>: Não teve oportunidade de cursar uma faculdade e depois de alguns empregos com carteira assinada sem nenhuma previsão de crescimento dentro das empresas, decidiu abrir uma loja de artesanatos para ter uma renda maior do que tinha nos seus antigos empregos. Como é nova na administração de uma empresa, busca toda ajuda que encontra para que sua empresa prospere.
   </td>
  </tr>
  
  <tr>
   <td colspan="4">
    <strong>Objetivos</strong>:  Ter uma aplicação onde ela possa ver com mais detalhe o seu faturamento e seus gastos para saber como anda a saúde financeira da sua empresa.
   </td>
  </tr>
  
  <tr>
   <td colspan="4">
    <strong>Pontos de dor e frustração</strong>: Como sua empresa ainda não tem faturamento alto, ainda não consegue ter um setor contábil a disposição onde ela possa sempre verificar como a empresa está indo financeiramente.
   </td>
  </tr>
  
  <tr>
   <td colspan="4">
    <strong>Necessidades e expectativas</strong>: Encontrar uma aplicação que a dê um panorama financeiro geral da sua empresa.
   </td>
  </tr>
 </body>
<table>



 <table>
 <tbody>
  <tr>
   <td rowspan="3"><img src = "img/people_images/ddddd.jpg" width="1600" /></td>
   <td colspan="3"><strong>Marina Costa</strong></td>
  </tr>

  <tr>
   <td>28 Anos</td>
   <td>Belo Horizonte</td>
   <td>Administradora</td>
  </tr>

  <tr>
   <td colspan="3">
    <strong>Personalidade</strong>: Marina é uma pessoa determinada e comprometida. Ela é meticulosa em seus processos de trabalho e valoriza a precisão e a organização. Sua abordagem é orientada para resultados, e ela gosta de enfrentar desafios complexos. Marina também é uma líder inspiradora, motivando sua equipe a alcançar seus melhores desempenhos.
   </td>
  </tr>

  <tr>
   <td colspan="4">
    <strong>Biografia</strong>: Marina é uma administradora dedicada com pouco mais de 2 anos de experiência em gerenciamento financeiro. Ela começou sua carreira como estagiária em uma pequena empresa e rapidamente progrediu para posições de liderança devido à sua habilidade de tomar decisões estratégicas e sua atenção aos detalhes. 
   </td>
  </tr>

  <tr>
   <td colspan="4">
    <strong>Objetivos</strong>: Marina é apaixonada por garantir que as finanças de sua empresa estejam em ordem e que os recursos sejam alocados de forma eficiente. Seu objetivo é melhorar os processos financeiros da empresa, reduzir custos desnecessários, aumentar a lucratividade e garantir o cumprimento de todas as obrigações fiscais e regulatórias.
   </td>
  </tr>

  <tr>
   <td colspan="4">
    <strong>Pontos de dor e frustração</strong>: Marina frequentemente se depara com dificuldades em consolidar informações financeiras de várias fontes. Ela precisa lidar manualmente com planilhas e relatórios dispersos, o que consome muito tempo e deixa margem para erros. Além disso, ela enfrenta problemas para visualizar de forma clara e rápida a saúde financeira atual da empresa, o que dificulta a tomada de decisões estratégicas.
   </td>
  </tr>

  <tr>
   <td colspan="4">
    <strong>Necessidades e expectativas</strong>: Marina está buscando um software de gerenciamento financeiro que possa integrar dados de diversas áreas, como contabilidade, folha de pagamento e vendas. Ela espera que o software seja intuitivo e fácil de usar, mesmo para os membros de sua equipe que não são especialistas em finanças. Além disso, ela espera que o software ofereça relatórios personalizáveis e análises em tempo real, para que ela possa tomar decisões informadas de maneira mais ágil.
   </td>
  </tr>
 </body>
<table>


   

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Kellen Araújo  | Inserir a quantidade vendida de cada produto           | Saber quanto foi o retorno financeiro de cada protudo a venda  |
|Kellen Araújo       | Fazer uma compraração com as vendas com diferentes meses    | Verificar quais meses a venda são maiores e quais são as menores |
|Marina Costa    | Entender rapidamente como está a saúde financeira da empresa.  |  Tomar decisões informadas sobre compras de matéria-prima e investimentos. |
|Marina Costa    |  Ter uma visão clara das despesas mensais da empresa.   |   Planejar o orçamento de forma eficaz e garantir que as despesas estejam sob controle. |



## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A API deve ser acompanhada por uma documentação completa e atualizada que descreva todos os endpoints, parâmetros de solicitação, tipos de resposta e exemplos de uso. | Alta | 
|RNF-002| A API deve estar disponível para uso 24/7, com um tempo de atividade mínimo de 99,9% do tempo. |  Média | 
|RNF-003| A API deve registrar eventos importantes, erros e atividades críticas para fins de auditoria, solução de problemas e segurança.| Alta | 
|RNF-004| A documentação deve ser de fácil compreensão e acessível para desenvolvedores que desejam integrar a API, incluindo guias de início rápido e exemplos de código. | Alta |
|RNF-005| A API deve implementar autenticação baseada em tokens JWT (JSON Web Tokens) e autorização baseada em funções para garantir que apenas usuários autorizados tenham acesso a recursos específicos. | Média |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
