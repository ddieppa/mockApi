Create folder for project
```sh
md mockApi
```

Get into the recently created folder
```sh
cd mockApi
```

Generate app
```sh
yarn init -y
```

Add `json-server` dependency
```sh
yarn add json-server
```

Add the mock data `db.json` file
```sh
code .
```

Create `scripts` section in the `package.json` file
```json
"scripts": {
  "start": "json-server --watch db.json -p 5000"
}
```

Run the script created

```sh
yarn start
```

Add `typescript`
```sh
yarn add typescript
```

And the `json-server` types for better `typescript` support
```sh
yarn add -D @types/json-server
```

Generate the `tsconfig.json` file
```sh
npx -p typescript tsc --init
```

Create `server.ts` file
```ts
import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
```

Modify the `start` script command to
```sh
npx ts-node server.ts
```
