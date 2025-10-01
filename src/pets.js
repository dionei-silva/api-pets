import {randomUUID} from 'crypto'
export const pets = [
      {
        id: randomUUID(),
        nome: "Luna",
        raca: "Golden",
        idade: 3,
        nomeTutor: "Carlos"
      },
      {
        id: randomUUID(),
        nome: "Mimi",
        raca: "Persa",
        idade: 2,
        nomeTutor: "Fernanda"
      },
      {
        id: randomUUID(),
        nome: "Thor",
        raca: "Bulldog",
        idade: 4,
        nomeTutor: "João"
      }
    ];