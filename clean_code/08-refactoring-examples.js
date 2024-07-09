// =============================
// Good Example: Refactoring for Clarity
// =============================

// Function to process an order by validating, applying discount, and sending confirmation email
function processOrder(order) {
    validateOrder(order);       // Ensure the order is valid
    applyDiscount(order);       // Apply any applicable discounts
    sendConfirmationEmail(order);  // Send order confirmation email
}

// Function to validate an order (placeholder for demonstration)
function validateOrder(order) {
    // Example validation logic (could be expanded as needed)
    if (!order.items || order.items.length === 0) {
        throw new Error('Invalid order: No items found.');
    }
}

// Function to apply discounts to an order based on customer type or promotions
function applyDiscount(order) {
    let customerType = getCustomerType(order.customerEmail);  // Example: Fetch customer type based on email
    if (customerType === 'loyal') {
        order.total *= 0.9;  // Apply 10% discount for loyal customers
    }
    // Additional discount logic based on order details
}

// Function to send confirmation email for an order
function sendConfirmationEmail(order) {
    let emailContent = generateEmailContent(order);  // Generate email content
    // Logic to send email using email service or API
    console.log(`Email sent to ${order.customerEmail}: ${emailContent}`);
}

// Function to generate email content
function generateEmailContent(order) {
    return `Dear Customer,\n\nYour order (${order.orderId}) has been processed successfully.\n\nTotal Amount: $${order.total}\n\nThank you for shopping with us!\n\nRegards,\nThe Store Team`;
}

// Example function for fetching customer type
function getCustomerType(customerEmail) {
    // Example implementation to fetch customer type from database or service
    // For demonstration, returning 'loyal' if email matches a loyal customer
    if (customerEmail === 'loyalcustomer@example.com') {
        return 'loyal';
    } else {
        return 'regular';
    }
}

// =============================
// Bad Example: Unclear and Lengthy Logic
// =============================

// Unclear and lengthy logic for processing an order
function processOrderUnclear(order) {
    // Example of unclear and lengthy logic
    if (order.items.length > 0) {
        let total = 0;
        for (let item of order.items) {
            total += calculateItemPrice(item);
        }
        if (order.customerEmail) {
            if (order.customerEmail.endsWith('@example.com')) {
                total *= 0.95;  // Apply 5% discount for example.com customers
            }
        }
        console.log(`Order processed successfully. Total amount: $${total}`);
    } else {
        console.log('Invalid order: No items found.');
    }
}

// Example function to calculate item price
function calculateItemPrice(item) {
    // Example logic to calculate item price
    // For demonstration, returning a fixed price based on item
    switch (item) {
        case 'Product A':
            return 50;
        case 'Product B':
            return 75;
        default:
            return 0;
    }
}

// Example usage for both good and bad examples
let sampleOrder = {
    orderId: '123456',
    items: ['Product A', 'Product B'],
    total: 0,  // Placeholder for total, actual calculation is unclear here
    customerEmail: 'customer@example.com'
};

console.log("=== Good Example ===");
processOrder(sampleOrder);

console.log("\n=== Bad Example ===");
processOrderUnclear(sampleOrder);
