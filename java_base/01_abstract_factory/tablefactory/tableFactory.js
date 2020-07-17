const AbstractFactory = require("../factory/abstractFactory");
const TableLink = require("./tableLink");
const TableTray = require("./tableTray");
const TablePage = require("./tablePage");

class TableFactory extends AbstractFactory {
    constructor() {
        super()
    }
    createLink(caption, url) {
        return new TableLink(caption, url)
    }
    createTray(caption) {
        return new TableTray(caption)
    }
    createPage(title, author) {
        return new TablePage(title, author)
    }
}

module.exports = TableFactory