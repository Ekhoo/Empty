var currentScript = document.currentScript

var iframe = document.createElement('iframe')
iframe.src = currentScript.getAttribute('iframe_src')
iframe.id = "iframe_id"
iframe.style.display = 'none'

document.body.appendChild(iframe)

var myFrame = document.getElementById("iframe_id")

window.addEventListener("message", didReceiveMessage, false)

var generateAlias = function () {
    console.log("Script: Generate alias")

    document.getElementById("ap_email_login").parentNode.removeChild(retrieveButton)
    document.getElementById("ap_email_login").parentNode.removeChild(generateButton)

    var parameters = {
        "command": "GENERATE_ALIAS",
        "host": "amazon.com"
    }

    myFrame.contentWindow.postMessage(JSON.stringify(parameters), currentScript.getAttribute('iframe_src'))
}

var retrieveAccount = function () {
    console.log("Script: Retrieve account")

    document.getElementById("ap_email_login").parentNode.removeChild(retrieveButton)
    document.getElementById("ap_email_login").parentNode.removeChild(generateButton)

    var parameters = {
        "command": "RETRIEVE_ACCOUNT",
        "host": "amazon.com"
    }

    myFrame.contentWindow.postMessage(JSON.stringify(parameters), currentScript.getAttribute('iframe_src'))
}

var generateButton = document.createElement("input")
generateButton.type = "button"
generateButton.id = "GENERATE_BUTTON"
generateButton.name = "GENERATE_BUTTON"
generateButton.value = "Generate Alias"
generateButton.onclick = generateAlias

var retrieveButton = document.createElement("input")
retrieveButton.type = "button"
retrieveButton.id = "RETRIEVE_BUTTON"
retrieveButton.name = "RETRIEVE_BUTTON"
retrieveButton.value = "Retrieve account"
retrieveButton.onclick = retrieveAccount

var signInButton = document.createElement("input")
signInButton.type = "button"
signInButton.id = "PV_BUTTON"
signInButton.name = "PV_BUTTON"
signInButton.onclick = function() {
    console.log("Script: Privowny sign in button taped")

    document.getElementById("ap_email_login").parentNode.appendChild(retrieveButton)
}

var signUpButton = document.createElement("input")
signUpButton.type = "button"
signUpButton.id = "PV_BUTTON"
signUpButton.name = "PV_BUTTON"
signUpButton.onclick = function() {
    console.log("Script: Privowny sign up button taped")

    document.getElementById("ap_email_login").parentNode.appendChild(generateButton)
}

document.getElementById("ap_email_login").parentNode.appendChild(signInButton)
document.getElementById("ap_email").parentNode.appendChild(signUpButton)

var node = document.createElement('style')
node.innerHTML = "#PV_BUTTON { margin-left: -35px; height: 25px; width: 25px; color: white; border: 0; -webkit-appearance: none; background-image: url(https://privowny.io/favicon.ico); background-repeat: no-repeat; background-size: 100% 100%; }"
document.body.appendChild(node)

var sendHeaders = function () {
    console.log("Script: Send headers")

    var parameters = {
        "command": "SET_HEADERS",
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

    myFrame.contentWindow.postMessage(JSON.stringify(parameters), currentScript.getAttribute('iframe_src'))
}

var createAccount = function () {
    console.log("Script: Create account")

    var parameters = {
        "command": "CREATE_ACCOUNT",
        "email": document.getElementById("ap_email").value,
        "password": document.getElementById("ap_password").value,
        "host": "amazon.com"
    }

    myFrame.contentWindow.postMessage(JSON.stringify(parameters), currentScript.getAttribute('iframe_src'))
}

var form = document.getElementById("ap_register_form")

form.addEventListener("submit", createAccount)

var handleGenerateAlias = function (parameters) {
    console.log("Script: Handle generate alias")

    console.log("Alias: " + parameters["alias"])

    document.getElementById("ap_email_login").value = parameters["alias"]
}

var handleIsReady = function () {
    console.log("Script: Handle is ready")

    sendHeaders()
}

var handleRetrieveAccount = function (parameters) {
    console.log("Script: Handle retrieve account")
}

function didReceiveMessage(event) {
    var parameters = JSON.parse(event.data)
    var command = parameters["command"]

    if (command === "SET_HEADERS") {
        handleIsReady()
    } else if (command === "RETRIEVE_ACCOUNT") {
        handleRetrieveAccount(parameters)
    } else if (command === "GENERATE_ALIAS") {
        handleGenerateAlias(parameters)
    }
}
