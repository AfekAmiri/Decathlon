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
  
  // Create an image element
  var image = document.createElement('img');
  image.title = number;
  
  // Set the source of the image based on the number
  switch (number) {
    case 1:
      image.src = 'https://www.calculator.net/img/dice1.png';
      break;
    case 2:
      image.src = 'https://www.calculator.net/img/dice2.png';
      break;
    case 3:
      image.src = 'https://www.calculator.net/img/dice3.png';
      break;
    case 4:
      image.src = 'https://www.calculator.net/img/dice4.png';
      break;
    case 5:
      image.src = 'https://www.calculator.net/img/dice5.png';
      break;
    case 6:
      image.src = 'https://www.calculator.net/img/dice6.png';
      break;
      
    // Add more cases for other numbers if needed
    default:
      // Set a default image if the number is not recognized
      image.src = 'static\image\Red-Cross-Transparent-PNG (1).png';
      break;
  }
  
  // Clear the existing content of the placeholder element
  placeholder.innerHTML = '';
  
  // Append the image to the placeholder element
  placeholder.appendChild(image);
}

function printtotal(liste) {
  var total = 0;
  for (var i = 0; i < liste.length; i++) {
    total += liste[i];
  }
  var totalresult = document.getElementById('totalresult');
  totalresult.innerHTML = total;
}

