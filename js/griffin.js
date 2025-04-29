function griffinInfo() {
  alert(
    "Griffins are mythological creatures with the body of a lion and the head and wings of an eagle. They were believed to guard treasures and symbolize strength and vigilance in ancient mythology."
  );
}

function museumInfo() {
  alert(
    "This bronze artifact is an Etruscan depiction of a griffin, dating back to around 575 BCE, showing how widespread and ancient belief in griffins truly is."
  );
}

function sculptureInfo() {
  alert(
    "In mythology, the griffin is a legendary creature with the body of a lion and the head and wings of an eagle, symbolizing a powerful guardian. The statue shown here follows that tradition—placed outside a government building to symbolize justice and strength."
  );
}

function popquiz() {
  let score = 0;
  const questionTotal = 3;

  let question = prompt(
    `What region is the Griffin from?\n1. Ancient Middle East and Greece\n2. Iceland\n3. The Lost City of El Dorado`
  );
  if (question === "1") score++;

  let question2 = prompt(
    `What two animals make up the mythological griffin?\n1. Lion and Eagle\n2. Horse and Dove\n3. Rabbit and Giraffe`
  );
  if (question2 === "1") score++;

  let question3 = prompt(
    `What values do griffins represent in mythology?\n1. Peace and forgiveness\n2. Strength and loyalty\n3. Shyness and secrecy`
  );
  if (question3 === "2") score++;

  const percentage = (score / questionTotal) * 100;
  alert("You got " + percentage + "% correct!");
}
