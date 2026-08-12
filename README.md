# 谭美玲｜个人简历与作品集

个人简历与作品集网站，基于 Next.js App Router 构建，可直接部署到 Vercel。

## 本地运行

需要 Node.js 22.x。

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:3000`。

## 构建检查

```bash
npm run lint
npm run build
```

## 部署到 Vercel

1. 在 Vercel 中导入 GitHub 仓库 `TTling-11/ttling-11`。
2. Framework Preset 选择或自动识别为 **Next.js**。
3. Root Directory 保持仓库根目录 `.`。
4. Build Command、Output Directory 和 Install Command 均保持默认设置。
5. 当前项目不需要配置环境变量，点击 Deploy 即可。

`package.json` 已固定使用 Vercel 支持的 Node.js 22.x，并采用标准的 `next build` 构建流程。

## 视频与静态资源

- 三条作品视频位于 `public/portfolio/`，通过根路径 `/portfolio/*.mp4` 访问。
- 视频采用 MP4 容器、H.264 视频编码和 AAC 音频编码，并进行了 Fast Start 处理，适合浏览器渐进式播放。
- 页面使用原生 `<video>` 控件、海报图、`playsInline` 和 `preload="metadata"`，兼容桌面端及移动端浏览器。
- 当前全部项目源文件约 17 MB，低于 Vercel Hobby 方案 100 MB 的静态文件上传限制。

如果以后继续增加大量或高清长视频，建议将视频迁移至 Vercel Blob、对象存储或专业视频平台，以减少代码仓库体积和部署流量。

## 主要目录

- `app/`：页面结构、元数据与全局样式
- `public/`：个人照片、足球照片、作品图片和视频
- `next.config.ts`：缓存与安全响应头配置
