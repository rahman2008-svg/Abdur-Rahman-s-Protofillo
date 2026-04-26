// typing
const text = "🚀 Future Millionaire Loading...";
let i = 0;
function type(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text[i];
    i++;
    setTimeout(type,40);
  }
}
type();

// scroll animation
function reveal(){
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", reveal);

// 3D tilt
document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("mousemove", e=>{
    let x = (window.innerWidth/2 - e.pageX)/30;
    let y = (window.innerHeight/2 - e.pageY)/30;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
  card.addEventListener("mouseleave", ()=>{
    card.style.transform = "rotateY(0) rotateX(0)";
  });
});
