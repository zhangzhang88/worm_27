# Zeabur 环境下 TTS 功能修复方案

## 问题描述
部署到 Zeabur 后，其他功能正常，但 TTS 语音生成功能失效。本地环境下 TTS 功能正常。

## 可能的原因
1. **网络限制**：Zeabur 环境可能限制了对外部 API 的访问（edge-tts 需要访问 Microsoft 服务器）
2. **权限问题**：虽然已将缓存目录改为 `/tmp/`，但可能仍然存在权限问题
3. **资源限制**：Zeabur 的免费服务可能有资源限制，导致 TTS 生成失败
4. **环境差异**：Zeabur 环境中的 Python 版本或依赖可能与本地环境不同
5. **日志缺失**：之前的错误日志不够详细，无法定位问题

## 解决方案

### 1. 检查 Zeabur 网络配置
- 确认 Zeabur 环境是否可以访问外部网络
- 检查是否需要配置代理或防火墙规则
- edge-tts 需要访问 `https://speech.platform.bing.com/`

### 2. 增强错误日志
我已经在 `backend/app.py` 中增强了错误日志记录，现在可以在 Zeabur 控制台查看详细的错误信息。

### 3. 检查 Zeabur 控制台日志
部署成功后，在 Zeabur 控制台查看后端服务的日志，特别是 TTS 相关的错误信息。

### 4. 测试 API 接口
使用 Postman 或 curl 直接测试 TTS API，查看具体的错误信息：
```bash
curl -X POST [Zeabur服务URL]/api/tts -H "Content-Type: application/json" -d '{"text":"Hello world","path":"test"}'
```

### 5. 备选方案：使用本地音频文件
如果 Zeabur 环境限制网络访问，可以将音频文件预先生成并上传到 public 目录：

1. 本地生成音频文件
2. 将音频文件上传到 `public/audio/` 目录
3. 修改前端代码直接播放本地音频文件

### 6. 使用其他 TTS 服务
如果 edge-tts 在 Zeabur 环境中无法工作，可以考虑使用其他 TTS 服务：
- Google Text-to-Speech
- Amazon Polly
- Baidu TTS

## 操作步骤
1. 在 Zeabur 上重新部署服务
2. 访问前端页面，测试 TTS 功能
3. 查看 Zeabur 控制台的错误日志
4. 根据错误信息调整配置

## 技术支持
如果问题仍然存在，可以：
1. 查看 Zeabur 文档：https://zeabur.com/docs
2. 联系 Zeabur 技术支持
3. 检查后端服务的健康状态：`[服务URL]/health`

## 已完成的修复
- 增强了 TTS 错误日志记录
- 使用 `/tmp/` 作为缓存目录，避免权限问题
- 支持 Zeabur 的 PORT 环境变量
- 提交了所有更改到 GitHub
