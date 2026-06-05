# Reality 入站配置

::: tip 推荐基础组合
Reality 入站建议使用 `VLESS + RAW/TCP + REALITY + xtls-rprx-vision`。
:::

“全面配置”不是把所有高级开关都打开，而是理解每个字段是否需要、开启后会改变什么，以及客户端是否必须同步配置。

## 推荐填写

| 页签 | 推荐值 | 影响 |
| --- | --- | --- |
| 基础配置 | `vless`，监听地址留空，端口优先 `443` | 监听所有 IP；`443` 更接近普通 HTTPS。 |
| 协议 | `decryption: none`，`encryption: none` | 兼容性最好。VLESS Encryption 需要客户端同步支持。 |
| 传输 | `RAW`，关闭 Proxy Protocol，关闭 HTTP 混淆 | Reality 已经模拟 TLS；额外混淆会增加兼容成本。 |
| 安全 | `Reality`，uTLS 使用 `chrome` | 常见客户端 TLS 指纹，通常导出为 `fp=chrome`。 |
| 嗅探 | 默认关闭 | 只有服务端路由需要识别域名时再开启。 |
| 高级 JSON | 仅用于核对 | 不熟悉时不要手改字段；Xray 和 3x-ui 可能存在兼容字段。 |

## 基础配置

| 字段 | 填写方式 | 影响 |
| --- | --- | --- |
| 启用 | 正常服务时开启；保留但暂停时关闭 | 关闭后配置仍保存，但不接受连接。 |
| 备注 | 建议包含地区、线路、协议和端口，例如 `US-Residential-Reality-443` | 只影响面板识别和运维管理。 |
| 协议 | `vless` | Reality 常见搭配是 VLESS；本文以该组合为准。 |
| 监听地址 | 留空监听所有 IP；本机反代可填 `127.0.0.1`；需要时可填 Unix socket 路径 | Unix socket 监听时端口应设为 `0`。 |
| 端口 | 优先 `443`，占用时使用其它开放端口 | 高端口可用，但外观不如 `443` 接近普通 HTTPS。 |
| 总流量 | 3x-ui UI 中通常按 GB 填写；`0` 表示不限 | 这是面板额度控制，不是协议安全字段。 |
| 流量重置 | 不限流套餐可设为从不；额度套餐可按月或按周 | 控制额度重置周期。 |
| 到期时间 | 留空或 `0` 表示永不过期 | 面板侧生命周期控制。 |

## 协议

| 字段 | 建议 | 开启后的变化 |
| --- | --- | --- |
| `decryption` | `none` | VLESS 禁用解密时要求显式填写该值。 |
| `encryption` | 普通 Reality 使用 `none` | 非 `none` 值需要客户端支持 VLESS Encryption 并同步参数。 |
| X25519 认证 | 除非明确使用 VLESS Encryption，否则关闭 | 这不是 Reality 的 X25519 密钥对；客户端必须支持并匹配。 |
| ML-KEM-768 认证 | 为了兼容性默认关闭 | 增加后量子方向的 VLESS Encryption 行为，但客户端支持范围更窄。 |
| Vision testseed | 保留 `900 / 500 / 900 / 256` | 保存为 `settings.testseed`；仅对 `flow=xtls-rprx-vision` 生效。 |
| Fallbacks | 普通 Reality 留空 | 传统 VLESS fallback 更常用于 `TCP+TLS`；Reality 使用 `target` 处理未认证流量行为。 |

## 传输

| 字段 | 建议 | 影响 |
| --- | --- | --- |
| 网络 | `RAW` | Xray 新文档称为 `raw`；3x-ui 可能仍保存兼容的 `network: "tcp"` 和 `tcpSettings`。 |
| Proxy Protocol | 关闭 | 只有前置 HAProxy、Nginx 或负载均衡器会发送 PROXY protocol 时才开启。普通客户端直连会失败。 |
| HTTP 混淆 | 关闭 | 开启后客户端必须使用匹配的 HTTP header。 |
| 外部代理 | 仅在 CDN、端口转发、镜像入口或备用发布地址时使用 | 这是 3x-ui 面板扩展字段，用于分享和订阅生成，不是 Xray 入站监听字段。 |
| Sockopt | 普通节点关闭 | 低层 socket 调优；很多字段依赖 Linux 内核、路由或透明代理架构。 |
| TCP Masks / FinalMask | 默认关闭 | 在 TLS/Reality 后增加最后一层伪装；客户端必须支持对应 `fm` 参数，稳定性和性能可能受影响。 |

