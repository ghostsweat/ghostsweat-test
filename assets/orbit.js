export const Orbit = {
  init() {
    const canvas = document.getElementById('orb-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const orbs = [];
    for (let i = 0; i < 40; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 1,
        color: Math.random() > 0.5 ? '#a855ff33' : '#22d3ee33',
        speed: Math.random() * 0.5 + 0.1
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      orbs.forEach(orb => {
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r * 20, 0, Math.PI * 2);
        ctx.fillStyle = orb.color;
        ctx.fill();
        orb.y -= orb.speed;
        if (orb.y < -50) orb.y = canvas.height + 50;
      });
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
};
