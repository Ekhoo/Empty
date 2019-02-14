window.addEventListener("message", didReceiveMessage, false)

function didReceiveMessage(event) {
  console.log("Did receive message => " + event.data)
  
  var accessToken = event.data
  
  const req = new XMLHttpRequest();
  req.open("POST", "https://api.beta.privowny.com/api/v3/email", false);
  req.setRequestHeader("Accept", "*/*");

  var data = {};
  data.host = "Amazon";
  var json = JSON.stringify(data);

  req.send(data);

  if (req.status === 200) {
      console.log("Réponse reçue: %s", req.responseText);
  } else {
      console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
  }

}
