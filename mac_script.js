var currentScript = document.currentScript

var iframe = document.createElement('iframe')
iframe.src = currentScript.getAttribute('iframe_src')
iframe.id = "iframe_id"
iframe.style.display = 'none'

document.body.appendChild(iframe)

var myFrame = document.getElementById("iframe_id")

window.addEventListener("message", didReceiveMessage, false)

function generateAlias(e) {
    if (!(e instanceof MouseEvent)) { return }
    
    console.log("Script: Generate alias")
    
    document.getElementById("ap_email").parentNode.removeChild(generateButton)

    var parameters = {
        "command": "GENERATE_ALIAS",
        "host": "amazon.com"
    }

    myFrame.contentWindow.postMessage(JSON.stringify(parameters), currentScript.getAttribute('iframe_src'))
}

function retrieveAccount(e) {
    if (!(e instanceof MouseEvent)) { return }
    
    console.log("Script: Retrieve account")
    
    document.getElementById("ap_email").parentNode.removeChild(retrieveButton)

    var parameters = {
        "command": "RETRIEVE_ACCOUNT",
        "host": "amazon"
    }

    myFrame.contentWindow.postMessage(JSON.stringify(parameters), currentScript.getAttribute('iframe_src'))
}

var generateButton = document.createElement("input")
generateButton.type = "button"
generateButton.id = "GENERATE_BUTTON"
generateButton.name = "GENERATE_BUTTON"
generateButton.value = "Generate Alias"
generateButton.setAttribute("onclick", "generateAlias(event);")

var retrieveButton = document.createElement("input")
retrieveButton.type = "button"
retrieveButton.id = "RETRIEVE_BUTTON"
retrieveButton.name = "RETRIEVE_BUTTON"
retrieveButton.value = "Retrieve account"
retrieveButton.onclick = retrieveAccount

var signInButton = document.createElement("img")
signInButton.id = "PV_BUTTON"
signInButton.setAttribute("src", "https://privowny.io/favicon.ico")
signInButton.onclick = function() {
    console.log("Script: Privowny sign in button taped")

    document.getElementById("ap_email").parentNode.appendChild(retrieveButton)
}

var signUpButton = document.createElement("img")
signUpButton.id = "PV_BUTTON"
signUpButton.setAttribute("src", "https://privowny.io/favicon.ico")
signUpButton.onclick = function() {
    console.log("Script: Privowny sign up button taped")

    document.getElementById("ap_email").parentNode.appendChild(generateButton)
}

var apEmail = document.getElementById("ap_email")
var signInAnchor = document.getElementById("signInSubmit")

if ((apEmail != null) && (signInAnchor != null)) {
    apEmail.parentNode.appendChild(signInButton)
} else if (apEmail != null) {
    apEmail.parentNode.appendChild(signUpButton)
}

var node = document.createElement('style')
node.innerHTML = "#PV_BUTTON { vertical-align: middle; margin-left: -35px; height: 25px; width: 25px; color: white; border: 0; -webkit-appearance: none; background-repeat: no-repeat; background-size: 100% 100%; }"
document.body.appendChild(node)

function sendHeaders() {
    console.log("Script: Send headers")

    var parameters = {
        "command": "SET_HEADERS",
        "access_token": currentScript.getAttribute('access_token'),
        "authorization": currentScript.getAttribute('authorization'),
        "api_url": currentScript.getAttribute('api_url'),
        "api_version": currentScript.getAttribute('api_version')
    }

    myFrame.contentWindow.postMessage(JSON.stringify(parameters), currentScript.getAttribute('iframe_src'))
}

function createAccount() {
    console.log("Script: Create account")

    var parameters = {
        "command": "CREATE_ACCOUNT",
        "username": document.getElementById("ap_email").value,
        "password": document.getElementById("ap_password").value,
        "host": "amazon.com",
        "passwordScore": "STRONG"
    }

    myFrame.contentWindow.postMessage(JSON.stringify(parameters), currentScript.getAttribute('iframe_src'))
}

var form = document.getElementById("ap_register_form")

form.addEventListener("submit", createAccount)

function handleGenerateAlias(parameters) {
    console.log("Script: Handle generate alias")

    document.getElementById("ap_email").value = parameters["alias"]
}

function handleIsReady() {
    console.log("Script: Handle is ready")

    sendHeaders()
}

function handleRetrieveAccount(parameters) {
    console.log("Script: Handle retrieve account")

    document.getElementById("ap_email").value = parameters["username"]
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
