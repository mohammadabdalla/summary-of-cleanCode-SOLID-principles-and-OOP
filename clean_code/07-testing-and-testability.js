// Techniques for writing testable code

// Good example
function sum(a, b) {
    return a + b;
}

// Unit test case
test('sum function adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
});

// Bad example
function calculateTax(price, taxRate) {
    return price * (taxRate / 100);
}
