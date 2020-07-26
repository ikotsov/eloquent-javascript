// Solution 1
function getTriangle(size) {
    for (let i = 1; i < size + 1; i++) {
        let output = getNumOfSharps(i);
        console.log(output);
    }
}

getTriangle(7);

// Solution 2
function getTriangle2(size) {
    let sharp = getSharp();
    while(sharp.length <= size) {
        console.log(sharp);
        sharp += getSharp();
    }
}

getTriangle2(7);

// Utilities
function getNumOfSharps(total) {
    let output = '';
    for (let i = 0; i < total; i++) {
        output += getSharp();
    }
    return output;
}

function getSharp() {
    return '#';
}
