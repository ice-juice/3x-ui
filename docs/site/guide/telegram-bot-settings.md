# Telegram Bot

Telegram Bot settings connect panel notifications and operational events to Telegram.

## Purpose

- Send login, backup, scheduled, and CPU-threshold notifications.
- Configure the bot token and target chat.
- Select bot message language and optional custom Telegram API server.
- Make important panel events visible outside the browser.

## Key Settings

| Setting | Purpose |
| --- | --- |
| `tgBotEnable` | Enables Telegram integration. |
| `tgBotToken` | Bot token. Leaving it blank keeps the existing token when one is already configured. |
| `tgBotChatId` | Target chat ID for notifications. |
| `tgLang` | Language used by bot messages. |
| `tgBotAPIServer` | Optional custom Telegram API endpoint. |
| `tgRunTime` | Notification schedule. |
| `tgBotBackup` | Sends backup-related notifications. |
| `tgBotLoginNotify` | Sends login notifications. |
| `tgCpu` | CPU alert threshold. |

## Recommended Practices

- Verify the bot and chat ID can receive messages before enabling long-term alerts.
- Keep login notifications enabled on public panels.
- Use a custom Telegram API server only when the default API is unreachable or intentionally proxied.
- Tune CPU thresholds to the host role so alerts stay meaningful.
- Align backup and scheduled notifications with the actual operations workflow.

## Risks and Notes

- Existing tokens are not displayed back in plaintext. Entering a new value replaces the old token.
- A wrong chat ID can leave the bot connected but unable to deliver messages to the intended chat.
- Aggressive schedules or low CPU thresholds create alert fatigue.
- Backup notifications may include sensitive operational data, so confirm recipient trust and retention.
