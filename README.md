# Plataforma OBECI

OBECI (Observatório de Educação do Ceará) é uma plataforma educacional abrangente projetada para monitorar e analisar dados educacionais no estado do Ceará, Brasil. A plataforma fornece ferramentas para escolas, professores e administradores gerenciarem atividades educacionais e acompanharem o progresso dos alunos.

## 🏗️ Arquitetura

A plataforma OBECI segue uma arquitetura moderna de microsserviços com:

- **Frontend**: Desenvolvido com Next.js 15, React 19 e TypeScript
- **Backend**: Desenvolvido com Spring Boot 3.5.7, Java 21 e PostgreSQL
- **Banco de Dados**: PostgreSQL 16 com Hibernate/JPA
- **Autenticação**: Autenticação baseada em JWT com armazenamento seguro em cookies
- **Implantação**: Contêineres Docker orquestrados com Docker Compose
- **Proxy Reverso**: NGINX para roteamento e segurança

## 🚀 Funcionalidades

### Autenticação e Autorização
- Autenticação baseada em JWT com armazenamento seguro em cookies
- Controle de acesso baseado em papéis (Administrador, Professor, Aluno)
- Funcionalidade de login/logout segura
- Mecanismo de atualização de token

### Funcionalidades Principais
- **Gerenciamento de Escolas**: Criar, atualizar e gerenciar informações das escolas
- **Gerenciamento de Turmas**: Organizar turmas por escola e professor
- **Sistema de Publicações**: Compartilhar conteúdo educacional com suporte a hashtags
- **Gerenciamento de Usuários**: Registro e permissões de usuários controladas pelo administrador

## 🛠️ Pilha Tecnológica

### Tecnologias Backend
- **Framework**: Spring Boot 3.5.7
- **Linguagem**: Java 21
- **Banco de Dados**: PostgreSQL 16 com JPA/Hibernate
- **Segurança**: Spring Security com JWT
- **Validação**: Bean Validation
- **Ferramenta de Build**: Maven

### Tecnologias Frontend
- **Framework**: Next.js 15.5.6
- **Linguagem**: TypeScript
- **Runtime**: Node.js 20
- **Estilização**: Tailwind CSS (assumido com base na configuração do Next.js)

### Infraestrutura
- **Contêinerização**: Docker e Docker Compose
- **Proxy Reverso**: NGINX
- **Banco de Dados**: PostgreSQL

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter:

- Docker e Docker Compose
- Node.js (para desenvolvimento frontend local)
- Java 21 (para desenvolvimento backend local)
- Maven (para desenvolvimento backend local)

## 🚀 Começando

### Opção 1: Usando Docker Compose (Recomendado)

A maneira mais fácil de executar toda a plataforma é usando o Docker Compose:

```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd obeci-project

# Construir e iniciar todos os serviços
docker-compose up --build
```

A plataforma estará acessível em `http://localhost`

### Opção 2: Desenvolvimento Local

#### Configuração Backend
```bash
# Navegar até o diretório backend
cd backend

# Executar com Maven (perfil de desenvolvimento)
./mvnw spring-boot:run

# Ou executar com perfil de produção
SPRING_PROFILES_ACTIVE=prod ./mvnw spring-boot:run
```

A API backend estará disponível em `http://localhost:9090`

#### Configuração Frontend
```bash
# Navegar até o diretório frontend
cd frontend

# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em `http://localhost:3000`

## 🔧 Configuração

### Variáveis de Ambiente

#### Configuração Backend
- `SPRING_PROFILES_ACTIVE`: Perfil a ser usado (dev/prod)
- `APP_JWT_SECRET`: Chave secreta para assinatura JWT (mínimo 32 bytes)
- `APP_CORS_ALLOWED_ORIGINS`: Origens permitidas para CORS
- `OBECI_DB_URL`: URL de conexão com o banco de dados
- `OBECI_DB_USERNAME`: Nome de usuário do banco de dados
- `OBECI_DB_PASSWORD`: Senha do banco de dados

#### Configuração Frontend
- `NEXT_PUBLIC_API_URL`: URL base para chamadas à API

