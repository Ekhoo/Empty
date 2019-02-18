window.addEventListener("message", didReceiveMessage, false)

parent.postMessage("Ready", "*")

function didReceiveMessage(event) {
    console.log("Did receive parameters => " + event.data)
  
    var parameters = JSON.parse(event.data)

    const endpoint = parameters["api_url"] + "/api/" + parameters["api_version"] + "/email"
    const request = new XMLHttpRequest()
    request.open("POST", endpoint, false)

    request.setRequestHeader("Accept", "*/*")
    request.setRequestHeader("Content-Type", "application/json")

    request.setRequestHeader("Authorization", parameters["authorization"])
    request.setRequestHeader("X-PRVWN-APPLICATION-ID", parameters["application_id"])
    request.setRequestHeader("X-PRVWN-APP-VERSION", parameters["app_version"])
    request.setRequestHeader("X-PRVWN-DEVICE-ID", parameters["device_id"])

    var data = {
        "host": "Amazon"
    }

    var json = JSON.stringify(data)

    //request.send(json)

    if (request.status === 200) {
        console.log("Réponse reçue: %s", request.responseText)
    } else {
        console.log("Status de la réponse: %d (%s)", request.status, request.statusText)
    }
    
    var button = document.getElementsByClassName("Button__button___2wnF6 FormUser__submitButton___gzleR FormUser__disabled___1so65 Button__gradient___2kPjy")
    
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
