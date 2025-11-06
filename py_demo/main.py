#!/usr/bin/env python3
"""
Claude Agent SDK 命令行对话 Demo - Python 版本
"""

import os
import sys
import asyncio
from dotenv import load_dotenv
from claude_agent_sdk import query, AssistantMessage, ResultMessage, TextBlock

async def main():
    """主函数"""
    # 加载环境变量
    load_dotenv()

    print("🤖 Claude Agent SDK 命令行对话 Demo (Python)")
    print("=" * 50)

    # 检查认证凭据
    oauth_token = os.getenv('CLAUDE_CODE_OAUTH_TOKEN')
    api_key = os.getenv('ANTHROPIC_API_KEY')

    if not oauth_token and not api_key:
        print("❌ 错误：未找到认证凭据！")
        print("请在 .env 文件中设置 CLAUDE_CODE_OAUTH_TOKEN 或 ANTHROPIC_API_KEY")
        print("\n获取 OAuth Token：")
        print("  1. 运行命令：claude setup-token")
        print("  2. 复制生成的 token")
        print("  3. 设置到 .env 文件中")
        sys.exit(1)

    print("\n✅ SDK 已初始化")
    print("💡 提示：输入 'exit' 或 'quit' 退出对话\n")

    # 对话循环
    while True:
        try:
            # 获取用户输入
            user_input = input("你: ").strip()

            # 检查退出命令
            if user_input.lower() in ['exit', 'quit']:
                print("\n👋 再见！")
                break

            # 跳过空输入
            if not user_input:
                continue

            # 发送查询到 Claude Agent
            print("\n🤔 Claude 正在思考...\n")

            # 使用 query 函数并处理异步流式响应
            response_text = ""

            async for message in query(prompt=user_input):
                # 处理助手消息
                if isinstance(message, AssistantMessage):
                    for block in message.content:
                        if isinstance(block, TextBlock):
                            response_text += block.text

                # 处理结果消息
                elif isinstance(message, ResultMessage):
                    if message.result:
                        response_text = message.result

            if response_text:
                print(f"Claude: {response_text}")
            print()

        except KeyboardInterrupt:
            print("\n\n👋 再见！")
            break
        except Exception as error:
            print(f"\n❌ 错误: {str(error)}")

            # 如果是认证错误，提供详细说明
            if 'authentication' in str(error).lower() or 'invalid api key' in str(error).lower():
                print("\n💡 认证失败，请检查：")
                print("1. CLAUDE_CODE_OAUTH_TOKEN 是否有效（运行 claude setup-token 重新获取）")
                print("2. ANTHROPIC_API_KEY 是否正确（从 https://console.anthropic.com 获取）")

            print()


if __name__ == "__main__":
    asyncio.run(main())
