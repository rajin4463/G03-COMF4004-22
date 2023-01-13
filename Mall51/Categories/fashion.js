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

async function displayFashionCategory(url){
    const response = await fetch(url);
    let fashion = await response.json();
    for (let i = 0; i < fashion.length; i++){
        for (let j = 0; j < fashion[i].Category.length; j++){
            if (fashion[i].Category[j] == "Fashion"){
                cards.innerHTML += `
                <li class="item">
                    <div class="card">
                        <div class="image"><img src="../img/little_hearts.jpg" alt=""></div>
                    </div>
                    <div class="content">
                        <h2>${fashion[i].ShopName}</h2>
                        <p>${fashion[i].ShopLocation}</p>
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
displayFashionCategory(BASE_URL + "home");