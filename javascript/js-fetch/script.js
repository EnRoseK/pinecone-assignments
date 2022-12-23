const productsTarget = document.getElementById('productsTarget');

const params = new URL(window.location).searchParams;
const category = params.get('category');
const limit = Number(params.get('limit')) || 12;
const page = Number(params.get('page')) || 1;
const query = params.get('q');
const id = params.get('id');

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
            const sQuery = query ? '&q=' + query : '';
            pagination += `
        <li class="page-item"><a class="page-link" href="${window.location.pathname}?limit=${12}&page=${i}${sQuery}">${i}</a></li>
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
                        <a href="./single.html?id=${product.id}">
                               <p class="card-name">${product.title}</p>
                            </a>
                            
                            <p class="card-category">${product.category}</p>
                            <p class="card-name card-price">$${product.price}</p>
                        </div>
                    </div>
                </div>`;
};

const getSingleProductPage = (product) => {
    return `
    <div class="col-6">
                        <div class="p-3">
                            <div class="text-center p-4"> <img src="${product.thumbnail}" width="400" /> </div>
                            <div class="thumbnail text-center"> <img src="${product.images[0]}" width="140"> <img src="${product.images[1]}" width="140"> </div>
                        </div>
                    </div>
                    <div class="col-6 bg-secondary bg-opacity-25 rounded">
                        <div class="p-4 mt-3">
                            <div class="mt-4 mb-3"> <span class="text-uppercase text-muted">${product.brand}</span>
                                <h5 class="text-uppercase">${product.title}</h5>
                                <div class="fs-3"> 
                                $${product.price}
                                </div>
                            </div>
                            <p>${product.description}</p>
                            <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button></div>
                        </div>
                    </div>
                `;
};

const getProducts = async (limit, page, category, query, id) => {
    const skip = (page - 1) * limit;

    let dataUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    if (id) {
        dataUrl = `https://dummyjson.com/products/${id}`;

        const res = await fetch(dataUrl);
        const singleProduct = await res.json();

        const singleProductTarget = document.getElementById('singleProductTarget');

        console.log(singleProduct);

        singleProductTarget.innerHTML += getSingleProductPage(singleProduct);

        return;
    }

    productsTarget.innerHTML = '';

    if (category) {
        dataUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
    }

    if (query) {
        dataUrl = `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`;
    }

    const res = await fetch(dataUrl);
    const data = await res.json();

    let products = data.products;

    products.forEach((product) => {
        productsTarget.innerHTML += getProductCard(product);
    });
    productsTarget.innerHTML += getPagination(data.total, page, limit);
};

getProducts(limit, page, category, query, id);

const getMenuItem = (menuItem) => {
    return `<li class="nav-item">
                <a class="nav-link ${menuItem.isActive && 'active'}" href="${menuItem.link}">${menuItem.name}</a>
            </li>`;
};

const menuTarget = document.getElementById('menuTarget');

const getCategories = async () => {
    const res = await fetch('https://dummyjson.com/products/categories');
    const categories = await res.json();
    return categories.slice(0, 5);
};

const getMenus = async () => {
    const categories = await getCategories();

    const menuCategories = categories.map((category) => {
        return {
            isActive: false,
            link: `/javascript/js-fetch/index.html?category=${category}`,
            name: category,
        };
    });

    menuCategories.forEach((category) => {
        menuTarget.innerHTML += getMenuItem(category);
    });
};

getMenus();
