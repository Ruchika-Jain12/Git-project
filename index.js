const message = ["Hello, ", "I've learnt react"];
const html = `<span class="red">${message[0]}</span>, <span class="blue">${message[1]}</span>`;
document.getElementById("msg").innerHTML = html;
