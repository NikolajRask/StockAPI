const cheerio = require("cheerio")
const axios = require("axios");
const { json } = require("express");


module.exports = {
    getAllInfo: async function (symbol) {
 // downloading the target web page
    function GS(selector) {
        // Escape characters in the selector
        const escapedSelector = selector.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");

        // Create the target selector
        const targetSelector = `${escapedSelector}`;

        return targetSelector;
    }

    // by performing an HTTP GET request in Axios
    const axiosResponse = await axios.request({
        method: "GET",
        url: "https://finance.yahoo.com/quote/"+symbol+"?.tsrc=fin-srch",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })

    const $ = cheerio.load(axiosResponse.data)

    let stockInfo = {currency: "USD",}

    // parsing the HTML source of the target web page with Cheerio
    const targetSelector = '#quote-header-info > div.My\\(6px\\).Pos\\(r\\).smartphone_Mt\\(6px\\).W\\(100\\%\\) > div.D\\(ib\\).Va\\(m\\).Maw\\(65\\%\\).Ov\\(h\\) > div > fin-streamer.Fw\\(b\\).Fz\\(36px\\).Mb\\(-4px\\).D\\(ib\\)';
    stockInfo.price = $(targetSelector).text()

    const targetSelector7 = '#quote-header-info > div.My\\(6px\\).Pos\\(r\\).smartphone_Mt\\(6px\\).W\\(100\\%\\) > div.D\\(ib\\).Va\\(m\\).Maw\\(65\\%\\).Ov\\(h\\) > div.Fz\\(12px\\).C\\(\\$tertiaryColor\\).My\\(0px\\).D\\(ib\\).Va\\(b\\) > fin-streamer.C\\(\\$primaryColor\\).Fz\\(24px\\).Fw\\(b\\)';
    stockInfo.afterHoursPrice = $(targetSelector7).text()
    
    const targetSelector2 = '#quote-header-info > div.Mt\\(15px\\).D\\(f\\).Pos\\(r\\) > div.D\\(ib\\).Mt\\(-5px\\).Maw\\(38\\%\\)--tab768.Maw\\(38\\%\\).Mend\\(10px\\).Ov\\(h\\).smartphone_Maw\\(85\\%\\).smartphone_Mend\\(0px\\) > div.D\\(ib\\) > h1';
    stockInfo.name = $(targetSelector2).text()

    const targetSelector3 = '#quote-summary > div.D\\(ib\\).W\\(1\\/2\\).Bxz\\(bb\\).Pstart\\(12px\\).Va\\(t\\).ie-7_D\\(i\\).ie-7_Pos\\(a\\).smartphone_D\\(b\\).smartphone_W\\(100\\%\\).smartphone_Pstart\\(0px\\).smartphone_BdB.smartphone_Bdc\\(\\$seperatorColor\\) > table > tbody > tr:nth-child(1) > td.Ta\\(end\\).Fw\\(600\\).Lh\\(14px\\)';
    stockInfo.marketCap = $(targetSelector3).text()

    const targetSelector4 = '#quote-summary > div.D\\(ib\\).W\\(1\\/2\\).Bxz\\(bb\\).Pstart\\(12px\\).Va\\(t\\).ie-7_D\\(i\\).ie-7_Pos\\(a\\).smartphone_D\\(b\\).smartphone_W\\(100\\%\\).smartphone_Pstart\\(0px\\).smartphone_BdB.smartphone_Bdc\\(\\$seperatorColor\\) > table > tbody > tr:nth-child(6) > td.Ta\\(end\\).Fw\\(600\\).Lh\\(14px\\)';
    stockInfo.dividend = {
        yield: parseFloat($(targetSelector4).text().split('(')[0]),
        percentage: $(targetSelector4).text().split('(')[1].replace(")","")
    }

    const targetSelector5 = '#quote-summary > div.D\\(ib\\).W\\(1\\/2\\).Bxz\\(bb\\).Pend\\(12px\\).Va\\(t\\).ie-7_D\\(i\\).smartphone_D\\(b\\).smartphone_W\\(100\\%\\).smartphone_Pend\\(0px\\).smartphone_BdY.smartphone_Bdc\\(\\$seperatorColor\\) > table > tbody > tr:nth-child(7) > td.Ta\\(end\\).Fw\\(600\\).Lh\\(14px\\) > fin-streamer';
    const targetSelector6 = '#quote-summary > div.D\\(ib\\).W\\(1\\/2\\).Bxz\\(bb\\).Pend\\(12px\\).Va\\(t\\).ie-7_D\\(i\\).smartphone_D\\(b\\).smartphone_W\\(100\\%\\).smartphone_Pend\\(0px\\).smartphone_BdY.smartphone_Bdc\\(\\$seperatorColor\\) > table > tbody > tr.Bxz\\(bb\\).Bdbw\\(1px\\).Bdbs\\(s\\).Bdc\\(\\$seperatorColor\\).H\\(36px\\).Bdbw\\(0\\)\\! > td.Ta\\(end\\).Fw\\(600\\).Lh\\(14px\\)';
    stockInfo.volume = parseFloat($(targetSelector5).text().replaceAll(',',""))
    stockInfo.avgVolume = parseFloat($(targetSelector6).text().replaceAll(',',""))

    const targetSelector8 = '#quote-summary > div.D\\(ib\\).W\\(1\\/2\\).Bxz\\(bb\\).Pstart\\(12px\\).Va\\(t\\).ie-7_D\\(i\\).ie-7_Pos\\(a\\).smartphone_D\\(b\\).smartphone_W\\(100\\%\\).smartphone_Pstart\\(0px\\).smartphone_BdB.smartphone_Bdc\\(\\$seperatorColor\\) > table > tbody > tr:nth-child(4)';
    stockInfo.eps = parseFloat($(targetSelector8).text().replace("EPS (TTM)",""))

    const axiosResponse2 = await axios.request({
        method: "GET",
        url: "https://finance.yahoo.com/quote/"+symbol+"/analysis",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })
    
    const $2 = cheerio.load(axiosResponse2.data)

    const targetSelector9 = '#Col1-0-AnalystLeafPage-Proxy > section > table:nth-child(7) > tbody > tr:nth-child(5) > td:nth-child(2)';
    stockInfo.growthNext5Y = $2(targetSelector9).text()
    
    let changeGN5 = false;
    if (stockInfo.growthNext5Y == "N/A") {stockInfo.growthNext5Y = "10%";changeGN5 = true}
    
    stockInfo.intricsicValue = {
        high: parseFloat(((stockInfo.eps*(8.5+(2*parseFloat(stockInfo.growthNext5Y.replace('%',""))))*4.4)/5.01).toFixed(2)),
        medium: parseFloat(((stockInfo.eps*(7.5+(1.25*parseFloat(stockInfo.growthNext5Y.replace('%',""))))*4.4)/5.01).toFixed(2)),
        low: parseFloat(((stockInfo.eps*(7+(1*parseFloat(stockInfo.growthNext5Y.replace('%',""))))*4.4)/5.01).toFixed(2)),
        average: null,
    }

    stockInfo.intricsicValue.average = parseFloat(parseFloat((stockInfo.intricsicValue.high + stockInfo.intricsicValue.medium + stockInfo.intricsicValue.low) / 3).toFixed(2))
   
    if (changeGN5 == true) {
        stockInfo.growthNext5Y = "N/A"
    }

    return stockInfo

    },

    getStaticstics: async function (symbol) {
        const axiosResponse = await axios.request({
            method: "GET",
            url: "https://finance.yahoo.com/quote/"+symbol+"/key-statistics",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
            }
        })
        
        const stockInfo = {}
        const $ = cheerio.load(axiosResponse.data)
    
        const targetSelector = '#Col1-0-KeyStatistics-Proxy > section > div.Mstart\\(a\\).Mend\\(a\\) > div:nth-child(3) > div > div:nth-child(2) > div > div > table > tbody > tr.Bxz\\(bb\\).H\\(36px\\).BdY.Bdc\\(\\$seperatorColor\\) > td.Fw\\(500\\).Ta\\(end\\).Pstart\\(10px\\).Miw\\(60px\\)';
        const targetSelector2 = '#Col1-0-KeyStatistics-Proxy > section > div.Mstart\\(a\\).Mend\\(a\\) > div:nth-child(3) > div > div:nth-child(2) > div > div > table > tbody > tr.Bxz\\(bb\\).H\\(36px\\).BdB.Bdbc\\(\\$seperatorColor\\) > td.Fw\\(500\\).Ta\\(end\\).Pstart\\(10px\\).Miw\\(60px\\)';
 
        stockInfo.profitability = {
            profitMargin: $(targetSelector).text(),
            operatingMargin: $(targetSelector2).text()
        }

        const targetSelector3 = '#Col1-0-KeyStatistics-Proxy > section > div.Mstart\\(a\\).Mend\\(a\\) > div:nth-child(3) > div > div:nth-child(4) > div > div > table > tbody > tr.Bxz\\(bb\\).H\\(36px\\).BdY.Bdc\\(\\$seperatorColor\\) > td.Fw\\(500\\).Ta\\(end\\).Pstart\\(10px\\).Miw\\(60px\\)';
        const targetSelector4 = '#Col1-0-KeyStatistics-Proxy > section > div.Mstart\\(a\\).Mend\\(a\\) > div:nth-child(3) > div > div:nth-child(4) > div > div > table > tbody > tr:nth-child(2) > td.Fw\\(500\\).Ta\\(end\\).Pstart\\(10px\\).Miw\\(60px\\)';

        stockInfo.is = {
            revenue: $(targetSelector3).text(),
            revenuePerShare: $(targetSelector4).text()
        }

        return stockInfo
    },

    getIndex: async function () {

        const axiosResponse = await axios.request({
            method: "GET",
            url: "https://www.slickcharts.com/sp500",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
            }
        })   
        
        const stockInfo = {}
        const $ = cheerio.load(axiosResponse.data)

        const targetSelector = 'body > div.container-fluid.maxWidth > div:nth-child(2) > div.col-lg-7 > div > div > table > tbody';
        
        let jsonReturn = []
        $(targetSelector).map((_, index) => {
            jsonReturn = ($(index).text().split('\n'))  
        })

        for (let i = 0; i < jsonReturn.length; i++) {
            if (jsonReturn[i].trim() == '') {
                jsonReturn.splice(i, 1);
            }
        }

        let jsonReturn2 = []
        for (let i = 0; i < 500; i++) {
            jsonReturn2.push({
                number: jsonReturn[1+(8*i)].trim(),
                name: jsonReturn[2+(i*8)].trim(),
                symbol: jsonReturn[3+(i*8)].trim(),
                percentage: jsonReturn[4+(i*8)].trim(),
            })
        }

        return jsonReturn2;
    }
}