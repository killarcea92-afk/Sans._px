const enterBtn = document.getElementById("enterBtn");
const replayBtn = document.getElementById("replayBtn");
const musicPill = document.getElementById("musicPill");
const musicToggle = document.getElementById("musicToggle");
const musicModal = document.getElementById("spotifyModal");
const closeSpotify = document.getElementById("closeSpotify");
const musicText = document.getElementById("musicText");

function scrollToStart(){
  document.getElementById("hero").scrollIntoView({behavior:"smooth"});
}
enterBtn.addEventListener("click",()=>{
  document.getElementById("intro")?.scrollIntoView({behavior:"smooth"});
  musicText.textContent="Soundtrack";
  setTimeout(()=>musicModal.classList.add("open"),450);
});

musicToggle.addEventListener("click",()=>musicModal.classList.add("open"));
closeSpotify.addEventListener("click",()=>musicModal.classList.remove("open"));
musicModal.addEventListener("click",(e)=>{if(e.target===musicModal) musicModal.classList.remove("open")});
replayBtn.addEventListener("click",scrollToStart);

// Smooth reveal as sections enter the viewport.
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

// Falling rose petals.
const petalLayer = document.getElementById("petals");
function makePetal(){
  const p=document.createElement("span");
  p.className="petal";
  p.textContent=Math.random()>.35?"❀":"✿";
  p.style.left=(Math.random()*100)+"vw";
  p.style.setProperty("--drift",(Math.random()*220-110)+"px");
  p.style.animationDuration=(7+Math.random()*8)+"s";
  p.style.fontSize=(10+Math.random()*14)+"px";
  petalLayer.appendChild(p);
  setTimeout(()=>p.remove(),16000);
}
setInterval(makePetal,650);
for(let i=0;i<10;i++) setTimeout(makePetal,i*220);

// Add an id to the intro section without changing the HTML structure.
document.querySelector(".intro").id="intro";
