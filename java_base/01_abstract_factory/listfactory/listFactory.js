const AbstractFactory = require("../factory/abstractFactory");
const ListLink = require("./listLink");
const ListTray = require("./listTray");
const ListPage = require("./listPage");

class ListFactory extends AbstractFactory {
    constructor() {
        super()
    }
    createLink(caption, url) {
        return new ListLink(caption, url)
    }
    createTray(caption) {
        return new ListTray(caption)
    }
    createPage(title, author) {
        return new ListPage(title, author)
    }
}

module.exports = ListFactory