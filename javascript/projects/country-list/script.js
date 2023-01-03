const countryTarget = document.querySelector('#countryTarget');
const searchCountryInput = document.querySelector('#searchCountry');
const searchBtn = document.querySelector('#searchBtn');
const region = document.querySelector('#region');
const searchRegionBtn = document.querySelector('#searchRegionBtn');

const getCountries = async (name) => {
    let res;

    !name
        ? (res = await fetch('https://restcountries.com/v3.1/all').then((res) => res.json()))
        : (res = await fetch(`https://restcountries.com/v3.1/name/${name}`).then((res) => res.json()));

    countryTarget.innerHTML = '';

    res.map((item) => {
        const li = document.createElement('li');
        li.innerText = item.name.common;
        countryTarget.appendChild(li);
    });
};

getCountries();

searchBtn.addEventListener('click', () => {
    getCountries(searchCountryInput.value);
});

searchCountryInput.addEventListener('input', (e) => {
    if (!e.target.value) getCountries();
});
