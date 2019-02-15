window.addEventListener("message", didReceiveMessage, false)

parent.postMessage("Ready", "*")

function didReceiveMessage(event) {
    console.log("Did receive parameters => " + event.data)
  
    var parameters = event.data

    const endpoint = parameters["api_url"] + "/" + parameters["api_version"] + "/email"
    const request = new XMLHttpRequest()
    request.open("POST", endpoint, false)
    request.setRequestHeader("Accept", "*/*")

    var data = {
        "host": "Amazon"
    }

    var json = JSON.stringify(data)

    req.send(json)

    if (req.status === 200) {
        console.log("Réponse reçue: %s", req.responseText)
    } else {
        console.log("Status de la réponse: %d (%s)", req.status, req.statusText)
    }
}
