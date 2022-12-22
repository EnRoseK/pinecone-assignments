const sliderTarget = document.getElementById('slider');

const images = ['andromeda-galaxy', 'pelican', 'milky-way', 'saturn', 'neptune'];

const addImages = () => {
    for (let i = 0; i < images.length; i++) {
        const img = document.createElement('img');
        img.src = `./img/${images[i]}.jpg`;

        img.addEventListener('click', (e) => {
            e.target.classList.add('active');
        });

        sliderTarget.appendChild(img);
    }
};

addImages();