### Perfis
O backend suporta dois perfis:
- **dev** (padrão): Configuração de desenvolvimento com suporte ao banco de dados H2
- **prod**: Configuração de produção com PostgreSQL e configurações de segurança rigorosas

## 🌐 Endpoints da API

### Autenticação (`/auth`)
- `POST /auth/login` - Autenticar usuário
- `POST /auth/logout` - Deslogar usuário
- `GET /auth/me` - Obter informações do usuário autenticado
- `PUT /auth/me` - Atualizar informações do usuário
- `POST /auth/register` - Registrar novo usuário (somente administrador)

### Escolas (`/api/escolas`)
- `GET /api/escolas` - Listar todas as escolas
- `GET /api/escolas/{id}` - Obter detalhes da escola
- `POST /api/escolas` - Criar escola
- `PUT /api/escolas/{id}` - Atualizar escola
- `DELETE /api/escolas/{id}` - Excluir escola
- `GET /api/escolas/ativo/{isActive}` - Filtrar escolas por status ativo
- `GET /api/escolas/nome/{nome}` - Pesquisar escolas por nome

### Turmas (`/api/turmas`)
- `GET /api/turmas` - Listar todas as turmas
- `GET /api/turmas/{id}` - Obter detalhes da turma
- `POST /api/turmas` - Criar turma
- `PUT /api/turmas/{id}` - Atualizar turma
- `DELETE /api/turmas/{id}` - Excluir turma
- `GET /api/turmas/escola/{escolaId}` - Listar turmas por escola
- `GET /api/turmas/professor/{professorId}` - Listar turmas por professor

### Publicações (`/api/publicacoes`)
- `GET /api/publicacoes` - Listar todas as publicações
- `GET /api/publicacoes/{id}` - Obter detalhes da publicação
- `POST /api/publicacoes` - Criar publicação
- `PUT /api/publicacoes/{id}` - Atualizar publicação
- `DELETE /api/publicacoes/{id}` - Excluir publicação
- `GET /api/publicacoes/turma/{turmaId}` - Listar publicações por turma
- `GET /api/publicacoes/escola/{escolaId}` - Listar publicações por escola
- `GET /api/publicacoes/public/{isPublic}` - Filtrar por visibilidade
- `GET /api/publicacoes/username/{username}` - Listar publicações por usuário

### Usuários (`/api/usuarios`)
- Operações completas de CRUD somente para usuários administradores

## 🔒 Recursos de Segurança

- Tokens JWT armazenados em cookies HttpOnly e Secure
- Proteção contra CSRF
- Configuração de CORS com origens permitidas configuráveis
- Criptografia de senhas com BCrypt
- Autorização baseada em papéis
- Validação e sanitização de entradas

## 🗄️ Esquema do Banco de Dados

A plataforma utiliza PostgreSQL com JPA/Hibernate para ORM. As principais entidades incluem:

- **Usuário**: Dados de autenticação e autorização
- **Escola**: Informações sobre instituições educacionais
- **Turma**: Turmas escolares com professores e alunos
- **Publicação**: Conteúdo educacional com suporte a hashtags

## 🚢 Implantação

A plataforma é projetada para implantação em contêineres usando Docker Compose. A configuração de produção inclui:

- Proxy reverso NGINX com terminação SSL
- Contêineres separados para frontend e backend
- Banco de dados PostgreSQL com volumes persistentes
- Configurações adequadas de cabeçalhos e segurança

## 🧪 Testes

### Testes Backend
- Testes unitários usando JUnit 5
- Testes de integração com Spring Boot Test
- Testes de segurança com Spring Security Test
- Banco de dados H2 para testes sem dependências externas

### Testes Frontend
- Testes de componentes com Jest e React Testing Library
- Testes de integração para interações com API

## 🤝 Contribuição

1. Faça um fork do repositório
2. Crie um branch para sua funcionalidade (`git checkout -b feature/funcionalidade-incrivel`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona funcionalidade incrivel'`)
4. Envie para o branch (`git push origin feature/funcionalidade-incrivel`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 👥 Autores

- Equipe de Desenvolvimento OBECI

## 🆘 Suporte

Para suporte, entre em contato com a equipe de desenvolvimento ou abra uma issue no repositório.