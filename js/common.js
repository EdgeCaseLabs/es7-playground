

class DOMRender {
    static render(app, node){
        node.innerText = app.render()
    }

}

class RenderQueue {
    constructor(...props){
        this.queue = []
    }

    enqueue(item){
        this.queue.push(item)
    }

    render(){
        let items = ""
        this.queue.map((item) => {
            items += item + '\n'
        })

        return items
    }
}


export {
    RenderQueue,
    DOMRender
}