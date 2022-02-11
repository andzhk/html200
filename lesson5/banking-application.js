
var myBalance = 1000;

function displayBalance() {
  document.getElementById("totalBalance").innerHTML = "Total Balance = " + myBalance;
}

function widthdrawlAmount() {

  var myAmount = document.getElementById("myWidthdrawlInput").value;
  myBalance = Number(myBalance) - Number(myAmount);
  turnOffWidthdrawlMenu();
  turnOnInputMenu();

}

function depositAmount() {
  var myAmount = document.getElementById("myDepositInput").value;
  myBalance = Number(myBalance) + Number(myAmount);
  turnOffDepositMenu();
  turnOnInputMenu();
}



function setMenu() {

  var userInput = document.getElementById("myText").value;

  if (userInput === "b") {
    displayBalance();
  }

  if (userInput === "q") {
    quitApp();
  }

  if (userInput === "w") {
    turnOffInputMenu();
    turnOnWidthdrawlMenu();
  }

  if (userInput === "d") {
    turnOffInputMenu();
    turnOnDepositMenu();
  }
}

function turnOnDepositMenu() {
  var x = document.getElementById("divDepositMenu");
  x.style.display = "block";
}


function turnOffDepositMenu() {
  var x = document.getElementById("divDepositMenu");
  x.style.display = "none";
}


function turnOnWidthdrawlMenu() {
  var x = document.getElementById("divWidthdrawlMenu");
  x.style.display = "block";
}


function turnOffWidthdrawlMenu() {
  var x = document.getElementById("divWidthdrawlMenu");
  x.style.display = "none";
}


function turnOnInputMenu() {
  var x = document.getElementById("divInputMenu");
  x.style.display = "block";
}


function turnOffInputMenu() {
  var x = document.getElementById("divInputMenu");
  x.style.display = "none";
}


function quitApp() {

  var x = document.getElementById("divMenu");
  x.style.display = "none";

  x = document.getElementById("divInputMenu");
  x.style.display = "none";

  document.getElementById("txtGoodBye").innerHTML = "Have a nice day!"

}

function test() {
  var x = 3;
  if (x === 2) {
    alert("x=2!");
  } else {
    alert("x does not equal 2");
  }
}
