# 订阅设置

订阅设置控制独立订阅服务、发布 URL、展示元数据，以及可选的客户端路由提示。

## 用途

- 启用标准、JSON 和 Clash 订阅输出。
- 配置订阅监听地址、域名、端口、路径和完整 URI 覆盖。
- 控制客户端可见的流量、到期、标题、支持链接、个人资料链接和公告信息。
- 控制是否向支持的客户端下发路由提示。

## 关键设置

| 设置 | 作用 |
| --- | --- |
| `subEnable` | 启用标准订阅输出。 |
| `subJsonEnable` | 启用 JSON 订阅输出。 |
| `subClashEnable` | 启用 Clash 订阅输出。 |
| `subListen` | 订阅服务绑定地址。 |
| `subDomain` | 订阅访问域名。 |
| `subPort` | 订阅服务端口。 |
| `subPath` | 标准订阅路径。 |
| `subURI` | 标准订阅完整 URL 覆盖。 |
| `subShowInfo` | 控制是否暴露流量和到期信息。 |
| `remarkModel` | 定义导出节点备注如何组合。 |
| `subTitle`、`subSupportUrl`、`subProfileUrl`、`subAnnounce` | 兼容客户端展示的元数据。 |
| `subEnableRouting`、`subRoutingRules` | 下发给兼容客户端的可选路由规则。 |
| `subCertFile`、`subKeyFile` | 订阅 HTTPS 证书和私钥路径。 |
| `subUpdates` | 建议客户端轮询间隔，单位为分钟。 |

## 推荐做法

- 标准、JSON 和 Clash 输出使用不同的非默认路径。
- 如果前面有反向代理或 CDN，优先填写完整 URI。
- 保持 `remarkModel` 稳定，方便用户长期识别节点。
- 标题、支持链接、个人资料链接和公告应使用可公开给用户的内容。
- 只有确实需要面板统一管理客户端规则时，再启用路由注入。
- `subUpdates` 不宜过低，避免客户端频繁轮询。

## 风险与注意事项

- 默认订阅路径容易被猜测。
- 路径规范化能减少输入错误，但仍需确认不会与反向代理规则冲突。
- JSON 和 Clash 设置只有在对应输出启用后才会出现。
- 订阅响应可能暴露流量、到期、标题、支持链接、个人资料、更新间隔和公告元数据。
