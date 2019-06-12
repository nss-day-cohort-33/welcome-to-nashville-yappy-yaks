// Query selectors for all elements and create string literals

// Define html elements to be used
const inputs = document.querySelectorAll('input')
const submitButtons = document.querySelectorAll('.btn')
const searchOutput = document.querySelector('#output-container')
const itinerary = document.querySelector('#itinerary-container')

function createFoodComponent(foodObj) {
  return `
    <h2>Header</h2>
    <p>description</p>
  `
}