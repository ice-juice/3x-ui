# API Docs

The API Docs page is a Swagger UI wrapper around the panel's embedded OpenAPI description. Use it to inspect request and response shapes, verify authentication expectations, and test endpoints against the current server build.

## Purpose

- Browse the API exposed by the current panel version.
- Review grouped endpoints, parameters, examples, and common error shapes.
- Test requests directly from an authenticated browser session.
- Use the spec as an integration reference for scripts, bots, central panels, and operational tools.

## Authentication

| Method | Use case |
| --- | --- |
| Session cookie | Browser-based panel use and Swagger UI tests. |
| `X-CSRF-Token` | Unsafe browser-session requests that require CSRF protection. |
| `Authorization: Bearer <token>` | Programmatic scripts, bots, and remote integrations. |

## Important Endpoint Areas

| Area | Examples |
| --- | --- |
| OpenAPI | `GET /panel/api/openapi.json` |
| Server | Status, logs, config JSON, Xray version, restart actions. |
| Xray Settings | Read and update the stored Xray template. |
| Inbounds | Create, update, delete, import, export, and reset inbound data. |
| Clients | Manage subscribers, quotas, expiry, groups, and subscriptions. |
| Nodes | Register and probe remote panel nodes. |
| Settings | Read and update panel, security, Telegram, and subscription settings. |
| API Tokens | Create and manage Bearer tokens. |
| WebSocket | Authenticated real-time panel updates. |

## Notes

- The page shell is Swagger UI; the actual specification comes from `/panel/api/openapi.json`.
- Request body formats vary by endpoint: JSON, form fields, and path parameters are all used.
- Destructive endpoints include Xray restart, Xray stop, traffic reset, object deletion, and database import.
- WebSocket updates rely on authenticated session behavior and should not be treated like ordinary Bearer-token REST calls.

## Troubleshooting

| Symptom | First checks |
| --- | --- |
| Page opens but no operations appear | Check whether `/panel/api/openapi.json` is reachable. |
| Try-it-out returns `401` | The browser session is missing or expired. |
| Browser request fails with CSRF error | Refresh or reacquire the current `X-CSRF-Token`. |
| Script call fails | Confirm whether the endpoint expects session flow or Bearer-token flow. |
| Xray restart succeeds but traffic is broken | Inspect Xray result logs and the assembled runtime config. |
