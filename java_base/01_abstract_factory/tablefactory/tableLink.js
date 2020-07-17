const Link = require("../factory/link");

class ListLink extends Link {
    constructor(caption, url) {
        super(caption, url)
    }
    makeHTML() {
        return `<tr><td><a href='${this.url}'>${this.caption}</a></td></tr>\n`
    }
}
module.exports = ListLink