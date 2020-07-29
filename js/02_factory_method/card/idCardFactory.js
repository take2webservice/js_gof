const IDCard = require('./idcard')
const generateCardFactory = require('../framework/cardFactory')

module.exports = generateCardFactory(
    function(owner) {
        return new IDCard(owner)
    },
    function(product) {
        this.cards.set(product.name, product)
    },
    function() {
        this.cards = new Map()
    }
)