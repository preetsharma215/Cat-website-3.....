const text = document.getElementById("text");
const gif = document.getElementById("gif");
const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let step = 0;
let noCount = 0;

const scenes = [
  {
    msg: "Hey… I made this for you 💕",
    gif: "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
  },
  {
    msg: "Just a small surprise 🥺",
    gif: "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif"
  },
  {
    msg: "Because you mean a lot to me 🌸",
    gif: "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
  },
  {
    msg: "So… I want to ask you something 💖",
    gif: "https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif"
  },
  {
    // 💘 EXACT VALENTINE MOMENT
    msg: "Will you be my Valentine? 💝",
    gif: "https://media.giphy.com/media/9Y6n9TR7U07ew/giphy.gif", 
    // Mochi Peach Cat + Gama kissing style
    question: true
  },
  {
    msg: "YAYYYY!! 😭💖💖",
    gif: "https://media.giphy.com/media/26xBwdIuRJiAIqHwA/giphy.gif"
  }
];

nextBtn.onclick = () => {
  step++;
  updateScene();
};

function updateScene() {
  text.innerText = scenes[step].msg;
  gif.src = scenes[step].gif;

  if (scenes[step].question) {
    nextBtn.classList.add("hidden");
    yesBtn.classList.remove("hidden");
    noBtn.classList.remove("hidden");
  }
}

yesBtn.onclick = () => {
  step++;
  updateScene();
  yesBtn.classList.add("hidden");
  noBtn.classList.add("hidden");
};

// 😈 No button logic
noBtn.onmouseover = () => {
  noCount++;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${Math.max(0.4, 1 - noCount * 0.1)})`;

  yesBtn.style.transform = `scale(${1 + noCount * 0.15})`;

  if (noCount >= 6) {
    noBtn.innerText = "🙈";
    noBtn.style.opacity = "0.4";
  }
};
