# Reality Inbound

Reality Inbound is the default deployment scenario for a public 3x-ui node that serves VLESS users directly over one public entry port.

::: tip Baseline
Start with `VLESS + RAW/TCP + REALITY + xtls-rprx-vision`. Prove that one client works before enabling extra routing, sniffing, masking, or publish-address overrides.
:::

## When to Use This Scenario

Use this page when:

- you have one server with a public IPv4 or IPv6 address;
- clients should connect directly to Xray without a reverse proxy first;
- you want a clean Reality baseline before adding routing or subscription customizations;
- you need a practical field-by-field checklist for the 3x-ui inbound form.

Choose another scenario when the panel and traffic node are different machines, unmatched traffic must land on a local web service, or the address published to clients is different from the actual listener address.

## Topology

```text
Client -> Public IP:443 -> 3x-ui / Xray Reality inbound -> authenticated VLESS user
```

Unauthenticated or invalid Reality traffic follows the Reality target behavior, so the target must be a real HTTPS service selected intentionally.

## Setup Path in 3x-ui

1. Open **Inbounds** and create a new inbound.
2. Select **VLESS**.
3. Use port `443` when possible.
4. Select **RAW** as the transport.
5. Select **Reality** as the security type.
6. Generate the Reality key pair.
7. Set a real reachable HTTPS target.
8. Fill `serverNames` with names accepted by that target certificate.
9. Generate one or more `shortIds`.
10. Add clients and use `xtls-rprx-vision` for the client flow.
11. Save the inbound.
12. Copy one client URL and test it before changing advanced options.

## Recommended Values

| Tab | Recommended value | Effect |
| --- | --- | --- |
| Basic | `vless`, empty listen address, preferably port `443` | Listens on all IP addresses; `443` resembles ordinary HTTPS. |
| Protocol | `decryption: none`, `encryption: none` | Best compatibility. VLESS Encryption requires matching client support. |
| Transport | `RAW`, Proxy Protocol off, HTTP camouflage off | Reality already mimics TLS; extra camouflage adds compatibility cost. |
| Security | `Reality`, uTLS `chrome` | Common client TLS fingerprint, usually exported as `fp=chrome`. |
| Sniffing | Off by default | Turn on only when server-side routing needs detected domains. |
| Advanced JSON | Review only | Avoid hand-editing unfamiliar fields; Xray and 3x-ui may use compatibility keys. |

## Basic Configuration

| Field | How to fill | Impact |
| --- | --- | --- |
| Enable | On for active service, off to keep but disable | Disabled inbounds remain saved but do not accept connections. |
| Remark | Include region, line, protocol, and port, such as `US-Reality-443` | Only affects panel recognition and operations. |
| Protocol | `vless` | Reality commonly pairs with VLESS; this scenario assumes that combination. |
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
| X25519 Auth | Leave off unless intentionally using VLESS Encryption | This is not the Reality key pair; clients must support and match it. |
| ML-KEM-768 Auth | Leave off for broad compatibility | Adds post-quantum-oriented VLESS Encryption behavior with narrower client support. |
| Vision testseed | Keep `900 / 500 / 900 / 256` | Saved as `settings.testseed`; applies only to `flow=xtls-rprx-vision`. |
| Fallbacks | Empty for ordinary Reality | Traditional VLESS fallback is mainly a `TCP+TLS` pattern; Reality uses `target` for invalid traffic behavior. |

## Transport

| Field | Recommendation | Impact |
| --- | --- | --- |
| Network | `RAW` | Xray's newer docs call this `raw`; 3x-ui may still store compatible `network: "tcp"` and `tcpSettings`. |
| Proxy Protocol | Off | Enable only behind a load balancer that sends PROXY protocol. Direct clients fail if they do not send it. |
| HTTP camouflage | Off | If enabled, clients must use matching HTTP headers. |
| External Proxy | Off for direct Reality; use only when the published address differs from the listener | This is a 3x-ui extension for share/subscription generation, not an Xray listener field. |
| Sockopt | Off for normal nodes | Low-level socket tuning; many fields depend on Linux kernel, routing, or transparent proxy setup. |
| TCP Masks / FinalMask | Off by default | Adds a final masking layer after TLS/Reality. Clients must support matching `fm` parameters. |

## Reality Security

| Field | Recommendation | Impact |
| --- | --- | --- |
| `show` | `false` | Debug output only; use for troubleshooting. |
| `xver` | `0` | Enables PROXY protocol toward fallback targets only when the target understands it. |
| uTLS fingerprint | `chrome` | Exported in client links as `fp=chrome`. |
| Target | A real reachable HTTPS host such as `example.com:443` | Camouflage handshake target, not your inbound address. |
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

## Validation Checklist

- The server can reach the selected target over HTTPS.
- The target certificate accepts every name listed in `serverNames`.
- Each client uses the generated public key.
- Each client uses one valid `serverName`.
- Each client uses one valid `shortId`.
- The firewall and cloud security group allow the chosen port.
- The direct connection works before sniffing, FinalMask, or external proxy settings are enabled.

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

## Common Mistakes

- Filling the target with the inbound address instead of the camouflage destination.
- Enabling advanced options before the baseline connection succeeds.
- Mixing Reality guidance with `TCP+TLS` fallback patterns.
- Reusing one short ID everywhere when separate short IDs make auditing easier.
- Forgetting that `externalProxy`, FinalMask, and `settings.testseed` are 3x-ui compatibility or extension concerns, not ordinary Xray listener basics.

## References

- [Xray InboundObject](https://xtls.github.io/en/config/inbound.html)
- [Xray VLESS inbound](https://xtls.github.io/en/config/inbounds/vless.html)
- [Xray Transport / StreamSettings](https://xtls.github.io/en/config/transport.html)
- [Xray REALITY](https://xtls.github.io/en/config/transports/reality.html)
- [Xray RAW](https://xtls.github.io/en/config/transports/raw.html)
- [Xray Fallback](https://xtls.github.io/en/config/features/fallback.html)
- [Xray Sockopt](https://xtls.github.io/en/config/transports/sockopt.html)
- [Xray FinalMask](https://xtls.github.io/en/config/transports/finalmask.html)
