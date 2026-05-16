document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "trail";

  const colors = ["#00B088", "#FAA819", "#1ABFF1", "#FFCB05", "#959BCA", "#F495AE"];
  trail.style.background = colors[Math.floor(Math.random() * colors.length)];

  trail.style.left = e.clientX + "px";
  trail.style.top = e.clientY + "px";

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 800);
});