# Worm 27 - 智能语音课程系统

这是一个基于 Next.js 和 Flask 的全栈应用程序，提供课程内容展示和文本转语音（TTS）功能。

## 技术栈

### 前端
- Next.js 14
- React
- TypeScript
- Tailwind CSS

### 后端
- Python Flask
- edge-tts (文本转语音)

## 系统要求

- Node.js 18+ 
- Python 3.8+
- npm 或 yarn

## 安装步骤

1. 克隆仓库：
```bash
git clone https://github.com/zhangzhang88/worm_27.git
cd worm_27
```

2. 安装前端依赖：
```bash
npm install
```

3. 设置后端环境：
```bash
cd backend
python3 -m venv myenv
source myenv/bin/activate  # Windows 使用: .\myenv\Scripts\activate
pip install flask flask-cors edge-tts
cd ..
```

## 运行方式

项目提供两种运行模式，每种模式都有对应的一键启动脚本：

### 1. 开发模式（用于开发和生成 TTS 音频）

```bash
./dev.sh
```

这个脚本会：
- 激活 Python 虚拟环境
- 启动后端服务器（端口 5001）
- 启动前端开发服务器（端口 3000）
- 支持热重载

### 2. 生产模式（用于测试构建版本）

```bash
./build-and-start.sh
```

这个脚本会：
- 构建前端代码
- 激活 Python 虚拟环境
- 启动后端服务器
- 以生产模式启动前端服务器

## 访问应用

- 开发模式：http://localhost:3000
- 生产模式：http://localhost:3000

## 目录结构

```
worm_27/
├── app/                # Next.js 前端代码
├── backend/           # Flask 后端代码
│   ├── app.py        # 主后端应用
│   └── audio_cache/  # TTS 音频文件缓存
├── components/        # React 组件
├── public/           # 静态资源
├── dev.sh           # 开发模式启动脚本
└── build-and-start.sh # 生产模式启动脚本
```

## 注意事项

1. 首次运行开发模式时，系统会自动生成 TTS 音频文件
2. 音频文件会缓存在 backend/audio_cache 目录中
3. 如果遇到端口冲突，可以修改 backend/app.py 中的端口号
4. 确保在运行脚本之前赋予执行权限：`chmod +x dev.sh build-and-start.sh`

## 常见问题

1. 如果遇到 "端口 5000 被占用" 错误：
   - 这是因为 macOS 的 AirPlay 服务占用了该端口
   - 系统已默认使用 5001 端口来避免此问题

2. 如果 TTS 没有声音：
   - 检查浏览器控制台是否有错误信息
   - 确认后端服务器正在运行
   - 检查 audio_cache 目录是否有音频文件生成

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT

新用户下载后

第一步：
npm install

第二步：
cd backend && python3 -m venv myenv && source myenv/bin/activate && pip install flask flask-cors edge-tts

第三步：
cd .. && chmod +x dev.sh build-and-start.sh

cd app/courses/courseId_14 && python3 lesson.py

第四步：
./dev.sh  或者  ./build-and-start.sh


我们需要一起提交所有修改和新增的文件。让我们先查看当前的 git 状态，看看有哪些文件被修改或新增
cd /Users/world/Downloads/worm_27 && git status

我们可以使用 git add . 命令一次性添加所有修改和新增的文件，然后提交并推送到 GitHub：
cd /Users/world/Downloads/worm_27 && git add .

现在所有文件都已添加到暂存区。接下来，让我们创建一个提交并添加提交信息：
git commit -m "添加 lesson.py 脚本及生成的 TypeScript 文件，修复格式问题"

提交成功！现在让我们将这些更改推送到 GitHub 仓库：
git push origin main

太好了！所有更改已成功推送到 GitHub 仓库。现在让我们验证一下当前的 git 状态，确保没有遗漏任何文件：
git status

