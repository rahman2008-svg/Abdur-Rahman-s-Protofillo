// typing animation
const text = "🚀 Future Millionaire Loading...";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text[i];
    i++;
    setTimeout(type, 60);
  }
}
type();
