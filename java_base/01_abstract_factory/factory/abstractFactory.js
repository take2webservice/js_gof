class AbstractFactory {
    createLink(){
        throw new Error("createLink method is not implemented")
    }
    createTray(){
        throw new Error("createTray method is not implemented")
    }
    createPage(){
        throw new Error("createPage method is not implemented")
    }
}

module.exports = AbstractFactory