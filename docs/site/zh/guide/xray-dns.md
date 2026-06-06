# DNS

DNS 设置用于管理 Xray 内建 DNS、静态 hosts、DNS 服务器条目和 FakeDNS 地址池。

## 用途

- 启用或关闭内建 DNS。
- 配置查询策略、客户端 IP、缓存、回退、并行查询和过期应答行为。
- 添加静态 hosts 覆盖。
- 定义带域名范围、期望 IP 和回退行为的 DNS 服务器。
- 在部署需要假 IP 映射时配置 FakeDNS 地址池。

## 关键字段

| 字段 | 作用 |
| --- | --- |
| `dns.tag` | DNS 服务标签。 |
| `dns.clientIp` | 部分 DNS 请求使用的客户端 IP。 |
| `dns.queryStrategy` | IPv4 和 IPv6 查询偏好。 |
| `dns.disableCache` | 关闭 DNS 缓存。 |
| `dns.disableFallback` | 全局关闭 DNS fallback 行为。 |
| `dns.enableParallelQuery` | 允许并行 DNS 查询。 |
| `dns.useSystemHosts` | 使用系统 hosts 条目。 |
| `dns.hosts` | 静态 hosts 映射。 |
| `dns.servers` | DNS 服务器列表。 |
| `servers[].domains` | 服务器条目的域名范围。 |
| `servers[].expectedIPs` / `unexpectedIPs` | DNS 响应 IP 过滤。 |
| `fakedns[].ipPool` / `poolSize` | FakeDNS 地址池和大小。 |

## 推荐做法

- DNS 设计应与 `routing.domainStrategy` 保持一致。
- 只有部分域名需要特殊解析时，使用带域名范围的 DNS 服务器。
- 除非入站、客户端行为、嗅探和路由模型都适配，否则不要轻易开启 FakeDNS。
- `hosts` 只用于明确覆盖，陈旧覆盖很难被察觉。
- 需要域名范围或回退行为时，优先使用完整服务器对象。

## 排障提示

| 现象 | 优先检查 |
| --- | --- |
| 域名解析到错误目标 | 先检查 `dns.hosts`。 |
| 多个 DNS 服务器只有一个生效 | 检查 `domains`、`skipFallback`、`finalQuery` 和全局 fallback 开关。 |
| FakeDNS 导致流量异常 | 验证客户端兼容性、嗅探行为和路由还原。 |
| 修改 DNS 后域名路由变化 | 重新检查 `routing.domainStrategy` 和规则顺序。 |
