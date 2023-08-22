document.getElementById("sort").addEventListener("click", sort);
document.getElementById("addnumber").addEventListener("click", addnumber);

var pushIndex = 0;

function getValues() {
    const valueStore = document.querySelectorAll('.container')[0];
    return Array.from(valueStore.children);
}
function sort() {
    valueBoxes = getValues();
    const sortedValues = [];

    valueBoxes.forEach((input) => {
        sortedValues.push(input.value);
    })

    sortedValues.sort(function(a, b) {return a - b;});

    valueBoxes.forEach((input) => {
        input.value = sortedValues.shift();
    })
}

function addnumber() {
    valueBoxes = getValues();
    valueBoxes[pushIndex].value = Math.floor(Math.random() * 100);
    pushIndex = (pushIndex + 1) % valueBoxes.length;
}
