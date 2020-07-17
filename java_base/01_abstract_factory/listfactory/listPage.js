const Page = require("../factory/page");

class ListPage extends Page {
    constructor(title, author) {
        super(title, author)
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
module.exports = ListPage