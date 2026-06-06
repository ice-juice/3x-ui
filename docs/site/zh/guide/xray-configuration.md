# 基础配置

Xray 基础配置页面用于编辑 3x-ui 保存的模板级行为。保存并重启 Xray 后，这些设置才会影响生成的 Xray 运行配置。

## 用途

- 配置路由和直连出站的域名解析策略。
- 设置面板侧出站连通性测试使用的目标 URL。
- 启用或关闭入站、出站流量统计。
- 调整 level-0 策略默认值，例如连接空闲时间和缓冲区大小。
- 配置日志级别、访问日志、错误日志、地址脱敏和 DNS 日志。
- 需要回退时恢复内置默认 Xray 模板。

## 关键字段

| 字段 | 作用 |
| --- | --- |
| `routing.domainStrategy` | 控制路由阶段何时触发域名解析。 |
| `outbounds[tag=direct].settings.domainStrategy` | 控制 direct 出站的解析行为。 |
| `outboundTestUrl` | 出站测试动作使用的目标 URL。 |
| `policy.system.*` | 启用入站和出站统计计数。 |
| `policy.levels["0"].connIdle` | level-0 连接默认空闲超时。 |
| `policy.levels["0"].bufferSize` | level-0 连接缓冲区大小。 |
| `log.loglevel` | Xray 日志详细程度。 |
| `log.access` / `log.error` | 访问日志和错误日志路径。 |
| `log.maskAddress` | 日志中的地址脱敏行为。 |
| `log.dnsLog` | DNS 日志开关。 |

## 推荐做法

- 出站测试 URL 应稳定、公开、低负载。
- 只有需要计数和指标时，再开启统计。
- 长期生产节点不要使用过于详细的日志级别。
- **恢复默认** 应视为回退操作，而不是局部修复。
- 保存模板并重启 Xray 后，再期待运行态行为变化。

## 排障提示

| 现象 | 优先检查 |
| --- | --- |
| 保存成功但重启失败 | 到 [高级配置](/zh/guide/xray-advanced) 检查结构是否有效。 |
| 统计一直为空 | 确认统计开关已开启，并保留内部 `api -> api` 路由。 |
| 所有出站测试失败 | 先检查 `outboundTestUrl`，再检查出站传输和 TLS 设置。 |
| 日志增长过快 | 降低 `log.loglevel`，检查访问日志路径，并在面板外配置日志轮转。 |
