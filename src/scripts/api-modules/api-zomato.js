let cuisineId = "";
let cuisineTable = []

function callCuisines()
{
    return fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=1138", {
        headers: {
            "Accept": "application/json",
            "user-key": `${zomatoKeys.appKey}`
        }
    })
    .then(r => r.json())
    .then(results => {
        return results;
    })
}

let cuisinesGet = callCuisines();
let test = "Chinese"

cuisinesGet.then(function(cuisines) 
{
    cuisineTable = cuisines;
    cuisineTable.cuisines.forEach(cuisineObject =>
    {
        if (cuisineObject.cuisine.cuisine_name === test)
        {
            cuisineId = cuisineObject.cuisine.cuisine_id;
        }
    })
})
