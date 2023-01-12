console.log("Working...");
BASE_URL = "https://sore-narrow-seashore.glitch.me/";
let cards = document.querySelector('.cards');
let fashion_category = document.querySelector('.fashion');

// Functions for the hamburger menu
function openNav() {
    document.getElementById("hamburgerNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("hamburgerNav").style.width = "0";
}

// Function to display shop details on the home page
async function displayShopDetails(url, urlImg){
    const response = await fetch(url);
    let data = await response.json();
    const responseImg = await fetch(urlImg);
    const img = await responseImg.json();
    console.log(data);
    console.log(img);
    for (let i = 0; i < data.shopDetails.length; i++){
        cards.innerHTML += `
    <li class="item">
        <div class="card">
            <div class="image"><img src="./img/little_hearts.jpg" alt=""></div>
        </div>
        <div class="content">
            <h2>${data.shopDetails[i].ShopName}</h2>
            <p>${data.shopDetails[i].Location}</p>
        </div>
    </li>
    `;
    }
}
displayShopDetails(BASE_URL + "home", BASE_URL + "home/img");


fashion_category.addEventListener('click', () => {
    async function displayFashionCategory(url){
        const response = await fetch(url);
        let fashion = await response.json();
        for (let i = 0; i < fashion.shopDetails.length; i++){
            for (let j = 0; j < fashion.shopDetails[i].Category.length; j++){
                if (fashion.shopDetails[i].Category[j] == "Fashion"){
                    location.reload();
                    cards.innerHTML += `
                    <li class="item">
                        <div class="card">
                            <div class="image"><img src="./img/little_hearts.jpg" alt=""></div>
                        </div>
                        <div class="content">
                            <h2>${fashion.shopDetails[i].ShopName}</h2>
                            <p>${fashion.shopDetails[i].Location}</p>
                        </div>
                    </li>
                    `;
                }
            }
        }
    }
    displayFashionCategory(BASE_URL + "home");
})

// if(document.location.pathname === "../home.html"){
//     displayShopDetails(BASE_URL + "home", BASE_URL + "home/img");
// }
