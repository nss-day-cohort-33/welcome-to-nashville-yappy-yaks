let searchPark = "playground=No";
let searchParkResult = [];

function callParks() {
    return fetch (`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=${metroKeys.appId}&&${searchPark}`)
    .then( parkData => parkData.json()) 
}

callParks().then (parkArray => {
    for (let i = 0; i < parkArray.length; i++) {
        let parkObject = Object.create(searchParkResult);
        parkObject.name = parkArray[i].park_name;
        parkObject.location = parkArray[i].mapped_location_address;
        searchParkResult.push(parkObject);
    }
});

console.log(searchParkResult)