#!/bin/bash

cd "$(dirname "$0")" || exit 1

if ! command -v node >/dev/null 2>&1; then
  echo "未检测到 Node.js。请先安装 Node.js 22.13 或更高版本，然后重新运行。"
  read -r -p "按回车键关闭窗口。"
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "首次启动：正在安装网站依赖，请稍候……"
  npm install || {
    echo "依赖安装失败，请检查网络后重试。"
    read -r -p "按回车键关闭窗口。"
    exit 1
  }
fi

echo "网站正在启动。请在浏览器中打开终端显示的本地网址。"
npm run dev
