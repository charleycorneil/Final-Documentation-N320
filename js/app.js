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
  alert("During the 1960s, around the same time the first Mothman sighting was reported, the comic book/tv series Batman was very popular.Because of this, it is believed that Mothman got his name from a villian in the comic series named Killer Moth. The name Mothman was first recorded in local newspapers reporting the first ever sighting");
}

function photoInfo() {
  alert("In some areas, mothman has been known to be a harbour of bad news. This association is due to its link to the Silver Bridge collapse on December 15th, 1967. People claimed to see Mothman near the bridge and before its collapse, causing paranoia about other disasters that could be related to the mothman.");
}

function mothInfo() {
  alert("Mothman is a cryptid that orginates from West Virginian folklore. First being reported on November 15, 1966, it has been a staple in cryptid history ever since. Mothman is described as being a large, humanoid moth creatue with glowing red eyes. Orginally, it was decribed as bird-like in nature, as seen on the news article. The last main sighting occured on December 1967, with modern sightings being incredibly rare ");
}

// Map Hover Effects
document.querySelectorAll("area").forEach((area) => {
  area.addEventListener("mouseover", () => {
    area.style.opacity = "0.7"; // Make area slightly transparent on hover
  });

  area.addEventListener("mouseout", () => {
    area.style.opacity = "1"; // Reset opacity when mouse leaves the area
  });
});
