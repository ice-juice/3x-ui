# Clients

The Clients page manages subscriber identities rather than one specific inbound. Use it for quotas, expiry, grouping, subscription distribution, and multi-inbound attachment.

## Purpose

- Manage client email, enable state, group, comment, expiry, and traffic quota.
- Review whether a client is online, offline, disabled, depleted, or near expiry.
- Attach one client to multiple inbounds or detach it in bulk.
- Generate subscription links, QR codes, and batch distribution outputs.

## Common Actions

- Add or edit a single client.
- Open a client information modal or QR modal.
- Reset one client's traffic or reset all clients.
- Bulk adjust traffic and expiry.
- Add clients to groups or remove them from groups.
- Attach selected clients to inbounds or detach them from inbounds.
- Search, filter, and sort before running bulk operations.

## Main Columns

| Column | Meaning |
| --- | --- |
| Enabled | Whether the client is allowed to connect. |
| Online | Online, offline, disabled, depleted, or near-depleted state. |
| Client | Email plus optional `subId` and comment. |
| Groups | Operational grouping used for plans, channels, or tenants. |
| Inbounds | One or more inbounds attached to the client. |
| Traffic | Used upload/download and total quota. |
| Remaining | Remaining quota or unlimited state. |
| Duration / Expiry | Relative expiry, delayed-start state, or unlimited expiry. |

## Notes

- The table is paginated and server-filtered. It is not a raw full export.
- Edit and info actions load the full client record because the list payload is intentionally slim.
- Bulk extension does not convert unlimited expiry or unlimited traffic into limited values.
- A client attached to multiple inbounds keeps one identity and one shared traffic model.
- Search, filters, sorting, and current selection all affect bulk actions.

## Troubleshooting

| Symptom | First checks |
| --- | --- |
| Client looks offline but can connect | Compare the online detection window with the last online timestamp. |
| Subscription links are empty | Confirm the client has a `subId` and subscription output is enabled. |
| Bulk attach fails | Check whether the target inbound already contains the client or is incompatible. |
| Some clients are skipped in bulk adjustment | Check whether they are unlimited-expiry or unlimited-traffic records. |
| Client cannot be found | Clear filters, then check pagination, group filters, and search text. |
