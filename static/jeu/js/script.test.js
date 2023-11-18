function testPrintNumber() {
  // Test case for number 1
  printNumber(1);
  var image1 = document.querySelector('#placeholder img');
  console.assert(image1.src === 'https://www.calculator.net/img/dice1.png', 'Test case for number 1 failed');

  // Test case for number 2
  printNumber(2);
  var image2 = document.querySelector('#placeholder img');
  console.assert(image2.src === 'https://www.calculator.net/img/dice2.png', 'Test case for number 2 failed');

  // Test case for number 3
  printNumber(3);
  var image3 = document.querySelector('#placeholder img');
  console.assert(image3.src === 'https://www.calculator.net/img/dice3.png', 'Test case for number 3 failed');

  // Test case for number 4
  printNumber(4);
  var image4 = document.querySelector('#placeholder img');
  console.assert(image4.src === 'https://www.calculator.net/img/dice4.png', 'Test case for number 4 failed');

  // Test case for number 5
  printNumber(5);
  var image5 = document.querySelector('#placeholder img');
  console.assert(image5.src === 'https://www.calculator.net/img/dice5.png', 'Test case for number 5 failed');

  // Test case for number 6
  printNumber(6);
  var image6 = document.querySelector('#placeholder img');
  console.assert(image6.src === 'https://www.calculator.net/img/dice6.png', 'Test case for number 6 failed');
}

// Run the test function
testPrintNumber();