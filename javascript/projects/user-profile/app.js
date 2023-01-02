const profileTarget = document.querySelector('.profile');

const getUser = async () => {
    const data = await fetch(`https://randomuser.me/api`).then((res) => res.json());
    const user = data.results[0];
    console.log(user);
    return user;
};

const getUserCard = (user) => {
    return ` 
        <div class="top">
            <img src="${user.picture.large}" class="pro-pic" alt="">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>${user.email}</p>
            <p>${user.cell}</p>
        </div>

        <div class="bottom">
            <div class="info">Devices Used - Mobile</div>
            <div class="info">Location - ${user.location.city}, ${user.location.country}</div>
            <div class="info">Facebook Profile</div>
            <div class="amount">Total Amount Spent $2,314</div>
        </div>`;
};

const renderUser = async () => {
    const user = await getUser();
    profileTarget.innerHTML = getUserCard(user);
};

renderUser();
