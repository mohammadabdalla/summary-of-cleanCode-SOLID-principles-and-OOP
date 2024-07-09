// Benefits of small, focused functions

// Good example
function sendEmail(to, subject, body) {
    // email sending logic
}

function getUserDetails(userId) {
    // logic to fetch user details
}

// Bad example
function processOrder(order) {
    // handling order processing, email sending, and logging all in one function
}

function handleCustomerRequest(request) {
    // lengthy and unclear logic
}
