<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Will You Be My Valentine? 💝 Tonpangmenla</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      background: linear-gradient(135deg, #ffafbd, #ffc3a0);
      font-family: system-ui, sans-serif;
      color: #ff4757;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      overflow: hidden;
      position: relative;
    }
    .container {
      max-width: 90%;
      z-index: 10;
    }
    h1 { font-size: 2.2rem; margin-bottom: 1rem; }
    h2 { font-size: 1.6rem; margin: 1.5rem 0 1rem; }
    button {
      padding: 14px 30px;
      margin: 10px;
      font-size: 1.3rem;
      border: none;
      border-radius: 999px;
      background: #ff6b6b;
      color: white;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      transition: 0.3s;
    }
    button:hover { transform: scale(1.08); background: #ff8787; }
    #noBtn { background: #aaa; }
    #loveMeter {
      width: 100%;
      height: 20px;
      background: #eee;
      border-radius: 10px;
      overflow: hidden;
      margin: 1rem 0;
    }
    #meterFill {
      height: 100%;
      width: 0%;
      background: linear-gradient(to right, #ff6b6b, #ff4757);
      transition: width 0.4s;
    }
    .floating {
      position: absolute;
      font-size: 2.5rem;
      pointer-events: none;
      animation: rise 12s linear infinite;
      opacity: 0.8;
    }
    @keyframes rise {
      0% { transform: translateY(120vh) rotate(0deg); }
      100% { transform: translateY(-20vh) rotate(720deg); }
    }
    #musicBtn {
      position: fixed;
      top: 15px;
      right: 15px;
      z-index: 100;
      padding: 10px 18px;
      font-size: 1rem;
      background: rgba(255,255,255,0.4);
      border: 1px solid white;
      border-radius: 999px;
      backdrop-filter: blur(8px);
    }
    #celebration { display: none; font-size: 2.5rem; animation: bounce 1.5s infinite; }
    @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
  </style>
</head>
<body>

  <button id="musicBtn">🎵 Play Music</button>

  <div class="container">
    <h1>Hey Tonpangmenla oversmart sleeping without me na... 💖</h1>

    <div id="step1">
      <h2>Do you like me? 🥺</h2>
      <button id="yesBtn1">Yes</button>
      <button id="noBtn1">No</button>
      <p id="secret" style="margin-top:1rem; opacity:0; transition:0.5s;">
        (hover here: I don't like you... I LOVE YOU! ❤️)
      </p>
    </div>

    <div id="step2" style="display:none;">
      <h2>How much do you love me? 💕</h2>
      <div id="loveMeter"><div id="meterFill"></div></div>
      <p id="meterValue">This much! (0%)</p>
      <button id="nextBtn">Next ❤️</button>
    </div>

    <div id="step3" style="display:none;">
      <h2>Will you be my Valentine on February 14th, 2026? 🌹</h2>
      <button id="yesFinal">Yes!</button>
      <button id="noFinal">No</button>
    </div>

    <div id="celebration">
      <h2>YAYYYY!!! 🎉💝💖💓</h2>
      <p>I'm the happiest person alive right now 😭💕<br>Come get your hug + kiss na 😘</p>
    </div>
  </div>

  <audio id="music" loop>
    <source src="https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3" type="audio/mpeg">
  </audio>

  <script>
    const emojis = ['❤️','💖','💝','💗','💓','🧸','🐻'];

    function spawnEmoji() {
      const div = document.createElement('div');
      div.className = 'floating';
      div.textContent = emojis[Math.floor(Math.random()*emojis.length)];
      div.style.left = Math.random()*100 + 'vw';
      div.style.animationDuration = (8 + Math.random()*10) + 's';
      document.body.appendChild(div);
      setTimeout(() => div.remove(), 20000);
    }
    setInterval(spawnEmoji, 500);

    // Music
    const audio = document.getElementById('music');
    document.getElementById('musicBtn').onclick = () => {
      if (audio.paused) {
        audio.volume = 0.35;
        audio.play().catch(()=>{});
        document.getElementById('musicBtn').textContent = '🔇 Stop Music';
      } else {
        audio.pause();
        document.getElementById('musicBtn').textContent = '🎵 Play Music';
      }
    };

    // Secret hover
    const secret = document.getElementById('secret');
    document.getElementById('noBtn1').onmouseover = () => secret.style.opacity = '1';
    document.getElementById('noBtn1').onmouseout = () => secret.style.opacity = '0';

    // Flow
    document.getElementById('yesBtn1').onclick = () => {
      document.getElementById('step1').style.display = 'none';
      document.getElementById('step2').style.display = 'block';
    };

    let percent = 0;
    document.addEventListener('mousemove', () => {
      if (document.getElementById('step2').style.display !== 'none') {
        percent = Math.min(9999, percent + 0.8);
        document.getElementById('meterFill').style.width = (percent / 100) + '%';
        document.getElementById('meterValue').textContent = `This much! (${Math.floor(percent)}%)`;
        if (percent > 1000) document.getElementById('meterValue').textContent += " To infinity & beyond! 🚀🥰";
      }
    });

    document.getElementById('nextBtn').onclick = () => {
      document.getElementById('step2').style.display = 'none';
      document.getElementById('step3').style.display = 'block';
    };

    document.getElementById('yesFinal').onclick = () => {
      document.querySelectorAll('#step1,#step2,#step3').forEach(e=>e.style.display='none');
      document.getElementById('celebration').style.display = 'block';
      for(let i=0;i<80;i++) spawnEmoji();
    };

    document.getElementById('noFinal').onclick = () => {
      alert("Nooooo 😭😭 Please say yes na... I made this whole thing for you 🥺💔");
    };
  </script>
</body>
</html>
