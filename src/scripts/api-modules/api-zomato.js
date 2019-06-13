// Sets global scope variables to be used in other files
let cuisineId = "";
let cuisineObj = "";
let restaurantObj = "";
let restaurantResults = [];
let keys = [];

// submitButtons.forEach(button, i => 
// {
//     button.addEventListener("click", event =>
//     {
//         inputs[i].value
//     })
// })

const API = {
    callZomato: function(keyword) {
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

        // Fetches the first 10 restaurants based on the type of cuisine as searched for by the user
        function callRestaurant()
        {
            return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&count=10&cuisines=${cuisineId}&sort=rating`, {
                headers: {
                    "Accept": "application/json",
                    "user-key": `${zomatoKeys.appKey}`
                }
            })
            .then(restaurants => restaurants.json())
            .then(parsedRest => parsedRest)
        }

        // Creates a variable that executes the api call and takes that promise and sorts
        // the cuisine object to get the corresponding cuisine id
        let cuisinesGet = callCuisines();

        // Waits for the initial api call to finish then sorts and runs the restaurants api call based on
        // the cuisine id.
        cuisinesGet.then(function(objectOfCuisines) 
        {
            cuisineObj = objectOfCuisines;
            cuisineObj.cuisines.forEach(cuisineObject =>
            {
                let keyList = keyword.split(", ");
                if (keyList.length > 1 && (keyList.includes(cuisineObject.cuisine.cuisine_name)))
                {
                    keys.push(cuisineObject.cuisine.cuisine_id);
                    console.log("in if", keys)
                }
                else if (keyList.length = 1 && cuisineObject.cuisine.cuisine_name === keyword)
                {
                    console.log("typeof keys", typeof keys)
                    keys = cuisineObject.cuisine.cuisine_id;
                    cuisineId = keys;
                }
            })

            console.log(typeof keys)

            if (typeof keys == "object")
            {
                console.log("keys", keys)
                keys = keys.join(",");
                console.log("keys", keys)
                cuisineId = keys;
            }
            
            
            console.log(cuisineId)

            // Executes the initial restaurant call and uses the cuisine_id from the for loop above
            let restaurantGet = callRestaurant();

            // This function takes the restaurant array and loops through it to get the individual objects
            restaurantGet.then(function(objectOfRestaurants)
            {
                restaurantObj = objectOfRestaurants;
                // This loop creates an anonymous object and assigns the json information to it
                // then it pushes those objects into a globally scoped array to be used elsewhere
                restaurantObj.restaurants.forEach(restaurantObject =>
                {
                    let object = new Object();
                    object.name = restaurantObject.restaurant.name;
                    object.location = restaurantObject.restaurant.location.address;
                    restaurantResults.push(object);
                })
                console.log(restaurantResults)
            })
        })
    }
  };