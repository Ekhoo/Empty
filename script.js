var currentScript = document.currentScript

var iframe = document.createElement('iframe')
iframe.src = currentScript.getAttribute('iframe_src')
iframe.style.display = 'none'

document.body.appendChild(iframe)

var myFrame = document.getElementById("iframe_id")

var parameters = {
    "access_token": currentScript.getAttribute('access_token'),
    "refresh_token": currentScript.getAttribute('refresh_token'),
    "application_id": currentScript.getAttribute('application_id'),
    "authorization": currentScript.getAttribute('authorization'),
    "api_url": currentScript.getAttribute('api_url'),
    "api_version": currentScript.getAttribute('api_version'),
    "auth_url": currentScript.getAttribute('auth_url'),
    "app_version": currentScript.getAttribute('app_version'),
    "device_id": currentScript.getAttribute('device_id'),
    "access_token": currentScript.getAttribute('accessToken')
}

window.addEventListener("message", didReceiveMessage, false)

function didReceiveMessage(event) {
    console.log("Did receive iframe ready")

    myFrame.contentWindow.postMessage(JSON.stringify(parameters), currentScript.getAttribute('iframe_src'))
}
