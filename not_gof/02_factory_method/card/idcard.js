class IDCard{
    constructor(name) {
        this.name = name
    }
    use() {
        console.log(`${this.name} のカードを使いました`);
    }
}
module.exports = IDCard