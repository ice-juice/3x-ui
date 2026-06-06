# DNS

DNS settings manage Xray's built-in DNS, static hosts, DNS server entries, and FakeDNS pools.

## Purpose

- Enable or disable built-in DNS.
- Configure query strategy, client IP, cache, fallback, parallel query, and stale-answer behavior.
- Add static host overrides.
- Define DNS servers with domain scopes, expected IPs, and fallback behavior.
- Configure FakeDNS pools when the deployment needs fake IP mapping.

## Key Fields

| Field | Purpose |
| --- | --- |
| `dns.tag` | Tag for the DNS service. |
| `dns.clientIp` | Client IP used for selected DNS requests. |
| `dns.queryStrategy` | Preferred query behavior for IPv4 and IPv6. |
| `dns.disableCache` | Disables DNS cache. |
| `dns.disableFallback` | Disables fallback DNS behavior globally. |
| `dns.enableParallelQuery` | Allows parallel DNS queries. |
| `dns.useSystemHosts` | Uses system hosts entries. |
| `dns.hosts` | Static host mapping. |
| `dns.servers` | DNS server list. |
| `servers[].domains` | Domain scope for a server entry. |
| `servers[].expectedIPs` / `unexpectedIPs` | IP filters for DNS answers. |
| `fakedns[].ipPool` / `poolSize` | FakeDNS address pool and size. |

## Recommended Practices

- Keep DNS design aligned with `routing.domainStrategy`.
- Use domain-scoped servers when only specific domains need special resolvers.
- Avoid FakeDNS unless the inbound, client behavior, sniffing, and routing model are designed for it.
- Use `hosts` only for intentional overrides; stale overrides are hard to notice.
- Prefer explicit server objects when domain scopes or fallback behavior matter.

## Troubleshooting

| Symptom | First checks |
| --- | --- |
| Domain resolves to the wrong target | Check `dns.hosts` first. |
| Only one DNS server seems active | Review `domains`, `skipFallback`, `finalQuery`, and global fallback switches. |
| FakeDNS breaks traffic | Verify client compatibility, sniffing behavior, and route restoration. |
| Domain routing changes after DNS edits | Re-check `routing.domainStrategy` and rule order. |
