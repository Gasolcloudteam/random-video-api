export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.statusCode = 200;
  res.end(`
    <h2>叶玖洛的随机视频 API 使用方法</h2>
    <p>访问 <code>/api/mb</code> → 随机跳转到手机视频</p>
    <p>访问 <code>/api/pc</code> → 随机跳转到电脑视频</p>
    <p>示例：</p>
    <ul>
      <li><a href="/api/mb">/api/mb</a></li>
      <li><a href="/api/pc">/api/pc</a></li>
    </ul>
  `);
}
