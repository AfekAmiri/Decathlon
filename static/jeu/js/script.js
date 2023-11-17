var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
const liste = []; 
const listeresultat = [];
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }

  function printresult(liste) {
    var resultat1 = document.getElementById('resultat1');
    resultat1.innerHTML = liste[0];
    var resultat2 = document.getElementById('resultat2');
    resultat2.innerHTML = liste[1];
    var resultat3 = document.getElementById('resultat3');
    resultat3.innerHTML = liste[2];
    var resultat4 = document.getElementById('resultat4');
    resultat4.innerHTML = liste[3];
    var resultat5 = document.getElementById('resultat5');
    resultat5.innerHTML = liste[4];
    var resultat6 = document.getElementById('resultat6');
    resultat6.innerHTML = liste[5];
    var resultat7 = document.getElementById('resultat7');
    resultat7.innerHTML = liste[6];
    var resultat8 = document.getElementById('resultat8');
    resultat8.innerHTML = liste[7];
    
  }
  function printresulttot(liste) {
    var resultattot1 = document.getElementById('resultattot1');
    resultattot1.innerHTML = liste[0];
    var resultattot2 = document.getElementById('resultattot2');
    resultattot2.innerHTML = liste[1];
    var resultattot3 = document.getElementById('resultattot3');
    resultattot3.innerHTML = liste[2];
    
  }

  var button = document.getElementById('button');
  var button2 = document.getElementById('stopBtn');

  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
    liste.push(result);
    printresult(liste);
  };

  button2.onclick = function() {
    liste=[];

  }