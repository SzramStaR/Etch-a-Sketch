let color = "black";
let click = true;

function populateBoard(size)
{
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach(element => {
        element.remove();
    });
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    for(let i = 0; i < size * size; i++){
        let square = document.createElement("div");
        square.addEventListener('mouseover',colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend",square);

    }
}

populateBoard(16);

function changeSize(input){
    if(input >=2 && input <= 100){
        populateBoard(input);
    }else{
        console.log("Wrong amount of squares")
    }
}

function colorSquare() {
    if(click){
        if(color === "rainbow"){
            this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
        }else{
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach(element => {
        element.style.backgroundColor = "white";
    });
    
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON'){
        click = !click;
    if(click) {
        document.querySelector('.mode').textContent = "Mode: Coloring"
    }else{
        document.querySelector('.mode').textContent = "Mode: Not coloring"
    }
    }
})