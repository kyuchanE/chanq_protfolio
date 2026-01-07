# Project Structure

## /src
Application source code root.

### /src/routes
- Resource-specific routing definitions.
- Delegates requests to controllers.
- Example: `user.routes.js`, `product.routes.js`, `index.js`

### /src/controllers
- Request/response handling logic.
- Resource-specific handlers.
- Example: `user.controller.js`, `product.controller.js`

### /src/middlewares
- Common middlewares (error handling, logging, auth, etc.).
- Example: `error.middleware.js`, `logger.middleware.js`, `auth.middleware.js`

### /src/config
- Environment configuration and initialization.
- Example: `env.js`, `db.js`, `constants.js`
