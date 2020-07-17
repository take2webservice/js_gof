const FactoryGenerator = require("./factory/factoryGenerator")

if (process.argv.length == 2) {
    console.log('Usage: node index.js class.name.of.ConfreteFactory')
    console.log('Exaple1: node index.js ListFactory')
    console.log('Exaple1: node index.js TableFactory');
    process.exit(0)
}
const factory = FactoryGenerator.getFactory(process.argv[2])
const asahi = factory.createLink('朝日新聞', 'http://www.asahi.com')
const yomiuri = factory.createLink('読売新聞', 'http://www.yomiuri.co.jp')
const usYahoo = factory.createLink('Yahoo', 'http://www.yahoo.com')
const jpYahoo = factory.createLink('Yahoo!Japan', 'http://www.yahoo.co.jp')
const excite = factory.createLink('Excite', 'http://www.excite.com')
const google = factory.createLink('Google', 'http://www.google.com')

const trayNews = factory.createTray("新聞")
trayNews.add(asahi)
trayNews.add(yomiuri)

const trayYahoo = factory.createTray("Yahoo")
trayYahoo.add(usYahoo)
trayYahoo.add(jpYahoo)

const traySearch = factory.createTray("サーチエンジン")
traySearch.add(trayYahoo)
traySearch.add(excite)
traySearch.add(google)

const page = factory.createPage("LinkPage", "結城 浩")
page.add(trayNews)
page.add(traySearch)
page.output()