# Claude Agent SDK - TypeScript Demo
# Claude Agent SDK - TypeScript 演示

## 💎 Use Claude Pro/Max Subscription Quota for SDK - No Extra Payment!
## 💎 用 Claude Pro/Max 订阅额度调用 SDK - 无需额外付费！

This is a TypeScript/JavaScript command-line chat application using **Claude Agent SDK**. Authenticate with OAuth Token to use your Claude Pro/Max subscription quota directly, no separate payment needed for API calls!

这是使用 **Claude Agent SDK** 的 TypeScript/JavaScript 版本命令行对话程序。通过 OAuth Token 认证，直接使用你的 Claude Pro/Max 订阅额度，无需为 API 调用单独付费！

## Features
## 功能特性

- ✅ **OAuth Token Authentication** - Use Pro/Max subscription quota, zero extra cost
- ✅ Traditional API Key authentication support (if you have one)
- ✅ Simple command-line interface
- ✅ Real-time conversation experience

- ✅ **OAuth Token 认证** - 使用 Pro/Max 订阅额度，零额外成本
- ✅ 支持传统 API Key 认证（如果你有的话）
- ✅ 简单的命令行交互界面
- ✅ 实时对话体验

## Prerequisites
## 前置要求

- Node.js 18+ (ES Modules support required)
- Claude Pro/Max subscription (for OAuth Token) or Anthropic API Key

- Node.js 18+ (需要支持 ES Modules)
- Claude Pro/Max 订阅（用于 OAuth Token）或 Anthropic API Key

## Installation Steps
## 安装步骤

**1. Install dependencies**

**1. 安装依赖**

```bash
npm install
```

**2. Configure environment variables**

**2. 配置环境变量**

Create a `.env` file (you can copy from `.env.example`):

创建 `.env` 文件（可以从 `.env.example` 复制）：

```bash
cp .env.example .env
```

### Method A: Using OAuth Token (Recommended)
### 方法 A：使用 OAuth Token（推荐）

If you have a Claude Pro or Claude Max subscription:

如果你有 Claude Pro 或 Claude Max 订阅：

```bash
# 1. Install Claude CLI (if not already installed)
# 1. 安装 Claude CLI（如果还没安装）
npm install -g @anthropic-ai/claude-code

# 2. Get OAuth Token
# 2. 获取 OAuth Token
claude setup-token

# 3. Copy the generated token and edit .env file
# 3. 复制生成的 token，然后编辑 .env 文件
CLAUDE_CODE_OAUTH_TOKEN=your-oauth-token-here
```

### Method B: Using API Key
### 方法 B：使用 API Key

Get an API Key from [Anthropic Console](https://console.anthropic.com):

从 [Anthropic Console](https://console.anthropic.com) 获取 API Key：

```env
ANTHROPIC_API_KEY=sk-ant-your-api-key-here
```

## Usage
## 使用方法

Start the chat application:

启动对话程序：

```bash
npm start
```

Example conversation:

示例对话：

```
You: Hello, introduce yourself
你: 你好，介绍一下自己
Claude: Hello! I'm Claude...
Claude: 你好！我是 Claude...

You: exit
你: exit
👋 Goodbye!
👋 再见！
```

## Environment Variables
## 环境变量说明

| Variable | Description | Required |
|----------|-------------|----------|
| `CLAUDE_CODE_OAUTH_TOKEN` | OAuth Token (get via `claude setup-token`) | Either this |
| `ANTHROPIC_API_KEY` | API Key (get from Anthropic Console) | or this |
| `MODEL` | Model to use, default `claude-sonnet-4-5-20250929` | No |

| 变量名 | 说明 | 必需 |
|--------|------|------|
| `CLAUDE_CODE_OAUTH_TOKEN` | OAuth Token（从 `claude setup-token` 获取） | 二选一 |
| `ANTHROPIC_API_KEY` | API Key（从 Anthropic Console 获取） | 二选一 |
| `MODEL` | 使用的模型，默认 `claude-sonnet-4-5-20250929` | 否 |

## Tech Stack
## 技术栈

- **Node.js**: JavaScript runtime environment
- **@anthropic-ai/claude-agent-sdk**: Claude Agent SDK (v0.1.30)
- **dotenv**: Environment variable management
- **readline**: Node.js built-in module for command-line interaction

- **Node.js**: JavaScript 运行环境
- **@anthropic-ai/claude-agent-sdk**: Claude Agent SDK (v0.1.30)
- **dotenv**: 环境变量管理
- **readline**: Node.js 内置模块，用于命令行交互

## Related Links
## 相关链接

- [Claude Agent SDK Documentation](https://docs.claude.com/en/api/agent-sdk/overview)
- [Claude Agent SDK TypeScript Reference](https://docs.claude.com/en/api/agent-sdk/typescript)

- [Claude Agent SDK 文档](https://docs.claude.com/en/api/agent-sdk/overview)
- [Claude Agent SDK TypeScript 参考](https://docs.claude.com/en/api/agent-sdk/typescript)
