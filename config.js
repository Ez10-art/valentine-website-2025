// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================
    // Safe minimal config - no syntax traps
const CONFIG = {
  valentineName: "Tonpangmenla oversmart sleeping without me na ❤️",
  pageTitle: "Will You Be My Valentine? 💝",
  questions: {
    first: {
      text: "Do you like me? 🥺",
      yesBtn: "Yes",
      noBtn: "No",
      secretAnswer: "I don't like you, I love you! ❤️"
    },
    second: {
      text: "How much do you love me?",
      startText: "This much!",
      nextBtn: "Next ❤️"
    },
    third: {
      text: "Will you be my Valentine on February 14th, 2026? 🌹",
      yesBtn: "Yes!",
      noBtn: "No"
    }
  },
  music: {
    enabled: true,
    musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3"
  }
};

window.CONFIG = CONFIG;  // Make sure script.js can find it
