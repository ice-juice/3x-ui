---
layout: home

hero:
  name: 3x-ui Docs
  text: Operator documentation that follows the product UI
  tagline: Practical documentation for managing 3x-ui, Xray, inbounds, clients, nodes, panel settings, deployment scenarios, and API integrations.
  image:
    src: /logo.svg
    alt: 3x-ui Docs
  actions:
    - theme: brand
      text: Deployment Scenarios
      link: /deployment-scenarios/
    - theme: alt
      text: Browse Guide
      link: /guide/system-status

features:
  - title: Mirrors the sidebar
    details: The guide follows the real 3x-ui frontend menu so operators can jump from a UI label to the matching documentation page.
  - title: Scenario-first deployment
    details: Deployment scenarios explain which topology to choose before you tune protocol, transport, routing, and subscription details.
  - title: Built for GitHub Pages
    details: VitePress provides search, responsive navigation, dark mode, polished code blocks, and a richer documentation UI than GitHub Wiki.
---

## Documentation Map

<div class="doc-grid">
  <a class="doc-card" href="/3x-ui/guide/system-status">
    <strong>System Status</strong>
    <p>Host health, Xray runtime state, resource usage, traffic, and metrics.</p>
  </a>
  <a class="doc-card" href="/3x-ui/inbounds/">
    <strong>Inbounds</strong>
    <p>Inbound list operations, import/export flows, traffic counters, and client binding.</p>
  </a>
  <a class="doc-card" href="/3x-ui/deployment-scenarios/reality-inbound">
    <strong>Reality Inbound</strong>
    <p>Public single-node VLESS + RAW/TCP + REALITY deployment baseline.</p>
  </a>
  <a class="doc-card" href="/3x-ui/guide/xray-configuration">
    <strong>Xray Configuration</strong>
    <p>Basic template, routing, outbounds, balancers, DNS, and advanced JSON editing.</p>
  </a>
</div>

## Recommended Flow

| Task | Path |
| --- | --- |
| Create a Reality node | [Deployment Scenarios](/deployment-scenarios/) -> [Reality Inbound](/deployment-scenarios/reality-inbound) -> [Inbounds](/inbounds/) -> [Clients](/guide/clients) |
| Manage subscription users | [Clients](/guide/clients) -> [Groups](/guide/groups) -> [Subscription Settings](/guide/subscription-settings) -> [Sub Formats](/guide/subscription-formats) |
| Troubleshoot runtime | [System Status](/guide/system-status) -> [Inbounds](/inbounds/) -> [Xray Advanced Configuration](/guide/xray-advanced) |
| Build integrations | [API Docs](/guide/api-docs) -> [Security Settings](/guide/security-settings) |
