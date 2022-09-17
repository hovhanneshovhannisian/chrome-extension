const title = document.querySelector("h1")
const welcome = document.createElement("h1")
welcome.innerText = "Welcome"

title.parentNode.insertBefore(welcome, title)