## Reality 安全

| 字段 | 建议 | 影响 |
| --- | --- | --- |
| `show` | `false` | 只用于排障时输出调试信息。 |
| `xver` | `0` | 只有 fallback 目标服务能理解 PROXY protocol 时才设为非零。 |
| uTLS 指纹 | `chrome` | 客户端链接通常导出为 `fp=chrome`。 |
| 目标 | 真实可访问的 HTTPS 站点，例如 `example.com:443` | 这是伪装握手目标，不是你的入站地址。 |
| SNI / `serverNames` | 目标站证书接受的域名，不带端口 | Reality 这里不支持通配符。 |
| `maxTimeDiff` / `maxTimediff` | 除非需要严格校验时间，否则使用 `0` | 非零值会拒绝时间偏差过大的客户端。 |
| 客户端版本限制 | 默认留空 | 仅在需要强制最低或最高 Xray 客户端版本时使用。 |
| Short IDs | 必填，偶数长度十六进制字符串，最长 16 个字符 | 建议生成多个非空值。只有明确允许空 `sid` 时才加入空字符串。 |
| SpiderX | `/` 或按客户端区分的路径 | Reality 使用的初始爬虫路径。 |
| 公钥 | 由服务端私钥生成 | 写入客户端链接。Xray 新文档客户端侧可能称为 `password`；3x-ui 保存为 `publicKey`。 |
| 私钥 | 只保存在服务端 | 不要公开。 |
| ML-DSA-65 Seed / Verify | 普通部署留空 | 在服务端和客户端都支持时启用后量子签名验证。 |

## 嗅探

| 字段 | 影响 |
| --- | --- |
| `enabled` | Xray 会尝试从 HTTP、TLS、QUIC 或 FakeDNS 元数据识别目标域名。 |
| `destOverride` | 指定哪些协议的嗅探结果可以替换原目标。 |
| `metadataOnly` | 仅使用连接元数据；除 FakeDNS 外的深度嗅探不会工作。 |
| `routeOnly` | 只把嗅探域名用于路由，不改写真实目标。 |
| `ipsExcluded` | 命中的 IP 或 CIDR 不参与目标改写。 |
| `domainsExcluded` | 命中的域名不参与改写；可用于推送服务、智能设备、游戏或语音应用。 |

## 高级 JSON 示例

```json
{
  "listen": "",
  "port": 443,
  "protocol": "vless",
  "settings": {
    "clients": [
      {
        "id": "<uuid>",
        "email": "user1",
        "flow": "xtls-rprx-vision",
        "enable": true
      }
    ],
    "decryption": "none",
    "encryption": "none",
    "fallbacks": [],
    "testseed": [900, 500, 900, 256]
  },
  "streamSettings": {
    "network": "tcp",
    "security": "reality",
    "tcpSettings": {
      "acceptProxyProtocol": false,
      "header": { "type": "none" }
    },
    "realitySettings": {
      "show": false,
      "xver": 0,
      "target": "example.com:443",
      "serverNames": ["example.com"],
      "privateKey": "<server-private-key>",
      "minClientVer": "",
      "maxClientVer": "",
      "maxTimediff": 0,
      "shortIds": ["cf15", "d6a56e05a1aac9"],
      "mldsa65Seed": "",
      "settings": {
        "publicKey": "<server-public-key>",
        "fingerprint": "chrome",
        "serverName": "",
        "spiderX": "/",
        "mldsa65Verify": ""
      }
    }
  },
  "sniffing": {
    "enabled": false,
    "destOverride": ["http", "tls", "quic", "fakedns"],
    "metadataOnly": false,
    "routeOnly": false,
    "ipsExcluded": [],
    "domainsExcluded": []
  }
}
```

## 参考链接

- [Xray InboundObject](https://xtls.github.io/en/config/inbound.html)
- [Xray VLESS inbound](https://xtls.github.io/en/config/inbounds/vless.html)
- [Xray Transport / StreamSettings](https://xtls.github.io/en/config/transport.html)
- [Xray REALITY](https://xtls.github.io/en/config/transports/reality.html)
- [Xray RAW](https://xtls.github.io/en/config/transports/raw.html)
- [Xray Fallback](https://xtls.github.io/en/config/features/fallback.html)
- [Xray Sockopt](https://xtls.github.io/en/config/transports/sockopt.html)
- [Xray FinalMask](https://xtls.github.io/en/config/transports/finalmask.html)
