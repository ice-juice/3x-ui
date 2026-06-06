---
layout: home

hero:
  name: 3x-ui 文档
  text: 跟随产品界面的运维文档
  tagline: 用于管理 3x-ui、Xray、入站、客户端、节点、面板设置、部署场景和 API 对接的实用文档站。
  image:
    src: /logo.svg
    alt: 3x-ui 文档
  actions:
    - theme: brand
      text: 部署场景
      link: /zh/deployment-scenarios/
    - theme: alt
      text: 浏览指南
      link: /zh/guide/system-status

features:
  - title: 对齐侧边栏
    details: 文档结构对应 3x-ui 前端真实菜单，方便从界面标签直接找到对应说明。
  - title: 先讲部署场景
    details: 部署场景先解释应该选择哪种拓扑，再进入协议、传输、路由和订阅细节。
  - title: 面向 GitHub Pages
    details: VitePress 提供搜索、响应式导航、深色模式、代码块高亮，以及比 GitHub Wiki 更丰富的文档界面。
---

## 文档地图

<div class="doc-grid">
  <a class="doc-card" href="/3x-ui/zh/guide/system-status">
    <strong>系统状态</strong>
    <p>主机健康、Xray 运行状态、系统资源、流量和指标。</p>
  </a>
  <a class="doc-card" href="/3x-ui/zh/inbounds/">
    <strong>入站</strong>
    <p>入站列表操作、导入导出、流量统计和客户端绑定。</p>
  </a>
  <a class="doc-card" href="/3x-ui/zh/deployment-scenarios/reality-inbound">
    <strong>Reality 入站</strong>
    <p>公网单节点 VLESS + RAW/TCP + REALITY 部署基线。</p>
  </a>
  <a class="doc-card" href="/3x-ui/zh/guide/xray-configuration">
    <strong>Xray 配置</strong>
    <p>基础模板、路由、出站、负载均衡、DNS 和高级 JSON 编辑。</p>
  </a>
</div>

## 推荐阅读流

| 任务 | 路径 |
| --- | --- |
| 创建 Reality 节点 | [部署场景](/zh/deployment-scenarios/) -> [Reality 入站](/zh/deployment-scenarios/reality-inbound) -> [入站](/zh/inbounds/) -> [客户端](/zh/guide/clients) |
| 管理订阅用户 | [客户端](/zh/guide/clients) -> [分组](/zh/guide/groups) -> [订阅设置](/zh/guide/subscription-settings) -> [Sub Formats](/zh/guide/subscription-formats) |
| 排查运行状态 | [系统状态](/zh/guide/system-status) -> [入站](/zh/inbounds/) -> [Xray 高级配置](/zh/guide/xray-advanced) |
| 对接自动化 | [API 文档](/zh/guide/api-docs) -> [安全设定](/zh/guide/security-settings) |
