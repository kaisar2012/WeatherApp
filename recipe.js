fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => {
        const productList = document.querySelector('.product-list');
        productList.innerHTML = ''; // Clear existing products

        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.onclick = () => showDetails(product.name, product.description, product.price);
            productDiv.innerHTML = `<h2>${product.name}</h2><p>Price: ${product.price}</p>`;
            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error fetching products:', error));