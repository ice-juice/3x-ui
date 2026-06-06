# Inbounds

The Inbounds page is where Xray inbound configurations are created, enabled, imported, exported, cloned, and inspected. It is the operational list for protocol, port, traffic, client, node, and expiry state.

## Purpose

- Manage local and node-bound inbound configurations.
- Review protocol, port, node assignment, client counts, traffic usage, and expiry status.
- Export share links, subscription links, or raw inbound JSON.
- Attach, detach, move, group, and remove clients from multi-user inbounds.

## Common Actions

- Create an inbound with **Add Inbound**.
- Import inbound JSON or supported share links.
- Export all links or all subscriptions.
- Reset traffic for one inbound or for all inbounds.
- Edit, clone, delete, inspect, or export a single row.
- Attach existing clients to a multi-user inbound, attach clients to another inbound, detach clients, or add selected clients to a group.

## Main Columns

| Column | Meaning |
| --- | --- |
| Enable | Whether the inbound accepts connections. Disabled rows remain saved but inactive. |
| Remark | Human-readable label used for operations and exported names. |
| Node | Local or remote node that owns the inbound. |
| Port | Listening port exposed by the inbound. |
| Protocol | Protocol plus transport, TLS, Reality, and network tags when available. |
| Clients | Total clients plus active, disabled, depleted, and online counters. |
| Traffic | Used traffic, quota, remaining traffic, upload, and download. |
| Expiry | Relative expiry time or unlimited state. |

## Notes

- Multi-user and single-user inbounds expose different row actions.
- Cloning creates a disabled copy with a random port and an empty client list.
- Deleting all clients from an inbound is destructive. Confirm migration or decommissioning first.
- Exported links depend on subscription settings, public host overrides, and node address overrides.
- Deployment-specific guidance, including Reality, now lives under [Deployment Scenarios](/deployment-scenarios/).

## Troubleshooting

| Symptom | First checks |
| --- | --- |
| Link or QR code has the wrong host | Check node address overrides, subscription public URL settings, and external proxy settings. |
| Client cannot connect | Compare port, protocol, flow, security, transport, SNI, and client UUID. |
| Node-bound inbound fails | Check the Nodes page first, then verify the inbound still belongs to the intended node. |
| Traffic color looks wrong | Check the inbound quota and the global traffic warning thresholds. |
| Import fails | Validate the pasted payload and inspect logs for parsing errors. |
