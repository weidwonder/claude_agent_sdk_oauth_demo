# Claude Agent SDK CLI Chat Demo

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Python Version](https://img.shields.io/badge/python-%3E%3D3.8-blue)](https://www.python.org/)
[![Claude Agent SDK](https://img.shields.io/badge/Claude%20Agent%20SDK-v0.1.30-purple)](https://docs.claude.com/en/api/agent-sdk/overview)
[![Anthropic](https://img.shields.io/badge/Powered%20by-Anthropic-orange)](https://www.anthropic.com/)

[中文文档](README_zh.md)

A simple command-line chat demo using **Claude Agent SDK** with **OAuth Token** authentication, available in both **TypeScript** and **Python** versions.

## 📁 Project Structure

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
├── README.md         # This file (English)
└── README_zh.md      # Chinese documentation
```

## 🎯 Features

- ✅ OAuth Token authentication (recommended for Claude Pro/Max users)
- ✅ API Key authentication
- ✅ Simple command-line interface
- ✅ Real-time conversation experience
- ✅ Available in both TypeScript and Python

## 🚀 Quick Start

### TypeScript Version

**Requirements**: Node.js 18+

```bash
cd ts_demo
npm install
cp .env.example .env
# Edit .env file and add your CLAUDE_CODE_OAUTH_TOKEN or ANTHROPIC_API_KEY
npm start
```

See [ts_demo/README.md](ts_demo/README.md) for detailed instructions.

### Python Version

**Requirements**: Python 3.8+

```bash
cd py_demo
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
# or: venv\Scripts\activate  # Windows
pip install -r requirements.txt
cp .env.example .env
# Edit .env file and add your CLAUDE_CODE_OAUTH_TOKEN or ANTHROPIC_API_KEY
python main.py
```

See [py_demo/README.md](py_demo/README.md) for detailed instructions.

## 🔑 Authentication Setup

### Method A: OAuth Token (Recommended)

If you have a Claude Pro or Claude Max subscription:

```bash
# 1. Install Claude CLI (if not already installed)
npm install -g @anthropic-ai/claude-code

# 2. Get OAuth Token
claude setup-token

# 3. Copy the generated token and add to .env file
CLAUDE_CODE_OAUTH_TOKEN=your-oauth-token-here
```

### Method B: API Key

Get your API Key from [Anthropic Console](https://console.anthropic.com):

```env
ANTHROPIC_API_KEY=sk-ant-your-api-key-here
```

## 💬 Usage Example

```
🤖 Claude Agent SDK CLI Chat Demo
==================================================

✅ SDK initialized
💡 Tip: Type 'exit' or 'quit' to exit

You: Hello, introduce yourself
🤔 Claude is thinking...

Claude: Hello! I'm Claude, an AI assistant developed by Anthropic...

You: Write a bubble sort in Python
🤔 Claude is thinking...

Claude: Here's a bubble sort implementation:...

You: exit
👋 Goodbye!
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `CLAUDE_CODE_OAUTH_TOKEN` | OAuth Token (from `claude setup-token`) | Either/Or |
| `ANTHROPIC_API_KEY` | API Key (from Anthropic Console) | Either/Or |
| `MODEL` | Model to use, default: `claude-sonnet-4-5-20250929` | No |

## ❓ FAQ

### Q: What's the difference between OAuth Token and API Key?

- **OAuth Token**: For Claude Pro/Max users, uses subscription quota, fixed cost
- **API Key**: Pay-per-use, suitable for developers and enterprises

### Q: How to get an OAuth Token?

Run `claude setup-token` command, which will open a browser for authentication and output the token in the terminal.

### Q: Getting "Invalid API key" error?

1. Check if the token/key in `.env` file is correctly copied
2. If using OAuth Token, try running `claude setup-token` to get a new one
3. Ensure there are no extra spaces or line breaks in the token/key

### Q: Which version should I choose?

- **TypeScript version**: If you're familiar with Node.js/JavaScript ecosystem
- **Python version**: If you prefer Python development environment

Both versions have identical functionality - choose the one you're most comfortable with.

### Q: Which models are supported?

You can configure the `MODEL` variable in `.env` file. Supported models include:
- `claude-sonnet-4-5-20250929` (default, latest)
- `claude-3-5-sonnet-20241022`
- `claude-3-opus-20240229`
- And more

## 🛠️ Tech Stack

### TypeScript Version
- **Node.js**: JavaScript runtime
- **@anthropic-ai/claude-agent-sdk**: Claude Agent SDK (v0.1.30)
- **dotenv**: Environment variable management
- **readline**: Node.js built-in module for CLI interaction

### Python Version
- **Python 3.8+**: Programming language
- **claude-agent-sdk**: Claude Agent SDK Python version
- **python-dotenv**: Environment variable management

## 📄 License

MIT

## 🔗 Related Links

- [Claude Agent SDK Documentation](https://docs.claude.com/en/api/agent-sdk/overview)
- [Claude Agent SDK TypeScript Reference](https://docs.claude.com/en/api/agent-sdk/typescript)
- [Claude Agent SDK Python GitHub](https://github.com/anthropics/claude-agent-sdk-python)
- [Anthropic Console](https://console.anthropic.com)
- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code)
