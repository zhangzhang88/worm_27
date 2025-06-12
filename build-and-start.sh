#!/bin/bash

# 终止可能已经运行的进程
pkill -f "python3 backend/app.py"
pkill -f "next"

# 构建前端
echo "开始构建前端..."
npm run build

# 启动后端服务器
cd backend
source myenv/bin/activate
python3 app.py &

# 等待后端服务器完全启动
sleep 2

# 返回项目根目录并启动生产模式的前端服务器
cd ..
npm start 