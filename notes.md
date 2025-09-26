svg and its path
<svg data-section-id="template--17783397482646__product-grid" class="curated-cart-bg" width="100%" height="100%" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M93.4744 -203.828C93.8163 -202.604 93.999 -201.312 93.999 -199.979V1.62181C93.999 11.69 78.6586 18.6245 68.6771 17.3062L59.6458 16.1135C32.8568 12.5756 10.3362 36.0615 14.9945 62.6785L17.6327 77.7523C18.962 85.348 13.971 94.7601 6.25996 94.7601H-183.714C-184.42 94.7601 -185.114 94.7089 -185.793 94.6098C-192.698 93.6012 -198 87.6551 -198 80.4706V-199.976C-198 -207.868 -191.602 -214.266 -183.71 -214.266H79.71C85.6283 -214.266 90.7064 -210.668 92.8763 -205.54C90.7073 -210.668 85.6296 -214.266 79.7115 -214.266H-183.714C-191.604 -214.266 -198.001 -207.869 -198.001 -199.979V80.4727C-198.001 87.657 -192.698 93.6028 -185.793 94.6098C-185.113 94.7092 -184.418 94.7606 -183.71 94.7606H79.71C87.6021 94.7606 94 88.3628 94 80.4706V-199.976C94 -201.311 93.8167 -202.603 93.4744 -203.828ZM93.7274 94.5115C93.8179 94.4004 93.999 94.4649 93.999 94.6081C93.999 94.6919 93.9304 94.7601 93.8466 94.7601C93.7185 94.7601 93.6466 94.6108 93.7274 94.5115Z" fill="white"></path></svg>

path file
<path fill-rule="evenodd" clip-rule="evenodd" d="M93.4744 -203.828C93.8163 -202.604 93.999 -201.312 93.999 -199.979V1.62181C93.999 11.69 78.6586 18.6245 68.6771 17.3062L59.6458 16.1135C32.8568 12.5756 10.3362 36.0615 14.9945 62.6785L17.6327 77.7523C18.962 85.348 13.971 94.7601 6.25996 94.7601H-183.714C-184.42 94.7601 -185.114 94.7089 -185.793 94.6098C-192.698 93.6012 -198 87.6551 -198 80.4706V-199.976C-198 -207.868 -191.602 -214.266 -183.71 -214.266H79.71C85.6283 -214.266 90.7064 -210.668 92.8763 -205.54C90.7073 -210.668 85.6296 -214.266 79.7115 -214.266H-183.714C-191.604 -214.266 -198.001 -207.869 -198.001 -199.979V80.4727C-198.001 87.657 -192.698 93.6028 -185.793 94.6098C-185.113 94.7092 -184.418 94.7606 -183.71 94.7606H79.71C87.6021 94.7606 94 88.3628 94 80.4706V-199.976C94 -201.311 93.8167 -202.603 93.4744 -203.828ZM93.7274 94.5115C93.8179 94.4004 93.999 94.4649 93.999 94.6081C93.999 94.6919 93.9304 94.7601 93.8466 94.7601C93.7185 94.7601 93.6466 94.6108 93.7274 94.5115Z" fill="white"></path>



// product card

// svg banner
<svg data-section-id="template--17783397482646__product-grid" class="card-badge" width="100%" height="100%" viewBox="0 0 81 40" fill="#FFFC1F" xmlns="http://www.w3.org/2000/svg"><path data-section-id="template--17783397482646__product-grid" d="M0 2.21709L0 37.9357C0 38.9221 0.799594 39.7217 1.78594 39.7217L78.331 39.7217C79.8467 39.7217 80.6733 37.9526 79.7009 36.79L66.6806 21.2222C66.126 20.559 66.126 19.5938 66.6806 18.9306L79.7009 3.36287C80.6733 2.20023 79.8467 0.43116 78.331 0.43116L1.78593 0.43116C0.799589 0.43116 0 1.23075 0 2.21709Z" fill="#FFFC1F"></path><text x="35.5" y="27" fill="black" font-size="20" font-weight="700" text-anchor="middle">-60%</text></svg>


function renderProductCards(products) {
  const productGrid = document.getElementById('product-grid');

  products.forEach(product => {
    // Create the main card container
    const card = document.createElement('div');
    card.classList.add('product-card'); // Add a class for styling

    // Create the image element
    const img = document.createElement('img');
    img.src = product.image_url; 
    img.alt = product.name; 
    card.appendChild(img);

    // Create the product name heading
    const name = document.createElement('h3');
    name.textContent = product.name;
    card.appendChild(name);

    // Create the price paragraph
    const price = document.createElement('p');
    price.textContent = `$${product.price}`;
    card.appendChild(price);

    // Add more elements as needed (e.g., description, button, etc.)
    
    // Append the complete card to the product grid
    productGrid.appendChild(card);
  });
}