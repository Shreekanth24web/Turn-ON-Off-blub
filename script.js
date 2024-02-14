let bulbBtn = document.getElementById("btn")
let bulbElem = document.getElementById("bulb")
bulbBtn.addEventListener("click", () => {
      if (bulbBtn.textContent.includes('ON')) {
           
            bulbElem.src = "images/bulb-img-on.png";
            bulbBtn.textContent = "TURN OFF"
            bulbBtn.style.backgroundColor="red"
            bulbBtn.style.color="black"
      } else {
            bulbElem.src = "images/bulb-img-off.jpg";
            bulbBtn.textContent = "TURN ON"
            bulbBtn.style.backgroundColor="green"
            bulbBtn.style.color="white"
      }
})

 