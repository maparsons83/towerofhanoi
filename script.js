var rods = document.querySelectorAll('.rod');
var startPieces = ['xlarge', 'large', 'medium', 'small'];
var runFirstClick = true;

// define variable for object widths
// 


function firstClick(rod) {
    console.log("first");
    if (rod.childElementCount !== 0) {
        let x = rod.lastElementChild;
        let bucket = document.getElementById('bucket')
        bucket.appendChild(x);
        console.log(bucket)
    }
    runFirstClick = false;

}

function secondClick(event) {
    console.log("second");
    let rod = event.currentTarget;
    // let test = document.getElementById(rod);
    let button = bucket.firstChild;
    rod.appendChild(button);
    runFirstClick = true;
}


function startGame() {

    let destination = document.getElementById('r1');



    for (let i = 0; i < startPieces.length; i++) {
        var start = document.createElement('div');
        start.classList.add(startPieces[i], 'discs');
        destination.appendChild(start);

    }



}


function click(event) {

    let rod = event.currentTarget;

    if (runFirstClick === true) {
        firstClick(rod);
    } else {
        secondClick(event);
    }






}

function eventListeners() {
    for (let i = 0; i < rods.length; i++) {
        rods[i].addEventListener('click', click);

    }


}
eventListeners();