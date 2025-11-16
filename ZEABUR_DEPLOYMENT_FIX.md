# Zeabur 部署失败修复方案

## 问题分析
Zeabur 部署失败提示："The specified Root Directory does not exist"，当前根目录设置为 `backend/`。

## 原因排查
1. **文件结构检查**：
   - backend 目录存在，包含 app.py、Procfile、requirements.txt 和 Dockerfile
   - 后端服务配置文件位置正确

2. **端口配置**：
   - 原来的 app.py 使用固定端口 5001
   - Zeabur 使用 PORT 环境变量分配端口
   - 已修复：应用现在会读取 PORT 环境变量

3. **根目录配置**：
   - 部署指南要求填写 `backend/`（带斜杠）
   - 但 Zeabur 可能对路径格式敏感

4. **音频缓存路径**：
   - 原来的缓存路径是 `backend/audio_cache/`
   - 在 Zeabur 容器中可能没有写权限
   - 已修复：使用 `/tmp/` 作为缓存目录

## 修复方案

### 1. 已完成的修复
- **端口配置修复**：
  ```python
  # 使用 Zeabur 提供的 PORT 环境变量
  port = int(os.environ.get('PORT', 5001))
  app.run(debug=True, host='0.0.0.0', port=port)
  ```

- **音频缓存路径修复**：
  ```python
  # 使用系统临时目录作为缓存，避免权限问题
  safe_cache_dir = os.path.join('/tmp', cache_dir)
  ```

### 2. 需要在 Zeabur 上执行的操作
- **根目录设置**：尝试两种格式
  - 格式1：`backend/`（带斜杠，部署指南推荐）
  - 格式2：`backend`（不带斜杠，可能解决路径解析问题）

- **环境变量**：
  - 不需要额外环境变量，应用会自动适配

- **部署检查**：
  - 查看部署日志，确认根目录是否被正确识别
  - 确认应用使用了正确的端口

## 验证步骤
1. 在 Zeabur 上重新部署，尝试不同的根目录格式
2. 部署成功后，访问 `[服务URL]/health` 检查健康状态
3. 测试 TTS API：发送 POST 请求到 `[服务URL]/api/tts`

## 备份方案
如果仍然失败，可以尝试：
1. 检查 GitHub 仓库是否包含所有必要文件
2. 确保分支正确（通常是 main 分支）
3. 重新创建 Zeabur 服务，确保所有配置正确

## 常见问题
1. **根目录不存在**：
   - 确保根目录填写正确
   - 检查 GitHub 仓库是否包含 backend 目录

2. **应用无法访问**：
   - 检查端口是否正确
   - 查看部署日志中的错误信息

3. **TTS 无法生成音频**：
   - 检查音频缓存路径权限
   - 确认 edge-tts 依赖是否正确安装
