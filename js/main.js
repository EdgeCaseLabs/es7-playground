import { DOMRender } from "./common.js"
import { Widget } from "./Widget/index.js"


DOMRender.render(
    new Widget({name: "Bob"}),
    document.getElementById('main')
)