function printresult(liste) {
  copyliste = liste // Copy the 'liste' array

  //1 er tirage
  var placeholder = document.getElementById('resultat1');
  
  // Create an image element
  var image = document.createElement('img');
  image.title = copyliste[0];
  
  // Set the source of the image based on the number
  switch (copyliste[0]) {
    case 1:
      image.src = 'https://www.calculator.net/img/dice1.png';
      break;
    case 2:
      image.src = 'https://www.calculator.net/img/dice2.png';
      break;
    case 3:
      image.src = 'https://www.calculator.net/img/dice3.png';
      break;
    case 4:
      image.src = 'https://www.calculator.net/img/dice4.png';
      break;
    case 5:
      image.src = 'https://www.calculator.net/img/dice5.png';
      break;
    case 6:
      image.src = 'https://www.calculator.net/img/dice6.png';
      break;
      
    // Add more cases for other numbers if needed
    default:
      // Set a default image if the number is not recognized
      image.src = './cross.png';
      break;
  }
  
  // Clear the existing content of the placeholder element
  placeholder.innerHTML = '';
  
  // Append the image to the placeholder element
  placeholder.appendChild(image);

  //2 eme tirage
  var placeholder = document.getElementById('resultat2');
  
  // Create an image element
  var image = document.createElement('img');
  image.title = copyliste[1];
  
  // Set the source of the image based on the number
  switch (copyliste[1]) {
    case 1:
      image.src = 'https://www.calculator.net/img/dice1.png';
      break;
    case 2:
      image.src = 'https://www.calculator.net/img/dice2.png';
      break;
    case 3:
      image.src = 'https://www.calculator.net/img/dice3.png';
      break;
    case 4:
      image.src = 'https://www.calculator.net/img/dice4.png';
      break;
    case 5:
      image.src = 'https://www.calculator.net/img/dice5.png';
      break;
    case 6:
      image.src = 'https://www.calculator.net/img/dice6.png';
      break;
      
    // Add more cases for other numbers if needed
    default:
      // Set a default image if the number is not recognized
      image.src = './cross.png';
      break;
  }
  
  // Clear the existing content of the placeholder element
  placeholder.innerHTML = '';
  
  // Append the image to the placeholder element
  placeholder.appendChild(image);


//1 er tirage
var placeholder = document.getElementById('resultat3');
  
// Create an image element
var image = document.createElement('img');
image.title = copyliste[2];

// Set the source of the image based on the number
switch (copyliste[2]) {
  case 1:
    image.src = 'https://www.calculator.net/img/dice1.png';
    break;
  case 2:
    image.src = 'https://www.calculator.net/img/dice2.png';
    break;
  case 3:
    image.src = 'https://www.calculator.net/img/dice3.png';
    break;
  case 4:
    image.src = 'https://www.calculator.net/img/dice4.png';
    break;
  case 5:
    image.src = 'https://www.calculator.net/img/dice5.png';
    break;
  case 6:
    image.src = 'https://www.calculator.net/img/dice6.png';
    break;
    
  // Add more cases for other numbers if needed
  default:
    // Set a default image if the number is not recognized
    image.src = './cross.png';
    break;
}
// Clear the existing content of the placeholder element
placeholder.innerHTML = '';

// Append the image to the placeholder element
placeholder.appendChild(image);


  var placeholder = document.getElementById('resultat4');
  
  // Create an image element
  var image = document.createElement('img');
  image.title = copyliste[3];
  
  // Set the source of the image based on the number
  switch (copyliste[3]) {
    case 1:
      image.src = 'https://www.calculator.net/img/dice1.png';
      break;
    case 2:
      image.src = 'https://www.calculator.net/img/dice2.png';
      break;
    case 3:
      image.src = 'https://www.calculator.net/img/dice3.png';
      break;
    case 4:
      image.src = 'https://www.calculator.net/img/dice4.png';
      break;
    case 5:
      image.src = 'https://www.calculator.net/img/dice5.png';
      break;
    case 6:
      image.src = 'https://www.calculator.net/img/dice6.png';
      break;
      
    // Add more cases for other numbers if needed
    default:
      // Set a default image if the number is not recognized
      image.src = './cross.png';
      break;
  }
  
  // Clear the existing content of the placeholder element
  placeholder.innerHTML = '';
  
  // Append the image to the placeholder element
  placeholder.appendChild(image);

  //5e
  var placeholder = document.getElementById('resultat5');
  
  // Create an image element
  var image = document.createElement('img');
  image.title = copyliste[4];
  
  // Set the source of the image based on the number
  switch (copyliste[4]) {
    case 1:
      image.src = 'https://www.calculator.net/img/dice1.png';
      break;
    case 2:
      image.src = 'https://www.calculator.net/img/dice2.png';
      break;
    case 3:
      image.src = 'https://www.calculator.net/img/dice3.png';
      break;
    case 4:
      image.src = 'https://www.calculator.net/img/dice4.png';
      break;
    case 5:
      image.src = 'https://www.calculator.net/img/dice5.png';
      break;
    case 6:
      image.src = 'https://www.calculator.net/img/dice6.png';
      break;
      
    // Add more cases for other numbers if needed
    default:
      // Set a default image if the number is not recognized
      image.src = './cross.png';
      break;
  }
  
  // Clear the existing content of the placeholder element
  placeholder.innerHTML = '';
  
  // Append the image to the placeholder element
  placeholder.appendChild(image);

  //6eme
  var placeholder = document.getElementById('resultat6');
  
  // Create an image element
  var image = document.createElement('img');
  image.title = copyliste[5];
  
  // Set the source of the image based on the number
  switch (copyliste[5]) {
    case 1:
      image.src = 'https://www.calculator.net/img/dice1.png';
      break;
    case 2:
      image.src = 'https://www.calculator.net/img/dice2.png';
      break;
    case 3:
      image.src = 'https://www.calculator.net/img/dice3.png';
      break;
    case 4:
      image.src = 'https://www.calculator.net/img/dice4.png';
      break;
    case 5:
      image.src = 'https://www.calculator.net/img/dice5.png';
      break;
    case 6:
      image.src = 'https://www.calculator.net/img/dice6.png';
      break;
      
    // Add more cases for other numbers if needed
    default:
      // Set a default image if the number is not recognized
      image.src = './cross.png';
      break;
  }
  
  // Clear the existing content of the placeholder element
  placeholder.innerHTML = '';
  
  // Append the image to the placeholder element
  placeholder.appendChild(image);


//7eme 
var placeholder = document.getElementById('resultat7');
  
// Create an image element
var image = document.createElement('img');
image.title = copyliste[6];

// Set the source of the image based on the number
switch (copyliste[6]) {
  case 1:
    image.src = 'https://www.calculator.net/img/dice1.png';
    break;
  case 2:
    image.src = 'https://www.calculator.net/img/dice2.png';
    break;
  case 3:
    image.src = 'https://www.calculator.net/img/dice3.png';
    break;
  case 4:
    image.src = 'https://www.calculator.net/img/dice4.png';
    break;
  case 5:
    image.src = 'https://www.calculator.net/img/dice5.png';
    break;
  case 6:
    image.src = 'https://www.calculator.net/img/dice6.png';
    break;
    
  // Add more cases for other numbers if needed
  default:
    // Set a default image if the number is not recognized
    image.src = './cross.png';
    break;
}
// Clear the existing content of the placeholder element
placeholder.innerHTML = '';

// Append the image to the placeholder element
placeholder.appendChild(image);


  var placeholder = document.getElementById('resultat8');
  
  // Create an image element
  var image = document.createElement('img');
  image.title = copyliste[7];
  
  // Set the source of the image based on the number
  switch (copyliste[7]) {
    case 1:
      image.src = 'https://www.calculator.net/img/dice1.png';
      break;
    case 2:
      image.src = 'https://www.calculator.net/img/dice2.png';
      break;
    case 3:
      image.src = 'https://www.calculator.net/img/dice3.png';
      break;
    case 4:
      image.src = 'https://www.calculator.net/img/dice4.png';
      break;
    case 5:
      image.src = 'https://www.calculator.net/img/dice5.png';
      break;
    case 6:
      image.src = 'https://www.calculator.net/img/dice6.png';
      break;
      
    // Add more cases for other numbers if needed
    default:
      // Set a default image if the number is not recognized
      image.src = './cross.png';
      break;
  }
  
  // Clear the existing content of the placeholder element
  placeholder.innerHTML = '';
  
  // Append the image to the placeholder element
  placeholder.appendChild(image);

  
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
    if (result == 1) {
      button.disabled = true;
      liste.splice(0, liste.length); // Empty the 'liste' array
    }
     
    
    if (liste.length >= 8) {
      button.disabled == true;
    }
    

    printtotal(liste);
    printresult(liste);
  };


  button2.onclick = function() {
    
    var total = 0;
  for (var i = 0; i < liste.length; i++) {
    total += liste[i];
  }
    listeresultat.push(total);
    liste.splice(0, liste.length); // Empty the 'liste' array
    printresult(liste);
    button.disabled = false;
    printresulttot(listeresultat);
    if (listeresultat.length >= 3) {
      button2.disabled = true;
      button.disabled = true;
    }
  }
