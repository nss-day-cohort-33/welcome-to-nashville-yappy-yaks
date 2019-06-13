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

function saveToItinerary () {
  document.querySelectorAll(".sv-btn").forEach((button, i) => {
    button.addEventListener('click', event => {
      let buttonParent = button.parentElement.textContent

      console.log(button.parentElement.textContent);
      

      document.querySelector('#itinerary-container').innerHTML = buttonParent
    })
  })
}

//on click, do stuff
document.querySelector(".meetups").addEventListener("click", () => {
  const searchValue = document.querySelector("#meetups-input").value;
  let newStr;
  document.querySelector("#output-container").innerHTML = "";

  // If no input or no search results
  if (!searchValue || briteSearchResults === 0) {
    // if (briteSearchResults === 0) {
      newStr = `Sorry...No results for what you're looking for`;

      // add to search result container
      document.querySelector("#output-container").innerHTML = newStr;
      
    // else, execute fetch data and build html string
  } else {
    newStr = "";

    getBriteData(searchValue).then(()=>{

      newStr = `
        <section>
          <ol>`;
  
      // for each element in arr, display as li with a save btn
      for (let i = 0; i < briteSearchResults.length && i < 10; i++) {
        let result = briteSearchResults[i];
        newStr += `<li id="result-${i}">${result.name} <button class="sv-btn save-${i}">Save</button></li>`;
        // newStr += ``
      }
      // close html
      newStr += `
        </ol>
        </section>
        `;

        // add to search result container
        document.querySelector("#output-container").innerHTML = newStr;
        saveToItinerary()
    });// End .then
  }

});


