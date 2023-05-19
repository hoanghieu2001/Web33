let sum7 = (a: number, b: number, c = false) => {
    if (c === false) {
        return a + b
    }
    if (c) {
        return a - b
    }
}

console.log(">>> Check sum7", sum7(1, 2), sum7(3, 5, true));