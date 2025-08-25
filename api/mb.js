const mbList = [
  "https://tu.xingchencloud.top/img/background/bg_mb_1.mp4",
  "https://tu.xingchencloud.top/img/background/bg_mb_2.mp4"
];

export default function handler(req, res) {
  const randomUrl = mbList[Math.floor(Math.random() * mbList.length)];
  res.writeHead(302, { Location: randomUrl });
  res.end();
}
