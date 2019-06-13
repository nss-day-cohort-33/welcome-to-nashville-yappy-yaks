// Add event listener to button class and get button value to pass into function
submitButtons[0].addEventListener("click", event =>
{
    getParks()
})

submitButtons[1].addEventListener("click", event =>
{
    API.callZomato(inputs[0].value)
    // setTimeout(function() {}, 5000)
})

submitButtons[2].addEventListener("click", event =>
{
    console.log("hello")
    getEvents(inputs[1].value)
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
