# 🐾 Pets API

A **Pets API** é uma aplicação RESTful desenvolvida para gerenciar informações sobre animais de estimação. Ideal para sistemas de adoção, clínicas veterinárias ou qualquer projeto que envolva cadastro de pets.

---

## 📚 Documentação Interativa

🔗 [Acesse a documentação no Postman](https://documenter.getpostman.com/view/48376128/2sB3QJPWts)

---

## 🚀 Tecnologias Utilizadas

-  Node.js  
-  Express  
-  CORS  
-  Postman (para testes)  
-  VS Code  
-  Middleware de validação  
-  Render (Hospedagem)

---

## 🔗 Base URL

A API pode ser acessada via:

- 🧪 Localhost: `http://localhost:3001`  
- 🌐 Produção: `https://api-pets-3nnt.onrender.com`

> No Postman, utilize a variável de ambiente `{{base_url}}` para facilitar a troca entre ambientes.

---

## 📦 Endpoints

### `GET /pets`  
🔍 Retorna todos os pets cadastrados.

**✅ Exemplo de requisição:**

GET https://api-pets-3nnt.onrender.com/pets/

### `POST /pets`  
➕ Adiciona um novo pet ao sistema.

**📌 Campos obrigatórios (JSON):**
- `nome` (string): Nome do pet  
- `raca` (string): Raça do pet  
- `idade` (number): Idade do pet  
- `nomeTutor` (string): Nome do tutor

**📦 Exemplo de body (JSON):**
```json
{
  "nome": "Bibi",
  "raca": "Daschund",
  "idade": 14,
  "nomeTutor": "Vilson"
}
```

---

### `GET /pets/:id`
🔍 Retorna os dados de um pet específico.

🔑 Parâmetros de URL

- `id` (string): ID do pet

 ✅ **Exemplo de requisição**:
  
 GET https://api-pets-3nnt.onrender.com/pets/5434290a-4261-4ce3-a38c-46d23ccbab66

---

### `PUT /pets/:id`
✏️ Atualiza os dados de um pet existente.

🔑 Parâmetros de URL

- `id` (string): ID do pet a ser atualizado.

-**📌 Campos obrigatórios (JSON):**
- `nome` (string): Nome do pet  
- `raca` (string): Raça do pet  
- `idade` (number): Idade do pet  
- `nomeTutor` (string): Nome do tutor

📦 Exemplo de body (JSON)
```json
   {
     "nome": "Rudolf",
     "raca": "SRD",
     "idade": 10,
     "nomeTutor": "Felipe"
   }
```

---

### `DELETE /pets/:id`
🗑️ Remove um pet do sistema.

🔑 Parâmetros de URL

- `id` (string): ID do pet a ser deletado.

✅ Exemplo de requisição

DELETE https://api-pets-3nnt.onrender.com/pets/5434290a-4261-4ce3-a38c-46d23ccbab66

---
## ✅ Validações

Todas as rotas de POST e PUT exigem que todos os campos obrigatórios estejam preenchidos. Caso contrário, a requisição será rejeitada pelo middleware de validação com uma mensagem de erro apropriada.

---

👨‍💻 Autor

Desenvolvido por Dionei 
- 🧠 Projeto criado para fins de estudo e prática com APIs REST.



