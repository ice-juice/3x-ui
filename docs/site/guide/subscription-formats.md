# Sub Formats

Sub Formats provides advanced controls for JSON and Clash subscription outputs, including optional fragment, noise, mux, and direct-routing additions for compatible clients.

## Purpose

- Configure JSON and Clash subscription paths and full URI overrides.
- Add advanced JSON subscription behavior for clients that support it.
- Separate output format controls from the general subscription service settings.

## Key Settings

| Setting | Purpose |
| --- | --- |
| `subJsonPath` / `subJsonURI` | JSON subscription path and full URL override. |
| `subClashPath` / `subClashURI` | Clash subscription path and full URL override. |
| `subJsonFragment` | Packet fragmentation settings such as `packets`, `length`, `interval`, and `maxSplit`. |
| `subJsonNoises` | Noise injection entries with `type`, `packet`, `delay`, and `applyTo`. |
| `subJsonMux` | Mux settings such as `concurrency`, `xudpConcurrency`, and `xudpProxyUDP443`. |
| `subJsonRules` | Direct-routing rules for selected IP or domain targets. |

## Recommended Practices

- Enable advanced format options only when target clients explicitly support them.
- Keep JSON and Clash endpoints separate from the standard subscription path.
- Start direct rules with a minimal explicit scope.
- Validate output by importing it into the actual client apps before broad rollout.
- Keep full URI overrides aligned with domain, path, TLS, and reverse-proxy behavior.

## Risks and Notes

- These settings are stored as JSON strings. Malformed values can fall back to defaults in the UI.
- Enabling Fragment, Noises, Mux, or Direct writes predefined templates, not empty objects.
- Too many noise or direct rules increase troubleshooting complexity.
- Larger mux values are not automatically better; client compatibility and link behavior matter more.
