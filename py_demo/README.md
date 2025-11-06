# Claude Agent SDK - Python Demo

[中文文档](README_zh.md)

A command-line chat demo using **Claude Agent SDK** in Python.

## Features

- OAuth Token authentication (recommended for Claude Pro/Max users)
- API Key authentication
- Simple command-line interface
- Real-time conversation experience

## Requirements

- Python 3.8+
- Claude Pro/Max subscription (for OAuth Token) or Anthropic API Key

## Installation

1. **Create virtual environment (recommended)**

```bash
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
# or
venv\Scripts\activate  # Windows
```

2. **Install dependencies**

```bash
pip install -r requirements.txt
```

3. **Configure environment variables**

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
python main.py
```

Or make the script executable and run directly:

```bash
chmod +x main.py
./main.py
```

Example conversation:

```
You: Hello, introduce yourself
Claude: Hello! I'm Claude...

You: Write a quick sort in Python
Claude: Here's a quick sort implementation...

You: exit
👋 Goodbye!
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `CLAUDE_CODE_OAUTH_TOKEN` | OAuth Token (from `claude setup-token`) | Either/Or |
| `ANTHROPIC_API_KEY` | API Key (from Anthropic Console) | Either/Or |
| `MODEL` | Model to use, default: `claude-sonnet-4-5-20250929` | No |

## FAQ

### Q: How to exit the program?

Type `exit` or `quit`, or press `Ctrl+C`.

### Q: Python version requirements?

Python 3.8 or higher is required.

### Q: Is a virtual environment required?

Not required, but strongly recommended to isolate project dependencies.

## Tech Stack

- **Python 3.8+**: Programming language
- **claude-agent-sdk**: Claude Agent SDK Python version
- **python-dotenv**: Environment variable management

## Project Structure

```
py_demo/
├── main.py              # Main program file
├── requirements.txt     # Python dependencies
├── .env.example        # Environment variable example
├── .gitignore          # Git ignore file
├── README.md           # This file (English)
└── README_zh.md        # Chinese documentation
```

## Related Links

- [Claude Agent SDK Documentation](https://docs.claude.com/en/api/agent-sdk/overview)
- [Claude Agent SDK Python GitHub](https://github.com/anthropics/claude-agent-sdk-python)
- [Anthropic Console](https://console.anthropic.com)
