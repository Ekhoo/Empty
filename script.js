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
    
    var form = document.getElementById("ap_register_form");
    
    var email = document.getElementById("ap_email").value
    var password = document.getElementById("ap_password").value
    
    console.log("Email: " + email)
    console.log("Password: " + password)
    
    parameters["email"] = email
    parameters["password"] = password
    
    form.addEventListener("submit", function(e){
        myFrame.contentWindow.postMessage(JSON.stringify(parameters), currentScript.getAttribute('iframe_src'))
    })
}
