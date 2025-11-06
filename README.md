# Claude Agent SDK Command-Line Chat Demo
# Claude Agent SDK 命令行对话 Demo

## 💎 Use Your Claude Pro/Max Subscription Quota to Call SDK and API!
## 💎 用你的 Claude Pro/Max 订阅额度来调用 SDK 和 API！

**No separate payment needed! No token-based billing! Use your existing Claude Pro/Max subscription quota directly!**

**不用单独付费！不用按 Token 计费！直接使用你现有的 Claude Pro/Max 订阅额度！**

This project demonstrates how to use **OAuth Token** authentication to leverage your Claude Pro/Max account quota for SDK and API calls. Say goodbye to expensive per-token pricing and make full use of your fixed monthly subscription!

这个项目展示如何通过 **OAuth Token** 认证，让你的 Claude Pro/Max 账户额度用于 SDK 和 API 调用。告别昂贵的按 Token 付费，充分利用你已经订阅的固定月费额度！

**Includes complete implementations in both TypeScript and Python** - Choose your preferred language and get started immediately!

**包含 TypeScript 和 Python 两个完整实现** - 选择你熟悉的语言，立即开始！

---

### 💰 Cost Comparison
### 💰 成本对比

| Method | Pricing Model | Best For |
|--------|--------------|----------|
| **OAuth Token (This Project)** | Uses Pro/Max subscription quota, **no extra cost** | ✅ Existing Pro/Max subscribers |
| Traditional API Key | Pay per token usage, **charged for every call** | Enterprise large-scale applications |

| 方式 | 费用模式 | 适用场景 |
|------|---------|---------|
| **OAuth Token (本项目)** | 使用 Pro/Max 订阅额度，**无额外费用** | ✅ 已有 Pro/Max 订阅的用户 |
| 传统 API Key | 按 Token 使用量计费，**每次调用都要钱** | 企业大规模应用 |

**If you're already a Claude Pro ($20/month) or Max ($200/month) user, why pay extra for API calls?**

**如果你已经是 Claude Pro ($20/月) 或 Max ($200/月) 用户，为什么还要为 API 调用额外付费？**

## 📁 Project Structure
## 📁 项目结构

```
claude-chat-demo/
├── ts_demo/          # TypeScript/JavaScript version
│   ├── index.js
│   ├── package.json
│   ├── .env.example
│   └── README.md
├── py_demo/          # Python version
│   ├── main.py
│   ├── requirements.txt
│   ├── .env.example
│   └── README.md
└── README.md         # This file
```

## 🎯 Features
## 🎯 功能特性

- ✅ OAuth Token authentication support (recommended for Claude Pro/Max users)
- ✅ API Key authentication support
- ✅ Simple command-line interface
- ✅ Real-time conversation experience
- ✅ Both TypeScript and Python implementations

- ✅ 支持 OAuth Token 认证（推荐用于 Claude Pro/Max 用户）
- ✅ 支持 API Key 认证
- ✅ 简单的命令行交互界面
- ✅ 实时对话体验
- ✅ 提供 TypeScript 和 Python 两种实现

## 🚀 Quick Start
## 🚀 快速开始

### TypeScript Version
### TypeScript 版本

**Prerequisites**: Node.js 18+

**前置要求**: Node.js 18+

```bash
cd ts_demo
npm install
cp .env.example .env
# Edit .env file, add CLAUDE_CODE_OAUTH_TOKEN or ANTHROPIC_API_KEY
# 编辑 .env 文件，添加 CLAUDE_CODE_OAUTH_TOKEN 或 ANTHROPIC_API_KEY
npm start
```

For detailed instructions, see [ts_demo/README.md](ts_demo/README.md)

详细说明请查看 [ts_demo/README.md](ts_demo/README.md)

### Python Version
### Python 版本

**Prerequisites**: Python 3.8+

**前置要求**: Python 3.8+

```bash
cd py_demo
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
cp .env.example .env
# Edit .env file, add CLAUDE_CODE_OAUTH_TOKEN or ANTHROPIC_API_KEY
# 编辑 .env 文件，添加 CLAUDE_CODE_OAUTH_TOKEN 或 ANTHROPIC_API_KEY
python main.py
```

For detailed instructions, see [py_demo/README.md](py_demo/README.md)

详细说明请查看 [py_demo/README.md](py_demo/README.md)

## 🔑 Authentication Setup
## 🔑 认证配置

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

# 3. Copy the generated token and add it to .env file
# 3. 复制生成的 token，添加到 .env 文件
CLAUDE_CODE_OAUTH_TOKEN=your-oauth-token-here
```

### Method B: Using API Key
### 方法 B：使用 API Key

Get an API Key from [Anthropic Console](https://console.anthropic.com):

从 [Anthropic Console](https://console.anthropic.com) 获取 API Key：

```env
ANTHROPIC_API_KEY=sk-ant-your-api-key-here
```

## 💬 Usage Example
## 💬 使用示例

```
🤖 Claude Agent SDK Command-Line Chat Demo
🤖 Claude Agent SDK 命令行对话 Demo
==================================================

