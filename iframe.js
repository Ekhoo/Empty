window.addEventListener("setAccessToken", receiveAccessToken, false)
window.addEventListener("setRefreshToken", receiveRefreshToken, false)

function receiveAccessToken(event) {
  console.log("ReceiveAccessToken => " + event)
}

function receiveRefreshToken(event) {
  console.log("ReceiveRefreshToken => " + event)
}
