# 后端查看 TTS 运行状态指南

## 一、Zeabur 控制台查看实时日志

### 步骤 1：进入 Zeabur 服务页面
在提供的截图中，您已经处于 `worm-27` 服务的页面。

### 步骤 2：点击「日志」按钮
在页面右侧可以看到「日志」按钮（带有记事本图标），点击进入日志查看界面。

### 步骤 3：过滤 TTS 相关日志
在日志页面中：
1. 点击「搜索」图标（通常是放大镜图标）
2. 输入关键词：`TTS`、`text_to_speech` 或 `error`
3. 日志会自动过滤出与 TTS 相关的内容

### 步骤 4：分析 TTS 运行状态
- **正常情况**：会看到类似 `127.0.0.1 - - [16/Nov/2025 16:48:03] "GET /health HTTP/1.1" 200 -` 的成功请求日志
- **异常情况**：会看到包含 `error` 的日志信息，例如网络错误、权限错误等

## 二、通过 API 测试 TTS 功能

### 步骤 1：获取 Zeabur 服务 URL
在 Zeabur 服务页面中，找到「Add Domain」按钮附近的服务 URL（通常是类似 `https://xxxx.zeabur.app` 的格式）。

### 步骤 2：使用 curl 测试 TTS API
在本地终端执行以下命令：
```bash
curl -X POST [服务URL]/api/tts -H "Content-Type: application/json" -d '{"text":"Hello world","path":"test"}'
```

### 步骤 3：查看返回结果
- **成功**：返回音频文件内容或 200 状态码
- **失败**：返回包含错误信息的 JSON 响应

## 三、常见 TTS 问题排查

### 1. 网络问题
```
Failed to generate audio: HTTPConnectionPool(host='speech.platform.bing.com', port=443): Max retries exceeded
```
解决方案：
- 检查 Zeabur 环境是否可以访问外部网络
- 确认 Microsoft TTS 服务是否正常

### 2. 权限问题
```
Failed to generate audio: [Errno 13] Permission denied: '/tmp/test'
```
解决方案：
- 检查缓存目录权限
- 确认使用 `/tmp/` 目录是否有写入权限

### 3. 参数错误
```
No text or path provided
```
解决方案：
- 确认 API 请求参数是否正确
- 确保请求包含 `text` 和 `path` 字段

## 四、本地后端调试（可选）

如果您需要在本地调试 TTS 功能：

### 步骤 1：停止 Zeabur 后端服务（可选）
```bash
pkill -f "python3 app.py"
```

### 步骤 2：本地启动后端服务
```bash
cd backend && python3 app.py
```

### 步骤 3：测试 TTS API
```bash
curl -X POST http://localhost:5001/api/tts -H "Content-Type: application/json" -d '{"text":"Hello world","path":"test"}'
```

### 步骤 4：查看本地日志
在终端可以看到实时的 TTS 运行日志，便于调试。

## 五、联系支持
如果您无法解决问题：
1. 复制完整的错误日志
2. 联系 Zeabur 技术支持
3. 或分享日志给开发人员分析
