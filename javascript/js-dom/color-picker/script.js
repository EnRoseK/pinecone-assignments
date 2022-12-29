const colorPicker = document.querySelector('#colorPicker');
const productTarget = document.querySelector('.product');

// productTarget.style.background = colorPicker.value;

colorPicker.addEventListener('input', (e) => {
    productTarget.style.background = e.target.value;
});
