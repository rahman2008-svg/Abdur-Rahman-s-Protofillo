// safe typing (NO CRASH)
const typingEl = document.getElementById("typing");

if (typingEl) {
  const text = "🚀 Future Millionaire Loading...";
  let i = 0;

  function type() {
    if (i < text.length) {
      typingEl.innerHTML += text[i];
      i++;
      setTimeout(type, 40);
    }
  }
  type();
}

// reveal animation
function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

// IMPORTANT FIX
window.addEventListener("load", reveal);
window.addEventListener("scroll", reveal);

// 3D tilt safe version
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    let x = (window.innerWidth / 2 - e.pageX) / 30;
    let y = (window.innerHeight / 2 - e.pageY) / 30;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0) rotateX(0)";
  });
});
