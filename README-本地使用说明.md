# 谭美玲个人简历网站｜本地文件

这个文件夹包含网站完整源码，以及网站中使用的个人照片、足球照片、作品图片和三条视频。

## 文件说明

- `app/page.tsx`：网站文字内容与页面结构
- `app/globals.css`：网站整体视觉样式
- `public/`：照片、视频、作品图片等素材
- `package.json`：项目依赖和运行命令
- `启动网站.command`：macOS 快速启动脚本

## 在 Mac 上打开网站

### 方法一：使用快速启动脚本

1. 电脑需要先安装 Node.js 22.13 或更高版本。
2. 双击 `启动网站.command`。
3. 首次启动会自动安装依赖，可能需要等待几分钟。
4. 终端出现本地网址后，在浏览器中打开该网址即可。

如果系统阻止脚本运行，可在终端进入此文件夹后运行：

```bash
chmod +x 启动网站.command
./启动网站.command
```

### 方法二：使用终端

进入本文件夹后依次运行：

```bash
npm install
npm run dev
```

然后在浏览器中打开终端显示的本地网址，通常为 `http://localhost:5173`。

## 修改网站

- 修改文字或调整页面板块：编辑 `app/page.tsx`
- 修改颜色、字号、间距和排版：编辑 `app/globals.css`
- 替换照片或视频：将新文件放入 `public/`，并同步修改 `app/page.tsx` 中的文件路径

## 注意事项

- 为减小压缩包体积，本文件夹没有包含 `node_modules` 依赖缓存；首次运行时需要联网执行 `npm install`。
- 网站素材仅用于个人简历及作品展示，请勿公开传播个人联系方式和未经授权的作品素材。
- 当前线上版本：https://tan-meiling-portfolio.sturdy-rice-4285.chatgpt.site
