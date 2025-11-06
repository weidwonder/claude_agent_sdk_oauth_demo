# Claude Agent SDK - Python Demo
# Claude Agent SDK - Python 演示

## 💎 Use Claude Pro/Max Subscription Quota for SDK - No Extra Payment!
## 💎 用 Claude Pro/Max 订阅额度调用 SDK - 无需额外付费！

This is a Python command-line chat application using **Claude Agent SDK**. Authenticate with OAuth Token to use your Claude Pro/Max subscription quota directly, no separate payment needed for API calls!

这是使用 **Claude Agent SDK** 的 Python 版本命令行对话程序。通过 OAuth Token 认证，直接使用你的 Claude Pro/Max 订阅额度，无需为 API 调用单独付费！

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

- Python 3.8+
- Claude Pro/Max subscription (for OAuth Token) or Anthropic API Key

- Python 3.8+
- Claude Pro/Max 订阅（用于 OAuth Token）或 Anthropic API Key

## Installation Steps
## 安装步骤

**1. Create a virtual environment (recommended)**

**1. 创建虚拟环境（推荐）**

```bash
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
# or / 或
venv\Scripts\activate  # Windows
```

**2. Install dependencies**

**2. 安装依赖**

```bash
pip install -r requirements.txt
```

**3. Configure environment variables**

**3. 配置环境变量**

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
python main.py
```

Or add execute permission and run directly:

或者给脚本添加执行权限后直接运行：

```bash
chmod +x main.py
./main.py
```

Example conversation:

示例对话：

```
You: Hello, introduce yourself
你: 你好，介绍一下自己
Claude: Hello! I'm Claude...
Claude: 你好！我是 Claude...

You: Write a quicksort in Python
你: 用 Python 写一个快速排序
Claude: Here's a quicksort implementation...
Claude: 好的，这是一个快速排序的实现...

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

## FAQ
## 常见问题

### Q: How to exit the program?
### Q: 如何退出程序？

Type `exit` or `quit`, or press `Ctrl+C`.

输入 `exit` 或 `quit`，或者按 `Ctrl+C`。

### Q: Python version requirements?
### Q: Python 版本要求？

Requires Python 3.8 or higher.

需要 Python 3.8 或更高版本。

### Q: Is a virtual environment required?
### Q: 虚拟环境是必须的吗？

Not required, but strongly recommended to isolate project dependencies.

不是必须的，但强烈推荐使用虚拟环境来隔离项目依赖。

## Tech Stack
## 技术栈

- **Python 3.8+**: Programming language
- **claude-agent-sdk**: Claude Agent SDK Python version
- **python-dotenv**: Environment variable management

- **Python 3.8+**: 编程语言
- **claude-agent-sdk**: Claude Agent SDK Python 版本
- **python-dotenv**: 环境变量管理

## Project Structure
## 项目结构

```
py_demo/
├── main.py              # Main program file
├── requirements.txt     # Python dependencies list
├── .env.example        # Environment variables example
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

```
py_demo/
├── main.py              # 主程序文件
├── requirements.txt     # Python 依赖列表
├── .env.example        # 环境变量示例
├── .gitignore          # Git 忽略文件
└── README.md           # 项目说明文档
```

## Related Links
## 相关链接

- [Claude Agent SDK Documentation](https://docs.claude.com/en/api/agent-sdk/overview)
- [Claude Agent SDK Python GitHub](https://github.com/anthropics/claude-agent-sdk-python)
- [Anthropic Console](https://console.anthropic.com)

- [Claude Agent SDK 文档](https://docs.claude.com/en/api/agent-sdk/overview)
- [Claude Agent SDK Python GitHub](https://github.com/anthropics/claude-agent-sdk-python)
- [Anthropic Console](https://console.anthropic.com)
