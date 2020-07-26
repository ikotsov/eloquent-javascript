function getTriangle(size) {
    let output = '';
    for (let i = 1; i < size + 1; i++) {
        output += getSharpBy(i) + getCarriageReturn();
        console.log(output);
    }
}

// Utilities
function getCarriageReturn() {
    return '\r';
}

function getSharpBy(num) {
    let output = '';
    for (let i = 0; i < num; i++) {
        output += getSharp();
    }
    return output;
}

function getSharp() {
    return '#';
}

getTriangle(7);
