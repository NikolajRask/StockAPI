const cheerio = require("cheerio")
const axios = require("axios")

module.exports = {
    get: async function (symbol) {
 // downloading the target web page
    // by performing an HTTP GET request in Axios
    const axiosResponse = await axios.request({
        method: "GET",
        url: "https://finance.yahoo.com/quote/"+symbol+"?.tsrc=fin-srch",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })

    let stockInfo = {currency: "USD",}

    // parsing the HTML source of the target web page with Cheerio
    const $ = cheerio.load(axiosResponse.data)
    const targetSelector = '#quote-header-info > div.My\\(6px\\).Pos\\(r\\).smartphone_Mt\\(6px\\).W\\(100\\%\\) > div.D\\(ib\\).Va\\(m\\).Maw\\(65\\%\\).Ov\\(h\\) > div > fin-streamer.Fw\\(b\\).Fz\\(36px\\).Mb\\(-4px\\).D\\(ib\\)';
    stockInfo.price = $(targetSelector).text()
    
    const targetSelector2 = '#quote-header-info > div.Mt\\(15px\\).D\\(f\\).Pos\\(r\\) > div.D\\(ib\\).Mt\\(-5px\\).Maw\\(38\\%\\)--tab768.Maw\\(38\\%\\).Mend\\(10px\\).Ov\\(h\\).smartphone_Maw\\(85\\%\\).smartphone_Mend\\(0px\\) > div.D\\(ib\\) > h1';
    stockInfo.name = $(targetSelector2).text()

    const targetSelector3 = '#quote-summary > div.D\\(ib\\).W\\(1\\/2\\).Bxz\\(bb\\).Pstart\\(12px\\).Va\\(t\\).ie-7_D\\(i\\).ie-7_Pos\\(a\\).smartphone_D\\(b\\).smartphone_W\\(100\\%\\).smartphone_Pstart\\(0px\\).smartphone_BdB.smartphone_Bdc\\(\\$seperatorColor\\) > table > tbody > tr:nth-child(1) > td.Ta\\(end\\).Fw\\(600\\).Lh\\(14px\\)';
    stockInfo.marketCap = $(targetSelector3).text()

    return stockInfo

    }
}