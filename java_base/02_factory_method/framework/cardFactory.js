class CardFactory {
    create(owner) {
        const product = this.createProduct(owner)
        this.registerProduct(product)
        return product
    }
    createProduct(owner) {
        throw new Error("createProduct method does not implemented.")
    }
    registerProduct(product) {
        throw new Error("registerProduct method does not implemented.")
    }
}
module.exports = CardFactory