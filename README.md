# 叶玖洛の随机视频API

一个轻量级的随机视频跳转接口，每次请求返回一个随机的视频地址（302 重定向）。适用于网站背景视频、随机壁纸、视频轮播等场景。

## 功能特性

- 随机跳转：每次请求从视频池中随机选取一个视频 URL
- 即时响应：302 重定向，无额外等待
- 安全配置：内置 X-Content-Type-Options、X-Frame-Options 等安全响应头

## 接口说明

| 接口路径 | 说明 |
|---------|------|
| `GET /api/mb` | 随机跳转到手机视频 |
| `GET /api/pc` | 随机跳转到电脑视频 |

### 请求方式

- 方法：`GET` 或 `HEAD`
- 无需认证，无需参数

### 响应格式

- 状态码：`302 Found`
- 响应头：`Location` 包含随机视频的完整 URL
- 缓存策略：`no-store`（确保每次返回不同结果）

## 使用示例

### 浏览器直接访问

```
https://your-domain.vercel.app/api/mb
https://your-domain.vercel.app/api/pc
```

### JavaScript

```js
const response = await fetch('/api/mb', { redirect: 'follow' });
const videoUrl = response.url;
console.log(videoUrl);
```

### Python

```python
import requests

response = requests.get('https://your-domain.vercel.app/api/mb', allow_redirects=False)
video_url = response.headers['Location']
print(video_url)
```

### cURL

```bash
# 获取重定向地址
curl -I https://your-domain.vercel.app/api/mb

# 跟随重定向获取最终 URL
curl -Ls -o /dev/null -w '%{url_effective}' https://your-domain.vercel.app/api/mb
```

### HTML video 标签

```html
<video autoplay muted loop>
  <source src="https://your-domain.vercel.app/api/mb" type="video/mp4">
</video>
```

## 视频源

当前视频池来自 `tu.xingchencloud.top`：

- 手机视频：2 个
- 电脑视频：5 个

如需添加更多视频，修改 `api/mb.js` 或 `api/pc.js` 中的数组即可。

## 项目结构

```
├── api/
│   ├── index.js      # 首页（API 使用说明页面）
│   ├── mb.js         # 手机视频跳转
│   └── pc.js         # 电脑视频跳转
├── vercel.json       # Vercel 部署配置
└── package.json
```

## 部署到 Vercel

### 方法一：GitHub 集成

1. Fork 本仓库到你的 GitHub 账号
2. 登录 [Vercel](https://vercel.com)，点击「New Project」
3. 选择「Import Git Repository」，选择刚 Fork 的仓库
4. 点击「Deploy」，等待部署完成
5. 部署成功后获得 `*.vercel.app` 域名

### 方法二：Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### 自定义域名

1. 在 Vercel 控制台进入项目设置
2. 点击「Domains」
3. 输入你的域名并按提示配置 DNS

## 常见问题

### 如何添加新的视频源？

编辑对应的视频列表文件：

```js
// api/mb.js 或 api/pc.js
const videoList = [
  "https://example.com/video1.mp4",
  "https://example.com/video2.mp4",
];
```

### 有请求频率限制吗？

Vercel 免费版每月 100,000 次请求。

### 支持哪些视频格式？

返回的是 URL，不限制格式。实际支持取决于调用方，MP4、WebM 等常见格式均可。

## 技术栈

- Vercel Serverless Functions（Node.js）
- 纯 HTML/CSS/JS，无外部依赖
