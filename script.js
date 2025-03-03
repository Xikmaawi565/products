const productsContainer = document.querySelector('.products');

function DisplayData(data) {
    productsContainer.innerHTML = ""; // Clear the content once before adding new items
    data.forEach((d) => {
        const product = document.createElement('div');
        product.className = 'product';

        const img = document.createElement('img');
        img.src = d.image;
        
        const title = document.createElement('h3');
        title.innerHTML = d.title;
        
        const description = document.createElement('p');
        description.innerHTML = d.description;

        const category = document.createElement('h4');
        category.innerHTML = `Category: ${d.category}`;

        const price = document.createElement('h4');
        price.innerHTML = `Price: $${d.price}`;
        
        const rating = document.createElement('h4');
        rating.innerHTML = `Rating: ${d.rating.rate}`;

        const ratingCount = document.createElement('h4');
        ratingCount.innerHTML = `Count: ${d.rating.count}`;

        const addButton = document.createElement('button');
        addButton.innerHTML = 'Add to Cart';
        addButton.className = 'add-to-cart';

        product.appendChild(img);
        product.appendChild(title);
        product.appendChild(description);
        product.appendChild(category);
        product.appendChild(price);
        product.appendChild(rating);
        product.appendChild(ratingCount);
        product.appendChild(addButton);

        productsContainer.appendChild(product);
    });
}

const api = 'https://fakestoreapi.com/products'; // Fetch multiple products

const GetData = async () => {
    const response = await fetch(api);
    const data = await response.json(); // Await the response and parse JSON
    return data;
}

GetData().then(data => {
    DisplayData(data);
})

function ShowData(e) {
    e.preventDefault();
    GetData().then(data => {
        DisplayData(data);
    })
}


