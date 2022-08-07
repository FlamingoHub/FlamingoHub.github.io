const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
var start, stop, stopwatchBox;



function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);
  }
}


let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  
  
  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 450) {
    // collision
    alert("Game Over!"); // add + score'
    

    stopwatch.start; 
    alert(stopwatch(stop));
    alert(stopwatch(start));
    // Add: Reset Timer 
    //Add: Start timer.
  }

}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
