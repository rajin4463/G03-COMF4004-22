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

async function displayGroceryCategory(url){
    const response = await fetch(url);
    let grocery = await response.json();
    for (let i = 0; i < grocery.length; i++){
        for (let j = 0; j < grocery[i].Category.length; j++){
            if (grocery[i].Category[j] == "Grocery"){
                cards.innerHTML += `
                <li class="item">
                    <div class="card">
                        <div class="image"><img src="../img/little_hearts.jpg" alt=""></div>
                    </div>
                    <div class="content">
                        <h2>${grocery[i].ShopName}</h2>
                        <p>${grocery[i].ShopLocation}</p>
                    </div>
                </li>
                `;
            }
            // else{
            //     error.innerHTML = `<h1 class="errorMessage">No results...</h1>`;
            // }
        }
    }
}
displayGroceryCategory(BASE_URL + "home");