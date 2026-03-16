// אפקט חלקיקים רקע דינמי (Canvas)
window.addEventListener('DOMContentLoaded', () => {
  const bg = document.querySelector('.animated-bg');
  if (!bg) return;
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'absolute';
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.zIndex = 1;
  bg.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 1.7 + Math.random() * 2.2,
      dx: Math.random() * 0.8 - 0.4,
      dy: Math.random() * 0.8 - 0.4,
      color: `rgba(${80+Math.floor(Math.random()*60)},${170+Math.floor(Math.random()*50)},${244+Math.floor(Math.random()*20)},0.65)`
    });
  }
  function anim() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,2*Math.PI,false);
      ctx.fillStyle=p.color;
      ctx.shadowBlur=14;
      ctx.shadowColor="#40aff4";
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x<0||p.x>canvas.width) p.dx*=-1;
      if (p.y<0||p.y>canvas.height) p.dy*=-1;
    });
    requestAnimationFrame(anim);
  }
  anim();
  window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
