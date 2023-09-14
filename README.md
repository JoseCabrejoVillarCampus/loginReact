# LOGIN

En este miniproyecto vamos a crear un login con base de datos almacenada en mongoDB


## Configuracion package.json

En  unestro archivo package.json agragaremos la sigueiente configuracion *"start": "nodemon --quiet ./server/app.js"*, denrto de *scripts*

```js
{
  "name": "login",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "start": "nodemon --quiet ./server/app.js",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "class-transformer": "0.5.1",
    "class-validator": "0.14.0",
    "cookie-parser": "1.4.6",
    "dotenv": "16.3.1",
    "express": "4.18.2",
    "express-query-boolean": "2.0.0",
    "express-rate-limit": "6.8.1",
    "express-routes-versioning": "^1.0.1",
    "express-session": "1.17.3",
    "express-validator": "7.0.1",
    "jose": "4.14.4",
    "mongodb": "5.7.0",
    "morgan": "1.10.0",
    "nodemon": "3.0.1",
    "passport": "0.6.0",
    "passport-http-bearer": "1.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react-swc": "^3.3.2",
    "axios": "1.5.0",
    "dotenv": "16.3.1",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "express-rate-limit": "6.11.2",
    "jose": "4.14.6",
    "mongodb": "6.0.0",
    "react-router-dom": "6.15.0",
    "vite": "^4.4.5"
  }
}

```

## Procediminetos finales

Ahora instalaremos el resto de as dependencias uasando el comando:

```js
    npm install
```


Ahora, abriremos dos consolas para ejecutar dos comando diferentes

Primero:

```js
    npm run dev
```

Segundo:

```js
    npm run start
```

Asi deberia verse

<img src="./img/Screenshot from 2023-09-14 08-47-38.png">
<img src="./img/Screenshot from 2023-09-14 08-47-52.png">


Con esto nuestra configuracion inicial estaria lista :)