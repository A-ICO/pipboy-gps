const mascot = document.getElementById("mascot");
const speedEl = document.getElementById("speed");
let danger = false;

function setMode(mode){
  mascot.src = `assets/mascot-${mode}.gif`;
}

if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(pos => {
    const speed = pos.coords.speed ?? 0;
    speedEl.textContent = speed.toFixed(1);

    if (danger) setMode("danger");
    else if (speed > 0.7) setMode("walk");
    else setMode("thumb");
  }, err => {
    document.getElementById("instruction").textContent = "GPS REFUSÉ";
  }, { enableHighAccuracy: true, maximumAge: 1000 });
}
