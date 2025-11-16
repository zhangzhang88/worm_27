# Zeabur 根目录设置错误修复方案

## 问题分析
Zeabur 部署失败，错误提示：
```
⚠️ The specified Root Directory does not exist
Your current Root Directory setting is: backend/
```

## 原因排查
根据 GitHub 仓库结构检查，`backend/` 目录确实存在于仓库根目录。但 Zeabur 在解析根目录时可能对格式有特殊要求。

## 解决方案

### 1. 修改根目录设置格式
在 Zeabur 控制台的「设置」页面，将根目录从 `backend/`（带斜杠）修改为 `backend`（不带斜杠）。

### 2. 检查 Procfile 配置
确保 `Procfile` 位于 `backend/` 目录下，并且内容正确：
```
web: python3 app.py
```

### 3. 重新部署
修改根目录设置后，点击「重新部署」按钮再次尝试部署。

## 验证步骤
1. 登录 Zeabur 控制台
2. 进入 `worm-27` 项目的后端服务页面
3. 点击顶部的「设置」标签
4. 在「根目录」输入框中将 `backend/` 改为 `backend`
5. 点击「保存」按钮
6. 回到「服务状态」页面，点击「重新部署」
7. 等待部署完成，查看日志确认是否成功

## 其他可能的问题
如果修改根目录格式后仍然失败，可以尝试：
1. 检查仓库是否已将所有文件提交到 GitHub
2. 确认分支是否正确
3. 查看详细的部署日志，找出其他可能的错误

## 技术支持
如果问题仍然存在，可以：
1. 查看 Zeabur 官方文档：https://zeabur.com/docs/deploy/root-directory
2. 联系 Zeabur 技术支持
3. 分享部署日志给开发人员分析
