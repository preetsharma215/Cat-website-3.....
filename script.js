const text = document.getElementById("text");
const gif = document.getElementById("gif");
const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let step = 0;
let noCount = 0;

const scenes = [
  {
    msg: "Hey… I made something for you 💕",
    gif: "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
  },
  {
    msg: "This is just a small surprise for you 🥺",
    gif: "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif"
  },
  {
    msg: "Because you make my days brighter 🌸",
    gif: "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
  },
  {
    msg: "So… one important question 💖",
    gif: "https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif",
    question: true
  },
  {
    msg: "YAYYYY!! 💖💖 I knew it 😭✨",
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

noBtn.onmouseover = () => {
  noCount++;

  // No button bhaagna
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // Har baar No chhota
  let scaleNo = Math.max(0.4, 1 - noCount * 0.1);
  noBtn.style.transform += ` scale(${scaleNo})`;

  // Yes button bada hota jaye
  let scaleYes = 1 + noCount * 0.15;
  yesBtn.style.transform = `scale(${scaleYes})`;

  // 6–7 tries ke baad No practically useless 😈
  if (noCount >= 6) {
    noBtn.innerText = "🙈";
    noBtn.style.opacity = "0.4";
  }
};
