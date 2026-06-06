# Routing Rules

Routing Rules define how Xray matches traffic and chooses an outbound or balancer. Rules are order-sensitive: the first matching rule wins.

## Purpose

- Block, direct, proxy, or balance traffic by domain, IP, port, protocol, user, or inbound tag.
- Add quick block and direct rules without editing raw JSON.
- Reorder rules to control priority.
- Send matched traffic to an `outboundTag` or `balancerTag`.

## Key Fields

| Field | Purpose |
| --- | --- |
| `routing.rules` | Ordered rule list. |
| `type` | Rule type, usually `field`. |
| `domain` | Domain matchers such as full, suffix, keyword, or geosite entries. |
| `ip` | IP or geoip matchers. |
| `port` / `sourcePort` | Destination or source port filters. |
| `sourceIP` | Source address filters. |
| `network` | TCP, UDP, or both. |
| `protocol` | Protocol sniffing match such as BitTorrent. |
| `user` | VLESS user or email matcher when available. |
| `inboundTag` | Limits the rule to selected inbounds. |
| `outboundTag` | Sends matching traffic to one outbound. |
| `balancerTag` | Sends matching traffic to one balancer. |

## Recommended Practices

- Place narrow rules above broad catch-all rules.
- Keep tag names stable; routing references depend on them.
- Use `balancerTag` only when a balancer is intentionally configured.
- Keep the internal `api -> api` rule at the front so panel statistics remain functional.
- Review DNS settings when domain-based routing depends on resolved IPs.

## Troubleshooting

| Symptom | First checks |
| --- | --- |
| New rule does not work | Look for a broader rule above it. |
| Traffic counters are zero | Check whether the internal API route is being captured by a real outbound rule. |
| Domain rules behave unexpectedly | Review `routing.domainStrategy` and [DNS](/guide/xray-dns). |
| Balancer never receives traffic | Confirm the rule uses `balancerTag` and the balancer tag exists. |
