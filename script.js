document.addEventListener("DOMContentLoaded", (event) => {
   let counter = 0;
   let counterLabel = document.getElementById("counter");
   counterLabel.innerHTML= counter;

   let btn = document.getElementById("inc");
   btn.addEventListener("click", (event) => {
      counter++;
      counterLabel.innerHTML = counter;
   })
});

