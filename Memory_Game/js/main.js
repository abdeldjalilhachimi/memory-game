document.getElementById("start-btn").onclick = function () {
  let yourName = prompt("What is your Name");

  if (yourName == null || yourName == "") {
    // Set a Name to Uknown
    document.querySelector(".container span ").innerHTML = "Unknown";
  } else {
    // Set a Name to Name that typed
    document.querySelector(".container span ").innerHTML = yourName;
  }

  // Remove Splash Screen
  document.querySelector(".control-buttons").remove();
};

let duration = 1000;

//  Create Array for Game block
let blockContainer = document.querySelector(".memory_game_blocks");

// Create Rang of keys
let blocks = Array.from(blockContainer.children);

let orderRang = Array.from(Array(blocks.length).keys())
console.log(orderRang)
shuffle(orderRang); 
console.log(orderRang)
// Add order Css Proprity to game block

blocks.forEach((block, index)=> {

    block.style.order = orderRang[index]; 
    block.addEventListener('click', function () {
        flipblock(block)
    })
})



// Flip block funcion 
function flipblock(selectedBlock) {
    
    // Add class is-flipped
    selectedBlock.classList.add('is-flipped'); 

    // collect Flipped cards 
    allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped')); 
    if (allFlippedBlocks.length === 2) {

            // Stop clicking function 
        stopClicking(); 

            // checking if they are matched 
        checkMachedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]) 
    }

}


// stop Clicking function 
 function stopClicking(){

    // Add class no Clicking on main container 
    blockContainer.classList.add('no-clicking'); 

    // Remove class no-clicking afetr 1000s 

    setTimeout(()=>{
        blockContainer.classList.remove('no-clicking'); 

    }, duration)
 } 

// check Matached blocks 
function checkMachedBlocks(fisrtBlock, secondBlock) {
    let triesElement = document.querySelector('.tries span'); 

    if (fisrtBlock.dataset.football === secondBlock.dataset.football  ) {
        
        fisrtBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        fisrtBlock.classList.add('has-matched');
        secondBlock.classList.add('has-matched');
    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1; 
      
        setTimeout(()=>{
            fisrtBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
    
        }, duration)
    }
}

// Shuffel function 

function shuffle(array) {
    
    let current = array.length, 
    temp, 
    random; 

    while (current > 0) {
        
        random =  Math.floor(Math.random() * current ); 
        current--; 

        temp = array[current]; 
        array[current] =  array[random]; 
        array[random] = temp; 

    }

    return array; 
}
