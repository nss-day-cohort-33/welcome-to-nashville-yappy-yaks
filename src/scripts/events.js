// Add event listener to button class and get button value to pass into function
submitButtons[1].addEventListener("click", event =>
{
    console.log("value", inputs[1].value)
    API.callZomato(inputs[1].value);
    addToDom(makeComponent(restaurantResults))
})