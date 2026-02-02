// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================
// ================================================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Will You Be My Valentine? 💝</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💝</text></svg>">
  <style>
    :root {
      --bg-start: #ffafbd;
      --bg-end: #ffc3a0;
      --primary: #ff6b6b;
      --primary-hover: #ff8787;
      --text: #ff4757;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      min-height: 100vh;
      background: linear-gradient(135deg, var(--bg-start), var(--bg-end));
      font-family: system-ui, -apple-system, sans-serif;
      color: var(--text);
      overflow-x: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      z-index: 10;
    }
    h1, h2 {
      margin: 20px 0;
      text-shadow: 0 2px 10px rgba(0,0,0,0.15);
    }
    button {
      padding: 14px 32px;
      margin: 12px;
      font-size: 1.3rem;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      background: var(--primary);
      color: white;
      box-shadow: 0 4px 15px rgba(255,107,107,0.4);
      transition: all 0.3s ease;
    }
    button:hover {
      background: var(--primary-hover);
      transform: translateY(-3px);
    }
    #noBtn {
      background: #999;
    }
    #loveMeter {
      width: 100%;
      height: 20px;
      margin: 20px 0;
      background: #eee;
      border-radius: 10px;
      overflow: hidden;
    }
    #meterFill {
      height: 100%;
      width: 0%;
      background: linear-gradient(to right, #ff6b6b, #ff4757);
      transition: width 0.4s ease;
    }
    .floating {
      position: absolute;
      font-size: 2.5rem;
      pointer-events: none;
      animation: float 12s infinite linear;
      opacity: 0.75;
    }
    @keyframes float {
      0%   { transform: translateY(110vh) rotate(0deg); }
      100% { transform: translateY(-30vh) rotate(720deg); }
    }
    #musicToggle {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 100;
      padding: 10px 20px;
      font-size: 1rem;
      background: rgba(255,255,255,0.35);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.5);
      border-radius: 50px;
    }
    #celebration {
      display: none;
      font-size: 2.8rem;
      animation: bounce 1.2s infinite;
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-25px); }
    }
  </style>
</head>
<body>

  <button id="musicToggle">🎵 Play Music</button>

  <div class="container">
    <h1>Hey Tonpangmenla oversmart sleeping without me na... 💖</h1>

    <div id="q1">
      <h2>Do you like me? 🥺</h2>
      <button id="yes1">Yes</button>
      <button id="no1">No</button>
      <p id="secret" style="margin-top:15px; opacity:0; transition:opacity 0.5s;">
        (hover secret: I don't like you... I LOVE YOU! ❤️)
      </p>
    </div>

    <div id="q2" style="display:none;">
      <h2>How much do you love me? 💕</h2>
      <div id="loveMeter"><div id="meterFill"></div></div>
      <p id="meterText">This much! (0%)</p>
      <button id="next2">Next ❤️</button>
    </div>

    <div id="q3" style="display:none;">
      <h2>Will you be my Valentine on February 14th, 2026? 🌹</h2>
      <button id="yesFinal">Yes!</button>
      <button id="noFinal">No</button>
    </div>

    <div id="celebration">
      <h2>YAYYYY! 🎉💝💖💓</h2>
      <p>I'm the luckiest person alive! Come get your big hug + kiss 😘</p>
    </div>
  </div>

  <audio id="bgMusic" loop>
    <source src="https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3" type="audio/mpeg">
  </audio>

  <script>
    // Music control
    const music = document.getElementById('bgMusic');
    const toggle = document.getElementById('musicToggle');
    toggle.addEventListener('click', () => {
      if (music.paused) {
        music.volume = 0.4;
        music.play().catch(() => console.log("Autoplay blocked"));
        toggle.textContent = '🔇 Stop Music';
      } else {
        music.pause();
        toggle.textContent = '🎵 Play Music';
      }
    });

    // Floating hearts & bears
    const emojis = ['❤️', '💖', '💝', '💗', '💓', '🧸', '🐻'];
    function createFloat() {
      const el = document.createElement('div');
      el.className = 'floating';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.animationDuration = (10 + Math.random() * 10) + 's';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 25000);
    }
    setInterval(createFloat, 600);

    // Secret hover
    const secret = document.getElementById('secret');
    const no1 = document.getElementById('no1');
    if (no1 && secret) {
      no1.addEventListener('mouseenter', () => secret.style.opacity = '1');
      no1.addEventListener('mouseleave', () => secret.style.opacity = '0');
    }

    // Question flow
    document.getElementById('yes1')?.addEventListener('click', () => {
      document.getElementById('q1').style.display = 'none';
      document.getElementById('q2').style.display = 'block';
    });

    // Love meter
    let loveLevel = 0;
    const meterFill = document.getElementById('meterFill');
    const meterText = document.getElementById('meterText');
    document.addEventListener('mousemove', () => {
      if (document.getElementById('q2').style.display !== 'none') {
        loveLevel = Math.min(9999, loveLevel + 1);
        meterFill.style.width = Math.min(100, loveLevel / 100) + '%';
        meterText.textContent = `This much! (${loveLevel}%)`;
        if (loveLevel > 1000) meterText.textContent += " ∞ and beyond! 🚀🥰";
      }
    });
    document.getElementById('next2')?.addEventListener('click', () => {
      document.getElementById('q2').style.display = 'none';
      document.getElementById('q3').style.display = 'block';
    });

    // Final yes/no
    document.getElementById('yesFinal')?.addEventListener('click', () => {
      document.querySelectorAll('#q1, #q2, #q3').forEach(el => el.style.display = 'none');
      document.getElementById('celebration').style.display = 'block';
      for (let i = 0; i < 60; i++) createFloat(); // heart explosion
    });
    document.getElementById('noFinal')?.addEventListener('click', () => {
      alert("Noooo 😭 Please say yes... I made this just for you! 🥺💔");
    });
  </script>
</body>
</html>
