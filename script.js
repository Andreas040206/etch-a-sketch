let gridNum = 50
let gridNumSquared = (gridNum * gridNum)

let ifMouseDown
let Roedknap

let color = 'red'

const gridContainerRef = document.querySelector('#gridContainer')
const menuContainerRef = document.querySelector('#menuContainer')


createGrid()

function createGrid(){
  for (let i = 0; i < gridNumSquared; i++ ) {
      let gridEl = document.createElement('div')
      gridEl.classList.add('grids')
      gridEl.onmousedown = function(){
             gridEl.className = color
      }

      gridEl.ondragover = function changeColor(){
        if (!(ifMouseDown === 'up')) {
           gridEl.className = color
       }
   }

      gridEl.onmouseover = function changeColor(){
           if (ifMouseDown === 'down') {
              gridEl.className = color
          }
      }
 
      gridContainerRef.appendChild(gridEl)
  }
}

function removeGrid(){
    while(gridContainerRef.firstChild){
        gridContainerRef.removeChild(gridContainerRef.firstChild)
    }
}

function changeGridFromCSS (){
    document.getElementById('gridContainer').style.gridTemplateColumns = 'repeat(' + gridNum +', 1fr [gridBoksColumn])' ;
    document.getElementById('gridContainer').style.gridTemplateRows = 'repeat(' + gridNum +', 1fr [gridBoksColumn])' ;
}

function getGridNumSquared(){
    gridNum = prompt('Pls write a number between 1-100')
    if (gridNum > 100) {
        gridNum = 100
    }
    gridNumSquared = (gridNum * gridNum)
}

function changeTheGrid (){
    removeGrid();
    getGridNumSquared();
    changeGridFromCSS();
    createGrid();
}

document.addEventListener('mousedown', function(){
    ifMouseDown = 'down'; 
})

document.addEventListener('dragend', function(){
    ifMouseDown = 'up'; 
})

document.addEventListener('mouseup', function(){
    ifMouseDown = 'up'; 
})

const gridNumBtn = document.querySelector('#gridNumBtn');
const clearGridBtn = document.querySelector('#clearGridBtn')

gridNumBtn.addEventListener('click', function(){
    changeTheGrid();
});

clearGridBtn.addEventListener('click', function() {
    removeGrid()
    createGrid()
})

const selectedColorShow = document.querySelector('#selectedColorShow');

const whiteButtonRef = document.querySelector('#whiteButton')
const greyButton = document.querySelector('#greyButton')
const pinkButton = document.querySelector('#pinkButton')
const redButton = document.querySelector('#redButton')
const darkredButton = document.querySelector('#darkredButton')
const orangeButton = document.querySelector('#orangeButton')
const yellowButton = document.querySelector('#yellowButton')
const lightskinButton = document.querySelector('#lightskinButton')
const yellowGreenButton = document.querySelector('#yellowGreenButton')
const blackButton = document.querySelector('#blackButton')
const brownButton = document.querySelector('#brownButton')
const purpleButton = document.querySelector('#purpleButton')
const darkblueButton = document.querySelector('#darkblueButton')
const blueButton = document.querySelector('#blueButton')
const lightblueButton = document.querySelector('#lightblueButton')
const cyanButton = document.querySelector('#cyanButton')
const greenButton = document.querySelector('#greenButton')
const darkgreenButton = document.querySelector('#darkgreenButton')


whiteButtonRef.addEventListener('click', function(){
    color = 'white'
    selectedColorShow.className = color
});

greyButton.addEventListener('click', function(){
    color = 'grey'
    selectedColorShow.className = color
});

pinkButton.addEventListener('click', function(){
    color = 'pink'
    selectedColorShow.className = color
});

redButton.addEventListener('click', function(){
    color = 'red'
    selectedColorShow.className = color
});

darkredButton.addEventListener('click', function(){
    color = 'darkred'
    selectedColorShow.className = color
});

orangeButton.addEventListener('click', function(){
    color = 'orange'
    selectedColorShow.className = color
});

yellowButton.addEventListener('click', function(){
    color = 'yellow'
    selectedColorShow.className = color
});

lightskinButton.addEventListener('click', function(){
    color = 'lightskin'
    selectedColorShow.className = color
});

yellowGreenButton.addEventListener('click', function(){
    color = 'yellowGreen'
    selectedColorShow.className = color
});

blackButton.addEventListener('click', function(){
    color = 'black'
    selectedColorShow.className = color
});

brownButton.addEventListener('click', function(){
    color = 'brown'
    selectedColorShow.className = color
});

purpleButton.addEventListener('click', function(){
    color = 'purple'
    selectedColorShow.className = color
});

darkblueButton.addEventListener('click', function(){
    color = 'darkblue'
    selectedColorShow.className = color
});

blueButton.addEventListener('click', function(){
    color = 'blue'
    selectedColorShow.className = color
});

lightblueButton.addEventListener('click', function(){
    color = 'lightblue'
    selectedColorShow.className = color
});

cyanButton.addEventListener('click', function(){
    color = 'cyan'
    selectedColorShow.className = color
});

greenButton.addEventListener('click', function(){
    color = 'green'
    selectedColorShow.className = color
});

darkgreenButton.addEventListener('click', function(){
    color = 'darkgreen'
    selectedColorShow.className = color
});


