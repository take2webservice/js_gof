const IDCard = require('./idcard')
class IDCardFactory{
    constructor() {
        this.cards = new Map()
    }
    create(owner) {
        const product = new IDCard(owner)
        this.cards.set(product.name, product)
        return product
    }
}
module.exports = IDCardFactory