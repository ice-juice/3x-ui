# Outbounds

Outbounds define how Xray sends traffic after routing has selected an exit. The first outbound is also the default path when no routing rule matches.

## Purpose

- Manage proxy, direct, block, DNS, and chained outbounds.
- Test one outbound or all outbounds.
- Reset outbound traffic counters.
- Import supported outbound share links.
- Use WARP or NordVPN helpers to generate outbound templates.

## Key Fields

| Field | Purpose |
| --- | --- |
| `tag` | Unique name referenced by routing, balancers, and chains. |
| `protocol` | Outbound protocol, such as freedom, blackhole, socks, VLESS, VMess, Trojan, or WireGuard. |
| `sendThrough` | Local source address used for outbound traffic. |
| `settings` | Protocol-specific settings. |
| `streamSettings` | Transport, TLS, REALITY, sockopt, and FinalMask settings. |
| `mux` | Multiplexing settings when supported. |
| `proxySettings` | Chained outbound dependency. |
| `settings.flow` | Flow value for compatible protocols. |

## Recommended Practices

- Keep every `tag` unique and meaningful.
- Put the intended default outbound first.
- Before renaming or deleting an outbound, check routing rules, balancers, and chained outbounds.
- Test complex outbound chains with `allOutbounds` context so dependencies can be resolved.
- Treat WARP and NordVPN helpers as template generators that modify the stored configuration.

## Troubleshooting

| Symptom | First checks |
| --- | --- |
| One outbound test fails | Check address, port, credentials, SNI, fingerprint, transport, and security settings. |
| Chained outbound fails | Confirm every dependent outbound still exists and tags are unchanged. |
| UI saves but traffic fails | Restart Xray and inspect the latest Xray result log. |
| UDP-oriented outbound tests oddly | Some outbound types are tested through safer HTTP probe behavior. |
