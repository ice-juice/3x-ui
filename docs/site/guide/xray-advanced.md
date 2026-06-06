# Advanced Configuration

Advanced Configuration exposes direct JSON editing for the full Xray template and selected fragments such as `inbounds`, `outbounds`, and `routing.rules`.

## Purpose

- Inspect the final stored template.
- Edit fields that do not have dedicated form controls.
- Repair or compare `inbounds`, `outbounds`, and `routing.rules` fragments.
- Save the template and restart Xray after structural changes.

## Editing Modes

| Mode | Use it for |
| --- | --- |
| Full template | Reviewing or replacing the complete Xray configuration template. |
| Inbounds | Checking generated inbound objects and panel-managed compatibility fields. |
| Outbounds | Editing outbound arrays when the form does not expose a needed field. |
| Routing | Editing ordered route rules directly. |

## Recommended Practices

- Copy the current JSON before large edits.
- Make one conceptual change at a time and save.
- Restart Xray after structural changes.
- Return to form pages after raw edits to confirm they still render correctly.
- Keep panel-managed internal routes and API/statistics objects intact unless you know the impact.

## Risks and Notes

- JSON syntax validation catches malformed JSON, but not every semantic Xray error.
- This is template editing, not a live patch mechanism.
- Form pages and raw JSON pages edit the same stored template, so avoid conflicting mental models.
- Backend validation may normalize or repair internal statistics routing.

## Troubleshooting

| Symptom | First checks |
| --- | --- |
| Save is blocked | Fix JSON syntax, unmatched braces, trailing commas, or wrong root shape. |
| Save succeeds but Xray fails | Inspect Xray result logs for semantic configuration errors. |
| Other tabs render oddly | Check object nesting, array shape, and field types. |
| Statistics break after raw edits | Confirm internal API and stats routes still exist. |
