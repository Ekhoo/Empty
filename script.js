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

var doc = myFrame.contentWindow.document;
doc.open();
doc.write('\<script type="text/javascript" src="https:\/\/ekhoo.github.io\/Empty\/iframe.js">\<\/script>');
doc.close();
