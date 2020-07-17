const Link = require("./link")
const Page = require("./page")
const Tray = require("./tray")

const asahi = new Link('朝日新聞', 'http://www.asahi.com')
const yomiuri = new Link('読売新聞', 'http://www.yomiuri.co.jp')
const usYahoo = new Link('Yahoo', 'http://www.yahoo.com')
const jpYahoo = new Link('Yahoo!Japan', 'http://www.yahoo.co.jp')
const excite = new Link('Excite', 'http://www.excite.com')
const google = new Link('Google', 'http://www.google.com')

const trayNews = new Tray("新聞")
trayNews.add(asahi)
trayNews.add(yomiuri)

const trayYahoo = new Tray("Yahoo")
trayYahoo.add(usYahoo)
trayYahoo.add(jpYahoo)

const traySearch = new Tray("サーチエンジン")
traySearch.add(trayYahoo)
traySearch.add(excite)
traySearch.add(google)

const page = new Page("LinkPage", "結城 浩")
page.add(trayNews)
page.add(traySearch)
page.output()