# Reality Inbound Configuration

::: tip Recommended baseline
Use `VLESS + RAW/TCP + REALITY + xtls-rprx-vision` as the baseline combination.
:::

A complete setup means choosing fields intentionally, not enabling every advanced switch.

## Recommended Values

| Tab | Recommended value | Effect |
| --- | --- | --- |
| Basic | `vless`, empty listen address, preferably port `443` | Listens on all IP addresses; `443` looks closer to ordinary HTTPS. |
| Protocol | `decryption: none`, `encryption: none` | Best compatibility. VLESS Encryption requires matching client support. |
| Transport | `RAW`, Proxy Protocol off, HTTP camouflage off | Reality already mimics TLS; extra camouflage increases compatibility cost. |
| Security | `Reality`, uTLS `chrome` | Common client TLS fingerprint, usually exported as `fp=chrome`. |
| Sniffing | Off by default | Turn on only when server-side routing needs detected domains. |
| Advanced JSON | Review only | Avoid hand-editing unfamiliar fields; Xray and 3x-ui may use compatibility keys. |

## Basic Configuration

| Field | How to fill | Impact |
| --- | --- | --- |
| Enable | On for active service, off to keep but disable | Disabled inbounds remain saved but do not accept connections. |
| Remark | Use region, line, protocol, and port, e.g. `US-Residential-Reality-443` | Only affects panel recognition and operations. |
| Protocol | `vless` | Reality commonly pairs with VLESS; this guide focuses on that combination. |
| Listen | Empty for all IPs, `127.0.0.1` for local reverse proxy, Unix socket path when needed | Unix socket listeners should use port `0`. |
| Port | Prefer `443`, or another open port when occupied | High ports work but look less like ordinary HTTPS. |
| Total traffic | Usually GB in the 3x-ui UI; `0` means unlimited | Panel quota control, not a protocol-level security field. |
| Traffic reset | Never for unlimited plans; monthly or weekly for quota plans | Controls quota reset cadence. |
| Expiry time | Empty or `0` for never expires | Panel-side lifecycle control. |

## Protocol

| Field | Recommendation | What changes when enabled |
| --- | --- | --- |
| `decryption` | `none` | VLESS requires this explicit value when decryption is disabled. |
| `encryption` | `none` for ordinary Reality | Non-`none` values require client-side VLESS Encryption support and matching parameters. |
| X25519 Auth | Leave off unless intentionally using VLESS Encryption | This is not the Reality X25519 key pair; clients must support and match it. |
| ML-KEM-768 Auth | Leave off for broad compatibility | Adds post-quantum-oriented VLESS Encryption behavior with narrower client support. |
| Vision testseed | Keep `900 / 500 / 900 / 256` | Saved as `settings.testseed`; applies only to `flow=xtls-rprx-vision`. |
| Fallbacks | Empty for ordinary Reality | Traditional VLESS fallback is more common for `TCP+TLS`; Reality uses `target` for unauthenticated traffic behavior. |

## Transport

| Field | Recommendation | Impact |
| --- | --- | --- |
| Network | `RAW` | Xray's newer docs call this `raw`; 3x-ui may still store compatible `network: "tcp"` and `tcpSettings`. |
| Proxy Protocol | Off | Enable only behind HAProxy, Nginx, or a load balancer that sends PROXY protocol. Direct clients will fail if they do not send it. |
| HTTP camouflage | Off | If enabled, clients must use matching HTTP headers. |
| External proxy | Use only for CDN, port forwarding, mirror entrypoints, or alternate publish addresses | This is a 3x-ui panel extension for share/subscription generation, not an Xray inbound listener field. |
| Sockopt | Off for normal nodes | Low-level socket tuning; many fields depend on Linux kernel, routing, or transparent proxy setup. |
| TCP Masks / FinalMask | Off by default | Adds a final masking layer after TLS/Reality. Clients must support matching `fm` parameters and stability may vary. |

## Reality Security

