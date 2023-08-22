document.getElementById("sort").addEventListener("click", sort);
function sort() {
    const valueStore = document.querySelectorAll('.container')[0];
    const valueBoxes = Array.from(valueStore.children);
    const sortedValues = [];
    valueBoxes.forEach((input) => {
        sortedValues.push(input.value);
    })
    sortedValues.sort(function(a, b) {return a - b;});

    console.log(sortedValues);
    valueBoxes.forEach((input) => {
        input.value = sortedValues.shift();
    })

}

