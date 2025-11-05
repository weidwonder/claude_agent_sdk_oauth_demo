# Claude Agent SDK 命令行对话 Demo

这是一个使用 **Claude Agent SDK** 和 **OAuth Token** 认证的简易命令行对话程序示例。

## 功能特性

- 支持 OAuth Token 认证（推荐用于 Claude Pro/Max 用户）
- 支持 API Key 认证
- 简单的命令行交互界面
- 实时对话体验

## 前置要求

- Node.js 18+ (需要支持 ES Modules)
- Claude Pro/Max 订阅（用于 OAuth Token）或 Anthropic API Key

## 安装步骤

1. **克隆或下载项目**

```bash
cd claude-chat-demo
```

2. **安装依赖**

```bash
npm install
```

3. **配置环境变量**

创建 `.env` 文件（可以从 `.env.example` 复制）：

```bash
cp .env.example .env
```

### 方法 A：使用 OAuth Token（推荐）

如果你有 Claude Pro 或 Claude Max 订阅，可以使用 OAuth Token：

```bash
# 1. 安装 Claude CLI（如果还没安装）
npm install -g @anthropic-ai/claude-code

# 2. 获取 OAuth Token
claude setup-token

# 3. 复制生成的 token，然后编辑 .env 文件
CLAUDE_CODE_OAUTH_TOKEN=your-oauth-token-here
```

### 方法 B：使用 API Key

从 [Anthropic Console](https://console.anthropic.com) 获取 API Key，然后编辑 `.env` 文件：

```env
ANTHROPIC_API_KEY=sk-ant-your-api-key-here
```

## 使用方法

启动对话程序：

```bash
npm start
```

然后就可以开始与 Claude 对话了：

```
你: 你好，介绍一下自己
Claude: 你好！我是 Claude，由 Anthropic 开发的 AI 助手...

你: 帮我解释一下什么是递归
Claude: 递归是一种编程技术...

你: exit
👋 再见！
```

## 项目结构

```
claude-chat-demo/
├── index.js           # 主程序文件
├── package.json       # 项目配置和依赖
├── .env.example       # 环境变量示例
├── .env              # 你的环境变量配置（需要自己创建）
└── README.md         # 项目说明文档
```

## 环境变量说明

| 变量名 | 说明 | 必需 |
|--------|------|------|
| `CLAUDE_CODE_OAUTH_TOKEN` | OAuth Token（从 `claude setup-token` 获取） | 二选一 |
| `ANTHROPIC_API_KEY` | API Key（从 Anthropic Console 获取） | 二选一 |
| `MODEL` | 使用的模型，默认 `claude-sonnet-4-5-20250929` | 否 |

## 常见问题

### Q: OAuth Token 和 API Key 有什么区别？

- **OAuth Token**: 适用于 Claude Pro/Max 用户，使用订阅的配额，成本固定
- **API Key**: 按使用量付费，适合开发者和企业用户

### Q: 如何获取 OAuth Token？

运行 `claude setup-token` 命令，它会打开浏览器进行认证，然后在终端输出 token。

### Q: 提示 "Invalid API key" 错误怎么办？

1. 检查 `.env` 文件中的 token/key 是否正确复制
2. 如果使用 OAuth Token，尝试运行 `claude setup-token` 重新获取
3. 确保 token/key 没有多余的空格或换行符

### Q: 支持哪些模型？

可以在 `.env` 文件中配置 `MODEL` 变量，支持的模型包括：
- `claude-sonnet-4-5-20250929` (默认)
- `claude-3-5-sonnet-20241022`
- `claude-3-opus-20240229`
- 等等

## 技术栈

- **Node.js**: JavaScript 运行环境
- **@anthropic-ai/claude-agent-sdk**: Claude Agent SDK
- **dotenv**: 环境变量管理
- **readline**: Node.js 内置模块，用于命令行交互

## 许可证

MIT

## 相关链接

- [Claude Agent SDK 文档](https://docs.claude.com/en/api/agent-sdk/overview)
- [Anthropic Console](https://console.anthropic.com)
- [Claude Code 文档](https://docs.claude.com/en/docs/claude-code)
