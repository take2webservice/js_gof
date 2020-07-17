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
        const items = this.content.map(item => {
            return item.makeHTML()
        })
        return `
<html><head><title>${this.title}</title></head>
<body>
<h1>${this.title}</h1>
<ul>
${items}
</ul>
<hr><address>${this.author}</address>
</body>
</html>`
    }
}

module.exports = Page