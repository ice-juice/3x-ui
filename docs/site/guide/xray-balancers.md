# Balancers

Balancers combine several outbounds into one logical target. Routing rules can then send traffic to the balancer through `balancerTag`.

## Purpose

- Group multiple outbounds by selector.
- Choose a balancing strategy.
- Provide fallback behavior when selected outbounds are unhealthy.
- Maintain observatory settings used by latency and load-based strategies.

## Key Fields

| Field | Purpose |
| --- | --- |
| `routing.balancers` | Balancer list inside routing configuration. |
| `tag` | Balancer name referenced by routing rules. |
| `selector` | Prefix matchers used to select outbound tags. |
| `fallbackTag` | Outbound used when selected exits are unavailable. |
| `strategy.type` | Strategy such as `random`, `roundRobin`, `leastPing`, or `leastLoad`. |
| `strategy.settings` | Strategy-specific thresholds, baselines, expected load, and costs. |
| `observatory` | Periodic probe configuration for latency-aware behavior. |
| `burstObservatory` | Burst probe configuration for load-aware behavior. |

## Recommended Practices

- Use consistent tag prefixes for outbounds that should belong to the same balancer.
- Add a `fallbackTag` for production paths.
- Use `leastPing` or `leastLoad` only when probe targets are reachable and meaningful.
- Update routing rules whenever a balancer tag changes.
- Keep observatory selector values aligned with the balancer selector.

## Troubleshooting

| Symptom | First checks |
| --- | --- |
| Balancer does not receive traffic | Confirm routing rules point to the balancer tag. |
| Only one outbound is selected | Check selector prefixes and outbound tags. |
| `leastPing` behaves randomly | Confirm observatory exists and probe target is reachable. |
| All exits look unhealthy | Check fallback tag, probe URL, and outbound test results. |
