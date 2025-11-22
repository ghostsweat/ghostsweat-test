import { Orbit } from './orbit.js';

// Init background orbs
Orbit.init();

// GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate everything on scroll
document.querySelectorAll('.fade-up').forEach(el => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleClass: 'visible'
    }
  });
});

// Live ticket fake data (updates every few seconds)
const picks = [
  { slot: "P1", player: "Seat 3 · Loose Aggro", score: 18.3 },
  { slot: "P2", player: "Seat 6 · City Pro", score: 29.1 },
  { slot: "CPT", player: "Seat 8 · Table Captain", score: 58.8 }
];

function updateTicket() {
  const html = `
    <div class="text-center mb-10 fade-up">
      <h3 class="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Friday Feature Table</h3>
      <p class="text-sm opacity-70 mt-3">Pick 3 + Captain (2× points) · 1,247 entries</p>
    </div>
    ${picks.map(p => `
      <div class="flex justify-between items-center py-6 border-b border-white/10 fade-up">
        <div>
          <span class="text-cyan-400 font-bold text-2xl">${p.slot}</span>
          <span class="ml-6 text-lg">${p.player}</span>
        </div>
        <span class="text-4xl font-black text-cyan-300">${p.score.toFixed(1)}</span>
      </div>
    `).join('')}
    <div class="mt-10 flex justify-between items-end fade-up">
      <div>
        <div class="text-sm opacity-70">Entry cost</div>
        <div class="text-3xl font-bold">2,500 Sweat</div>
      </div>
      <div class="text-right">
        <div class="text-sm opacity-70">1st place prize</div>
        <div class="text-6xl font-black bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">250 Souls</div>
      </div>
    </div>
  `;
  document.getElementById('ticket-content').innerHTML = html;

  // Random score bumps
  picks.forEach(p => {
    if (Math.random() > 0.6) p.score += Math.random() * 12 - 3;
    if (p.score < 0) p.score = 0;
  });
}

setInterval(updateTicket, 5000);
updateTicket();
