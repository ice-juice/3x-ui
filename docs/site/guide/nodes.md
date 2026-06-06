# Nodes

The Nodes page manages remote panel nodes and shows their reachability, latency, version, resource state, and client statistics. It is the operational entrypoint for multi-node deployments.

## Purpose

- Add, edit, enable, disable, and delete remote nodes.
- Review heartbeat recency, latency, CPU, memory, Xray version, and panel version.
- Probe node connectivity on demand.
- Update eligible remote panels from the control plane.
- Understand which inbounds belong to local versus remote nodes.

## Common Actions

- Add a node with scheme, address, port, base path, API token, and TLS verification mode.
- Test connectivity before assigning traffic to the node.
- Fetch and pin a certificate fingerprint when using certificate pinning.
- Hide or show node addresses during operations.
- Update one eligible node or a selected set of eligible nodes.

## Main Fields

| Field | Meaning |
| --- | --- |
| `scheme` | `http` or `https` for the remote panel API. |
| `address` | Remote panel host or IP address. |
| `port` | Remote panel port. |
| `basePath` | Remote panel URL base path. |
| `apiToken` | Token used by the control panel to authenticate to the node. |
| `allowPrivateAddress` | Allows private or local address ranges when intentionally used. |
| `tlsVerifyMode` | TLS verification behavior, including skip or pin modes. |
| `pinnedCertSha256` | Expected certificate fingerprint for pin mode. |

## Notes

- Only enabled and online nodes are eligible for panel updates.
- `http` implies skipped TLS verification.
- Pin mode requires fetching and storing the correct certificate fingerprint.
- Deleting a node does not automatically migrate inbounds attached to it.
- Average latency only includes enabled online nodes that returned a valid latency value.

## Troubleshooting

| Symptom | First checks |
| --- | --- |
| Probe fails | Check scheme, address, port, base path, API token, and TLS mode. |
| Node is offline | Inspect the last error and test network reachability to the remote panel API. |
| Update button is missing | The node may be disabled, offline, or already up to date. |
| Certificate pinning fails | Fetch the pin again and confirm no proxy is replacing the certificate. |
| Inbounds fail after deleting a node | Check whether those inbounds still reference the old node ID. |
