const AbstractItem = require('./abstractItem')
class Link extends AbstractItem {
    constructor(caption, url) {
        super(caption)
        this.url = url
    }
    makeHTML(){
        throw new Error("makeHTML method is not implemented")
    }
}
module.exports = Link