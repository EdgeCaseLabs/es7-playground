import { Widget } from "./Widget/index.js"


let main = document.getElementById('main')
let widget = new Widget({name: "Bob"})

main.innerText = widget.render()