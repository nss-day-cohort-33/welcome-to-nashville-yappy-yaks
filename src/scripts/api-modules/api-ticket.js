// pop = KnvZfZ7vAev
// Country = KnvZfZ7vAv6
// Rock = KnvZfZ7vAeA
// Other = KnvZfZ7vAvl 
// folk = KnvZfZ7vAva


let thisThing = document.getElementById("concerts-input")
document.querySelector(".concerts").addEventListener("click",function()  {
    fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${ticketKeys.appKey}&locale=*&startDateTime=2019-06-14T12:43:00Z&endDateTime=2019-06-20T12:43:00Z&city=Nashville&genreId=KnvZfZ7vAv6`)
    .then(response => response.json())
    .then(concertData => { 
        console.log(concertData)
        concertData._embedded.events.forEach(newThing => {
         console.log(newThing.name, `at`,newThing._embedded.venues[0].name)
         console.log(newThing._embedded.attractions[0].name, `at`, newThing._embedded.venues[0].name)
        })

    })
})


// let searchPark = "playground=No";
// let searchParkResult = [];

// function callParks() {
//     return fetch (`https://data.nashville.gov/resource/74d7-b74t.json?$$app_token=${metroKeys.appId}&&${searchPark}`)
//     .then( parkData => parkData.json()) 
// }

// callParks().then (parkArray => {
//     for (let i = 0; i < parkArray.length; i++) {
//         let parkObject = {};
//         parkObject.name = parkArray[i].park_name;
//         searchParkResult.push(parkObject);
//     }
// });