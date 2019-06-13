// Query selectors for all elements and create string literals

// Define html elements to be used
const inputs = document.querySelectorAll('input')
const submitButtons = document.querySelectorAll('.btn')
const searchOutput = document.querySelector('#output-container')
const itinerary = document.querySelector('#itinerary-container')
const parkDropdown = document.querySelector('#parks-input')

function makeComponent(array)
{
    let newStr;
    newStr = `
        <section>
          <ol>`;
  
      // for each element in arr, display as li with a save btn
      for (let i = 0; i < array.length && i < 10; i++) {
          if (array[i].location)
          {
            newStr += `<li><div>${array[i].name}: ${array[i].location}</div> <button class="sv-btn">Save</button></li>`;
          }
          else
          {
            newStr += `<li><div>${array[i].name}</div> <button class="sv-btn">Save</button></li>`;
          }
        
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