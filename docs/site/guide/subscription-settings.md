# Subscription Settings

Subscription Settings controls the dedicated subscription service, published URLs, metadata, and optional client-facing routing hints.

## Purpose

- Enable standard, JSON, and Clash subscription outputs.
- Configure subscription listen address, domain, port, path, and full URI overrides.
- Control what traffic, expiry, title, support, profile, and announcement information clients receive.
- Configure whether supported clients receive routing hints.

## Key Settings

| Setting | Purpose |
| --- | --- |
| `subEnable` | Enables standard subscription output. |
| `subJsonEnable` | Enables JSON subscription output. |
| `subClashEnable` | Enables Clash subscription output. |
| `subListen` | Address the subscription service binds to. |
| `subDomain` | Domain used for subscription access. |
| `subPort` | Subscription service port. |
| `subPath` | Standard subscription path. |
| `subURI` | Full standard subscription URL override. |
| `subShowInfo` | Controls whether traffic and expiry info is exposed. |
| `remarkModel` | Defines how exported node remarks are assembled. |
| `subTitle`, `subSupportUrl`, `subProfileUrl`, `subAnnounce` | Metadata shown by compatible clients. |
| `subEnableRouting`, `subRoutingRules` | Optional routing rules sent to compatible clients. |
| `subCertFile`, `subKeyFile` | TLS certificate and key paths for subscription HTTPS. |
| `subUpdates` | Suggested client polling interval in minutes. |

## Recommended Practices

- Use non-default paths for standard, JSON, and Clash outputs.
- If a reverse proxy or CDN sits in front, publish explicit full URI values.
- Keep `remarkModel` stable so users can recognize nodes consistently.
- Fill title, support URL, profile URL, and announcement with user-safe public text.
- Enable routing injection only when you intentionally want panel-managed client rules.
- Keep `subUpdates` high enough to avoid unnecessary client polling.

## Risks and Notes

- Default subscription paths are easy to guess.
- Path normalization helps, but reverse-proxy route conflicts still need manual verification.
- JSON and Clash settings appear only when the corresponding output is enabled.
- Subscription responses can expose traffic, expiry, title, support, profile, update interval, and announcement metadata.
