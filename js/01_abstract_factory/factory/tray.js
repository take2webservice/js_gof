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
        throw new Error("makeHTML method is not implemented")
    }
}

const generateTray = (_makeHTML) => {
    if (typeof _makeHTML !== 'function') throw new Error("_makeHTML must be function")
    Tray.prototype.makeHTML = _makeHTML
    return Tray
}
module.exports = generateTray
