let previous = [...document.querySelectorAll(".fa-arrow-left")];
let next = [...document.querySelectorAll(".fa-arrow-right")];
let divTrending = [...document.querySelectorAll(".main__trending__music__container")];
let current = 0;

previous.forEach(element => {
    element.addEventListener('click', function() {changeTrendings(-1)})
})

next.forEach(element => {
    element.addEventListener('click', function() {changeTrendings(1)})
})

function changeTrendings(n) {
    n = Number(n);
    hideTrending(current);
    current = (current + n + divTrending.length) % divTrending.length;
    showTrending(current);
}

function hideTrending(n) {
    divTrending[n].classList.add("hide-trending");
}

function showTrending(n) {
    divTrending[n].classList.remove("hide-trending");
}