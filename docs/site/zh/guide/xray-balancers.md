# 负载均衡

负载均衡把多个出站组合成一个逻辑目标。路由规则可以通过 `balancerTag` 把流量发送到该目标。

## 用途

- 按 selector 组合多个出站。
- 选择负载均衡策略。
- 在选中出站不健康时提供 fallback 行为。
- 维护延迟和负载策略依赖的观测配置。

## 关键字段

| 字段 | 作用 |
| --- | --- |
| `routing.balancers` | 路由配置中的负载均衡器列表。 |
| `tag` | 被路由规则引用的负载均衡器名称。 |
| `selector` | 用于选择出站 tag 的前缀匹配。 |
| `fallbackTag` | 选中出口不可用时使用的出站。 |
| `strategy.type` | 策略类型，例如 `random`、`roundRobin`、`leastPing` 或 `leastLoad`。 |
| `strategy.settings` | 策略相关阈值、基线、预期负载和成本。 |
| `observatory` | 延迟感知策略使用的周期探测配置。 |
| `burstObservatory` | 负载感知策略使用的突发探测配置。 |

## 推荐做法

- 为同一组出站使用一致的 tag 前缀。
- 生产路径建议配置 `fallbackTag`。
- 只有探测目标可达且有意义时，再使用 `leastPing` 或 `leastLoad`。
- 修改负载均衡器 tag 后，同步更新路由规则。
- 保持观测 selector 与负载均衡器 selector 一致。

## 排障提示

| 现象 | 优先检查 |
| --- | --- |
| 负载均衡器没有收到流量 | 确认路由规则指向该负载均衡器 tag。 |
| 只有一个出站被选中 | 检查 selector 前缀和出站 tag。 |
| `leastPing` 表现像随机 | 确认观测配置存在，且探测目标可达。 |
| 所有出口都不健康 | 检查 fallback tag、探测 URL 和出站测试结果。 |
