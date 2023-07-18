
import './App.css';

function App() {


  var noBombArray = Array(90).fill('nobomb')
  //console.log(goodArray)

  //Build game array to randomly set "bombs"
  const gamewidth = 10
  const numOfBombs = 10

  var bombArray = Array(numOfBombs).fill('bomb')

  var gameArray = noBombArray.concat(bombArray)

  var gameArrayShuffled = gameArray.sort(() => Math.random() - 0.5);
  //var gameArrayShuffled = gameArray.sort(() => Math.random());

  console.log(gameArrayShuffled)

  let count = Array(gameArrayShuffled.length).fill(0)
  console.log(count)
  for (let i = 0; i < gameArrayShuffled.length; i++) {




    if (i % gamewidth !== 0 && i % gamewidth !== gamewidth - 1) {
      if (gameArrayShuffled[i - 1] === 'bomb') count[i]++
      if (gameArrayShuffled[i + 1] === 'bomb') count[i]++

    }


    if (i % gamewidth !== 0 && i % gamewidth !== gamewidth - 1) {
      if (gameArrayShuffled[i - gamewidth - 1] === 'bomb') count[i]++
      if (gameArrayShuffled[i - gamewidth] === 'bomb') count[i]++
      if (gameArrayShuffled[i - gamewidth + 1] === 'bomb') count[i]++
      if (gameArrayShuffled[i + gamewidth - 1] === 'bomb') count[i]++
      if (gameArrayShuffled[i + gamewidth] === 'bomb') count[i]++
      if (gameArrayShuffled[i + gamewidth + 1] === 'bomb') count[i]++
    }
    if (i % gamewidth === 4) {
      if (gameArrayShuffled[i - gamewidth] === 'bomb') count[i]++
      if (gameArrayShuffled[i - gamewidth - 1] === 'bomb') count[i]++
      if (gameArrayShuffled[i - 1] === 'bomb') count[i]++
      if (gameArrayShuffled[i + gamewidth] === 'bomb') count[i]++
      if (gameArrayShuffled[i + gamewidth - 1] === 'bomb') count[i]++
    }
    if (i % gamewidth === 0) {
      if (gameArrayShuffled[i - gamewidth] === 'bomb') count[i]++
      if (gameArrayShuffled[i - gamewidth + 1] === 'bomb') count[i]++
      if (gameArrayShuffled[i + 1] === 'bomb') count[i]++
      if (gameArrayShuffled[i + gamewidth] === 'bomb') count[i]++
      if (gameArrayShuffled[i + gamewidth + 1] === 'bomb') count[i]++
    }


    // if (i / gamewidth == 0 ) {
    //   if (gameArrayShuffled[i + gamewidth] == 'bomb') count[i]++ 
    // }
    // if (i / gamewidth == gamewidth-1 ) {
    //   if (gameArrayShuffled[i - gamewidth] == 'bomb') count[i]++ 
    // }

    // if (i % gamewidth == 0 ) {
    //   if (gameArrayShuffled[i + 1] == 'bomb') count[i]++
    // }

    // if ( i % gamewidth == gamewidth - 1) {
    //   if (gameArrayShuffled[i - 1] == 'bomb') count[i]++
    // }



  }
  console.log(count)


  // document.querySelector('button[type="submit"]').innerHTML += '&nbsp;...';



  const handleSubmit = async e => {

    e.preventDefault();
    let temp = e.target.id;
    console.log(temp);
    var btn = document.getElementById(temp);
    console.log('bomb? ', gameArrayShuffled[temp])
    if (gameArrayShuffled[temp] === 'bomb') {
      //alert('BOOM!!!   Game Over!!!')
      btn.innerText = "💣";
      btn.style.backgroundColor = "red"

    } else
      if (count[temp]> 0) {
        btn.innerText = count[temp];
        btn.style.backgroundColor = "white"
      }
      else{
        btn.style.backgroundColor = "yellow"
        btn.innerText = "";
     
    }

  };

  const handlerestart = async e => {
    e.preventDefault();
    window.location.reload(true);

  }





  return (
    <div>
      <div text-align = 'center'>
        <h1 >Mine Sweeper</h1>
        <div className='grid-container' >
          {gameArrayShuffled.map((elem, index) => <div className='button_wrapper '><button id={index} key={index} className='button' onClick={handleSubmit}></button></div>)}
        </div>

 
      </div>
      <div className='restartbutton '><button id='resetbutton'   onClick={handlerestart}>Try Again</button></div>
    </div >
  );
}

export default App;
