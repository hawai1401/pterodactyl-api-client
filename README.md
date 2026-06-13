# pterodactyl‑api‑client

Client API TypeScript pour l’**API Client & Application de Pterodactyl**.
Fournit une interface typée, modulaire et orientée classes pour consommer l’API du panel Pterodactyl (comptes, serveurs, localisations, nodes, nests, eggs, bases de données, websockets, etc.).

---

## Installation

```bash
npm install pterodactyl-api-client
```

---

## Importer et initialiser

### ESM

```js
import { PterodactylAPIClient } from 'pterodactyl-api-client';

const client = new PterodactylAPIClient({
  panelUrl: 'https://panel.example.com',
  apiKey: 'VOTRE_CLE_API',
  role: 'admin', // 'admin' ou 'user'
  cache: {
    users: 300000, // TTL cache pour les utilisateurs en ms
    servers: 60000, // TTL cache pour les serveurs
    // optionnel pour d'autres entités : nodes, locations, nests, eggs, etc.
  },
});
```

### CommonJS

```js
const { PterodactylAPIClient } = require('pterodactyl-api-client');

const client = new PterodactylAPIClient({
  panelUrl: 'https://panel.example.com',
  apiKey: 'VOTRE_CLE_API',
  role: 'admin',
});
```

---

## Utilisation : API Client (`role: 'user'` ou `'admin'`)

Disponible via la propriété `client.user`.

### Compte utilisateur

```js
const info = await client.user.account.fetch();
console.log(info.username);
```

### Gestion des clés API

```js
const keys = await client.user.account.apiKey.list();
console.log(keys.data);

const created = await client.user.account.apiKey.create({
  description: 'Bot',
});
```

### Serveurs Client

L'API client pour les serveurs est accessible via le gestionnaire `client.user.servers` (ClientServerManager).

```js
// Liste les serveurs
const servers = await client.user.servers.list();
const srv = servers.data[0];

// Récupère les détails d'un serveur
const detail = await client.user.servers.fetch(srv.identifier);
console.log(detail.name);
```

---

## Utilisation : API Application/Admin (`role: 'admin'`)

Disponible via la propriété `client.admin`. Cette API bénéficie d'un cache local personnalisable et de gestionnaires orientés classes.

### Gestionnaires disponibles

- `client.admin.users` (UserManager)
- `client.admin.servers` (ApplicationServerManager)
- `client.admin.locations` (LocationManager)
- `client.admin.nodes` (NodeManager)
- `client.admin.nests` (NestManager)

### Exemple d'utilisation

```js
// Récupérer et lister les utilisateurs côté admin
const paginatedUsers = await client.admin.users.list({
  page: 1,
  per_page: 10,
});

// Récupérer un serveur par son ID avec cache
const server = await client.admin.servers.fetch(1);
console.log(server.name);
```

### Utilisation de `resolve()`

La méthode synchrone `resolve` permet de récupérer instantanément une ressource à partir du cache local si elle est présente, ou de retourner une instance partielle (contenant uniquement l'ID) si elle n'est pas en cache. Cela évite des requêtes réseau inutiles.

```js
// Récupère le serveur depuis le cache ou crée une instance légère (côté client)
const server = client.user.servers.resolve('e1a2b3c4');

// Ou côté admin/application
const adminServer = client.admin.servers.resolve(12);

// Vous pouvez ensuite chaîner directement des appels d'API associés à cette instance
await server.databases.list();
```

---

## WebSockets (serveur client)

Pterodactyl offre un endpoint WebSocket pour recevoir :

- console output
- stats (CPU, RAM, uptime, etc.)
- status
- autres événements temps réel

Pour se connecter :

```js
await client.user.servers.resolve(serverId).console.websocket.connect({
  onStats: (stats) => {
    console.log(stats);
  },
  onConsoleOutput: (line) => {
    console.log(line);
  },
});
```

---

## Erreurs & exceptions

Les erreurs retournées par l’API sont encapsulées dans une classe d’erreur dédiée, `ApiError`.

```js
import { ApiError } from 'pterodactyl-api-client';

try {
  const info = await client.user.account.fetch();
} catch (e) {
  if (e instanceof ApiError) {
    console.error('HTTP Status :', e.status);
    console.error('Message :', e.message);
    console.error('Endpoint :', e.path);
    console.error('Contenu de la requête :', e?.body ?? 'Aucun');
  }
}
```
