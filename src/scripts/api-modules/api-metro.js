let searchParkResult = [];
let parkBtn = document.querySelector(".parks");
let parksInput = document.querySelector("#parks-input");

function callParks(search) {
  return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=${metroKeys.appId}&&${search}`)
  .then(parkData => parkData.json());
}

function getParks()
{
    callParks(parksInput.value)
    .then(parkArray => {
        searchParkResult = [];
        for (let i = 0; i < parkArray.length; i++) {
        let parkObject = {};
        parkObject.name = parkArray[i].park_name;
        parkObject.location = parkArray[i].mapped_location_address;
        searchParkResult.push(parkObject);
        }
        addToDom(makeComponent(searchParkResult))
    });
}