✅ SDK initialized
✅ SDK 已初始化
💡 Tip: Type "exit" or "quit" to exit
💡 提示：输入 "exit" 或 "quit" 退出对话

You: Hello, introduce yourself
你: 你好，介绍一下自己
🤔 Claude is thinking...
🤔 Claude 正在思考...

Claude: Hello! I'm Claude, an AI assistant developed by Anthropic...
Claude: 你好！我是 Claude，由 Anthropic 开发的 AI 助手...

You: Write a bubble sort in Python
你: 用 Python 写一个冒泡排序
🤔 Claude is thinking...
🤔 Claude 正在思考...

Claude: Here's a bubble sort implementation:...
Claude: 好的，这是一个冒泡排序的实现：...

You: exit
你: exit
👋 Goodbye!
👋 再见！
```

## 📝 Environment Variables
## 📝 环境变量说明

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

## ❓ FAQ
## ❓ 常见问题

### Q: What's the difference between OAuth Token and API Key?
### Q: OAuth Token 和 API Key 有什么区别？

- **OAuth Token**: For Claude Pro/Max users, uses subscription quota, fixed cost
- **API Key**: Pay-per-use pricing, suitable for developers and enterprises

- **OAuth Token**: 适用于 Claude Pro/Max 用户，使用订阅的配额，成本固定
- **API Key**: 按使用量付费，适合开发者和企业用户

### Q: How do I get an OAuth Token?
### Q: 如何获取 OAuth Token？

Run the `claude setup-token` command, which will open a browser for authentication and then output the token in the terminal.

运行 `claude setup-token` 命令，它会打开浏览器进行认证，然后在终端输出 token。

### Q: What if I get an "Invalid API key" error?
### Q: 提示 "Invalid API key" 错误怎么办？

1. Check if the token/key in `.env` file is correctly copied
2. If using OAuth Token, try running `claude setup-token` to get a new one
3. Ensure there are no extra spaces or newlines in the token/key

1. 检查 `.env` 文件中的 token/key 是否正确复制
2. 如果使用 OAuth Token，尝试运行 `claude setup-token` 重新获取
3. 确保 token/key 没有多余的空格或换行符

### Q: Which version should I choose?
### Q: 我应该选择哪个版本？

- **TypeScript version**: If you're familiar with Node.js/JavaScript ecosystem
- **Python version**: If you prefer Python development environment

- **TypeScript 版本**: 如果你熟悉 Node.js/JavaScript 生态
- **Python 版本**: 如果你更习惯 Python 开发环境

Both versions have identical functionality - choose whichever you're most comfortable with.

两个版本功能完全相同，选择你最熟悉的即可。

### Q: Which models are supported?
### Q: 支持哪些模型？

You can configure the `MODEL` variable in `.env` file. Supported models include:

可以在 `.env` 文件中配置 `MODEL` 变量，支持的模型包括：

- `claude-sonnet-4-5-20250929` (default, latest)
- `claude-3-5-sonnet-20241022`
- `claude-3-opus-20240229`
- And more

- `claude-sonnet-4-5-20250929` (默认，最新)
- `claude-3-5-sonnet-20241022`
- `claude-3-opus-20240229`
- 等等

## 🛠️ Tech Stack
## 🛠️ 技术栈

### TypeScript Version
### TypeScript 版本

- **Node.js**: JavaScript runtime environment
- **@anthropic-ai/claude-agent-sdk**: Claude Agent SDK (v0.1.30)
- **dotenv**: Environment variable management
- **readline**: Node.js built-in module for command-line interaction

- **Node.js**: JavaScript 运行环境
- **@anthropic-ai/claude-agent-sdk**: Claude Agent SDK (v0.1.30)
- **dotenv**: 环境变量管理
- **readline**: Node.js 内置模块，用于命令行交互

### Python Version
### Python 版本

- **Python 3.8+**: Programming language
- **claude-agent-sdk**: Claude Agent SDK Python version
- **python-dotenv**: Environment variable management

- **Python 3.8+**: 编程语言
- **claude-agent-sdk**: Claude Agent SDK Python 版本
- **python-dotenv**: 环境变量管理

## 📄 License
## 📄 许可证

MIT

## 🔗 Related Links
## 🔗 相关链接

- [Claude Agent SDK Documentation](https://docs.claude.com/en/api/agent-sdk/overview)
- [Claude Agent SDK TypeScript Reference](https://docs.claude.com/en/api/agent-sdk/typescript)
- [Claude Agent SDK Python GitHub](https://github.com/anthropics/claude-agent-sdk-python)
- [Anthropic Console](https://console.anthropic.com)
- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code)

- [Claude Agent SDK 文档](https://docs.claude.com/en/api/agent-sdk/overview)
- [Claude Agent SDK TypeScript 参考](https://docs.claude.com/en/api/agent-sdk/typescript)
- [Claude Agent SDK Python GitHub](https://github.com/anthropics/claude-agent-sdk-python)
- [Anthropic Console](https://console.anthropic.com)
- [Claude Code 文档](https://docs.claude.com/en/docs/claude-code)
