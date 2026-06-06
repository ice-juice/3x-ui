# Security Settings

Security Settings manages administrator credentials, two-factor authentication, and API tokens for scripts, bots, remote panels, and automation.

## Purpose

- Change the administrator username and password.
- Enable or disable two-factor authentication.
- Create, enable, disable, and delete API tokens.
- Separate human login security from programmatic access.

## Key Settings

| Setting | Purpose |
| --- | --- |
| Current username / password | Confirms the existing administrator identity before changing credentials. |
| New username / password | Replaces administrator credentials. |
| `twoFactorEnable` | Requires a second factor for administrator login and sensitive updates. |
| API Token name | Human-readable label for each integration or automation. |
| API Token status | Allows temporary disablement without deleting the token. |

## Recommended Practices

- Replace default credentials and avoid predictable administrator names.
- Enable two-factor authentication for any public panel.
- Create one token per integration so revocation is targeted.
- Use clear token names such as `backup-bot`, `central-panel`, or `node-sync`.
- Disable a token first when troubleshooting; delete it only after confirming it is unused.

## Risks and Notes

- After administrator credentials change, the UI logs out and redirects to the login entrypoint.
- When two-factor authentication is enabled, credential updates require additional confirmation.
- Newly created API tokens are shown only once in plaintext. Store them immediately.
- Disabling or deleting a token breaks every caller that depends on it right away.
