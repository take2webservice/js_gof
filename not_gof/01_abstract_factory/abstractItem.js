class AbstractItem {
    constructor(caption) {
        this.caption = caption
    }
    makeHTML() {
        throw new Error("makeHTML method is not implemented")
    }
}
module.exports = AbstractItem