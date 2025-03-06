// Initialize an empty cart array
let cart = [];

// Function to update the cart display
function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = ''; // Clear the current list

  cart.forEach(photo => {
    const listItem = document.createElement('li');
    listItem.textContent = `Photo ID: ${photo.id} - ${photo.name}`;
    cartItemsContainer.appendChild(listItem);
  });
}

// Function to handle adding a photo to the cart
function addToCart(photoId, photoName) {
  // Create a photo object (this would typically contain more data)
  const photo = { id: photoId, name: photoName };

  // Add the photo to the cart array
  cart.push(photo);

  // Update the cart display
  updateCart();
}

// Event listener for the 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    // Get the parent photo div and extract its photo ID
    const photoDiv = button.closest('.photo');
    const photoId = photoDiv.getAttribute('data-photo-id');
    const photoName = photoDiv.querySelector('img').alt;

    // Add the photo to the cart
    addToCart(photoId, photoName);
  });
});