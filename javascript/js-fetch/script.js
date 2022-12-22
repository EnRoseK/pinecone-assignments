const productsTarget = document.getElementById('productsTarget');

const getPagination = (total, page, limit) => {
    let pagination = `
    <nav>
      <ul class="pagination justify-content-center">`;

    const totalPages = Math.ceil(total / limit);

    for (let i = 1; i <= totalPages; i++) {
        if (page === i) {
            pagination += `	<li class="page-item active">
      							<span class="page-link">${i}</span>
    						</li>`;
        } else {
            pagination += `
        <li class="page-item"><a class="page-link" href="javascript:getProducts(${limit}, ${limit * (i - 1)})">${i}</a></li>
        `;
        }
    }

    pagination += `</ul>
    </nav>`;

    return pagination;
};

const getProductCard = (product) => {
    return `<div class="col-4">
                    <div class="card">
                        <div class="ratio ratio-4x3">
                            <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}"/>
                        </div>
                        <div class="card-body">
                            <p class="card-name">${product.title}</p>
                            <p class="card-category">${product.category}</p>
                            <p class="card-name card-price">$${product.price}</p>
                        </div>
                    </div>
                </div>`;
};

const getProducts = async (limit = 9, skip = 0) => {
    productsTarget.innerHTML = '';
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data = await res.json();

    for (const product of data.products) {
        productsTarget.innerHTML += getProductCard(product);
    }

    productsTarget.innerHTML += getPagination(data.total, skip / limit + 1, limit);
};

getProducts();
