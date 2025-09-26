document.addEventListener("DOMContentLoaded", function () {

    const sortHeader = document.getElementById('sortFilter');

    // productParser(url, productId, limit, skip);

    // for (productId; productId <= 30; productId++) {
    //     productParser(url, productId);
    // }

    let url = "https://dummyjson.com/products";
    let productCard = document.getElementById('product-grid');

    async function printerFn() {
    for (let productId = 1; productId <= 30; productId++) {
        const productHTML = await productParser(url, productId);
        if (productHTML) {
        productCard.innerHTML += productHTML;
        console.log(productCard);
        }
    }
    };

    printerFn(productParser);


    sortHeader.addEventListener('click', function(){
    });

    async function productParser(url, productId, limit, skip){
        try {
            const response = await fetch(`${url}/${productId}`);

            if(!response.ok) {
                console.log("product not found");
            }

            const product = await response.json();
            const data = product.products;

            console.log(product);
            console.log(product.id);
            console.log(product.title);
            console.log(product.description);
            console.log(product.images[0]);

            product.tags.forEach(tag => {
                console.log(tag);
            });

            let countStars = Math.floor(product.rating);
            let countStarsRem = Math.ceil(product.rating);

            let offerValuePrice = ((product.discountPercentage/100)*(product.price));

            console.log(offerValuePrice);

            console.log(countStars);
            console.log(countStarsRem);

            let stringStars = '';
            for(let i = 1; i <= countStars; i++){
                stringStars += '<i class="fa-solid fa-star" style="color: #FFD43B;"></i>';
            }

            if(countStarsRem > countStars){
                stringStars += '<i class="fa-solid fa-star-half" style="color: #FFD43B;"></i>';
            }
            // <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            // full

            // <i class="fa-solid fa-star-half" style="color: #FFD43B;"></i>
            // half
    // 

                return `<div class="st-product-wrap">
                                <figure class="image-container">
                                    <div class="product-image-container">
                                        <img src="${product.images[0]}" alt="">
                                    </div>
                                            <div class="product-image-container-badge">
                                                <!-- banner svg text -->
                                                <svg data-section-id="template--17783397482646__product-grid" class="card-badge" width="100%" height="100%" viewBox="0 0 81 40" fill="#FFFC1F" xmlns="http://www.w3.org/2000/svg"><path data-section-id="template--17783397482646__product-grid" d="M0 2.21709L0 37.9357C0 38.9221 0.799594 39.7217 1.78594 39.7217L78.331 39.7217C79.8467 39.7217 80.6733 37.9526 79.7009 36.79L66.6806 21.2222C66.126 20.559 66.126 19.5938 66.6806 18.9306L79.7009 3.36287C80.6733 2.20023 79.8467 0.43116 78.331 0.43116L1.78593 0.43116C0.799589 0.43116 0 1.23075 0 2.21709Z" fill="#FFFC1F"></path><text x="35.5" y="27" fill="black" font-size="20" font-weight="700" text-anchor="middle">-${product.discountPercentage}%</text>
                                                </svg>
                                            </div>
                                            <div class="product-image-container-curve-round-bag">
                                                <svg width="100%" height="100%" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.173828" y="0.247559" width="68" height="68" rx="34" fill="black"></rect><path d="M27.7991 28.113V26.7389C27.7991 23.5514 30.3632 20.4205 33.5507 20.123C37.3474 19.7547 40.5491 22.7439 40.5491 26.4697V28.4247" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M29.925 48.4139H38.425C44.12 48.4139 45.14 46.1331 45.4375 43.3564L46.5 34.8564C46.8825 31.3997 45.8909 28.5806 39.8417 28.5806H28.5084C22.4592 28.5806 21.4675 31.3997 21.85 34.8564L22.9125 43.3564C23.21 46.1331 24.23 48.4139 29.925 48.4139Z" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M39.1263 34.2484H39.1391" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M29.2089 34.2484H29.2216" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </div>
                                            <div class="product-image-container-curve">
                                                <!-- path overlay image-->
                                                <svg class="curated-cart-bg" style="aspect-ratio: 4/5; max-width: 220px;" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M93.4744 -203.828C93.8163 -202.604 93.999 -201.312 93.999 -199.979V1.62181C93.999 11.69 78.6586 18.6245 68.6771 17.3062L59.6458 16.1135C32.8568 12.5756 10.3362 36.0615 14.9945 62.6785L17.6327 77.7523C18.962 85.348 13.971 94.7601 6.25996 94.7601H-183.714C-184.42 94.7601 -185.114 94.7089 -185.793 94.6098C-192.698 93.6012 -198 87.6551 -198 80.4706V-199.976C-198 -207.868 -191.602 -214.266 -183.71 -214.266H79.71C85.6283 -214.266 90.7064 -210.668 92.8763 -205.54C90.7073 -210.668 85.6296 -214.266 79.7115 -214.266H-183.714C-191.604 -214.266 -198.001 -207.869 -198.001 -199.979V80.4727C-198.001 87.657 -192.698 93.6028 -185.793 94.6098C-185.113 94.7092 -184.418 94.7606 -183.71 94.7606H79.71C87.6021 94.7606 94 88.3628 94 80.4706V-199.976C94 -201.311 93.8167 -202.603 93.4744 -203.828ZM93.7274 94.5115C93.8179 94.4004 93.999 94.4649 93.999 94.6081C93.999 94.6919 93.9304 94.7601 93.8466 94.7601C93.7185 94.7601 93.6466 94.6108 93.7274 94.5115Z" fill="white"></path></svg>
                                            </div>
                                </figure>
                                <div class="product-information-wrapper">
                                    <h4 class="title-element">${product.brand}</h4>
                                    <h4 class="description">${product.description}</h4>
                                    <div class="rating-container">
                                        <div class="rating-svg-stars">
                                            ${stringStars}
                                        </div>
                                        <div class="rating-value-container">
                                            <span>${product.rating}</span>
                                        </div>
                                    </div>
                                    <div class="price-container">
                                        <span class="price-offer-value-container">
                                            ₹ ${product.price}
                                        </span>
                                        <span class="original-price-container">
                                            ₹ ${product.price}
                                        </span>
                                    </div>
                                </div>`

            // data.forEach(productId => console.log(productId.title));
            // product.

            
        } catch (error) {
            console.error(error);
        }

    }




    // return function which is in the inner text format of the div i need to insert
});