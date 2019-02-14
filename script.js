document.body.style.backgroundColor = "red"

var iframe

iframe = document.createElement('iframe')
iframe.src = 'https://api.beta.privowny.com'
iframe.style.display = 'none'
document.body.appendChild(iframe)

var accessToken = document.currentScript.getAttribute('accessToken')
var refreshToken = document.currentScript.getAttribute('refreshToken')

console.log(accessToken)
console.log(refreshToken)
