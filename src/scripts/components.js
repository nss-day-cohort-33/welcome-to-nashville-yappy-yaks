// Query selectors for all elements and create string literals

// Define html elements to be used
const inputs = document.querySelectorAll('input')
const submitButtons = document.querySelectorAll('.btn')
const searchOutput = document.querySelector('#output-container')
const itinerary = document.querySelector('#itinerary-container')

function makeComponent(array)
{
    newStr = `
        <section>
          <ol>`;
  
      // for each element in arr, display as li with a save btn
      for (let i = 0; i < array.length && i < 10; i++) {
        newStr += `<li><div>${array[i].name}</div> <button class="sv-btn">Save</button></li>`;
        // newStr += ``
      }
      // close html
      newStr += `
        </ol>
        </section>
        `;
        
        console.log(newStr)
      return newStr

}

function addToDom(string)
{
    searchOutput.innerHTML = string;
}