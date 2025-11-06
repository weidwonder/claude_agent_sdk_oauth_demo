# Claude Agent SDK - TypeScript Demo

[English Documentation](README.md)

## 💎 用 Claude Pro/Max 订阅额度调用 SDK - 无需额外付费！

这是使用 **Claude Agent SDK** 的 TypeScript/JavaScript 版本命令行对话程序。通过 OAuth Token 认证，直接使用你的 Claude Pro/Max 订阅额度，无需为 API 调用单独付费！

## 功能特性

- ✅ **OAuth Token 认证** - 使用 Pro/Max 订阅额度，零额外成本
- ✅ 支持传统 API Key 认证（如果你有的话）
- ✅ 简单的命令行交互界面
- ✅ 实时对话体验

## 前置要求

- Node.js 18+ (需要支持 ES Modules)
- Claude Pro/Max 订阅（用于 OAuth Token）或 Anthropic API Key

## 安装步骤

1. **安装依赖**

```bash
npm install
```

2. **配置环境变量**

创建 `.env` 文件（可以从 `.env.example` 复制）：

```bash
cp .env.example .env
```

### 方法 A：使用 OAuth Token（推荐）

如果你有 Claude Pro 或 Claude Max 订阅：

```bash
# 1. 安装 Claude CLI（如果还没安装）
npm install -g @anthropic-ai/claude-code

# 2. 获取 OAuth Token
claude setup-token

# 3. 复制生成的 token，然后编辑 .env 文件
CLAUDE_CODE_OAUTH_TOKEN=your-oauth-token-here
```

### 方法 B：使用 API Key

从 [Anthropic Console](https://console.anthropic.com) 获取 API Key：

```env
ANTHROPIC_API_KEY=sk-ant-your-api-key-here
```

## 使用方法

启动对话程序：

```bash
npm start
```

示例对话：

```
你: 你好，介绍一下自己
Claude: 你好！我是 Claude...

你: exit
👋 再见！
```

## 环境变量说明

| 变量名 | 说明 | 必需 |
|--------|------|------|
| `CLAUDE_CODE_OAUTH_TOKEN` | OAuth Token（从 `claude setup-token` 获取） | 二选一 |
| `ANTHROPIC_API_KEY` | API Key（从 Anthropic Console 获取） | 二选一 |
| `MODEL` | 使用的模型，默认 `claude-sonnet-4-5-20250929` | 否 |

## 技术栈

- **Node.js**: JavaScript 运行环境
- **@anthropic-ai/claude-agent-sdk**: Claude Agent SDK (v0.1.30)
- **dotenv**: 环境变量管理
- **readline**: Node.js 内置模块，用于命令行交互

## 相关链接

- [Claude Agent SDK 文档](https://docs.claude.com/en/api/agent-sdk/overview)
- [Claude Agent SDK TypeScript 参考](https://docs.claude.com/en/api/agent-sdk/typescript)
