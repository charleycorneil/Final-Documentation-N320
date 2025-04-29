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

  let question3 = prompt(`What comic does Mothman's name come from?
    \n 1. Superman
    \n 2. Batman
    \n 2. Spiderman`);
  if (question3 === "2") {
    score++;
  }

  const percentage = (score / questionTotal) * 100;
  alert("You got " + percentage + "% correct!");
}

function movieInfo() {
  alert(
    "The Wendigo features in the Wendigo Movie (2001), directed by Larry Fessenden, its a psychological horror film about a family that travels to upstate New York for a winter getaway, only to encounter a terrifying presence tied to a Native American legend—the Wendigo. As tensions rise, reality blurs with supernatural fear, creating a haunting exploration of grief and trauma."
  );
}

function photoInfoW() {
  alert(
    "According to Native American legends, The Wendigo is a malevolent, cannibalistic spirit that is associated with winter, famine, and greed. It is said to be a creature that was once human but has been transformed into a monster due to its insatiable hunger for human flesh. The Wendigo is often described as being gaunt, with glowing eyes and an insatiable appetite for human flesh. It is said to be able to possess humans, driving them to madness "
  );
}

// function wendiInfo() {
//   alert(
//     "Mothman is a cryptid that orginates from West Virginian folklore. First being reported on November 15, 1966, it has been a staple in cryptid history ever since. Mothman is described as being a large, humanoid moth creatue with glowing red eyes. Orginally, it was decribed as bird-like in nature, as seen on the news article. The last main sighting occured on December 1967, with modern sightings being incredibly rare "
//   );
// }
