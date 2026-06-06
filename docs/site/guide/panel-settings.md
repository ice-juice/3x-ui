# General

The General page under Panel Settings controls how the 3x-ui panel itself is exposed and how panel-wide defaults behave.

## Purpose

- Configure panel listening address, domain, port, and base path.
- Set session lifetime, trusted reverse proxies, language, time zone, and pagination.
- Configure panel HTTPS certificate paths.
- Control external traffic callbacks and Xray restart behavior after client changes.

## Key Settings

| Setting | Purpose |
| --- | --- |
| `webListen` | Address the panel binds to. Empty or all-address binding exposes it on every interface. |
| `webDomain` | External domain used when the panel builds access URLs. |
| `webPort` | Panel listening port. The common default is `2053`. |
| `webBasePath` | URL base path for the panel. Moving away from `/` reduces trivial scans. |
| `sessionMaxAge` | Admin session lifetime. |
| `trustedProxyCIDRs` | Reverse proxy ranges trusted to forward real client information. |
| `panelProxy` | Outbound proxy used by the panel for external requests. |
| `pageSize` | Default row count for list views. |
| `webCertFile` / `webKeyFile` | Certificate and private key paths for panel HTTPS. |
| `timeLocation` | Time zone used by panel display and scheduling. |

## Recommended Practices

- Change `webBasePath` from the default `/` before exposing the panel publicly.
- If the panel is behind Nginx, Caddy, or a CDN, keep `trustedProxyCIDRs` scoped to the actual proxy chain.
- When enabling HTTPS, set both certificate and key paths and verify the files exist on the host.
- Keep `pageSize` moderate so large lists remain responsive.
- Use `panelProxy` only when the panel truly needs a controlled outbound proxy.

## Risks and Notes

- Serving the panel over HTTP, keeping default port `2053`, or keeping base path `/` increases scan exposure.
- Changing domain, port, base path, or certificate settings can make the old access URL stop working immediately after restart.
- Overly broad `trustedProxyCIDRs` weakens source-IP trust boundaries and can affect auditing and link generation.
- Path fields are normalized by the UI, but the final URL should still be checked manually.
