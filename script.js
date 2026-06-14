const colors = ["#FF4FA3",
  "#FF8A00",
  "#00C8FF",
  "#C63EFF"];

let lastX = 0;
let lastY = 0;

document.addEventListener("mousemove", (e) => {
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 15) return;

  lastX = e.clientX;
  lastY = e.clientY;

  const trail = document.createElement("div");
  trail.className = "trail";

  const size = Math.random() * 10 + 4; // 4–14px
  const color = colors[Math.floor(Math.random() * colors.length)];

  trail.style.width = size + "px";
  trail.style.height = size + "px";

  trail.style.left = e.clientX + "px";
  trail.style.top = e.clientY + "px";

  trail.style.background = color;

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 2000);
});
















console.log("sprinkle system running");

const container = document.getElementById("sprinkleContainer");

const sprinkleColors = [
  "#FF4FA3",
  "#FF8A00",
  "#00C8FF",
  "#C63EFF",
  
];

function playWave() {
  gsap.fromTo(".letter",
    { y: 0 },
    {
      y: -20,
      duration: 0.25,
      stagger: 0.03,
      repeat: 1,
      yoyo: true,
      ease: "power2.out"
    }
  );
}

function createSprinkle(x, y) {

  const s = document.createElement("div");
  s.classList.add("sprinkle");

  s.style.background =
    sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)];

  s.style.left = x + "px";
  s.style.top = y + "px";

  container.appendChild(s);

  gsap.to(s, {
    y: window.innerHeight + 120,
    x: gsap.utils.random(-120, 120),
    rotation: gsap.utils.random(-360, 360),
    duration: gsap.utils.random(2, 4),
    ease: "none",
    onComplete: () => s.remove()
  });
}

function sprinkleRain(amount = 150) {

  for (let i = 0; i < amount; i++) {

    setTimeout(() => {

      createSprinkle(
        Math.random() * window.innerWidth,
        -20
      );

    }, i * 25);

  }
}
playWave();
sprinkleRain();

const joy = document.querySelector(".joyImg");

joy.addEventListener("mouseenter", () => {

  playWave();
  sprinkleRain(80);

});