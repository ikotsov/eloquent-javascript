function getTriangle(size) {
    let output = '';
    for (let i = 1; i < size + 1; i++) {
        output += getNumOfSharps(i) + getCarriageReturn();
        console.log(output);
    }
}

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

function getCarriageReturn() {
    return '\r';
}

getTriangle(7);
