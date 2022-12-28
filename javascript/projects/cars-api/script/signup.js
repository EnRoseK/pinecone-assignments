const emailTarget = document.querySelector('#email');
const passwordTarget = document.querySelector('#password');
const repasswordTarget = document.querySelector('#rePassword');
const errorMsgTarget = document.querySelector('#errorMsg');
const showPassTarget = document.querySelector('#showPassword');

const repassFeedback = document.querySelector('#repassFeedback');
const passFeedback = document.querySelector('#passFeedback');
const emailFeedback = document.querySelector('#emailFeedback');

const rules = document.querySelectorAll('li');
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = lowerLetters.toUpperCase();
const numbers = '0123456789';
const specialChars = '@$!%*#?&.';

const checkUppercase = (val) => {
    for (let i = 0; i < upperLetters.length; i++) if (val.includes(upperLetters[i])) return true;

    return false;
};

const checkLowercase = (val) => {
    for (let i = 0; i < lowerLetters.length; i++) if (val.includes(lowerLetters[i])) return true;

    return false;
};

const checkNumbers = (val) => {
    for (let i = 0; i < numbers.length; i++) if (val.includes(numbers[i])) return true;

    return false;
};

const checkSpecial = (val) => {
    for (let i = 0; i < specialChars.length; i++) if (val.includes(specialChars[i])) return true;

    return false;
};

const checkRepeatPassword = (val) => {
    if (val === passwordTarget.value) return true;
    return false;
};

const getFieldValues = () => {
    return {
        email: emailTarget.value,
        password: passwordTarget.value,
        repassword: repasswordTarget.value,
    };
};

const signupSubmit = () => {
    const values = getFieldValues();

    if (!values.email || !values.password || !values.repassword) {
        if (!values.email) {
            emailTarget.classList.add('is-invalid');
            emailFeedback.classList.add('invalid-feedback');
            emailFeedback.innerHTML = 'Please, provide valid email!';
        }
        if (!values.password) {
            passwordTarget.classList.add('is-invalid');
            passFeedback.classList.add('invalid-feedback');
            passFeedback.innerHTML = 'Please, provide valid password!';
        }

        if (!values.repassword) {
            repasswordTarget.classList.add('is-invalid');
            repassFeedback.classList.add('invalid-feedback');
            repassFeedback.innerHTML = 'Please, provide valid password!';
        }
        return;
    }

    if (
        checkUppercase(values.password) &&
        checkLowercase(values.password) &&
        checkNumbers(values.password) &&
        checkSpecial(values.password) &&
        checkRepeatPassword(values.repassword)
    ) {
        fetch(`http://localhost:3333/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
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
            })
            .catch((err) => {
                errorMsgTarget.classList.remove('d-none');
                errorMsgTarget.innerHTML = err;
            });
        return;
    }

    if (
        !checkUppercase(values.password) ||
        !checkLowercase(values.password) ||
        !checkNumbers(values.password) ||
        !checkSpecial(values.password)
    ) {
        errorMsgTarget.classList.remove('d-none');
        errorMsgTarget.innerHTML = `Password does not meet requirement`;
    }

    if (!checkRepeatPassword(values.repassword)) {
        errorMsgTarget.classList.remove('d-none');
        errorMsgTarget.innerHTML = `Password does not match`;
    }
};

const submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', signupSubmit);

emailTarget.addEventListener('input', (e) => {
    e.target.classList.remove('is-invalid');
    emailFeedback.classList.remove('invalid-feedback');
    emailFeedback.innerHTML = ``;
});

passwordTarget.addEventListener('input', (e) => {
    const passVal = e.target.value;

    e.target.classList.remove('is-invalid');
    passFeedback.classList.remove('invalid-feedback');
    passFeedback.innerHTML = ``;

    if (passVal.length >= 8) rules[4].style.color = 'green';
    else rules[4].style.color = 'inherit';

    if (checkUppercase(passVal)) rules[0].style.color = 'green';
    else rules[0].style.color = 'inherit';

    if (checkLowercase(passVal)) rules[1].style.color = 'green';
    else rules[1].style.color = 'inherit';

    if (checkNumbers(passVal)) rules[2].style.color = 'green';
    else rules[2].style.color = 'inherit';

    if (checkSpecial(passVal)) rules[3].style.color = 'green';
    else rules[3].style.color = 'inherit';
});

repasswordTarget.addEventListener('input', (e) => {
    if (checkRepeatPassword(e.target.value)) {
        repassFeedback.innerHTML = 'Password matches!';
        repassFeedback.classList.remove('invalid-feedback');
        repassFeedback.classList.add('valid-feedback');
        repasswordTarget.classList.remove('is-invalid');
        repasswordTarget.classList.add('is-valid');
    } else {
        repassFeedback.innerHTML = 'Password does not match!';
        repassFeedback.classList.remove('valid-feedback');
        repassFeedback.classList.add('invalid-feedback');
        repasswordTarget.classList.remove('is-valid');
        repasswordTarget.classList.add('is-invalid');
    }
});

showPassTarget.addEventListener(
    'change',
    (e) => (passwordTarget.type = e.target.checked ? 'text' : 'password')
);
