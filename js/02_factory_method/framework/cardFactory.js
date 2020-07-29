class CardFactory {
    constructor() {
        // もうなんでもアリになるから微妙…
        // 振る舞いだけ変更するなら、関数を引数で上書きするのはアリ
        // 内部で保持する状態を変更するなら、大人しく継承する方が良い
        this._construnctor(this)
    }
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
const generateCardFactory = (_createProduct, _registerProduct, _construnctor) => {
    if (typeof _createProduct !== 'function') throw new Error("_createProduct must be function")
    if (typeof _registerProduct !== 'function') throw new Error("_registerProduct must be function")
    CardFactory.prototype.createProduct = _createProduct
    CardFactory.prototype.registerProduct = _registerProduct
    CardFactory.prototype._construnctor = _construnctor
    return CardFactory
}
module.exports = generateCardFactory