const colors = ["#00B088", "#FAA819", "#1ABFF1", "#FFCB05", "#959BCA", "#F495AE"];

let lastX = 0;
let lastY = 0;

document.addEventListener("mousemove", (e) => {
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  // controls how often circles appear (higher = fewer circles)
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

  // controls how long circles stay (higher = longer lasting)
  setTimeout(() => {
    trail.remove();
  }, 2000);
});