// Add event listener to button class and get button value to pass into function
submitButtons[0].addEventListener("click", event =>
{
    getParks(parksContainer)
})

submitButtons[1].addEventListener("click", event =>
{
    if (inputs[0].value)
    {
        API.callZomato(inputs[0].value, foodsContainer)
    }
    else
    {
        alert("Enter food please")
    }
})

submitButtons[2].addEventListener("click", event =>
{
    if (inputs[1].value)
    {
        getEvents(inputs[1].value, meetupsContainer)
    }
    else
    {
        alert("Enter event please")
    }
})

submitButtons[3].addEventListener("click", event =>
{
    let genre = document.getElementById("genre-choice").value
    getConcerts(genre, concertsContainer)
})

function saveToItinerary(className) {
    document.querySelectorAll(".sv-btn").forEach((button, i) => {
      button.addEventListener('click', event => {
        let buttonParent = button.parentElement.firstChild.textContent
  
        
  
        className.innerHTML = buttonParent
      })
    })
  }






jsonButton.addEventListener("click", event =>
{
    let pJSON = parksContainer.textContent
    let fJSON = foodsContainer.textContent
    let mJSON = meetupsContainer.textContent
    let cJSON = concertsContainer.textContent
    const newItinerary = `{
        "park": "${pJSON}",
        "food": "${fJSON}",
        "meetup": "${mJSON}",
        "concert": "${cJSON}"
      }`;

    fetch("http://localhost:3000/itinerary/1", {
        // Replace "url" with your API's URL
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: newItinerary
    })
})