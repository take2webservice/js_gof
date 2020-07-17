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
module.exports = Tray