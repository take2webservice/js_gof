const Card = require('../framework/card')
class IDCard extends Card{
    constructor(name) {
        super()
        this.name = name
    }
    use() {
        console.log(`${this.name} のカードを使いました`);
    }
}
module.exports = IDCard