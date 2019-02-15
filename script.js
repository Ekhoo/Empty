document.body.style.backgroundColor = "red"

var iframe

iframe = document.createElement('iframe')
iframe.src = 'https://privowny.com'
iframe.style.display = 'none'
iframe.id = "iframe_id"
var accessToken = document.currentScript.getAttribute('accessToken')
var refreshToken = document.currentScript.getAttribute('refreshToken')

document.body.appendChild(iframe)

var myFrame = document.getElementById("iframe_id")

myFrame.onload = function() {
  var doc = myFrame.contentWindow.document;
  doc.open()
  doc.write('\<script type="text/javascript" src="https:\/\/ekhoo.github.io\/Empty\/iframe.js">\<\/script>')
  doc.close() 
  
  console.log("IFrame did load")
}

//myFrame.contentWindow.postMessage("setAccessToken: " + accessToken, "*")
//myFrame.contentWindow.postMessage("setRefreshToken: " + refreshToken, "*")
