// Demonstrating the importance of meaningful names

// Good example
let customerName = "John Doe";
let orderTotalAmount = calculateOrderTotal(items);

function calculateOrderTotal(items) {
    // calculation logic
    return total;
}

// Bad example
let x = "John Doe";
let a = calculateOrderTotal(items);

function calcTotal(items) {
    // unclear logic
    return t;
}
