---
layout: home

hero:
  name: 3x-ui Docs
  text: Modern operator documentation
  tagline: A clean, bilingual documentation site for managing 3x-ui, Xray, inbounds, clients, nodes, and panel settings.
  image:
    src: /logo.svg
    alt: 3x-ui Docs
  actions:
    - theme: brand
      text: Reality Inbound
      link: /inbounds/reality
    - theme: alt
      text: Browse Guide
      link: /guide/system-status

features:
  - title: Menu-driven structure
    details: The site follows the real 3x-ui frontend navigation so operators can move from UI labels to configuration details quickly.
  - title: Reality-first guidance
    details: The inbound guide explains each Reality field, recommended values, client impact, and Xray versus 3x-ui-specific boundaries.
  - title: Built for GitHub Pages
    details: VitePress provides search, responsive navigation, dark mode, polished code blocks, and a richer documentation UI than GitHub Wiki.
---

## Documentation Map

<div class="doc-grid">
  <a class="doc-card" href="/3x-ui/guide/system-status">
    <strong>System Status</strong>
    <p>Panel health, Xray runtime state, resources, traffic, and metrics.</p>
  </a>
  <a class="doc-card" href="/3x-ui/inbounds/reality">
    <strong>Reality Inbound</strong>
    <p>Recommended VLESS + RAW/TCP + REALITY setup and field-by-field impact.</p>
  </a>
  <a class="doc-card" href="/3x-ui/guide/clients">
    <strong>Clients</strong>
    <p>Subscription users, quotas, expiry, groups, and inbound binding.</p>
  </a>
  <a class="doc-card" href="/3x-ui/guide/xray-configuration">
    <strong>Xray Configuration</strong>
    <p>Routing, outbounds, balancers, DNS, and advanced JSON editing.</p>
  </a>
</div>

## Recommended Flow

| Task | Path |
| --- | --- |
| Create a Reality node | [Inbounds](/inbounds/) -> [Reality Inbound](/inbounds/reality) -> [Clients](/guide/clients) |
| Manage subscriptions | [Clients](/guide/clients) -> [Groups](/guide/groups) -> [Panel Settings](/guide/panel-settings) |
| Troubleshoot runtime | [System Status](/guide/system-status) -> [Xray Configuration](/guide/xray-configuration) -> [Inbounds](/inbounds/) |
| Build integrations | [API Docs](/guide/api-docs) -> [Panel Settings](/guide/panel-settings) |
