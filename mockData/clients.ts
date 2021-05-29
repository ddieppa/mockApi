import { Client } from "../models/client";

import * as faker from "faker";

export function generateClients(count: number): Client[] {
  const clients: Array<Client> = [];

  for (let index = 0; index < count; index++) {
    const client: Client = generateClient(index);
    clients.push(client);
  }
  return clients;
}

export function generateClient(id: number) : Client {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const client: Client = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    phone: faker.phone.phoneNumber(),
    instagram: faker.internet.userName(firstName, lastName),
    firstBuy: faker.date.recent(),
    created: faker.date.recent(),
    note: faker.lorem.sentence(50),
    email: faker.internet.email(firstName, lastName),
    image: faker.internet.avatar(),
  };
  return client;
}

export const clients: Client[] = [
  {
    id: 1,
    firstName: "Jerrod",
    lastName: "Bergnaum",
    phone: "(365) 927-1142 x7851",
    instagram: "JerrodB",
    firstBuy: new Date(
      "Sun May 23 2021 18:47:53 GMT-0400 (Eastern Daylight Time)"
    ),
    created: new Date(
      "Sun May 23 2021 16:30:11 GMT-0400 (Eastern Daylight Time)"
    ),
    note: "this is a new customer",
    email: "Margarete.Christiansen60@yahoo.com",
    image: "http://placeimg.com/640/480/people",
  },
  {
    id: 6,
    firstName: "Lucy",
    lastName: "Franecki",
    phone: "1-201-457-9658",
    instagram: "LucyF",
    firstBuy: new Date(
      "Sun May 23 2021 20:25:56 GMT-0400 (Eastern Daylight Time)"
    ),
    created: new Date(
      "Sat May 22 2021 21:05:46 GMT-0400 (Eastern Daylight Time)"
    ),
    note: "this is a new customer",
    email: "Barry30@hotmail.com",
    image: "http://placeimg.com/640/480/people",
  },
];



