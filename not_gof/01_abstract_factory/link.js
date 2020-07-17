const AbstractItem = require('./abstractItem')
class Link extends AbstractItem {
    constructor(caption, url) {
        super(caption)
        this.url = url
    }
    makeHTML(){
        return `<li><a href='${this.url}'>${this.caption}</a></li>\n`
    }
}
module.exports = Link