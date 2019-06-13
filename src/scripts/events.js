// Add event listener to button class and get button value to pass into function
submitButtons[0].addEventListener("click", event =>
{
    getParks()
})

submitButtons[1].addEventListener("click", event =>
{
    if (inputs[0].value)
    {
        API.callZomato(inputs[0].value)
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
        getEvents(inputs[1].value)
    }
    else
    {
        alert("Enter event please")
    }
    
})

submitButtons[3].addEventListener("click", event =>
{
    let genre = document.getElementById("genre-choice").value
    getConcerts(genre)
})


// saveToItinerary()

// function saveToItinerary () {
//     document.querySelectorAll(".sv-btn").forEach((button, i) => {
//       button.addEventListener('click', event => {
//         let buttonParent = button.parentElement.textContent
  
//         console.log(button.parentElement.textContent);
        
  
//         document.querySelector('#itinerary-container').innerHTML = buttonParent
//       })
//     })
//   }
