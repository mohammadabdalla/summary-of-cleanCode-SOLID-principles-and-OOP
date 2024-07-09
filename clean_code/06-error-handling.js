// Best practices for error handling

// Good example
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

// Bad example
function divide(a, b) {
    if (b === 0) {
        return -1; // error code indicating division by zero
    }
    return a / b;
}
