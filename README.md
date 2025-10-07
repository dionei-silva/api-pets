# 🐾 Pets API

A Pets API é uma aplicação RESTful desenvolvida para gerenciar informações sobre animais de estimação. Ideal para sistemas de adoção, clínicas veterinárias ou qualquer projeto que envolva cadastro de pets.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- CORS
- Postman (para testes)
- VS Code

---

## 🔗 Base URL

A API pode ser acessada via:

- Desenvolvimento: `http://localhost:3001`
- HTTPS (alternativo): `https://localhost:7117`

No Postman, utilize a variável de ambiente `{{base_url}}` para facilitar a troca entre ambientes.

---

## 📦 Endpoints

### `GET /pets`
- Retorna todos os pets cadastrados.
- **Exemplo de resposta**:
  ```json
  [
    {
      "id": 1,
      "nome": "Rex",
      "tipo": "Cachorro",
      "idade": 3
    }
  ]
  POST /pets
Adiciona um novo pet.

Body:

json
{
  "nome": "Bidu",
  "tipo": "Cachorro",
  "idade": 4
}
PUT /pets/:id
Atualiza os dados de um pet.

Body:

json
{
  "nome": "Bidu",
  "tipo": "Cachorro",
  "idade": 5
}
DELETE /pets/:id
Remove um pet do sistema.

🔐 CORS
A API utiliza o middleware cors() para permitir requisições de diferentes origens. Certifique-se de usar:

js
import cors from 'cors';
app.use(cors());
🧪 Testes com Postman
Configure o ambiente pets com a variável:

Código
base_url = http://localhost:3001
Use {{base_url}}/pets nas requisições.

Certifique-se de que o ambiente está ativo no Postman.
