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
    let rod = event.currentTarget;
    // let test = document.getElementById(rod);
    let button = bucket.firstChild;

    if (rod.childElementCount !== 0) {
        console.log('it works')
        var lastDisc = rod.lastElementChild.id;
        var placedRod = startPieces.indexOf(lastDisc);
        var bucketDisc = bucket.lastElementChild.id;
        var placedPiece = startPieces.indexOf(bucketDisc);
    
        if (placedRod > placedPiece) {
            console.log("hello")
            return;
        } else {
            rod.appendChild(button);
            runFirstClick = true;
        }
    

       
        } else {
            rod.appendChild(button);
            runFirstClick = true;
            console.log(rod.lastElementChild.id);
        }
    checkWin();      
}


function startGame() {

    let destination = document.getElementById('r1');



    for (let i = 0; i < startPieces.length; i++) {
        var start = document.createElement('div');
        start.id = startPieces[i];
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

function checkWin() {
    if (r2.childElementCount === 4 || r3.childElementCount === 4 ) {
        alert("You Win!");
    }
}
eventListeners();