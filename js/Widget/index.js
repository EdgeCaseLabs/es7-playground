

class Widget {
    constructor(props){
        this.name = props.name
    }

    render(){
        return "Hello there " + this.name + "!"
    }
}


export {
    Widget
}