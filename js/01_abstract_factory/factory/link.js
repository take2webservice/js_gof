const AbstractItem = require('./abstractItem')
class Link extends AbstractItem {
    constructor(caption, url) {
        super(caption)
        this.url = url
    }
    makeHTML() {
        throw new Error("makeHTML method is not implemented")
    }
}

const generateLink = (_makeHTML) => {
    if (typeof _makeHTML !== 'function') throw new Error("_makeHTML must be function")
    Link.prototype.makeHTML = _makeHTML
    return Link
}
module.exports = generateLink