# 🐾 Pets API

A Pets API é uma aplicação RESTful desenvolvida para gerenciar informações sobre animais de estimação. Ideal para sistemas de adoção, clínicas veterinárias ou qualquer projeto que envolva cadastro de pets.

---
## Documentação (POSTMAN)

https://documenter.getpostman.com/view/48376128/2sB3QJPWts

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- CORS
- Postman (para testes)
- VS Code

---

## 🔗 Base URL

A API pode ser acessada via:

- Localhost: `http://localhost:3001`
- Produção: `https://api-pets-3nnt.onrender.com`

No Postman, utilize a variável de ambiente `{{base_url}}` para facilitar a troca entre ambientes.

---

## 📦 Endpoints

### `GET /pets`
Retorna todos os pets cadastrados.
 #### ✅ Exemplo de requisição
 
 GET https://api-pets-3nnt.onrender.com/pets/

- **Exemplo de resposta**:
  ```json
  {
    "ok": true,
    "message": "Pets listados com sucesso",
    "data": [
        {
            "id": "fb6b7764-1c16-4072-a520-4d00fc16232b",
            "nome": "Luna",
            "raca": "Golden",
            "idade": 3,
            "nomeTutor": "Carlos"
        },
        {
            "id": "e05d028e-174d-4177-9d04-d78e1f4e59e4",
            "nome": "Mimi",
            "raca": "Persa",
            "idade": 2,
            "nomeTutor": "Fernanda"
        },
        {
            "id": "51c3d61d-b7d0-420c-9a72-5833a8413ff1",
            "nome": "Thor",
            "raca": "Bulldog",
            "idade": 4,
            "nomeTutor": "João"
        }
    ]
  }

---

### 'POST /pets'
 Adiciona um novo pet ao sistema.
📌 Campos obrigatórios (JSON)

- nome (string): Nome do pet

- raca (string): Raça do pet

- idade (number): Idade do pet

- nomeTutor (string): Nome do tutor

  **Exemplo de body (JSON)**:
  ```json
  {
  "nome": "Bibi",
  "raca": "Daschund",
  "idade": 14,
  "nomeTutor": "Vilson"
  }

---

### 'GET /pets/:id'
 Retorna os dados de um pet específico.

🔑 Parâmetros de URL

- id (string): ID do pet

 ✅ **Exemplo de requisição**:
  
 GET https://api-pets-3nnt.onrender.com/pets/5434290a-4261-4ce3-a38c-46d23ccbab66

---


