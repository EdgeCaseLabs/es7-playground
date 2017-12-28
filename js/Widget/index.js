import { RenderQueue } from "../common.js"

class Widget extends RenderQueue {
    constructor(...props){
        super(...props)
        this.name = props.name
    }

    template_literals(){
        return `Hello there ${this.name}!`
    }

    arrow_functions(){
        let blah = (p1, p2) => {
            return p1 * p2
        }

        return "Arrow function multiply: " + blah(2, 3)
    }

    constants(){
        const pi = 3.1415926536
        return "PI const is: " + pi
    }

    spread(){
        let combined = (one, two, three) => {
            return "One: " + one + "; Two: " + two + "; Three: " + three
        }

        let blah = (...props) => {
             return combined(...props)
        }

        return blah("1", "2", "3")
    }

    render(){
        this.enqueue(this.template_literals())
        this.enqueue(this.arrow_functions())
        this.enqueue(this.constants())
        this.enqueue(this.spread())
        return super.render()
    }
}


export {
    Widget
}