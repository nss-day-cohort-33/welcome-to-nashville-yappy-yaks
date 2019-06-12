// Sets global scope variables to be used in other files
let cuisineId = "";
let cuisineObj = "";
let restaurantObj = "";
let restaurantResults = [];

// Initial api call to get the nashivlle cuisines table from zomato
function callCuisines()
{
    return fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=1138", {
        headers: {
            "Accept": "application/json",
            "user-key": `${zomatoKeys.appKey}`
        }
    })
    .then(cuisines => cuisines.json())
    .then(objectOfCuisines => {
        return objectOfCuisines;
    })
}

function callRestaurant()
{
    return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&count=10&cuisines=25&sort=rating", {
        headers: {
            "Accept": "application/json",
            "user-key": `${zomatoKeys.appKey}`
        }
    })
    .then(restaurants => restaurants.json())
    .then(parsedRest => {
        return parsedRest
    })
}

// Creates a variable that executes the api call and takes that promise and sorts
// the cuisine object to get the corresponding cuisine id
let cuisinesGet = callCuisines();
let test = "Chinese"

// Waits for the initial api call to finish then sorts and runs the restaurants api call based on
// the cuisine id
cuisinesGet.then(function(objectOfCuisines) 
{
    cuisineObj = objectOfCuisines;
    cuisineObj.cuisines.forEach(cuisineObject =>
    {
        if (cuisineObject.cuisine.cuisine_name === test)
        {
            cuisineId = cuisineObject.cuisine.cuisine_id;
        }
    })

    let restaurantGet = callRestaurant();

    restaurantGet.then(function(objectOfRestaurants)
    {
        restaurantObj = objectOfRestaurants;
        console.log("Restaurants", restaurantObj)
        restaurantObj.restaurants.forEach(restaurantObject =>
        {
            console.log("thing", restaurantObject)
            let object = new Object();
            object.name = restaurantObject.restaurant.name;
            object.address = restaurantObject.restaurant.location.address;
            console.log("object", object)
            restaurantResults.push(object);
        })
        console.log("results", restaurantResults)
    })
    
})