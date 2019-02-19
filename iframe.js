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

    const endpoint = headers["api_url"] + "/api/" + headers["api_version"] + "/manager/account"
    const request = new XMLHttpRequest()
    request.open("POST", endpoint, false)

    request.setRequestHeader("Accept", "*/*")
    request.setRequestHeader("Content-Type", "application/json")

    request.setRequestHeader("Authorization", headers["authorization"])

    var data = {
        "host": parameters["host"],
        "username": parameters["username"],
        "password": parameters["password"],
        "passwordScore": parameters["passwordScore"]
    }

    var json = JSON.stringify(data)

    request.send(json)
}

var generateAlias = function (parameters) {
    console.log("Frame: Generate alias")

    var parameters = JSON.parse(event.data)

    const endpoint = headers["api_url"] + "/api/" + headers["api_version"] + "/email"
    const request = new XMLHttpRequest()
    request.open("POST", endpoint, false)

    request.setRequestHeader("Accept", "*/*")
    request.setRequestHeader("Content-Type", "application/json")

    request.setRequestHeader("Authorization", headers["authorization"])

    var data = {
        "host": parameters["host"]
    }

    var json = JSON.stringify(data)

    request.send(json)

    var alias = JSON.parse(request.responseText)["data"]["email"]

    var response = {
        "command": "GENERATE_ALIAS",
        "alias": alias
    }

    parent.postMessage(JSON.stringify(response), "*")
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
