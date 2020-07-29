const IDCard = require('./idcard')
const CardFactory = require('../framework/cardFactory')
class IDCardFactory extends CardFactory{
    constructor() {
        super()
        this.cards = new Map()
    }
    createProduct(owner) {
        return new IDCard(owner)
    }
    registerProduct(product) {
        this.cards.set(product.name, product)
    }
}
module.exports = IDCardFactory