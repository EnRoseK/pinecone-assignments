const countryTarget = document.querySelector('#countryTarget');
const searchCountryInput = document.querySelector('#searchCountry');
const searchBtn = document.querySelector('#searchBtn');
const region = document.querySelector('#region');
const searchRegionBtn = document.querySelector('#searchRegionBtn');

const renderCountries = (countries) => {
    countryTarget.innerHTML = '';

    countries.map((country) => {
        const li = document.createElement('li');
        li.innerText = country.name.common;
        countryTarget.appendChild(li);
    });
};

const getCountries = async () => {
    const data = await fetch('https://restcountries.com/v3.1/all').then((res) => res.json());

    renderCountries(data);
};

const searchCountry = async (name) => {
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`).then((res) => res.json());

    renderCountries(data);
};

const filterRegion = async (region) => {
    const data = await fetch(`https://restcountries.com/v3.1/region/${region}`).then((res) => res.json());

    renderCountries(data);
};

getCountries();

searchBtn.addEventListener('click', () => {
    searchCountry(searchCountryInput.value);
});

searchCountryInput.addEventListener('input', (e) => {
    if (!e.target.value) getCountries();
});

searchRegionBtn.addEventListener('click', () => {
    filterRegion(region.value);
});
