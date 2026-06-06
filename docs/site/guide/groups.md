# Groups

The Groups page organizes clients by plan, channel, region, tenant, or internal operations logic. It focuses on membership and group-scoped bulk actions.

## Purpose

- Create, rename, and delete groups.
- Review client counts per group and identify empty groups.
- Generate subscription links for all clients in a group.
- Bulk extend quota or expiry for a group.
- Add or remove members, or delete all clients inside a group.

## Common Actions

- Create a group with a stable operational name.
- Rename an existing group.
- Add clients to a group or remove selected members.
- Export subscription links for the group.
- Reset traffic for all members in the group.
- Delete the group label only, or delete clients inside the group.

## Main Areas

| Area | Meaning |
| --- | --- |
| Summary cards | Total groups, grouped clients, and empty groups. |
| Group name | Operational label shown as a tag. |
| Client count | Impact scope for group-level actions. |
| Row actions | Subscription export, bulk adjust, traffic reset, member management, rename, and delete. |

## Notes

- Deleting a group is different from deleting the clients inside that group.
- Empty groups can be kept as reserved labels or cleaned up during maintenance.
- Renaming a group changes visible assignment for existing members.
- Member modals load client data and may take longer on large panels.
- Groups are best for operational labeling, not for replacing node or inbound ownership.

## Troubleshooting

| Symptom | First checks |
| --- | --- |
| Create or rename fails | Check for an existing group with the same name. |
| Export or reset does nothing | Confirm the group has members. |
| Membership looks wrong | Verify the client's `group` value from the Clients page. |
| Bulk adjustment count is lower than expected | Some members may be unlimited and skipped. |
| Clients remain after deleting a group | Expected when only the group label was removed. |
