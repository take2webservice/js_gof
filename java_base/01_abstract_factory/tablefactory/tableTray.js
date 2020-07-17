const Tray = require("../factory/tray");

class ListTray extends Tray {
    constructor(caption) {
        super(caption)
    }
    makeHTML() {
        const items = this.tray.map((item) => {
            return item.makeHTML()
        })
        return `<tr>\n<td>${this.caption}</td><td><table>${items.join('')}</table>\n</td>\n</tr>\n`
    }
}
module.exports = ListTray