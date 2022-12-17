const colorSelect = document.getElementById('colorSelect');
const btn = document.querySelector('input[type="button"]');
const options = document.getElementsByTagName('option');

const alertElements = () => {
    let result = `No. of items : ${options.length}\n`;

    for (let i = 0; i < options.length; i++) {
        result += options[i].value + '\n';
    }

    alert(result);
};

btn.addEventListener('click', () => {
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === colorSelect.value) {
            options[i].parentNode.removeChild(options[i]);
        }
    }

    alertElements();
});

alertElements();
