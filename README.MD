# F1 Minimal API (Node + TypeScript + Fastify)

## A minimal API demonstrating a small backend using Fastify and TypeScript.

### Main files
- Server implementation: `src/server.ts`  
- Example data: `teams` and `drivers` in `src/server.ts`  
- Scripts/config: `package.json`  
- Environment file: `.env`  
- TypeScript config: `tsconfig.json`

### Prerequisites
- Node.js v20+ and npm v10+

### Installation
```bash
npm install

```

### Running in development

Use the development script (loads variables from .env):
```bash
npm run start:dev
```

### Useful scripts (in `package.json`):

`npm run start:dev` — run TypeScript directly with tsx and load .env
`npm run start:watch` — run with watch mode
`npm run dist` — bundle/compile with tsup
`npm run start:dist` — build and run the production build

### Endpoints

`GET /teams` — returns the list of teams (from `teams` in `src/server.ts`)
`GET /drivers` — returns the list of drivers (from `drivers` in `src/server.ts`)
`GET /drivers/:id` — returns a driver by id

Examples:
```bash
# list teams
curl http://localhost:3333/teams

# list drivers
curl http://localhost:3333/drivers

# get driver with id 2
curl http://localhost:3333/drivers/2
```

### Port

Default port is set in .env (e.g. PORT=3333)

### Notes

- The main server and routes are implemented in src/server.ts.
This project is intentionally lightweight and intended as a boilerplate starting point.

### License

MIT (or choose your preferred license)

### Quick links

src/server.ts — server and routes
package.json — scripts and dependencies
.env — runtime port and env vars
tsconfig.json — TypeScript config
