document.body.style.backgroundColor = "red"

var iframe

iframe = document.createElement('iframe')
iframe.src = 'https://ekhoo.factory.privowny.net/ekhoo/'
iframe.style.display = 'none'
iframe.id = "iframe_id"
var accessToken = document.currentScript.getAttribute('accessToken')
var refreshToken = document.currentScript.getAttribute('refreshToken')

document.body.appendChild(iframe)

var myFrame = document.getElementById("iframe_id")

window.addEventListener("message", didReceiveMessage, false)

function didReceiveMessage(event) {
  console.log("Parent did receive event: " + event.data)
  
  myFrame.contentWindow.postMessage("setAccessToken: " + accessToken, "*")
}

//myFrame.contentWindow.postMessage("setAccessToken: " + accessToken, "*")
//myFrame.contentWindow.postMessage("setRefreshToken: " + refreshToken, "*")
