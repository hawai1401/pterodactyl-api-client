# pterodactyl‑api‑client

Client API TypeScript pour l’**API client de Pterodactyl**.
Fournit une interface typée, modulaire et orientée classes pour consommer l’API du panel Pterodactyl (comptes, serveurs, websockets, etc.).

**API client** = endpoints disponibles avec une _Client API Key_ générée dans le panel utilisateur.

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
  baseUrl: 'https://panel.example.com',
  apiKey: 'VOTRE_CLE_API',
});
```

### CommonJS

```js
const { PterodactylAPIClient } = require('pterodactyl-api-client');

const client = new PterodactylAPIClient({
  baseUrl: 'https://panel.example.com',
  apiKey: 'VOTRE_CLE_API',
});
```

---

## Utilisation basique

### Compte utilisateur

```js
const info = await client.user.account.info();
console.log(info.attributes.username);
```

### Gestion des clés API

```js
const keys = await client.user.account.apiKey.list();
console.log(keys.data);

const created = await client.user.account.apiKey.create({
  description: 'Bot',
});
```

### Serveurs

```js
const servers = await client.user.servers.list();
const srv = servers.data[0];

// Récupère les détails
const detail = await client.user.servers.info(srv.attributes.identifier);
```

### Activité d’un serveur

```js
const activity = await client.user.servers.activity.list({
  page: 1,
  per_page: 50,
});
```

---

## WebSockets (serveur)

Pterodactyl offre un endpoint WebSocket pour recevoir :

- console output
- stats (CPU, RAM, uptime, etc.)
- status
- autres événements temps réel

Pour se connecter :

```js
await client.user.servers.websocket.connect(serverId, {
  onStats: (stats) => {
    console.log(stats);
  },
  onConsoleOutput: (line) => {
    console.log(line);
  },
});
```

Les tokens WS sont temporaires (≈ 10 min), il faut gérer les reconnexions.

---

## Erreurs & exceptions

Les erreurs retournées par l’API sont encapsulées dans une classe d’erreur dédiée, permettant de distinguer :

- erreurs réseau
- erreurs de validation
- erreurs API avec statut HTTP

```js
import { PterodactylAPIError } from 'pterodactyl-api-client';

try {
  const activity = await client.user.servers.activity.list({
    page: 1,
    per_page: 50,
  });
} catch (e) {
  if (e instanceof PterodactylAPIError) {
    console.error('HTTP Status :', e.status);
    console.error('Message :', e.message);
    console.error('Endpoint :', e.path);
    console.error('Contenu de la requête :', e?.body ?? 'Aucun');
  }
}
```
