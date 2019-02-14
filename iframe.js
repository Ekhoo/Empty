window.addEventListener("setAccessToken", receiveAccessToken, false)

function didReceiveMessage(event) {
  console.log("Did receive message => " + event.data)
}
