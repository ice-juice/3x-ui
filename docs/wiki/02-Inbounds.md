# 入站 / Inbounds

![Status](https://img.shields.io/badge/status-Reality%20guide%20ready-06b6d4?style=flat-square)
![Menu](https://img.shields.io/badge/menu-inbounds-2563eb?style=flat-square)
![Protocol](https://img.shields.io/badge/focus-VLESS%20%2B%20REALITY-0f172a?style=flat-square)

> 入站页面用于创建、管理、导入、导出和查看 Xray 入站配置。
>
> The Inbounds page is used to create, manage, import, export, and inspect Xray inbound configurations.

| 导航 / Navigation | 位置 / Location |
| --- | --- |
| 上一页 / Previous | [系统状态 / System Status](01-System-Status.md) |
| 下一页 / Next | [客户端 / Clients](03-Clients.md) |

## 页面地图 / Page Map

| 区块 / Section | 内容 / Content |
| --- | --- |
| Reality 入站配置 | 推荐组合、字段解释、开关影响和高级 JSON 示例。 |
| 官方字段边界 | 区分 Xray 官方配置与 3x-ui 面板扩展字段。 |
| 排障入口 | 通过 `sniffing`、`streamSettings`、Reality 安全字段定位常见错误。 |

## Reality 入站配置 / Reality Inbound Configuration

Reality 入站的推荐基础组合是 `VLESS + RAW/TCP + REALITY + xtls-rprx-vision`。这里的“最全面”不是把所有高级开关都打开，而是理解每个字段是否需要、开启后会改变什么，以及客户端是否必须同步配置。

Recommended baseline: `VLESS + RAW/TCP + REALITY + xtls-rprx-vision`. A complete setup means choosing fields intentionally, not enabling every advanced switch.

### 推荐填写 / Recommended Values

| 页签 / Tab | 推荐值 / Value | 影响 / Effect |
| --- | --- | --- |
| 基础配置 / Basic | 协议 `vless`，地址留空，端口优先 `443` | 监听所有 IP；`443` 更接近普通 HTTPS。高端口也可用，但外观更像代理服务。 |
| 协议 / Protocol | 解密 `none`，加密 `none` | 兼容性最好。VLESS Encryption 需要新客户端支持并同步参数。 |
| 传输 / Transport | `RAW`，Proxy Protocol 关，HTTP 混淆关 | Reality 已伪装为 TLS；额外混淆会增加兼容成本。 |
| 安全 / Security | `Reality`，uTLS `chrome` | 常见客户端指纹，分享链接通常带 `fp=chrome`。 |
| 嗅探 / Sniffing | 普通节点关闭；需要服务端分流再开启 | 开启后 Xray 会从流量中识别域名，可能影响路由和目标地址。 |
| 高级配置 / Advanced | 只用于核对 JSON | 不熟悉时不要手改字段名；3x-ui 与 Xray 新旧字段存在兼容差异。 |

### 基础配置 / Basic

- `启用 / enable`：开启后入站会进入运行配置；关闭后保留配置但不接受连接。
- `备注 / remark`：仅用于面板识别。建议写明地区、线路、协议和端口，例如 `US-Residential-Reality-443`。
- `协议 / protocol`：选择 `vless`。Reality 常见搭配是 VLESS，也可用于 Trojan，但本说明以 VLESS 为准。
- `地址 / listen`：留空表示监听所有 IP。只给本机反向代理使用时可填 `127.0.0.1`。也可以填 Unix socket 路径，此时端口应设为 `0`。
- `端口 / port`：推荐 `443`。如果已被面板或 Web 服务占用，可以使用其他开放端口。
- `总流量 / total`：3x-ui UI 中通常按 GB 填写；`0` 表示不限。
- `流量重置 / trafficReset`：不限流可选“从不”；按套餐计费时可选每月、每周等周期。
- `到期时间 / expiryTime`：留空或 `0` 表示永不过期。

### 协议 / Protocol

- `解密 / decryption`：VLESS 必填。普通 Reality 配置填写 `none`。Xray 文档要求禁用时显式写 `none`。
- `加密 / encryption`：3x-ui 用于保存 VLESS Encryption 参数。普通配置填写 `none`。
- `X25519 认证 / X25519 Auth`：生成 VLESS Encryption 参数，不是 Reality 的 X25519 密钥。开启后客户端必须支持并使用匹配参数。
- `ML-KEM-768 认证 / ML-KEM-768 Auth`：同样属于 VLESS Encryption，提供更强的后量子方向认证能力，但兼容面更窄。
- `Vision testseed`：保存到 `settings.testseed`。仅对客户端 `flow=xtls-rprx-vision` 生效，其他 flow 会忽略。建议保留默认 `900 / 500 / 900 / 256`。
- `Fallbacks`：普通 Reality 入站建议留空。传统 VLESS fallback 常用于 `TCP+TLS` 端口复用；Reality 自身会把未通过认证的连接转发到 `target`。

### 传输 / Transport

- `传输 / network`：选择 `RAW`。Xray 新文档称为 `raw`，3x-ui 当前 JSON 里仍使用兼容字段 `network: "tcp"` 和 `tcpSettings`。
- `Proxy Protocol / acceptProxyProtocol`：默认关闭。只有前面存在 HAProxy、Nginx 或其他会发送 PROXY protocol 的负载均衡器时才开启。开启后，普通客户端直连会因为没有先发送 PROXY protocol 而被关闭。
- `HTTP 混淆 / HTTP camouflage`：Reality 场景通常关闭。开启后客户端必须配置相同 HTTP header，否则无法建立连接。
- `外部代理 / externalProxy`：这是 3x-ui 面板扩展字段，主要影响分享链接和订阅生成，不是 Xray 官方入站监听字段。只有通过 CDN、端口转发、镜像入口或其他外部入口发布同一节点时才需要。
- `Sockopt`：低层 socket 调优。普通 Reality 关闭。常见字段包括 `mark`、`tcpFastOpen`、`tproxy`、`tcpcongestion`、`interface`、`acceptProxyProtocol` 等，很多字段依赖 Linux 能力、内核参数或透明代理架构。
- `TCP Masks / FinalMask`：FinalMask 是 TLS/Reality 之后的最后一层伪装。普通 Reality 不建议默认开启。启用后客户端也必须支持对应 `fm` 参数，并可能影响性能和稳定性。

### 安全 Reality / Reality Security

- `显示 / show`：默认关闭。开启后会输出调试信息，只适合排障。
- `Xver / xver`：默认 `0`。用于 fallback 转发时携带 PROXY protocol；只有目标服务能接收时才设为 `1` 或 `2`。
- `uTLS / fingerprint`：推荐 `chrome`。这是客户端 TLS 指纹，分享链接对应 `fp=chrome`。
- `目标 / target`：填写真实可访问的 HTTPS 站点，例如 `example.com:443`。这是 Reality 借用握手外观的目标站，不是你的入站地址。避免填回自己服务器或不稳定站点。
- `SNI / serverNames`：填写目标站证书接受的域名，不带端口，例如 `example.com`。可填多个；客户端链接通常取其中一个。Reality 不支持通配符。
- `最大时间差 / maxTimeDiff`：推荐 `0`。设置为非零值会限制客户端与服务器时间差，安全更严格，但客户端时间不准时会失败。
- `最小客户端版本 / minClientVer`：通常留空。用于强制客户端最低 Xray 版本。
- `最大客户端版本 / maxClientVer`：通常留空。用于限制客户端最高 Xray 版本。
- `Short IDs / shortIds`：必填。使用偶数长度十六进制字符串，最长 16 个字符。建议生成多个非空值，例如 `cf15`、`d6a56e05a1aac9`。只有明确需要允许空 `sid` 时才加入空字符串。
- `SpiderX / spiderX`：初始爬虫路径。可填 `/`，更细致时建议每个客户端不同。
- `公钥 / publicKey`：由 Reality 私钥生成，进入客户端链接。Xray 新文档把客户端侧字段称为 `password`，3x-ui 仍使用 `publicKey` 保存。
- `私钥 / privateKey`：服务端私钥，只留在服务端配置中。不要泄露。
- `ML-DSA-65 Seed / mldsa65Seed`：服务端后量子签名私钥。普通场景留空；开启后目标站证书长度和客户端版本都要满足要求。
- `ML-DSA-65 Verify / mldsa65Verify`：客户端验证用公钥。3x-ui 会把它写入分享链接的后量子验证参数。

### 嗅探 / Sniffing

- `启用 / enabled`：开启后 Xray 会尝试从 HTTP、TLS、QUIC 或 FakeDNS 元数据中识别目标域名。
- `destOverride`：指定哪些协议的嗅探结果可以用于重置目标地址。常见值是 `http`、`tls`、`quic`、`fakedns`。
- `metadataOnly`：开启后只使用连接元数据。此时除 FakeDNS 外的深度 sniffing 不会工作，兼容性更保守。
- `routeOnly`：只把嗅探到的域名用于路由，不改写真实目标地址。遇到某些应用连接异常时可优先尝试开启。
- `ipsExcluded`：命中这些 IP 或 CIDR 时，不使用嗅探结果改写目标。
- `domainsExcluded`：命中这些域名时，不使用嗅探结果改写目标。可用于解决推送、智能设备或游戏语音等异常。

### 高级 JSON 示例 / Advanced JSON Example

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

### 官方参考 / References

- [Xray InboundObject](https://xtls.github.io/en/config/inbound.html)
- [Xray VLESS inbound](https://xtls.github.io/en/config/inbounds/vless.html)
- [Xray Transport / StreamSettings](https://xtls.github.io/en/config/transport.html)
- [Xray REALITY](https://xtls.github.io/en/config/transports/reality.html)
- [Xray RAW](https://xtls.github.io/en/config/transports/raw.html)
- [Xray Fallback](https://xtls.github.io/en/config/features/fallback.html)
- [Xray Sockopt](https://xtls.github.io/en/config/transports/sockopt.html)
- [Xray FinalMask](https://xtls.github.io/en/config/transports/finalmask.html)
