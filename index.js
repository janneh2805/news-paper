<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tzoker</title>
    <style>
    table {
      border: 2px solid;
      padding:20px;
      margin: 20px;
    }
    tr {
      padding:20px;
      margin: 20px;
    }
    th {
      border: 2px solid white;
      color: white;
      background-color: black;
    }
    td {
      border: 2px solid white;
      color: white;
      background-color: rgba(0, 0, 0, 0.3);
    }
    #demoOne, #demoTwo {
    border: 2px solid white;
    width: 22%;
    background-color: MediumSeaGreen;
    }
    #demoThree, #demoFour {
    border: 2px solid white;
    width: 22%;
    background-color: LightGray;
    }

    #demoFifth {
      font-size: 50px;
      font-style: italic;
      color: Tomato;

    }

    </style>

    </head>

    <body>
    <h1 style='color:red;'>Your Numbers.</h1>
    <p id="demoOne"></p>
    <br>
    <br>
    <p id="demoTwo"></p>
    <br>
    <hr>
    <h1 style='color:blue;'>Lottery Draw.</h1>
    <p id="demoThree"></p>
    <br>
    <br>
    <p id="demoFour"></p>
    <br>
    <hr>
    <p id="demoFifth"></p>

  <script>

function  tableConstruction(rows, columns, tzoker) {
  rows++
  txt = "";
  number = 1;
  txt += "<table>";
  for (var i = 0; i < rows; i ++)  {
    txt += "<tr>";
    for (var j = 0; j < columns; j ++) {
      if (i == 0) {
      txt += "<th>Col_"+(j+1)+"</th>";
      } else {
          if (tzoker.includes(number)) {
            txt += "<td style='color:red;'>"+ "X" +"</td>";
            number++;
          } else {
            txt += "<td>"+ (number++) +"</td>";
          }
      }
    }
    txt += "</tr>";
  }
    txt += "</table>";
    return txt;
}

var rowsMain = 9; rowsTzoker = 4; columns = 5;

var mainNumbers = [];
for (let i = 0; i < 5; i++) {
  mainNumbers.push(Math.floor(window.prompt('Enter Number ' + (i+1) + " to the first field.")));
}
var tzokerNumber = [Math.floor(window.prompt("Your Tzoker Number, Please."))];

document.getElementById("demoOne").innerHTML = tableConstruction(rowsMain, columns, mainNumbers);
document.getElementById("demoTwo").innerHTML = tableConstruction(rowsTzoker, columns, tzokerNumber);

var mainRandomNumbers = [];
while(mainRandomNumbers.length < 5){
    var r = Math.floor(Math.random() * 45) + 1;
    if(mainRandomNumbers.indexOf(r) === -1) mainRandomNumbers.push(r);
}
tzokerRandomNumber = [Math.floor(Math.random() * 20) + 1];

document.getElementById("demoThree").innerHTML = tableConstruction(rowsMain, columns, mainRandomNumbers);
document.getElementById("demoFour").innerHTML = tableConstruction(rowsTzoker, columns, tzokerRandomNumber);

function  tzokerWinner(mainNr, ranNr, tzokNr, ranTzokNr) {
  txt = "";
  nr = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (mainNr[i] == ranNr[j]) {
        nr++;
      }
    }
  }
  if (tzokNr == ranTzokNr && nr == 1) {
    txt = 'You have won 1.5 euros.';
  }
  else if (tzokNr == ranTzokNr && nr == 2) {
    txt = 'You have won 2 euros.';
  }
  else if (nr == 3) {
    txt = 'You have won 2 euros.';
  }
  else if (tzokNr == ranTzokNr && nr == 3) {
    txt = 'You have won 50 euros.';
  }
  else if (nr == 4) {
    txt = 'You have won 50 euros.';
  }
  else if (tzokNr == ranTzokNr && nr == 4) {
    txt = 'You have won 2500 euros.';
  }
  else if (nr == 5) {
    txt = 'Congratulations....You have won 75000 euros.';
  }
  else if (tzokNr == ranTzokNr && nr == 5) {
    txt = 'JACKPOT...Congratulations....You have won 1 000 000 euros.';
  }
  else {
    txt = 'You have not won. Do not worry...next time. Try again.';
  }
  return txt;

}

document.getElementById("demoFifth").innerHTML = tzokerWinner(mainNumbers, mainRandomNumbers, tzokerNumber, tzokerRandomNumber);

</script>
</body>
</html>