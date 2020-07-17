const ListFactory = require("../listfactory/listFactory")
const TableFactory = require("../tablefactory/tableFactory")

function getFactory(className){
    let factory = null
    try {
        const Class = eval(className)
        factory = new Class()
    } catch (e) {
        console.log(e)
        //TODO ClassNotFound or others
    }
    return factory
}

module.exports = {getFactory}