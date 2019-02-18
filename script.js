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

var pvButton01 = document.createElement("input")
pvButton01.type = "button"
pvButton01.id = "PV_BUTTON"
pvButton01.name = "PV_BUTTON"
pvButton01.onclick = function() {
    console.log("Privowny button taped")
}

var pvButton02 = document.createElement("input")
pvButton02.type = "button"
pvButton02.id = "PV_BUTTON"
pvButton02.name = "PV_BUTTON"
pvButton02.onclick = function() {
    console.log("Privowny button taped")
}

document.getElementById("ap_email").parentNode.appendChild(pvButton01)
document.getElementById("ap_password").parentNode.appendChild(pvButton02)

var node = document.createElement('style')
node.innerHTML = "#PV_BUTTON { margin-left: -50px; height: 30px; width: 30px; color: white; border: 0; -webkit-appearance: none; background-image: url(https://privowny.io/favicon.ico); background-repeat: no-repeat; }"
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
