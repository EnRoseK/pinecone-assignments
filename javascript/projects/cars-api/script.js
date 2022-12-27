const carsTarget = document.getElementById('cars');

const getCars = async () => {
    const res = await fetch(`http://localhost:3333/api/cars`);
    const data = await res.json();
    console.log(data);
    return data;
};

const currencyFormatter = (value) =>
    new Intl.NumberFormat('mn-MN', { maximumSignificantDigits: 3 }).format(value);

const getCarCard = (car) => {
    return `   
        <div class="col-3">
          <div class="card">
            <div class="ratio ratio-4x3">
              <img class="card-img-top" src="${car.imageUrl}" />
            </div>
            <div class="card-body">
              <p class="card-name">${car.model}</p>
              <p class="card-category">${car.brand}</p>
              <p class="card-name card-price">${currencyFormatter(car.price)}₮</p>
              <div class="d-flex justify-content-end gap-1">
                <button type="button" class="btn btn-success btn-sm" onclick="editCar(${
                    car.id
                })">Засах</button>
                <button type="button"  class="btn btn-danger btn-sm" onclick="deleteCar(${
                    car.id
                })">Устгах</button>
              </div>
            </div>
          </div>
        </div>`;
};

const getCarsHtml = async () => {
    carsTarget.innerHTML = ``;
    const cars = await getCars();
    for (let i = cars.length - 1; i >= 0; i--) carsTarget.innerHTML += getCarCard(cars[i]);
};

getCarsHtml();

const modal = new bootstrap.Modal(document.getElementById('carModal'));
const modalFooter = document.querySelector('.modal-footer');
const createBtn = document.getElementById('createBtn');

const imageUrlTarget = document.getElementById('imageUrl');
const modelTarget = document.getElementById('model');
const brandTarget = document.getElementById('brand');
const priceTarget = document.getElementById('price');

const addCar = async () => {
    const newCar = {
        imageUrl: imageUrlTarget.value,
        model: modelTarget.value,
        brand: brandTarget.value,
        price: priceTarget.value,
    };

    const req = await fetch(`http://localhost:3333/api/cars`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCar),
    });

    const res = await req.json();
    modal.hide();
    getCarsHtml();
};

const deleteCar = (id) => {
    confirm(`Та устгахдаа итгэлтэй байна уу?`) &&
        fetch(`http://localhost:3333/api/cars`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then((res) => res.json())
            .catch((err) => {
                alert(`Амжилттай устгалаа`);
                getCarsHtml();
            });
};

const updateCar = async (id) => {
    const updatedCar = {
        id: id,
        imageUrl: imageUrlTarget.value,
        model: modelTarget.value,
        brand: brandTarget.value,
        price: priceTarget.value,
    };

    const req = await fetch(`http://localhost:3333/api/cars`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCar),
    });

    modal.hide();
    getCarsHtml();
};

const editCar = (id) => {
    fetch(`http://localhost:3333/api/cars/${id}`)
        .then((res) => res.json())
        .then((car) => {
            imageUrlTarget.value = car.imageUrl;
            modelTarget.value = car.model;
            brandTarget.value = car.brand;
            priceTarget.value = car.price;

            modalFooter.innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`;

            const editBtn = document.createElement('button');
            editBtn.classList.add('btn');
            editBtn.classList.add('btn-primary');
            editBtn.innerText = 'Edit';

            editBtn.addEventListener('click', () => updateCar(id));
            modalFooter.appendChild(editBtn);
            modal.show();
        });
};

createBtn.addEventListener('click', () => {
    imageUrlTarget.value = ``;
    modelTarget.value = ``;
    brandTarget.value = ``;
    priceTarget.value = ``;

    modalFooter.innerHTML = `
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary" id="formSubmit" onclick="addCar()">Add</button>`;
});
