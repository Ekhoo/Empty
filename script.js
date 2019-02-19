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

var generateButton = document.createElement("input")
generateButton.type = "button"
generateButton.id = "GENERATE_BUTTON"
generateButton.name = "GENERATE_BUTTON"
generateButton.value = "Generate Alias"
generateButton.onclick = function() {
    document.getElementById("ap_email_login").parentNode.removeChild(retrieveButton)
    document.getElementById("ap_email_login").parentNode.removeChild(generateButton)
}

var retrieveButton = document.createElement("input")
retrieveButton.type = "button"
retrieveButton.id = "RETRIEVE_BUTTON"
retrieveButton.name = "RETRIEVE_BUTTON"
retrieveButton.value = "Retrieve account"
retrieveButton.onclick = function() {
    console.log("Retreive button taped")

    document.getElementById("ap_email_login").parentNode.removeChild(retrieveButton)
    document.getElementById("ap_email_login").parentNode.removeChild(generateButton)
}

var pvButton = document.createElement("input")
pvButton.type = "button"
pvButton.id = "PV_BUTTON"
pvButton.name = "PV_BUTTON"
pvButton.onclick = function() {
    console.log("Privowny button taped")

    document.getElementById("ap_email_login").parentNode.appendChild(generateButton)
    document.getElementById("ap_email_login").parentNode.appendChild(retrieveButton)
}

document.getElementById("ap_email_login").parentNode.appendChild(pvButton)

var node = document.createElement('style')
node.innerHTML = "#PV_BUTTON { margin-left: -35px; height: 25px; width: 25px; color: white; border: 0; -webkit-appearance: none; background-image: url(https://privowny.io/favicon.ico); background-repeat: no-repeat; background-size: 100% 100%; }"
document.body.appendChild(node)

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
