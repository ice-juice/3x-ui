# 路由规则

路由规则定义 Xray 如何匹配流量，并选择出站或负载均衡器。规则按顺序匹配，第一条命中的规则生效。

## 用途

- 按域名、IP、端口、协议、用户或入站标签阻断、直连、代理或负载均衡流量。
- 不直接编辑原始 JSON，也能添加快捷阻断和直连规则。
- 调整规则顺序以控制优先级。
- 将命中流量发送到 `outboundTag` 或 `balancerTag`。

## 关键字段

| 字段 | 作用 |
| --- | --- |
| `routing.rules` | 有序规则列表。 |
| `type` | 规则类型，通常为 `field`。 |
| `domain` | 域名匹配，例如 full、suffix、keyword 或 geosite。 |
| `ip` | IP 或 geoip 匹配。 |
| `port` / `sourcePort` | 目标端口或源端口过滤。 |
| `sourceIP` | 源地址过滤。 |
| `network` | TCP、UDP 或两者。 |
| `protocol` | 嗅探协议匹配，例如 BitTorrent。 |
| `user` | 可用时匹配 VLESS 用户或邮箱。 |
| `inboundTag` | 将规则限制到指定入站。 |
| `outboundTag` | 将命中流量发送到某个出站。 |
| `balancerTag` | 将命中流量发送到某个负载均衡器。 |

## 推荐做法

- 窄范围规则放在宽泛规则前面。
- 保持 tag 名称稳定，路由引用依赖它们。
- 只有明确配置负载均衡器时，才使用 `balancerTag`。
- 保持内部 `api -> api` 规则在前面，确保面板统计正常。
- 域名路由依赖解析 IP 时，同时检查 DNS 设置。

## 排障提示

| 现象 | 优先检查 |
| --- | --- |
| 新规则不生效 | 检查它上方是否有更宽泛的规则提前命中。 |
| 流量统计为零 | 检查内部 API 路由是否被真实出站规则捕获。 |
| 域名规则行为异常 | 检查 `routing.domainStrategy` 和 [DNS](/zh/guide/xray-dns)。 |
| 负载均衡器没有收到流量 | 确认规则使用 `balancerTag`，且负载均衡器 tag 存在。 |
