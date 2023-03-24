function clickShare() {
    let popup = document.getElementById("popup");
    let authorContainer = document.getElementById("AC");
    let buttonA = document.getElementById("ba");
    let buttonB = document.getElementById("bb");
    let mediaMatched = window.matchMedia("(max-width: 600px)").matches;

    console.log(mediaMatched);
    if (popup.classList.contains("hidden")) {
      popup.classList.remove("hidden");
      if (mediaMatched) {
        buttonA.classList.add("hidden");
        buttonB.classList.remove("hidden");
      }
    } else {
      popup.classList.add("hidden");
      if (mediaMatched) {
        buttonA.classList.remove("hidden");
        buttonB.classList.add("hidden");
      }
    }
}