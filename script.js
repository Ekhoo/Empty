document.body.style.backgroundColor = "red"

var iframe

iframe = document.createElement('iframe')
iframe.src = 'https://privowny.com'
iframe.style.display = 'none'
iframe.id = "iframe_id"
document.body.appendChild(iframe)

var accessToken = document.currentScript.getAttribute('accessToken')
var refreshToken = document.currentScript.getAttribute('refreshToken')

console.log("accessToken => " + accessToken)
console.log("refreshToken => " + refreshToken)

var myFrame = document.getElementById("iframe_id")

myFrame.contentWindow.foo = function() {
    console.log ("Look at me, executed inside an iframe!")
}

myFrame.onload = function(e) {
    myFrame.contentWindow.foo()
 }
