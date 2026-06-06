# Basic Configuration

The Xray Basic Configuration page edits template-wide behavior stored by 3x-ui. These settings affect the generated Xray configuration after saving and restarting Xray.

## Purpose

- Configure domain resolution strategy for routing and direct outbound behavior.
- Set the outbound test URL used by panel-side reachability checks.
- Enable or disable inbound and outbound traffic statistics.
- Tune level-0 policy defaults such as connection idle time and buffer size.
- Configure log level, access log, error log, address masking, and DNS logging.
- Restore the built-in default Xray template when a rollback is needed.

## Key Fields

| Field | Purpose |
| --- | --- |
| `routing.domainStrategy` | Controls when routing triggers domain resolution. |
| `outbounds[tag=direct].settings.domainStrategy` | Controls resolution behavior for the direct freedom outbound. |
| `outboundTestUrl` | Target URL used by outbound test actions. |
| `policy.system.*` | Enables inbound and outbound statistics counters. |
| `policy.levels["0"].connIdle` | Default idle timeout for level-0 connections. |
| `policy.levels["0"].bufferSize` | Buffer size applied to level-0 connections. |
| `log.loglevel` | Xray log verbosity. |
| `log.access` / `log.error` | Access and error log paths. |
| `log.maskAddress` | Address masking behavior in logs. |
| `log.dnsLog` | DNS log switch. |

## Recommended Practices

- Keep the outbound test URL stable, public, and low impact.
- Enable statistics only when you need counters and metrics.
- Avoid overly verbose logging on long-running production nodes.
- Treat **Reset to Default** as a rollback operation, not a partial repair.
- Save the template and restart Xray before expecting runtime behavior to change.

## Troubleshooting

| Symptom | First checks |
| --- | --- |
| Save succeeds but restart fails | Inspect [Advanced Configuration](/guide/xray-advanced) for invalid structure. |
| Statistics remain empty | Confirm stats switches are enabled and internal `api -> api` routing is preserved. |
| All outbound tests fail | Check `outboundTestUrl`, then inspect outbound transport and TLS settings. |
| Logs grow too quickly | Lower `log.loglevel`, review access log path, and rotate logs outside the panel. |
