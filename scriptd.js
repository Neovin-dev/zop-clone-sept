// async function loggingData(url){
//     try {

//         const response = await fetch(url);

//         if(!response.ok){
//             console.log("url not accessable");
//         }

//         const printing = await response.json();
//         console.log(printing);
//         console.log(printing.total);
        
//     } catch (err) {
//         console.error(err);
//     }

// }

// function to able to access each product individually

// productId = 1;

// async function printingProducts(url, productId){
//     try {
//         const response = await fetch(`${url}/${productId}`);

//         if(!response.ok) {
//             console.log("product not found");
//         }

//         const products = await response.json();

//         console.log(products);
//         console.log(products.id);
//         console.log(products.title);
//         console.log(products.description);
//         console.log(products.images[0]);
//         products.tags.forEach(tag => {
//             console.log(tag);
//         });
         
//     } catch (error) {
//         console.error(error);
//     }
// }

// for (let productId = 1; productId <= 6; productId++) {
//     printingProducts(url, productId);
// }


//function to push the each iterative array of products with required tags in the product grid 

// loggingData(url);

// printingProducts(url, productId);


// making a content parser to the website
// extract data from the json then assign it to the variabe then innerHTML a
// innerHTML function
// variable assginer
// printer => product parser 
// to extract the points to insert the data we will use eventListner delegation

/* =============================Categrory mapper ====================================
    brandname, rating, price, discount, description, image
*/

// https://dummyjson.com/products?limit=10&skip=10&select=title,price