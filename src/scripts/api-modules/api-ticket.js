let searchConcertResult = [];

function getConcerts(genre)
{
    callTicket(genre)
    .then(concertData => { 
        //like this line
        searchConcertResult = []
        concertData._embedded.events.forEach(newThing => {
            let concertObject = {}
            if(newThing._embedded.attractions){
            concertObject.name = newThing._embedded.attractions[0].name
            }
            else{
                concertObject.name = newThing.name
            }
            //and this line
            concertObject.location = newThing._embedded.venues[0].name
            searchConcertResult.push(concertObject)
        })
        console.log(searchConcertResult)
        addToDom(makeComponent(searchConcertResult))
    })
}




function callTicket(genre){
    return fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${ticketKeys.appKey}&locale=*&startDateTime=2019-06-14T12:43:00Z&endDateTime=2019-06-20T12:43:00Z&city=Nashville&genreId=${genre}`)
    .then(response => response.json())
}
//hoping this works