| Field | Recommendation | Impact |
| --- | --- | --- |
| `show` | `false` | Debug output only; use for troubleshooting. |
| `xver` | `0` | Enables PROXY protocol toward fallback targets only when the target service understands it. |
| uTLS fingerprint | `chrome` | Exported in client links as `fp=chrome`. |
| Target | A real reachable HTTPS host such as `example.com:443` | This is the camouflage handshake target, not your inbound address. |
| SNI / `serverNames` | Certificate names accepted by the target, no port | Reality does not support wildcards here. |
| `maxTimeDiff` / `maxTimediff` | `0` unless strict clock validation is required | Non-zero values reject clients with excessive clock drift. |
| Client version bounds | Empty by default | Use only when forcing minimum or maximum Xray client versions. |
| Short IDs | Required, even-length hex strings up to 16 chars | Generate multiple non-empty values. Add an empty `sid` only when intentionally allowing it. |
| SpiderX | `/` or per-client paths | Initial crawl path used by Reality. |
| Public key | Generated from the server private key | Goes into client links. Xray's newer client-side naming may call this `password`; 3x-ui stores `publicKey`. |
| Private key | Server only | Never publish it. |
| ML-DSA-65 Seed / Verify | Empty for ordinary deployments | Enables post-quantum signature verification when both server and clients support it. |

## Sniffing

| Field | Impact |
| --- | --- |
| `enabled` | Xray attempts to infer the destination domain from HTTP, TLS, QUIC, or FakeDNS metadata. |
| `destOverride` | Protocols whose sniffed destination can replace the original destination. |
| `metadataOnly` | Uses only connection metadata; deep sniffing other than FakeDNS will not work. |
| `routeOnly` | Uses sniffed domains for routing without rewriting the real destination. |
| `ipsExcluded` | Excludes matching IPs or CIDRs from destination rewrite. |
| `domainsExcluded` | Excludes matching domains; useful for push services, smart devices, games, or voice apps. |

## Advanced JSON Example

```json
{
  "listen": "",
  "port": 443,
  "protocol": "vless",
  "settings": {
    "clients": [
      {
        "id": "<uuid>",
        "email": "user1",
        "flow": "xtls-rprx-vision",
        "enable": true
      }
    ],
    "decryption": "none",
    "encryption": "none",
    "fallbacks": [],
    "testseed": [900, 500, 900, 256]
  },
  "streamSettings": {
    "network": "tcp",
    "security": "reality",
    "tcpSettings": {
      "acceptProxyProtocol": false,
      "header": { "type": "none" }
    },
    "realitySettings": {
      "show": false,
      "xver": 0,
      "target": "example.com:443",
      "serverNames": ["example.com"],
      "privateKey": "<server-private-key>",
      "minClientVer": "",
      "maxClientVer": "",
      "maxTimediff": 0,
      "shortIds": ["cf15", "d6a56e05a1aac9"],
      "mldsa65Seed": "",
      "settings": {
        "publicKey": "<server-public-key>",
        "fingerprint": "chrome",
        "serverName": "",
        "spiderX": "/",
        "mldsa65Verify": ""
      }
    }
  },
  "sniffing": {
    "enabled": false,
    "destOverride": ["http", "tls", "quic", "fakedns"],
    "metadataOnly": false,
    "routeOnly": false,
    "ipsExcluded": [],
    "domainsExcluded": []
  }
}
```

## References

- [Xray InboundObject](https://xtls.github.io/en/config/inbound.html)
- [Xray VLESS inbound](https://xtls.github.io/en/config/inbounds/vless.html)
- [Xray Transport / StreamSettings](https://xtls.github.io/en/config/transport.html)
- [Xray REALITY](https://xtls.github.io/en/config/transports/reality.html)
- [Xray RAW](https://xtls.github.io/en/config/transports/raw.html)
- [Xray Fallback](https://xtls.github.io/en/config/features/fallback.html)
- [Xray Sockopt](https://xtls.github.io/en/config/transports/sockopt.html)
- [Xray FinalMask](https://xtls.github.io/en/config/transports/finalmask.html)
