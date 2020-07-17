const generatePage = require("./page")
const generateTray = require("./tray")
const generateLink = require("./link")

const Tray = generateTray(
    function() {
        const items = this.tray.map((item) => {
            return item.makeHTML()
        })
        return `<li>\n${this.caption}<ul>${items.join('')}</ul>\n</li>\n`
    }
)

const Link = generateLink(
    function() {
        return `<li><a href='${this.url}'>${this.caption}</a></li>\n`
    }
)

const Page = generatePage(
    function() {
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
)

module.exports = {
    Tray,
    Link,
    Page
}