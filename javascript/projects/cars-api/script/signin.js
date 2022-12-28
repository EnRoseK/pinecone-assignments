const emailTarget = document.querySelector('#email');
const passwordTarget = document.querySelector('#password');
const signInBtn = document.querySelector('button');
const errorMsgTarget = document.querySelector('#errorMsg');

let token;

const signIn = () => {
    const user = {
        email: emailTarget.value,
        password: passwordTarget.value,
    };

    fetch('http://localhost:3333/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then((res) => {
            if (res.status === 200) {
                errorMsgTarget.classList.remove('alert-danger');
                errorMsgTarget.classList.add('alert-success');
            }
            return res.json();
        })
        .then((data) => {
            errorMsgTarget.classList.remove('d-none');
            errorMsgTarget.innerHTML = data.message;
            token = data.body;
        })
        .catch((err) => {
            errorMsgTarget.classList.remove('d-none');
            errorMsgTarget.innerHTML = err;
        });
};

signInBtn.addEventListener('click', signIn);
