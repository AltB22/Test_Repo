//WRITE YOUR CODE BELOW
var customerOrder = {
    name: "coffee",
    sugars: 2,
    ready: false,
}
console.log(customerOrder.name + " " + customerOrder.sugars)

if (customerOrder.ready) {
    console.log("Ready for pick-up")
}
else {
    console.log("Still in order queue")
}