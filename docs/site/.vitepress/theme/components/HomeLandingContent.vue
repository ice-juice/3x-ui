<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isZh = computed(() => lang.value.toLowerCase().startsWith('zh'))
</script>

<template>
  <template v-if="isZh">
    <section class="home-signal-band" aria-label="主要运维路径">
      <a class="signal-card primary" href="/3x-ui/zh/deployment-scenarios/reality-inbound">
        <span class="signal-kicker">部署基线</span>
        <strong>Reality 入站</strong>
        <p>按推荐路径创建 VLESS + RAW/TCP + REALITY 公网节点。</p>
        <span class="signal-route">场景 -> 入站 -> 客户端</span>
      </a>
      <a class="signal-card" href="/3x-ui/zh/guide/system-status">
        <span class="signal-kicker">运行观测</span>
        <strong>运行状态</strong>
        <p>先查看主机资源、Xray 状态、流量计数和服务状态。</p>
        <span class="signal-route">状态 -> 入站 -> 日志</span>
      </a>
      <a class="signal-card" href="/3x-ui/zh/guide/xray-configuration">
        <span class="signal-kicker">配置核心</span>
        <strong>Xray 控制面</strong>
        <p>理解路由、出站、负载均衡、DNS 和高级 JSON 修改。</p>
        <span class="signal-route">模板 -> 路由 -> 验证</span>
      </a>
    </section>

    <section class="home-section split-section">
      <div class="section-copy">
        <p class="eyebrow">运维流程</p>
        <h2>先从任务出发，再进入对应的面板页面。</h2>
        <p>首页围绕高频动作组织：部署节点、开通用户、调整流量路径、排查故障，不需要在无关页面之间来回翻找。</p>
      </div>
      <div class="flow-rail" aria-label="推荐文档流程">
        <a class="flow-step" href="/3x-ui/zh/deployment-scenarios/">
          <span>01</span>
          <strong>选择部署场景</strong>
          <small>先确认拓扑，再填写协议字段。</small>
        </a>
        <a class="flow-step" href="/3x-ui/zh/inbounds/">
          <span>02</span>
          <strong>创建入站</strong>
          <small>匹配协议、传输、安全、嗅探和 JSON。</small>
        </a>
        <a class="flow-step" href="/3x-ui/zh/guide/clients">
          <span>03</span>
          <strong>绑定客户端</strong>
          <small>设置流量、到期时间、订阅分组和访问策略。</small>
        </a>
        <a class="flow-step" href="/3x-ui/zh/guide/system-status">
          <span>04</span>
          <strong>验证运行状态</strong>
          <small>确认 Xray 状态、流量、路由和服务健康。</small>
        </a>
      </div>
    </section>

    <section class="home-section">
      <div class="section-heading">
        <p class="eyebrow">面板菜单地图</p>
        <h2>直接跳到 3x-ui 侧边栏对应章节。</h2>
      </div>
      <div class="menu-grid">
        <a class="menu-tile" href="/3x-ui/zh/guide/system-status"><span>监控</span><strong>系统状态</strong></a>
        <a class="menu-tile" href="/3x-ui/zh/inbounds/"><span>运维</span><strong>入站</strong></a>
        <a class="menu-tile" href="/3x-ui/zh/guide/clients"><span>运维</span><strong>客户端</strong></a>
        <a class="menu-tile" href="/3x-ui/zh/guide/groups"><span>运维</span><strong>分组</strong></a>
        <a class="menu-tile" href="/3x-ui/zh/guide/nodes"><span>运维</span><strong>节点</strong></a>
        <a class="menu-tile" href="/3x-ui/zh/guide/panel-settings"><span>面板</span><strong>面板设置</strong></a>
        <a class="menu-tile" href="/3x-ui/zh/guide/xray-configuration"><span>Xray</span><strong>Xray 配置</strong></a>
        <a class="menu-tile" href="/3x-ui/zh/guide/api-docs"><span>集成</span><strong>API 文档</strong></a>
      </div>
    </section>

    <section class="home-section">
      <div class="section-heading">
        <p class="eyebrow">快速入口</p>
        <h2>常见运维任务</h2>
      </div>
      <div class="task-table">
        <a href="/3x-ui/zh/deployment-scenarios/reality-inbound"><strong>创建 Reality 节点</strong><span>推荐值、字段影响和 JSON 示例。</span></a>
        <a href="/3x-ui/zh/guide/subscription-settings"><strong>准备订阅</strong><span>订阅地址、分组、格式、到期时间和客户端交付。</span></a>
        <a href="/3x-ui/zh/guide/xray-routing"><strong>规划流量</strong><span>路由规则、出站选择、负载均衡和 DNS 行为。</span></a>
        <a href="/3x-ui/zh/guide/security-settings"><strong>加固面板</strong><span>访问控制、登录安全、API 暴露和可信管理员。</span></a>
      </div>
    </section>

    <div class="home-terminal" aria-label="文档快捷路径">
      <span class="terminal-dot"></span>
      <code>docs route --scenario reality --next inbound.clients.verify</code>
    </div>
  </template>

  <template v-else>
    <section class="home-signal-band" aria-label="Primary operating paths">
      <a class="signal-card primary" href="/3x-ui/deployment-scenarios/reality-inbound">
        <span class="signal-kicker">Deployment baseline</span>
        <strong>Reality inbound</strong>
        <p>Use the recommended public-node path for VLESS + RAW/TCP + REALITY.</p>
        <span class="signal-route">Scenario -> Inbound -> Client</span>
      </a>
      <a class="signal-card" href="/3x-ui/guide/system-status">
        <span class="signal-kicker">Live operations</span>
        <strong>Runtime health</strong>
        <p>Check host resources, Xray status, traffic counters, and service state first.</p>
        <span class="signal-route">Status -> Inbounds -> Logs</span>
      </a>
      <a class="signal-card" href="/3x-ui/guide/xray-configuration">
        <span class="signal-kicker">Configuration core</span>
        <strong>Xray control plane</strong>
        <p>Understand routing, outbounds, balancers, DNS, and advanced JSON edits.</p>
        <span class="signal-route">Template -> Route -> Verify</span>
      </a>
    </section>

    <section class="home-section split-section">
      <div class="section-copy">
        <p class="eyebrow">Operator flow</p>
        <h2>Start from the job, then open the matching panel page.</h2>
        <p>This home page is built around repeatable work: deploy a node, onboard users, tune traffic paths, and debug failures without hunting through unrelated pages.</p>
      </div>
      <div class="flow-rail" aria-label="Recommended documentation flow">
        <a class="flow-step" href="/3x-ui/deployment-scenarios/">
          <span>01</span>
          <strong>Choose deployment</strong>
          <small>Pick the topology before touching protocol fields.</small>
        </a>
        <a class="flow-step" href="/3x-ui/inbounds/">
          <span>02</span>
          <strong>Create inbound</strong>
          <small>Match protocol, transport, security, sniffing, and JSON.</small>
        </a>
        <a class="flow-step" href="/3x-ui/guide/clients">
          <span>03</span>
          <strong>Bind clients</strong>
          <small>Set limits, expiry, subscription grouping, and access policy.</small>
        </a>
        <a class="flow-step" href="/3x-ui/guide/system-status">
          <span>04</span>
          <strong>Verify runtime</strong>
          <small>Confirm Xray state, traffic, routes, and service health.</small>
        </a>
      </div>
    </section>

    <section class="home-section">
      <div class="section-heading">
        <p class="eyebrow">Panel menu map</p>
        <h2>Jump to the same structure you see in 3x-ui.</h2>
      </div>
      <div class="menu-grid">
        <a class="menu-tile" href="/3x-ui/guide/system-status"><span>Monitor</span><strong>System Status</strong></a>
        <a class="menu-tile" href="/3x-ui/inbounds/"><span>Operate</span><strong>Inbounds</strong></a>
        <a class="menu-tile" href="/3x-ui/guide/clients"><span>Operate</span><strong>Clients</strong></a>
        <a class="menu-tile" href="/3x-ui/guide/groups"><span>Operate</span><strong>Groups</strong></a>
        <a class="menu-tile" href="/3x-ui/guide/nodes"><span>Operate</span><strong>Nodes</strong></a>
        <a class="menu-tile" href="/3x-ui/guide/panel-settings"><span>Panel</span><strong>Settings</strong></a>
        <a class="menu-tile" href="/3x-ui/guide/xray-configuration"><span>Xray</span><strong>Configuration</strong></a>
        <a class="menu-tile" href="/3x-ui/guide/api-docs"><span>Integrate</span><strong>API Docs</strong></a>
      </div>
    </section>

    <section class="home-section">
      <div class="section-heading">
        <p class="eyebrow">Fast paths</p>
        <h2>Common operator tasks</h2>
      </div>
      <div class="task-table">
        <a href="/3x-ui/deployment-scenarios/reality-inbound"><strong>Create a Reality node</strong><span>Recommended values, field impact, and JSON example.</span></a>
        <a href="/3x-ui/guide/subscription-settings"><strong>Prepare subscriptions</strong><span>Public URL, grouping, formats, expiry, and client delivery.</span></a>
        <a href="/3x-ui/guide/xray-routing"><strong>Shape traffic</strong><span>Routing rules, outbound selection, balancing, and DNS behavior.</span></a>
        <a href="/3x-ui/guide/security-settings"><strong>Harden the panel</strong><span>Access control, login safety, API exposure, and trusted operators.</span></a>
      </div>
    </section>

    <div class="home-terminal" aria-label="Documentation shortcut">
      <span class="terminal-dot"></span>
      <code>docs route --scenario reality --next inbound.clients.verify</code>
    </div>
  </template>
</template>
