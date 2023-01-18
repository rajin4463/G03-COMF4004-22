console.log("Working...");
BASE_URL = "https://sore-narrow-seashore.glitch.me/";
let cards = document.querySelector('.cards');
let error = document.querySelector('.error');
let searchBar = document.getElementById('search');

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
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < discount.length; i++){
            if (discount[i].Discount == true){
                console.log(discount[i].ShopName);
                let li = document.createElement("li");
                li.classList.add("item");

                let divCard = document.createElement("div");
                divCard.classList.add("card");

                let divImage = document.createElement("div");
                divImage.classList.add("image");
                let img = document.createElement("img");
                img.src = "../img/little_hearts.jpg";
                img.alt = "";
                divImage.appendChild(img);
                divCard.appendChild(divImage);

                let divContent = document.createElement("div");
                divContent.classList.add("content");
                let h2 = document.createElement("h2");
                h2.innerText = discount[i].ShopName;
                divContent.appendChild(h2);
                let p = document.createElement("p");
                p.innerText = discount[i].ShopLocation;
                divContent.appendChild(p);
                divCard.appendChild(divContent);

                li.appendChild(divCard);
                fragment.appendChild(li);
            }
            // else{
            //     error.innerHTML = `<h1 class="errorMessage">No results...</h1>`;
            // }
    }
    cards.appendChild(fragment);
}
displayDiscountCategory(BASE_URL + "home");

searchBar.addEventListener("keyup", function (event) {
    if (event.keyCode === 13){
        let userInput = searchBar.value;
        searchFunction(BASE_URL + "home/search/ShopName?ShopName=" + userInput, BASE_URL + "home/search/Category?Category=" + userInput);
        
    }
})

async function searchFunction(urlShop, urlCategory){
    cards.innerHTML = "";
    try{
        const response = await fetch(urlShop);
        let data = await response.json();
        if(data){
            let fragment = document.createDocumentFragment();
            for (let i = 0; i < data.length; i++){
                let li = document.createElement("li");
                li.classList.add("item");

                let divCard = document.createElement("div");
                divCard.classList.add("card");

                let divImage = document.createElement("div");
                divImage.classList.add("image");
                let img = document.createElement("img");
                img.src = "./img/little_hearts.jpg";
                img.alt = "";
                divImage.appendChild(img);
                divCard.appendChild(divImage);

                let divContent = document.createElement("div");
                divContent.classList.add("content");
                let h2 = document.createElement("h2");
                h2.innerText = data[i].ShopName;
                divContent.appendChild(h2);
                let p = document.createElement("p");
                p.innerText = data[i].ShopLocation;
                divContent.appendChild(p);
                divCard.appendChild(divContent);

                li.appendChild(divCard);
                fragment.appendChild(li);
            }
            cards.appendChild(fragment);
        }
        else{
            response = await fetch(urlCategory);
            data = await response.json();
            if(data){
                let fragment = document.createDocumentFragment();
                for (let i = 0; i < data.length; i++){
                    let li = document.createElement("li");
                    li.classList.add("item");

                    let divCard = document.createElement("div");
                    divCard.classList.add("card");

                    let divImage = document.createElement("div");
                    divImage.classList.add("image");
                    let img = document.createElement("img");
                    img.src = "./img/little_hearts.jpg";
                    img.alt = "";
                    divImage.appendChild(img);
                    divCard.appendChild(divImage);

                    let divContent = document.createElement("div");
                    divContent.classList.add("content");
                    let h2 = document.createElement("h2");
                    h2.innerText = data[i].ShopName;
                    divContent.appendChild(h2);
                    let p = document.createElement("p");
                    p.innerText = data[i].ShopLocation;
                    divContent.appendChild(p);
                    divCard.appendChild(divContent);

                    li.appendChild(divCard);
                    fragment.appendChild(li);
                }
                cards.appendChild(fragment);
            }
            else{
                error.innerHTML = `<h1 class="errorMessage">No results...</h1>`;
            }
        }
    }
    catch(error){
        console.log(error);
    }
}