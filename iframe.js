window.addEventListener("message", didReceiveMessage, false)

function didReceiveMessage(event) {
  console.log("Did receive message => " + event.data)
}
