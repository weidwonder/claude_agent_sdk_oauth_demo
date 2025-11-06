import 'dotenv/config';
import { query } from '@anthropic-ai/claude-agent-sdk';
import * as readline from 'node:readline';

// 创建 readline 接口用于命令行交互
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 提示用户输入的辅助函数
function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  console.log('🤖 Claude Agent SDK 命令行对话 Demo');
  console.log('='.repeat(50));

  // 检查认证凭据
  if (!process.env.CLAUDE_CODE_OAUTH_TOKEN && !process.env.ANTHROPIC_API_KEY) {
    console.error('❌ 错误：未找到认证凭据！');
    console.error('请在 .env 文件中设置 CLAUDE_CODE_OAUTH_TOKEN 或 ANTHROPIC_API_KEY');
    console.error('\n获取 OAuth Token：');
    console.error('  1. 运行命令：claude setup-token');
    console.error('  2. 复制生成的 token');
    console.error('  3. 设置到 .env 文件中');
    process.exit(1);
  }

  console.log('\n✅ SDK 已初始化');
  console.log('💡 提示：输入 "exit" 或 "quit" 退出对话\n');

  // 对话循环
  while (true) {
    try {
      // 获取用户输入
      const userInput = await prompt('你: ');

      // 检查退出命令
      if (userInput.trim().toLowerCase() === 'exit' ||
          userInput.trim().toLowerCase() === 'quit') {
        console.log('\n👋 再见！');
        break;
      }

      // 跳过空输入
      if (!userInput.trim()) {
        continue;
      }

      // 发送查询到 Claude Agent
      console.log('\n🤔 Claude 正在思考...\n');

      // 使用 query 函数并处理流式响应
      let resultText = '';

      for await (const msg of query({
        prompt: userInput,
        options: {
          maxTurns: 1  // 限制为单轮对话
        }
      })) {
        if (msg.type === 'result') {
          resultText = msg.result;
        }
      }

      console.log('Claude:', resultText);
      console.log('');

    } catch (error) {
      console.error('\n❌ 错误:', error.message);

      // 如果是认证错误，提供详细说明
      if (error.message.includes('authentication') ||
          error.message.includes('Invalid API key')) {
        console.error('\n💡 认证失败，请检查：');
        console.error('1. CLAUDE_CODE_OAUTH_TOKEN 是否有效（运行 claude setup-token 重新获取）');
        console.error('2. ANTHROPIC_API_KEY 是否正确（从 https://console.anthropic.com 获取）');
      }

      console.log('');
    }
  }

  // 关闭 readline 接口
  rl.close();
}

// 运行主函数
main().catch((error) => {
  console.error('程序运行出错:', error);
  process.exit(1);
});
