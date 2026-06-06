# System Status

The System Status page is the first place to check host health, Xray runtime state, live throughput, connection counts, logs, backups, and version actions.

## Purpose

- Check whether the panel host is healthy from CPU, memory, swap, and disk usage.
- Confirm whether Xray is running, stopped, or in an error state.
- Review live speed, cumulative traffic, uptime, public IPs, and connection totals.
- Open logs, backup tools, system history, and Xray metrics for deeper investigation.

## Common Actions

- Review CPU, memory, swap, and disk gauges before changing runtime settings.
- Restart Xray from the Xray status card after configuration changes.
- Open **Config** to inspect the read-only runtime `config.json`.
- Open **Logs** when Xray reports an error or a restart fails.
- Use **System History** and **Xray Metrics** to understand trends instead of single snapshots.
- Check the 3x-ui version card before upgrading or comparing behavior with another server.

## Main Areas

| Area | What it shows |
| --- | --- |
| Resource gauges | CPU usage, logical cores, memory, swap, disk usage, and load values. |
| Xray status | Runtime state, version, error summary, restart controls, and log entrypoints. |
| Operation hours | Separate uptime values for the operating system and Xray. |
| Usage | Panel process memory and thread count. |
| Overall Speed | Current upload and download rate. |
| Total Data | Cumulative sent and received traffic. |
| IP Addresses | Public IPv4 and IPv6 with a visibility toggle. |
| Connection Count | Current TCP and UDP connection counts. |

## Notes

- **Config** is a read-only inspection modal, not an editor.
- Panel update status and Xray version switching are separate operations.
- Hide IP addresses before sharing screenshots or recordings.
- Metrics help with trends, but they do not replace inbound-level or client-level analysis.

## Troubleshooting

| Symptom | First checks |
| --- | --- |
| Xray shows an error | Read the error summary, then open Xray logs. |
| Panel feels slow | Check CPU, memory, swap, thread count, and disk pressure. |
| Bandwidth spikes | Compare live speed with system history, then narrow down through Inbounds and Clients. |
| Public IP is missing or unexpected | Inspect server networking, reverse proxy path, and deployment topology. |
| Restart does not recover service | Inspect `config.json`, Xray logs, and the selected Xray version. |
