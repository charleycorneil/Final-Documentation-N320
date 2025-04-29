function popquiz() {
  let score = 0;
  let questionTotal = 3;

  let question = prompt(`What event is Mothman known for?
    \n 1. The Silver Bridge collapsing
    \n 2. The Texas City disaster
    \n 3. statewide flood across Ohio in 1913`);
  if (question === "1") {
    score++;
  }

  let question2 = prompt(`When was the first Mothman reporting?
    \n 1. 1966 
    \n 2. 1992 
    \n 3. 1910 `);
  if (question2 === "1") {
    score++;
  }

  let question3 = prompt(`What comic does Mothman appear as a villian?
    \n 1. Superman
    \n 2. Batman
    \n 2. Spiderman`);
  if (question3 === "2") {
    score++;
  }

  const percentage = (score / questionTotal) * 100;
  alert("You got " + percentage + "% correct!");
}

function comicInfo() {
  alert("comic");
}

function photoInfo() {
  alert("photo");
}

function mothInfo() {
  alert("moth");
}

// Map Hover Effects
document.querySelectorAll("area").forEach((area) => {
  area.addEventListener("mouseover", () => {
    area.style.opacity = "0.7";
  });

  area.addEventListener("mouseout", () => {
    area.style.opacity = "1";
  });
});
