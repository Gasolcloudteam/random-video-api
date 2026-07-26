const YEAR = new Date().getFullYear();

export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=60, s-maxage=300");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.statusCode = 200;
  res.end(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#0D1117">
<link rel="preconnect" href="https://tu.xingchencloud.top" crossorigin>
<title>叶玖洛の随机视频API</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ink:#0F1419;--paper:#0D1117;--card:#161B22;--cyan:#58A6FF;--green:#3FB950;--dim:#8B949E;--border:#30363D;--glow:rgba(88,166,255,.12)}
html{color-scheme:dark}
body{font-family:-apple-system,'Segoe UI',system-ui,sans-serif;font-size:16px;line-height:1.6;color:#E6EDF3;background:var(--paper);min-height:100vh;display:flex;flex-direction:column;align-items:center;padding:2rem 1rem;-webkit-font-smoothing:antialiased}
.wrap{max-width:640px;width:100%}
.hero{text-align:center;margin-bottom:2.5rem}
.badge{display:inline-flex;align-items:center;gap:.4rem;font-size:.75rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--green);background:rgba(63,185,80,.1);border:1px solid rgba(63,185,80,.25);border-radius:999px;padding:.25rem .75rem;margin-bottom:1rem}
.badge::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--green);animation:pulse 2s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
@media(prefers-reduced-motion:reduce){.badge::before{animation:none}}
h1{font-family:'SF Mono','Cascadia Code',Consolas,monospace;font-size:clamp(1.5rem,4vw,2rem);font-weight:700;letter-spacing:-.02em;color:#F0F6FC;margin-bottom:.5rem}
.sub{color:var(--dim);font-size:.95rem;max-width:420px;margin:0 auto}
.cards{display:flex;flex-direction:column;gap:1rem}
.card{position:relative;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:1.25rem 1.5rem;transition:border-color .2s,box-shadow .2s}
.card:hover{border-color:var(--cyan);box-shadow:0 0 0 1px var(--glow),0 4px 24px rgba(0,0,0,.3)}
.card-label{font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--dim);margin-bottom:.5rem}
.endpoint{font-family:'SF Mono','Cascadia Code',Consolas,monospace;font-size:1.05rem;color:var(--cyan);text-decoration:none;display:flex;align-items:center;justify-content:space-between;gap:.75rem;word-break:break-all}
.endpoint:hover{text-decoration:underline}
.copy-btn{flex-shrink:0;background:var(--border);border:none;border-radius:6px;color:var(--dim);font-size:.7rem;padding:.3rem .6rem;cursor:pointer;font-family:inherit;transition:background .15s,color .15s}
.copy-btn:hover{background:var(--cyan);color:var(--ink)}
.copy-btn:focus-visible{outline:2px solid var(--cyan);outline-offset:2px}
.copy-btn.copied{background:var(--green);color:var(--ink)}
.card-desc{color:var(--dim);font-size:.85rem;margin-top:.6rem}
footer{margin-top:3rem;text-align:center;color:var(--dim);font-size:.8rem;border-top:1px solid var(--border);padding-top:1.5rem;width:100%}
footer a{color:var(--cyan);text-decoration:none}
footer a:hover{text-decoration:underline}
@media(max-width:480px){body{padding:1.5rem .75rem}.card{padding:1rem 1.15rem}}
</style>
</head>
<body>
<div class="wrap">
<section class="hero">
<div class="badge"><span></span>Online</div>
<h1>叶玖洛の随机视频API</h1>
<p class="sub">随机视频跳转接口 — 每次请求返回一个随机视频地址</p>
</section>
<section class="cards">
<div class="card">
<div class="card-label">Mobile</div>
<a class="endpoint" href="/api/mb"><span>/api/mb</span><button class="copy-btn" onclick="copyEndpoint(this,'/api/mb')" aria-label="Copy">Copy</button></a>
<p class="card-desc">302 重定向到随机手机视频</p>
</div>
<div class="card">
<div class="card-label">Desktop</div>
<a class="endpoint" href="/api/pc"><span>/api/pc</span><button class="copy-btn" onclick="copyEndpoint(this,'/api/pc')" aria-label="Copy">Copy</button></a>
<p class="card-desc">302 重定向到随机电脑视频</p>
</div>
</section>
<footer><p>&copy; 2024–${YEAR} <a href="https://list.xingchencloud.top/" target="_blank" rel="noopener">叶玖洛</a></p></footer>
</div>
<script>
function copyEndpoint(b,t){var u=location.origin+t;if(navigator.clipboard){navigator.clipboard.writeText(u).then(function(){b.textContent='Copied';b.classList.add('copied');setTimeout(function(){b.textContent='Copy';b.classList.remove('copied')},1500)})}else{var i=document.createElement('input');i.value=u;document.body.appendChild(i);i.select();document.execCommand('copy');document.body.removeChild(i);b.textContent='Copied';b.classList.add('copied');setTimeout(function(){b.textContent='Copy';b.classList.remove('copied')},1500)}}
</script>
</body>
</html>`);
}
