window.addEventListener("message", didReceiveMessage, false)

var headers = null

window.onload = function() {
    console.log("Frame: Is loaded")

    var parameters = {
        "command": "SET_HEADERS"
    }

    parent.postMessage(JSON.stringify(parameters), "*")
}

var createAccount = function (parameters) {
    console.log("Frame: Create account")
  
    var parameters = JSON.parse(event.data)

    const endpoint = headers["api_url"] + "/" + headers["api_version"] + "/email"
    const request = new XMLHttpRequest()
    request.open("POST", endpoint, false)

    request.setRequestHeader("Accept", "*/*")
    request.setRequestHeader("Content-Type", "application/json")

    request.setRequestHeader("Authorization", headers["authorization"])
    request.setRequestHeader("X-PRVWN-APPLICATION-ID", headers["application_id"])
    request.setRequestHeader("X-PRVWN-APP-VERSION", headers["app_version"])
    request.setRequestHeader("X-PRVWN-DEVICE-ID", headers["device_id"])

    var data = {
        "host": "Amazon"
    }

    var json = JSON.stringify(data)

    request.send(json)

    if (request.status === 200) {
        console.log("Réponse reçue: %s", request.responseText)
    } else {
        console.log("Status de la réponse: %d (%s)", request.status, request.statusText)
    }
}

var generateAlias = function (parameters) {
    console.log("Frame: Generate alias")
}

var retrieveAccount = function (parameters) {
    console.log("Frame: Retrieve account")
}

var setHeaders = function (parameters) {
    console.log("Frame: Set headers")

    headers = parameters
}

function didReceiveMessage(event) {
    var parameters = JSON.parse(event.data)
    var command = parameters["command"]

    if (command === "SET_HEADERS") {
        setHeaders(parameters)
    } else if (command === "RETRIEVE_ACCOUNT") {
        retrieveAccount(parameters)
    } else if (command === "GENERATE_ALIAS") {
        generateAlias(parameters)
    } else if (command === "CREATE_ACCOUNT") {
        createAccount(parameters)
    }
}
