const AbstractItem = require('./abstractItem')
class Tray extends AbstractItem {
    constructor(caption) {
        super(caption)
        this.tray = []
    }
    add(item){
        this.tray.push(item)
    }
    makeHTML() {
        const items = this.tray.map((item) => {
            return item.makeHTML()
        })
        return `<li>\n${this.caption}<ul>${items.join('')}</ul>\n</li>\n`
    }
}
module.exports = Tray
