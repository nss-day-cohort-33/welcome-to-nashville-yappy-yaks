// Runs function to fetch api with the value of input
// Then adds it to dom
const jsonItinerary = {
    getItinerary: function() {
      return fetch("http://localhost:3000/itinerary").then(response =>
        response.json()
      )
      .then(data => {
        parksContainer.textContent = data[0].park
        foodsContainer.textContent = data[0].food
        meetupsContainer.textContent = data[0].meetup
        concertsContainer.textContent = data[0].concert
      });
    }
  };


let thing = jsonItinerary.getItinerary()

thing