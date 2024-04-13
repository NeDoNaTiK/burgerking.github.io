// Sample data for menu items with images
const menuItems = [
    { name: 'Whopper', price: 5.99, image: 'whopper.jpg' },
    { name: 'Big King', price: 4.99, image: 'big_king.jpg' },
    { name: 'Chicken Fries', price: 3.49, image: 'chicken_fries.jpg' }
  ];
  
  // Function to display menu items
  function displayMenu() {
    const menuContainer = document.getElementById('items');
    menuContainer.innerHTML = '';
    menuItems.forEach(item => {
      const itemDiv = document.createElement('div');
      const img = document.createElement('img');
      img.src = `images/${item.image}`;
      img.alt = item.name;
      const name = document.createElement('p');
      name.textContent = item.name;
      const price = document.createElement('p');
      price.textContent = `$${item.price.toFixed(2)}`;
      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.addEventListener('click', () => addToCart(item));
      itemDiv.appendChild(img);
      itemDiv.appendChild(name);
      itemDiv.appendChild(price);
      itemDiv.appendChild(addButton);
      menuContainer.appendChild(itemDiv);
    });
  }
  
  // Function to add item to cart
  function addToCart(item) {
    const cartList = document.getElementById('cart-items');
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  }
  
  // Function to handle checkout
  function checkout() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    alert('Thank you for your order!');
  }
  
  // Event listener for checkout button
  document.getElementById('checkout-btn').addEventListener('click', checkout);
  
  // Display menu on page load
  displayMenu();
  