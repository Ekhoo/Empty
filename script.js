var currentScript = document.currentScript

var iframe = document.createElement('iframe')
iframe.src = currentScript.getAttribute('iframe_src')
iframe.id = "iframe_id"
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
    "device_id": currentScript.getAttribute('device_id')
}

window.addEventListener("message", didReceiveMessage, false)

function didReceiveMessage(event) {
    console.log("Did receive iframe ready")

    //myFrame.contentWindow.postMessage(JSON.stringify(parameters), currentScript.getAttribute('iframe_src'))
    
        var button = document.getElementById("continue");
    
    function clickHandler() { // declare a function that updates the state
        console.log("Button is clicked")
    }

    button.addEventListener('click', clickHandler);
    
    button.onclick = function() {
        var email = document.getElementsByName("email")[0].value
        var password = document.getElementsByName("password")[0].value
    
        console.log("Email: " + email)
        console.log("Password: " + password)
    }
}
