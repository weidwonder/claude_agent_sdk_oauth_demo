# Claude Agent SDK - Python Demo

## 💎 用 Claude Pro/Max 订阅额度调用 SDK - 无需额外付费！

这是使用 **Claude Agent SDK** 的 Python 版本命令行对话程序。通过 OAuth Token 认证，直接使用你的 Claude Pro/Max 订阅额度，无需为 API 调用单独付费！

## 功能特性

- ✅ **OAuth Token 认证** - 使用 Pro/Max 订阅额度，零额外成本
- ✅ 支持传统 API Key 认证（如果你有的话）
- ✅ 简单的命令行交互界面
- ✅ 实时对话体验

## 前置要求

- Python 3.8+
- Claude Pro/Max 订阅（用于 OAuth Token）或 Anthropic API Key

## 安装步骤

1. **创建虚拟环境（推荐）**

```bash
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
# 或
venv\Scripts\activate  # Windows
```

2. **安装依赖**

```bash
pip install -r requirements.txt
```

3. **配置环境变量**

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
python main.py
```

或者给脚本添加执行权限后直接运行：

```bash
chmod +x main.py
./main.py
```

示例对话：

```
你: 你好，介绍一下自己
Claude: 你好！我是 Claude...

你: 用 Python 写一个快速排序
Claude: 好的，这是一个快速排序的实现...

你: exit
👋 再见！
```

## 环境变量说明

| 变量名 | 说明 | 必需 |
|--------|------|------|
| `CLAUDE_CODE_OAUTH_TOKEN` | OAuth Token（从 `claude setup-token` 获取） | 二选一 |
| `ANTHROPIC_API_KEY` | API Key（从 Anthropic Console 获取） | 二选一 |
| `MODEL` | 使用的模型，默认 `claude-sonnet-4-5-20250929` | 否 |

## 常见问题

### Q: 如何退出程序？

输入 `exit` 或 `quit`，或者按 `Ctrl+C`。

### Q: Python 版本要求？

需要 Python 3.8 或更高版本。

### Q: 虚拟环境是必须的吗？

不是必须的，但强烈推荐使用虚拟环境来隔离项目依赖。

## 技术栈

- **Python 3.8+**: 编程语言
- **claude-agent-sdk**: Claude Agent SDK Python 版本
- **python-dotenv**: 环境变量管理

## 项目结构

```
py_demo/
├── main.py              # 主程序文件
├── requirements.txt     # Python 依赖列表
├── .env.example        # 环境变量示例
├── .gitignore          # Git 忽略文件
└── README.md           # 项目说明文档
```

## 相关链接

- [Claude Agent SDK 文档](https://docs.claude.com/en/api/agent-sdk/overview)
- [Claude Agent SDK Python GitHub](https://github.com/anthropics/claude-agent-sdk-python)
- [Anthropic Console](https://console.anthropic.com)
