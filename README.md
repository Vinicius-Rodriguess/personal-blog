# 📝 **Back-End para Blog Pessoal**

Este projeto é a API back-end para um sistema de blog pessoal. Desenvolvido com **NestJS** e **TypeScript**, ele fornece endpoints seguros e escaláveis para gerenciamento de postagens, temas e usuários.

---

## 🚀 **Funcionalidades**

### **Back-End**
- API REST para criação, edição, exclusão e listagem de postagens.
- Autenticação e autorização com **JWT** e **AuthGuard**.
- Segurança aprimorada com **bcrypt** para hash de senhas.
- Organização de postagens por temas.
- Gerenciamento de usuários e permissões de acesso.
- Documentação da API com **Swagger**.

---

## 🛠️ **Tecnologias Utilizadas**

- **NestJS**: Framework TypeScript para desenvolvimento escalável.
- **TypeScript**: Tipagem estática para maior segurança no código.
- **TypeORM**: ORM para interagir com o banco de dados.
- **PostgreSQL/MySQL**: Banco de dados relacional para armazenamento de informações.
- **JWT (JSON Web Token)**: Autenticação segura.
- **AuthGuard e Passport**: Mecanismo de proteção de rotas.
- **Bcrypt**: Hash de senhas para maior segurança.
- **Swagger**: Documentação interativa da API.

---

## 🔧 **Como o Sistema Funciona**

1. **Cadastro/Login de Usuários**: Os usuários podem se registrar e autenticar via JWT.
2. **Gerenciamento de Postagens**: Endpoints para criação, atualização, exclusão e listagem de postagens.
3. **Organização por Temas**: Postagens podem ser categorizadas por temas específicos.
4. **Gerenciamento de Usuários**: Endpoints protegidos para administração de contas.
5. **Segurança**: As senhas são protegidas com **bcrypt**, e a autenticação utiliza **JWT** com **AuthGuard** para controle de acesso.
6. **Persistência de Dados**: Todas as informações são armazenadas no banco de dados.
7. **Documentação com Swagger**: API documentada para facilitar a utilização e integração.

---

## 📋 **Requisitos**

- **Node.js** (v14 ou superior).
- **Banco de dados** (PostgreSQL ou MySQL).

---

## 🔧 **Como Configurar o Projeto**

1. Clone este repositório:
   ```bash
   git clone https://github.com/Vinicius-Rodriguess/blog-backend.git
   cd personal-blog
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`.

4. Execute as migrações do banco de dados:
   ```bash
   npm run typeorm migration:run
   ```

5. Inicie o servidor:
   ```bash
   npm run start
   ```

---

## 🖥️ **Exemplo de Uso**

1. **Autenticação**: Envie um POST para `/auth/login` com email e senha.
2. **Gerenciamento de Postagens**: Utilize os endpoints `/postagens` para criar, listar e excluir postagens.
3. **Temas**: Crie e gerencie temas utilizando `/temas`.
4. **Proteção de Rotas**: Algumas rotas exigem um token JWT válido no cabeçalho Authorization.
5. **Documentação da API**: Acesse a documentação interativa via Swagger em `/api`.

---

## 📌 **Limitações**

- Requer configuração de banco de dados.
- O servidor deve estar rodando para o funcionamento da API.

---

## ✅ **Melhorias Futuras**

- Implementação de comentários nas postagens.
- Melhorias na interface de administração.
- Adição de suporte para imagens em postagens.

---

## 👨‍💻 **Autor**

**Vinicius Rodrigues**

- GitHub: [Vinicius-Rodriguess](https://github.com/Vinicius-Rodriguess)
- Email: rodrigues.vini.2004@gmail.com
