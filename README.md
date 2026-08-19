# Nekredemos.net

Plataforma web gratuita de apoio ao sistema de RPG de horror moderno Nekredemos RPG. O projeto reunirá uma ficha digital interativa, geradores procedurais, um compêndio para consultas rápidas e uma biblioteca de materiais oficiais.

Este é um projeto pessoal de aprendizado e portfólio, com foco inicial no desenvolvimento frontend. A primeira versão será estática e não utilizará autenticação, banco de dados ou persistência em nuvem.

## Objetivos

- Disponibilizar os materiais oficiais do Nekredemos RPG para download.
- Oferecer uma ficha digital independente dos geradores.
- Facilitar a criação de personagens, ameaças, anomalias e incidentes.
- Permitir importar e exportar os dados de personagens em JSON.
- Preencher e exportar a ficha oficial em PDF.
- Disponibilizar uma referência pesquisável das regras e conteúdos do sistema.
- Servir como portal oficial do projeto e como exercício prático de desenvolvimento web.

## Funcionalidades previstas para a primeira versão

- Ficha digital com edição manual.
- Importação e exportação de personagens em JSON.
- Exportação da ficha oficial preenchida em PDF.
- Gerador de personagens com parâmetros configuráveis.
- Geradores de ameaças, anomalias e incidentes.
- Compêndio com pesquisa e filtros por categoria.
- Biblioteca de livros, cenários, complementos, aventuras e fichas.
- Páginas institucionais e canais da comunidade.
- Interface responsiva e acessível.

## Tecnologias

| Tecnologia | Papel no projeto |
| --- | --- |
| Next.js | Framework da aplicação, responsável por rotas, layouts e renderização |
| React | Construção dos componentes e das interfaces interativas |
| TypeScript | Tipagem dos dados, componentes e regras da aplicação |
| Tailwind CSS | Estilização e criação dos layouts responsivos |
| shadcn/ui | Base de componentes de interface acessíveis e personalizáveis |
| Zod | Validação dos dados, principalmente na importação de arquivos JSON |
| pdf-lib | Leitura, preenchimento e exportação da ficha oficial em PDF |
| Vercel | Hospedagem, previews e publicação da aplicação |

## Pré-requisitos

Para executar o projeto localmente, será necessário ter instalado:

- Node.js 20.9 ou superior;
- npm, incluído na instalação do Node.js;
- Git.

## Instalação e execução local

Clone o repositório:

```bash
git clone https://github.com/rogermarllus/nekredemos-net.git
cd nekredemos-net
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

Para gerar e verificar a versão de produção:

```bash
npm run build
npm run start
```

> O repositório ainda está na fase inicial de documentação e não possui a configuração do Next.js. Os comandos desta seção passarão a funcionar após a conclusão do setup inicial da aplicação.

## Estrutura de rotas

A estrutura abaixo é o contrato inicial de navegação da aplicação. Alterações em rotas, responsabilidades ou funcionalidades devem ser refletidas nesta seção.

### `/` — Página inicial

Apresenta o Nekredemos RPG e direciona o visitante para as principais áreas da plataforma.

Principais funcionalidades:

- apresentação do sistema e do cenário;
- destaques da ficha digital e das ferramentas;
- acesso aos materiais oficiais;
- atalhos para criar um personagem ou abrir uma ficha.

### `/sheet` — Ficha digital

Disponibiliza a ficha digital para uso independente ou em conjunto com o gerador de personagens.

Principais funcionalidades:

- criar e editar uma ficha manualmente;
- receber dados do gerador de personagens;
- importar e exportar dados em JSON;
- preencher e exportar a ficha oficial em PDF.

### `/tools` — Hub de ferramentas

Centraliza o acesso às ferramentas de geração procedural da plataforma.

Principais funcionalidades:

- apresentar os geradores disponíveis;
- explicar o propósito de cada ferramenta;
- direcionar o usuário para o gerador escolhido.

### `/tools/character-generator` — Gerador de Personagens

Gera personagens jogadores de forma aleatória ou orientada por parâmetros.

Principais funcionalidades:

- selecionar parâmetros de geração;
- gerar dados compatíveis com as regras do sistema;
- revisar ou gerar novamente o resultado;
- enviar o personagem gerado para a ficha digital.

### `/tools/threat-generator` — Gerador de Ameaças

Gera inimigos humanos e outras ameaças não anômalas para uso dos narradores.

Principais funcionalidades:

- selecionar parâmetros da ameaça;
- gerar características, motivações e recursos;
- copiar ou exportar o resultado.

### `/tools/anomaly-generator` — Gerador de Anomalias

Gera entidades, artefatos, locais e fenômenos anômalos.

Principais funcionalidades:

- selecionar o tipo de anomalia;
- gerar descrição, comportamento e efeitos;
- copiar ou exportar o resultado.

### `/tools/incident-generator` — Gerador de Incidentes

Gera casos investigativos, acontecimentos e ganchos de aventura.

Principais funcionalidades:

- selecionar parâmetros do incidente;
- gerar contexto, envolvidos e pistas;
- copiar ou exportar o resultado.

### `/compendium` — Compêndio

Funciona como uma referência rápida e pesquisável para regras e conteúdos do sistema.

Principais funcionalidades:

- pesquisar por texto;
- filtrar conteúdos por categoria;
- consultar anomalias, equipamentos, armas, condições, regras, profissões, magias e facções.

### `/library` — Biblioteca

Reúne os materiais oficiais do Nekredemos RPG para consulta e download.

Principais funcionalidades:

- organizar materiais por categoria;
- apresentar informações básicas de cada material;
- disponibilizar livros, cenários, complementos, aventuras e fichas em PDF.

### `/faq` — FAQ

Responde às dúvidas frequentes sobre o sistema e a plataforma.

Principais funcionalidades:

- organizar perguntas por assunto;
- esclarecer dúvidas sobre regras, ferramentas, downloads e licenciamento.

### `/about` — Sobre

Apresenta o sistema, o projeto e as pessoas envolvidas em seu desenvolvimento.

Principais funcionalidades:

- contar a história do sistema;
- explicar os objetivos e o processo de desenvolvimento;
- apresentar créditos e informações de licenciamento.

### `/community` — Comunidade

Centraliza os canais oficiais e as formas de participação no projeto.

Principais funcionalidades:

- disponibilizar links para Discord, GitHub e redes sociais;
- apresentar os canais de contato;
- orientar contribuições e participação na comunidade.

## Fora do escopo da primeira versão

- cadastro e autenticação de usuários;
- banco de dados;
- salvamento de personagens em nuvem;
- campanhas e recursos multiplayer;
- compartilhamento de fichas por links públicos;
- marketplace ou conteúdo de terceiros.

Essas funcionalidades poderão ser avaliadas em versões futuras, após a conclusão e validação da primeira versão.

## Links úteis

- [Repositório no GitHub](https://github.com/rogermarllus/nekredemos-net)
- [Issues do projeto](https://github.com/rogermarllus/nekredemos-net/issues)
- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do TypeScript](https://www.typescriptlang.org/docs/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação do shadcn/ui](https://ui.shadcn.com/docs)
- [Documentação do Zod](https://zod.dev/)
- [Documentação do pdf-lib](https://pdf-lib.js.org/)
- [Documentação da Vercel](https://vercel.com/docs)

## Licença

Este repositório é disponibilizado sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.
