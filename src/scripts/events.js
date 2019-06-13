// Add event listener to button class and get button value to pass into function
submitButtons[1].addEventListener("click", event =>
{
    console.log(inputs)
    console.log("value", inputs[0].value)
    API.callZomato(inputs[0].value)
    // setTimeout(function() {}, 5000)
})