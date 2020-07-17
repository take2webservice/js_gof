const fs = require('fs')
class Page {
    content = []
    constructor(title, author) {
        this.title = title
        this.author = author
    }
    add(item){
        this.content.push(item)
    }
    output(){
        try {
            const fileName = this.title + ".html"
            fs.writeFileSync(`./${fileName}`, this.makeHTML())
            console.log(`${fileName}を作成しました。`)
        } catch (e){
            console.log(e)
        }
    }
    makeHTML() {
        throw new Error("makeHTML method is not implemented")
    }
}

module.exports = Page