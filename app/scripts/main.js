//define scope
{

  //function to randomly select who is going to begin
  let pickUpTurn = () => {return  Math.floor((Math.random() * 2) + 1);};



  //add event listeners to squares;
  function addEventListenersToSquares(selectSquares) {
    for (let i = 0; i < selectSquares.length; i++){
      selectSquares[i].addEventListener("click", function () {


        this.classList.add("kokos");
        console.log("I'm clicked");
      })
    }
  }

  let selectSquares = document.getElementsByClassName("square");
  addEventListenersToSquares(selectSquares);


  // console.log(selectSquares);





}
