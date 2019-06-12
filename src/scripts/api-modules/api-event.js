let briteSearchResults = []

function getBriteData (searchTerm) {
  fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchTerm}&location.address=nashville&token=${eventKeys.appKey}`, {
    "headers": {
      "Accept": "application/json"
    }
  })
  .then(jsonData => jsonData.json()).then(convertedData => {
    convertedData.events.forEach(briteMeetup => {
      let briteObject = {}
      briteObject.name = briteMeetup.name.text
      briteSearchResults.push(briteObject)
    })
  })
}

document.querySelector('.meetups').addEventListener('click', ()=> {
  for (let i = 0; i < briteSearchResults.length; i++)
})
console.log(briteSearchResults);
console.log(inputs);
getBriteData("categories")

