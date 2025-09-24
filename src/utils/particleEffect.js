// src/utils/particleEffect.js
export const createParticleSystem = (containerId, particleCount, color) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const canvas = document.createElement('canvas');
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
  container.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  const particles = [];
  
  // 初始化粒子
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: color
    });
  }
  
  // 绘制粒子
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });
    
    requestAnimationFrame(draw);
  };
  
  // 更新粒子位置
  const update = () => {
    particles.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX = -particle.speedX;
      }
      
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY = -particle.speedY;
      }
    });
    
    requestAnimationFrame(update);
  };
  
  // 响应窗口大小变化
  const handleResize = () => {
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  };
  
  window.addEventListener('resize', handleResize);
  
  // 启动动画
  draw();
  update();
  
  // 返回清理函数
  return () => {
    window.removeEventListener('resize', handleResize);
    container.removeChild(canvas);
  };
};