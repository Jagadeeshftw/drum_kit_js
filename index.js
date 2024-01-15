for (let i = 0; i < document.querySelectorAll("button").length; i++)
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(value) {
  let alphabet = value;
  let musicPath = "";
  switch (alphabet) {
    case "w":
      musicPath = "sounds/tom-1.mp3";
      break;
    case "a":
      musicPath = "sounds/tom-2.mp3";
      break;
    case "s":
      musicPath = "sounds/tom-3.mp3";
      break;
    case "d":
      musicPath = "sounds/tom-4.mp3";
      break;
    case "j":
      musicPath = "sounds/crash.mp3";
      break;
    case "k":
      musicPath = "sounds/kick-bass.mp3";
      break;
    case "l":
      musicPath = "sounds/snare.mp3";
      break;
  }
  let audio = new Audio(musicPath);
  audio.play();
}

function buttonAnimation(value) {
  let getButton = document.querySelector("." + value);
  console.log(getButton);
  getButton.classList.add("pressed");
  setTimeout(() => {
    getButton.classList.remove("pressed");
  }, 200);
}
