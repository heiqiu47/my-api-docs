---
outline: deep
---

# 模型列表

> 本站 API 提供的模型一览。所有模型均可使用 OpenAI 兼容接口（Chat Completions），可直接在酒馆 / ChatBox / Cherry Studio / RikkaHub 等客户端中使用。

> **快速跳转**：[Claude 系列](#claude-系列) · [Gemini](#gemini) · [国产模型](#国产模型)

## 先道歉喵

水秋喵的小店开了很久，经过各种磨难(主要是A/制造的)，形成了一个较为混乱的计费体系。
下文将带您轻松的了解本站的模型和计费规则，后续可能会计划更新为中转站。

## Claude 系列

### Claude Code 渠道

「Claude Code」渠道与无后缀为同一个渠道，用心维护。

计费规则：**按量**计费，优惠价按官网价折算，**2 元兑 1 美元**。

| 模型版本 | 模型 ID | 优惠价<br><small>人民币元/百万token<br>输入/输出</small> | 官网价<br><small>美元/百万token<br>输入/输出</small> |
| --- | --- | --- | --- |
| Claude 5 Fable | `claude-fable-5` | ¥20 / ¥100 | $10 / $50 |
| Claude 5 Sonnet | `claude-sonnet-5` | ¥4 / ¥20 | $2 / $10 |
| Claude 5 Opus<br>Claude 4.8 Opus<br>Claude 4.7 Opus | `claude-opus-5`<br>`claude-opus-4-8`<br>`claude-opus-4-7` | ¥10 / ¥50 | $5 / $25 |
| Claude 4.6 Opus<Badge type="tip" text="个人推荐" /><br>Claude 4.5 Opus | `claude-opus-4-6`<br><small><code>claude-opus-4-6-thinking</code></small><br>`claude-opus-4-5-20251101`<br><small><code>claude-opus-4-5-20251101-thinking</code></small> | ¥10 / ¥50 | $5 / $25 |
| Claude 4.6 Sonnet<br>Claude 4.5 Sonnet | `claude-sonnet-4-6`<br><small><code>claude-sonnet-4-6-thinking</code></small><br>`claude-sonnet-4-5-20250929`<br><small><code>claude-sonnet-4-5-20250929-thinking</code></small> | ¥6 / ¥30 | $3 / $15 |
| Claude 4.5 Haiku | `claude-haiku-4-5-20251001` | ¥2 / ¥10 | $1 / $5 |
| Claude 4.1 Opus<br>Claude 4 Opus | `claude-opus-4-1-20250805`<br><small><code>claude-opus-4-1-20250805-thinking</code></small><br>`claude-opus-4-20250514`<br><small><code>claude-opus-4-20250514-thinking</code></small> | ¥30 / ¥150 | $15 / $75 |
| Claude 4 Sonnet<br>Claude 3.7 Sonnet<br>Claude 3.5 Sonnet | `claude-sonnet-4-20250514`<br><small><code>claude-sonnet-4-20250514-thinking</code></small><br>`claude-3-7-sonnet-20250219`<br><small><code>claude-3-7-sonnet-20250219-thinking</code></small><br>`claude-3-5-sonnet-20241022` | ¥6 / ¥30 | $3 / $15 |

> **缓存计费**：Claude 系列支持 prompt caching。**缓存读取（命中）按输入价的 10% 计费**（如 Opus 输入 $5 → 命中 $0.50），首次建立缓存按输入价的 125% 计费（5 分钟缓存；1 小时缓存写入为 200%）。缓存按提示词前缀匹配，前缀内容有任何变动即失效。

### Anthropic 渠道

按量计费，7 元兑 1 美元，直连官方 API，很贵！

| 模型版本 | 模型 ID | 优惠价<br><small>人民币元/百万token<br>输入/输出</small> | 官网价<br><small>美元/百万token<br>输入/输出</small> |
| --- | --- | --- | --- |
| Claude 5 Fable | `Claude-5-Fable/Anthropic [7r:1$][按量][官方API]` | ¥70 / ¥350 | $10 / $50 |
| Claude 5 Opus | `Claude-5-Opus/Anthropic [7r:1$][按量][官方API]` | ¥35 / ¥175 | $5 / $25 |
| Claude 5 Sonnet | `Claude-5-Sonnet/Anthropic [7r:1$][按量][官方API]` | ¥14 / ¥70 | $2 / $10 |
| Claude 4.8 Opus | `Claude-4-8-Opus/Anthropic [7r:1$][按量][官方API]` | ¥35 / ¥175 | $5 / $25 |
| Claude 4.7 Opus | `Claude-4-7-Opus/Anthropic [7r:1$][按量][官方API]` | ¥35 / ¥175 | $5 / $25 |
| Claude 4.6 Opus | `Claude-4-6-Opus/Anthropic [7r:1$][按量][官方API]` | ¥35 / ¥175 | $5 / $25 |
| Claude 4.6 Sonnet | `Claude-4-6-Sonnet/Anthropic [7r:1$][按量][官方API]` | ¥21 / ¥105 | $3 / $15 |

### Kiro 渠道

**0.4x**（官网价 0.4 倍）· 按量。

| 模型版本 | 模型 ID | 优惠价<br><small>人民币元/百万token<br>输入/输出</small> | 官网价<br><small>美元/百万token<br>输入/输出</small> |
| --- | --- | --- | --- |
| Claude 5 Opus | `Claude-5-Opus/Kiro [0.4x][按量]` | ¥2 / ¥10 | $5 / $25 |
| Claude 4.8 Opus | `Claude-4-8-Opus/Kiro [0.4x][按量]` | ¥2 / ¥10 | $5 / $25 |
| Claude 4.7 Opus | `Claude-4-7-Opus/Kiro [0.4x][按量]` | ¥2 / ¥10 | $5 / $25 |
| Claude 4.6 Opus | `Claude-4-6-Opus/Kiro [0.4x][按量]` | ¥2 / ¥10 | $5 / $25 |
| Claude 5 Sonnet | `Claude-5-Sonnet/Kiro [0.4x][按量]` | ¥0.8 / ¥4 | $2 / $10 |

### Antigravity 渠道

| 模型版本 | 模型 ID | 计费 | 官网价<br><small>美元/百万token<br>输入/输出</small> |
| --- | --- | --- | --- |
| Claude 4.6 Opus | `Claude-4-6-Opus/Antigravity [按次][5额度]` | 按次 · 5额度 | $5 / $25 |
| Claude 4.6 Opus | `Claude-4-6-Opus/Antigravity [按量][0.4x]` | 按量 · 0.4x（¥2 / ¥10） | $5 / $25 |

## Gemini

按次计费

| 模型版本 | 模型 ID | 可用渠道 | 计费 |
| --- | --- | --- | --- |
| Gemini 3.7 Flash | `Gemini-3.7-Flash/Antigravity` | Antigravity | 0.3额度/次 |
| Gemini 3.6 Flash | `Gemini-3.6-Flash/Antigravity` | Antigravity | 0.3额度/次 |
| Gemini 3.5 Flash | `Gemini-3.5-Flash/Antigravity`<br>`Gemini-3.5-Flash/CLI` | Antigravity / CLI | 0.3额度/次 |
| Gemini 3.1 Flash-Lite | `Gemini-3.1-Flash-Lite/CLI` | CLI | 0.3额度/次 |
| Gemini 3.1 Pro | `Gemini-3.1-Pro/Antigravity`<br>`Gemini-3.1-Pro/CLI`<br>`Gemini-3.1-Pro/GCP` | Antigravity / CLI / GCP | 1.8额度/次 |
| Gemini 3 Pro | `Gemini-3-Pro/Antigravity`<br>`Gemini-3-Pro/CLI`<br>`Gemini-3-Pro/GCP` | Antigravity / CLI / GCP | 1.8额度/次 |
| Gemini 2.5 Pro | `Gemini-2.5-Pro/CLI`<br>`Gemini-2.5-Pro/GCP` | CLI / GCP | 1.6额度/次 |

## 国产模型

全部为 **官方8折，按量计费**。

### DeepSeek

| 模型 ID | 计费时段 | 输入<br><small>缓存命中</small> | 输入<br><small>缓存未命中</small> | 输出 |
| --- | --- | --- | --- | --- |
| `DeepSeek-V4-Flash [官方8折][按量]` | 空闲时段 | ¥0.04（¥0.05） | ¥1.2（¥1.5） | ¥3.6（¥4.5） |
| `DeepSeek-V4-Flash [官方8折][按量]` | 高峰时段 | ¥0.08（¥0.10） | ¥2.4（¥3.0） | ¥7.2（¥9.0） |
| `DeepSeek-V4-Pro [官方8折][按量]` | 空闲时段 | ¥0.12（¥0.15） | ¥3.6（¥4.5） | ¥10.8（¥13.5） |
| `DeepSeek-V4-Pro [官方8折][按量]` | 高峰时段 | ¥0.24（¥0.30） | ¥7.2（¥9.0） | ¥21.6（¥27.0） |

> 单位：¥/百万 token，价格格式为**优惠价（官方价）**，本站按**官方 8 折**销售。时段与[官方价格表](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)一致：**高峰时段**为北京时间 9:00-12:00、14:00-18:00，其余为**空闲时段**（半价），价格自 2026-08-17 起生效。

### GLM

| 模型 ID | 输入长度 | 输入<br><small>缓存命中</small> | 输入<br><small>缓存未命中</small> | 输出 |
| --- | --- | --- | --- | --- |
| `GLM-5.1 [官方8折][按量]` | ≤32k | ¥1.04（¥1.3） | ¥4.8（¥6） | ¥19.2（¥24） |
| `GLM-5.1 [官方8折][按量]` | 32k+ | ¥1.6（¥2） | ¥6.4（¥8） | ¥22.4（¥28） |
| `GLM-5.2 [官方8折][按量]` | 全部 | ¥1.6（¥2） | ¥6.4（¥8） | ¥22.4（¥28） |

> 单位：¥/百万 token，价格格式为**优惠价（官方价）**，本站按**官方 8 折**销售。官方价来源为[智谱官方价格页](https://bigmodel.cn/pricing)，GLM-5.1 输入长度 ≤32k 价格更低；以官方最新价格为准。

### Kimi

| 模型 ID | 计费单位 | 输入价格<br><small>缓存命中</small> | 输入价格<br><small>缓存未命中</small> | 输出价格 | 上下文窗口 |
| --- | --- | --- | --- | --- | --- |
| `Kimi-K2.6 [官方8折][按量]` | 1M tokens | ¥0.88（¥1.10） | ¥5.20（¥6.50） | ¥21.60（¥27.00） | 256K |
| `Kimi-K2.7-Code [官方8折][按量]` | 1M tokens | ¥1.04（¥1.30） | ¥5.20（¥6.50） | ¥21.60（¥27.00） | 256K |
| `Kimi-K3 [官方8折][按量]` | 1M tokens | ¥1.60（¥2.00） | ¥16.00（¥20.00） | ¥80.00（¥100.00） | 1M |

> 单位：¥/百万 token，价格格式为**优惠价（官方价）**，本站按**官方 8 折**销售。官方价来源为 [Kimi 官方定价文档](https://platform.kimi.com/docs/pricing/chat)。另：Kimi K2.7 Code 还有 **HighSpeed 高速版**（缓存命中 ¥2.60 / 未命中 ¥13.00 / 输出 ¥54.00），如需购买可联系店主。

### MiniMax

| 模型 ID | 输入长度 | 输入价格 | 输出价格 | 缓存读取 |
| --- | --- | --- | --- | --- |
| `MiniMax-M3 [官方8折][按量]` | ≤512k | ¥1.68（¥2.10） | ¥6.72（¥8.40） | ¥0.34（¥0.42） |
| `MiniMax-M3 [官方8折][按量]` | 512k+ | ¥3.36（¥4.20） | ¥13.44（¥16.80） | ¥0.67（¥0.84） |

> 单位：¥/百万 token，价格格式为**优惠价（官方价）**，本站按**官方 8 折**销售。官方价为[ MiniMax 官方计费文档](https://platform.minimaxi.com/docs/guides/pricing-paygo)的**标准档**价格（已含官方「永久五折」），输入长度 >512k 价格更高。

## Grok

| 模型 ID | 提示长度 | 输入<br><small>缓存命中</small> | 输入<br><small>缓存未命中</small> | 输出 |
| --- | --- | --- | --- | --- |
| `Grok-4.6/Heavy [按量][0.4x]` | <200K | ¥0.2（$0.50） | ¥0.8（$2.00） | ¥2.4（$6.00） |
| `Grok-4.6/Heavy [按量][0.4x]` | ≥200K | ¥0.4（$1.00） | ¥1.6（$4.00） | ¥4.8（$12.00） |

> 价格格式为**优惠价（官方价）**，本站按官方价 **0.4x** 销售（优惠价为人民币）。官方价为 xAI 定价（美元/百万 token）：提示 <200K 时输入 $2.00 / 缓存输入 $0.50 / 输出 $6.00；提示 ≥200K 时**整次请求**按长文本费率计费（$4.00 / $1.00 / $12.00）；以官方最新价格为准。

## 使用说明

- 具体接入方法见 [API使用教程](./)
- 客户端模型列表为空时，可手动输入模型的 ID
- 价格以购买页面实际显示为准
