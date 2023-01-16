function validation() {
    let x = document.forms["formy"]["shname"].value;
    if (x == ""){
        alert("shop name must be filled out");
        return false;
    }

    if( document.formy.nshop.value == "" || isNaN( document.formy.nshop.value ) ||
            document.formy.nshop.value.length != 4 ) {
            
            alert( "Please provide an Id in the format ####." );
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


const form = document.getElementById("sub");

form.addEventListener("click", async (event)=>{
    event.preventDefault();
    const ShopID= document.getElementById("nshop").value;
    const ShopName = document.getElementById("shname").value;
    const Location = document.getElementById("lo").value;
    const Category = document.getElementById("Category").value;
    const Discounts = false;
    const UserName = document.getElementById("UserName").value;
    const Password = document.getElementById("Password").value;
    const FirstName = document.getElementById("fname").value;
    const LastName = document.getElementById("lname").value;

    try {
        const response = await fetch(BASE_URL + "admin/shopDetails",{
            method: "POST",
            body: JSON.stringify({ShopID, ShopName, Location, Category, Discounts, UserName, Password }),
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

        const response2 = await fetch(BASE_URL + "admin/userDetails",{
            method: "POST",
            body: JSON.stringify({ShopID, FirstName, LastName }),
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

})