console.log("Working...");
BASE_URL = "https://sore-narrow-seashore.glitch.me/";
let cards = document.querySelector('.cards');
//let display = document.getElementById('display').className = "MyClass";

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
    let ShopDetails = await response.json();
    const responseImg = await fetch(urlImg);
    const img = await responseImg.json();
    console.log(ShopDetails);
    console.log(img);
    for (let i = 0; i < ShopDetails.length; i++){
        cards.innerHTML += `
    <li class="item">
        <div class="card">
            <div class="image"><img src="./img/little_hearts.jpg" alt=""></div>
        </div>
        <div class="content">
            <h2>${ShopDetails[i].ShopName}</h2>
            <p>${ShopDetails[i].ShopLocation}</p>
        </div>
    </li>
    `;
    }
}
displayShopDetails(BASE_URL + "home", BASE_URL + "home/img");






