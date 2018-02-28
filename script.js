var rods = document.querySelectorAll('.rod');
var startPieces = ['xlarge', 'large', 'medium', 'small'];
var bucket = [];


function firstClick() {
    if (rod.childElementCount !== 0) {
        let x = rod.lastElementChild;
        bucket.push(x);
        console.log(bucket);
    }

}

function startGame() {

    let destination = document.getElementById('r1');



    for (let i = 0; i < startPieces.length; i++) {
        var start = document.createElement('div');
        start.classList.add(startPieces[i]);
        destination.appendChild(start);

    }
   


}


function click(event) {

    let rod = event.currentTarget;

    firstClick();


}

function clicking() {
    for (let i = 0; i < rods.length; i++) {
        rods[i].addEventListener('click', click);

}
        

}
clicking();
