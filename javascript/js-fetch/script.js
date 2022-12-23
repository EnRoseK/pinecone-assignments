const productsTarget = document.getElementById('productsTarget');
const singleProductTarget = document.getElementById('singleProductTarget');
const params = new URL(window.location).searchParams;
const category = params.get('category');
const limit = Number(params.get('limit')) || 12;
const page = Number(params.get('page')) || 1;
const query = params.get('q');
const id = params.get('id');

console.log(id);

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
                        <a href="./single.html?id="${product.id}"">
                               <p class="card-name">${product.title}</p>
                            </a>
                            
                            <p class="card-category">${product.category}</p>
                            <p class="card-name card-price">$${product.price}</p>
                        </div>
                    </div>
                </div>`;
};

const getSingleProductPage = (product) => {
    return `<div class="col-12 text-center">
                    <img src="" class="img-fluid" alt="">
                    <p class="card-name">${product.title}</p>
                    <p class="card-category">${product.category}</p>
                    <p class="card-name card-price">$${product.price}</p>
                </div>`;
};

const getProducts = async (limit, page, category, query, id) => {
    productsTarget.innerHTML = '';
    const skip = (page - 1) * limit;

    let dataUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    if (category) {
        dataUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
    }

    if (query) {
        dataUrl = `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`;
    }

    if (id) {
        dataUrl = `https://dummyjson.com/products/${id}`;
    }

    const res = await fetch(dataUrl);
    const data = await res.json();

    let products = data.products;

    products.forEach((product) => {
        productsTarget.innerHTML += getProductCard(product);
    });
    productsTarget.innerHTML += getPagination(data.total, page, limit);
};

getProducts(limit, page, category, query);

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
