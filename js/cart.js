// An array to hold cart items
let cart = [];

// Function to add an item
function addToCart(item) {
    cart.push(item);
    console.log(`${item.name} has been added to the cart.`);
}

// Sample item
let newItem = {
    name: "Wireless Mouse",
    price: 25.99,
    quantity: 1
};

// Add the item to the cart
addToCart(newItem);