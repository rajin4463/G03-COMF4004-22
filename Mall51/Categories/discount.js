console.log("Working...");
BASE_URL = "https://sore-narrow-seashore.glitch.me/";
let cards = document.querySelector('.cards');
let error = document.querySelector('.error');

// Functions for the hamburger menu
function openNav() {
    document.getElementById("hamburgerNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("hamburgerNav").style.width = "0";
}

async function displayDiscountCategory(url){
    const response = await fetch(url);
    let discount = await response.json();
    for (let i = 0; i < discount.length; i++){
            if (discount[i].Discount == true){
                cards.innerHTML += `
                <li class="item">
                    <div class="card">
                        <div class="image"><img src="../img/little_hearts.jpg" alt=""></div>
                    </div>
                    <div class="content">
                        <h2>${discount[i].ShopName}</h2>
                        <p>${discount[i].ShopLocation}</p>
                    </div>
                </li>
                `;
            }
            // else{
            //     error.innerHTML = `<h1 class="errorMessage">No results...</h1>`;
            // }
        
    }
}
displayDiscountCategory(BASE_URL + "home");