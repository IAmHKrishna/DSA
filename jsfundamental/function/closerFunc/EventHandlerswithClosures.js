function createClickHandler(color) {
    return function() {
      console.log(`Button clicked with color: ${color}`);
    };
  }
  
  const btnRed = document.createElement('button');
  btnRed.innerText = "Red";
  btnRed.onclick = createClickHandler("red");
  
  const btnBlue = document.createElement('button');
  btnBlue.innerText = "Blue";
  btnBlue.onclick = createClickHandler("blue");
  
  document.body.append(btnRed, btnBlue);
  