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
  
        console.log(button.parentElement.firstChild);
        console.log(className)
        
  
        className.innerHTML = buttonParent
      })
    })
  }
