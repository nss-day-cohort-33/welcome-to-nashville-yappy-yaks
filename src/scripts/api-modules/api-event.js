let briteSearchResults = []
let briteObject = {}

function getBriteData (searchTerm) {
  fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchTerm}&location.address=nashville&token=${eventKeys.appKey}`, {
    "headers": {
        "Accept": "application/json"
    }
  })
  .then(jsonData => jsonData.json()).then(convertedData => {
  
    convertedData.events.forEach(briteMeetup => {
      briteObject.name = briteMeetup.name
      // console.log(briteObject.name);
      briteSearchResults.push(briteObject)

    })
  })
}
console.log(briteSearchResults);
getBriteData("categories")

