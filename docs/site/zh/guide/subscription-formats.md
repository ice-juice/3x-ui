# Sub Formats

Sub Formats 用于精细控制 JSON 和 Clash 订阅输出，并为兼容客户端添加分片、噪声、Mux 和直连规则。

## 用途

- 配置 JSON 和 Clash 订阅路径及完整 URI 覆盖。
- 为支持的客户端增加高级 JSON 订阅行为。
- 将输出格式控制与通用订阅服务设置分开管理。

## 关键设置

| 设置 | 作用 |
| --- | --- |
| `subJsonPath` / `subJsonURI` | JSON 订阅路径和完整 URL 覆盖。 |
| `subClashPath` / `subClashURI` | Clash 订阅路径和完整 URL 覆盖。 |
| `subJsonFragment` | 分片设置，例如 `packets`、`length`、`interval` 和 `maxSplit`。 |
| `subJsonNoises` | 噪声注入条目，包含 `type`、`packet`、`delay` 和 `applyTo`。 |
| `subJsonMux` | Mux 设置，例如 `concurrency`、`xudpConcurrency` 和 `xudpProxyUDP443`。 |
| `subJsonRules` | 面向指定 IP 或域名目标的直连规则。 |

## 推荐做法

- 只有目标客户端明确支持这些高级字段时，再启用高级格式选项。
- JSON 和 Clash 端点应与标准订阅路径分开。
- 直连规则从少量明确目标开始。
- 大范围发布前，先导入到真实客户端验证输出。
- 完整 URI 覆盖应与域名、路径、TLS 和反向代理行为一致。

## 风险与注意事项

- 这些设置以 JSON 字符串保存。结构异常时，界面可能回退到默认值。
- 启用 Fragment、Noises、Mux 或 Direct 时写入的是预设模板，不是空对象。
- 噪声或直连规则过多会增加排障复杂度。
- Mux 参数不是越大越好，客户端兼容性和真实链路表现更重要。
