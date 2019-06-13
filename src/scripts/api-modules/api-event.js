// A place to save search results
let briteSearchResults = [];

// define func to fetch data inserting search input to url
function getBriteData(searchTerm) {
  return (
    fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=${searchTerm}&location.address=nashville&token=${
        eventKeys.appKey
      }`,
      {
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(jsonData => jsonData.json())

      // loop over fetched data add '.name'; push obj to search results arr
      .then(convertedData => {
        briteSearchResults = []
        for (let i = 0; i < convertedData.events.length; i++) {

          let briteMeetup = convertedData.events[i];
          let briteObject = {};
          briteObject.name = briteMeetup.name.text;
          briteSearchResults.push(briteObject);
        }
      })
  );
}

//on click, do stuff
function getEvents(searchValue)
{
  document.querySelector("#output-container").innerHTML = "";

    getBriteData(searchValue).then(()=>{
        addToDom(makeComponent(briteSearchResults))
    });// End .then
}

  


