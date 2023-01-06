var key = document.querySelector("#key")
var code = document.querySelector("#code")
var statusEl = document.querySelector("#status")

function keydownAction(event) {
  // TODO: Complete keydown function
var keyPress = event.key
var keyCode = event.code

key.textContent = keyPress
code.textContent = keyCode
statusEl.textContent = "KEYDOWN Event"
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

