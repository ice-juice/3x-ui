---
layout: home

hero:
  name: 3x-ui 文档
  text: 现代化运维文档
  tagline: 用于管理 3x-ui、Xray、入站、客户端、节点和面板设置的清晰文档站。
  image:
    src: /logo.svg
    alt: 3x-ui 文档
  actions:
    - theme: brand
      text: Reality 入站
      link: /zh/inbounds/reality
    - theme: alt
      text: 浏览指南
      link: /zh/guide/system-status

features:
  - title: 跟随菜单结构
    details: 文档顺序对应 3x-ui 前端真实菜单，方便从界面名称快速定位配置说明。
  - title: 优先解释 Reality
    details: 入站指南说明 Reality 字段、推荐值、客户端影响，以及 Xray 官方字段与 3x-ui 扩展字段的边界。
  - title: 面向 GitHub Pages
    details: VitePress 提供搜索、响应式导航、深色模式、代码块高亮，以及比 GitHub Wiki 更丰富的文档界面。
---

## 文档地图

<div class="doc-grid">
  <a class="doc-card" href="/3x-ui/zh/guide/system-status">
    <strong>系统状态</strong>
    <p>面板健康、Xray 运行状态、系统资源、流量和指标。</p>
  </a>
  <a class="doc-card" href="/3x-ui/zh/inbounds/reality">
    <strong>Reality 入站</strong>
    <p>推荐的 VLESS + RAW/TCP + REALITY 配置与字段影响。</p>
  </a>
  <a class="doc-card" href="/3x-ui/zh/guide/clients">
    <strong>客户端</strong>
    <p>订阅用户、流量额度、到期时间、分组和入站绑定。</p>
  </a>
  <a class="doc-card" href="/3x-ui/zh/guide/xray-configuration">
    <strong>Xray 配置</strong>
    <p>路由、出站、负载均衡、DNS 和高级 JSON 编辑。</p>
  </a>
</div>

## 推荐阅读流

| 任务 | 路径 |
| --- | --- |
| 创建 Reality 节点 | [入站](/zh/inbounds/) -> [Reality 入站](/zh/inbounds/reality) -> [客户端](/zh/guide/clients) |
| 管理订阅用户 | [客户端](/zh/guide/clients) -> [分组](/zh/guide/groups) -> [面板设置](/zh/guide/panel-settings) |
| 排查运行状态 | [系统状态](/zh/guide/system-status) -> [Xray 配置](/zh/guide/xray-configuration) -> [入站](/zh/inbounds/) |
| 对接自动化 | [API 文档](/zh/guide/api-docs) -> [面板设置](/zh/guide/panel-settings) |
