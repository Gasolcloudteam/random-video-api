const pcList = [
  "https://tu.xingchencloud.top/img/background/bg_pc_1.mp4",
  "https://tu.xingchencloud.top/img/background/bg_pc_2.mp4",
  "https://tu.xingchencloud.top/img/background/bg_pc_3.mp4",
  "https://tu.xingchencloud.top/img/background/bg_pc_4.mp4",
  "https://tu.xingchencloud.top/img/background/bg_pc_5.mp4"
];

export default function handler(req, res) {
  const randomUrl = pcList[Math.floor(Math.random() * pcList.length)];
  res.writeHead(302, { Location: randomUrl });
  res.end();
}
