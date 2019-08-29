/**
 * file: js.js
 * purpose: interactivity
 **/

// skriver direkte til #content
function bmi(hoejde, vaegt) {
  dinBmi = Math.floor((vaegt / (hoejde * hoejde)));
  console.log("her er din BMI: " + dinBmi)
  //document.write("her er din BMI: " + dinBmi);
  document.getElementById('content').innerHTML = '<h2>Her er din BMI: ' +
    dinBmi +
    '</h2>';
  document.getElementById("content").style.backgroundColor = 'blue';
}

// her er en BMI
bmi(1.83, 83);

// vis et billede
function visBillede(billede){
  document.getElementById('billede').innerHTML += '<img src="images/'
  + billede
  + '" alt="billede">'
}

// her bruges funktionen
//visBillede('and.png');

// sådan bruger vi arrays (en slags lister)

// her er en liste
var billeder = [
  "and.png", // husk komma, undtagen efter den sidste
  "svane.png",
  "homer.png"
];

// arrays virker sådan
//console.log( billeder );
//console.log( billeder[2] ); // tæller fra 0

// et for loop
/*
for (var i = 0; i < 1000; i++){
  console.log( "Jeg skal opføre mig ordentligt!" );
}*/

for (var i = 0; i < billeder.length; i++){
  visBillede( billeder[i] );
}
