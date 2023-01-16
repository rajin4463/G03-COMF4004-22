function validation() {
    let x = document.forms["formy"]["shname"].value;
    if (x == ""){
        alert("shop name must be filled out");
        return false;
    }

    if( document.formy.nshop.value == "" || isNaN( document.formy.nshop.value )) {
            
            alert( "Please provide an Id." );
            document.myForm.nshop.focus() ;
            return false;
    }

    let y = document.forms["formy"]["lo"].value;
    if ( y == ""){
        alert("location must be filled out");
        return false;
    }
//--------------------------------------------------------------------------------------------------
    /*if (document.formy.Category.value == "" || "-1"){
        alert("Please select a category");                     //error
        return false;
    }*/
//--------------------------------------------------------------------------------------------------
    let z = document.forms["formy"]["fname"].value;
    if (z == ""){
        alert("Owner's first name must be filled out");
        return false;
    }

    let w = document.forms["formy"]["lname"].value;
    if (w == ""){
        alert("Owner's last name must be filled out");
        return false;
    }

    if( document.formy.ownerid.value == "" || isNaN( document.formy.ownerid.value )) {
            
            alert( "Please provide an Id." );
            document.myForm.ownerid.focus() ;
            return false;
    }

    return (true);

}

//////////////////////////////////////////////////////////////////

let BASE_URL = "https://sore-narrow-seashore.glitch.me/";


const form = document.getElementById("forma");

form.addEventListener("save", async (event)=>{
    event.preventDefault();
    const ShopID= document.getElementById("nshop").value;
    const ShopName = document.getElementById("shname").value;
    const Location = document.getElementById("lo").value;
    const Category = document.getElementById("Category").value;
    const Discounts = false;
    const FirstName = document.getElementById("shname").value;
    const LastName = document.getElementById("lo").value;

    try {
        const response = await fetch(BASE_URL + "admin/shopDetails",{
            method: "POST",
            body: JSON.stringify({ShopID, ShopName, Location, Category, Discounts }),
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response)=> response.json())
        .then((res)=>{
            if (!res.status == 'Success'){
                alert("Error");
            }else{
                alert("Saved")
            }
        })
    } catch (error) {
        console.error(error);
    }

    try {
        const response = await fetch(BASE_URL + "admin/userDetails",{
            method: "POST",
            body: JSON.stringify({ShopID, FirstName, LastName }),
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }

})
