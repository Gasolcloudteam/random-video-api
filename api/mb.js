const mbList = [
  "https://tu.xingchencloud.top/img/background/bg_mb_1.mp4",
  "https://tu.xingchencloud.top/img/background/bg_mb_2.mp4"
];

export default function handler(req, res) {
  const randomUrl = mbList[Math.floor(Math.random() * mbList.length)];
  res.writeHead(302, {
    Location: randomUrl,
    "Cache-Control": "no-store, no-cache, must-revalidate",
    "X-Content-Type-Options": "nosniff",
  });
  res.end();
}

export const config = { method: ["GET", "HEAD"] };
