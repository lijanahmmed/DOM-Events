console.log('external file')

// option 2 to handle event 
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3: get Element by Id and then set onclick
const btnMakeBlue = document.getElementById('btn-make-blue');
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 3: different version
const btnMakePurple = document.getElementById('btn-make-purple');
// console.log(btnMakePurple);
btnMakePurple.onclick = makePurple;

function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

document.getElementById().addEventListener('event type', handler)

document.getElementById('btn-make-green').addEventListener('click', function makeGreen() {

})

document.getElementById('btn-make-green').addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

document.getElementById('btn-make-gold')
    .addEventListener('click', function () {
        document.body.style.backgroundColor = 'goldenrod'
    })
