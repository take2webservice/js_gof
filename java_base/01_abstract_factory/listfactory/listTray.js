const Tray = require("../factory/tray");

class ListTray extends Tray {
    constructor(caption) {
        super(caption)
    }
    makeHTML() {
        const items = this.tray.map((item) => {
            return item.makeHTML()
        })
        return `<li>\n${this.caption}<ul>${items.join('')}</ul>\n</li>\n`
    }
}
module.exports = ListTray