# Claude Agent SDK - TypeScript Demo

[中文文档](README_zh.md)

A command-line chat demo using **Claude Agent SDK** in TypeScript/JavaScript.

## Features

- OAuth Token authentication (recommended for Claude Pro/Max users)
- API Key authentication
- Simple command-line interface
- Real-time conversation experience

## Requirements

- Node.js 18+ (ESM support required)
- Claude Pro/Max subscription (for OAuth Token) or Anthropic API Key

## Installation

1. **Install dependencies**

```bash
npm install
```

2. **Configure environment variables**

Create a `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

### Method A: OAuth Token (Recommended)

If you have a Claude Pro or Claude Max subscription:

```bash
# 1. Install Claude CLI (if not already installed)
npm install -g @anthropic-ai/claude-code

# 2. Get OAuth Token
claude setup-token

# 3. Copy the generated token and edit .env file
CLAUDE_CODE_OAUTH_TOKEN=your-oauth-token-here
```

### Method B: API Key

Get your API Key from [Anthropic Console](https://console.anthropic.com):

```env
ANTHROPIC_API_KEY=sk-ant-your-api-key-here
```

## Usage

Start the chat program:

```bash
npm start
```

Example conversation:

```
You: Hello, introduce yourself
Claude: Hello! I'm Claude...

You: exit
👋 Goodbye!
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `CLAUDE_CODE_OAUTH_TOKEN` | OAuth Token (from `claude setup-token`) | Either/Or |
| `ANTHROPIC_API_KEY` | API Key (from Anthropic Console) | Either/Or |
| `MODEL` | Model to use, default: `claude-sonnet-4-5-20250929` | No |

## Tech Stack

- **Node.js**: JavaScript runtime
- **@anthropic-ai/claude-agent-sdk**: Claude Agent SDK (v0.1.30)
- **dotenv**: Environment variable management
- **readline**: Node.js built-in module for CLI interaction

## Related Links

- [Claude Agent SDK Documentation](https://docs.claude.com/en/api/agent-sdk/overview)
- [Claude Agent SDK TypeScript Reference](https://docs.claude.com/en/api/agent-sdk/typescript)
