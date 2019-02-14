document.body.style.backgroundColor = "red";

var iframe;

iframe = document.createElement('iframe');
iframe.src = 'https://api.beta.privowny.com';
iframe.style.display = 'none';
document.body.appendChild(iframe);
