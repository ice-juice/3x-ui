# Telegram 机器人

Telegram 机器人设置用于把面板通知和运维事件发送到 Telegram。

## 用途

- 发送登录、备份、定时和 CPU 阈值通知。
- 配置机器人 Token 和目标聊天。
- 选择机器人消息语言和可选的自定义 Telegram API 服务。
- 让重要面板事件在浏览器之外也能被看到。

## 关键设置

| 设置 | 作用 |
| --- | --- |
| `tgBotEnable` | 启用 Telegram 集成。 |
| `tgBotToken` | 机器人 Token。已有配置时留空表示保留旧值。 |
| `tgBotChatId` | 接收通知的目标聊天 ID。 |
| `tgLang` | 机器人消息语言。 |
| `tgBotAPIServer` | 可选的自定义 Telegram API 地址。 |
| `tgRunTime` | 通知计划。 |
| `tgBotBackup` | 发送备份相关通知。 |
| `tgBotLoginNotify` | 发送登录通知。 |
| `tgCpu` | CPU 告警阈值。 |

## 推荐做法

- 长期开启告警前，先确认机器人和 Chat ID 能正常收发消息。
- 公网面板建议保持登录通知开启。
- 只有默认 Telegram API 不可达或确实需要代理时，再配置自定义 API 服务。
- CPU 阈值应根据主机用途设置，避免无意义告警。
- 备份和定时通知应与真实运维节奏一致。

## 风险与注意事项

- 已有 Token 不会回显明文；输入新值会覆盖旧 Token。
- Chat ID 错误时，机器人可能已连接但无法投递到目标会话。
- 过于频繁的计划或过低的 CPU 阈值会造成告警疲劳。
- 备份通知可能包含敏感运维数据，应确认接收方和保存方式可信。
