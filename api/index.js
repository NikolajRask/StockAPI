const StockController = require('./controller/StockController')
const RequestController = require('./controller/RequestController')
        
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
const port = 4000
   
const data = {
    "index": [
	{
		"number": "1",
		"name": "Microsoft Corp",
		"symbol": "MSFT",
		"percentage": "7.14%"
	},
	{
		"number": "2",
		"name": "Apple Inc.",
		"symbol": "AAPL",
		"percentage": "5.93%"
	},
	{
		"number": "3",
		"name": "Nvidia Corp",
		"symbol": "NVDA",
		"percentage": "4.88%"
	},
	{
		"number": "4",
		"name": "Amazon.com Inc",
		"symbol": "AMZN",
		"percentage": "3.74%"
	},
	{
		"number": "5",
		"name": "Meta Platforms, Inc. Class A",
		"symbol": "META",
		"percentage": "2.56%"
	},
	{
		"number": "6",
		"name": "Alphabet Inc. Class A",
		"symbol": "GOOGL",
		"percentage": "1.83%"
	},
	{
		"number": "7",
		"name": "Berkshire Hathaway Class B",
		"symbol": "BRK.B",
		"percentage": "1.70%"
	},
	{
		"number": "8",
		"name": "Alphabet Inc. Class C",
		"symbol": "GOOG",
		"percentage": "1.55%"
	},
	{
		"number": "9",
		"name": "Eli Lilly & Co.",
		"symbol": "LLY",
		"percentage": "1.46%"
	},
	{
		"number": "10",
		"name": "Broadcom Inc.",
		"symbol": "AVGO",
		"percentage": "1.43%"
	},
	{
		"number": "11",
		"name": "Jpmorgan Chase & Co.",
		"symbol": "JPM",
		"percentage": "1.25%"
	},
	{
		"number": "12",
		"name": "Tesla, Inc.",
		"symbol": "TSLA",
		"percentage": "1.20%"
	},
	{
		"number": "13",
		"name": "Visa Inc.",
		"symbol": "V",
		"percentage": "1.04%"
	},
	{
		"number": "14",
		"name": "Unitedhealth Group Incorporated",
		"symbol": "UNH",
		"percentage": "1.03%"
	},
	{
		"number": "15",
		"name": "Exxon Mobil Corporation",
		"symbol": "XOM",
		"percentage": "0.97%"
	},
	{
		"number": "16",
		"name": "Mastercard Incorporated",
		"symbol": "MA",
		"percentage": "0.90%"
	},
	{
		"number": "17",
		"name": "Johnson & Johnson",
		"symbol": "JNJ",
		"percentage": "0.89%"
	},
	{
		"number": "18",
		"name": "Home Depot, Inc.",
		"symbol": "HD",
		"percentage": "0.88%"
	},
	{
		"number": "19",
		"name": "Procter & Gamble Company",
		"symbol": "PG",
		"percentage": "0.87%"
	},
	{
		"number": "20",
		"name": "Costco Wholesale Corp",
		"symbol": "COST",
		"percentage": "0.78%"
	},
	{
		"number": "21",
		"name": "Advanced Micro Devices",
		"symbol": "AMD",
		"percentage": "0.77%"
	},
	{
		"number": "22",
		"name": "Merck & Co., Inc.",
		"symbol": "MRK",
		"percentage": "0.73%"
	},
	{
		"number": "23",
		"name": "Abbvie Inc.",
		"symbol": "ABBV",
		"percentage": "0.72%"
	},
	{
		"number": "24",
		"name": "Salesforce, Inc.",
		"symbol": "CRM",
		"percentage": "0.71%"
	},
	{
		"number": "25",
		"name": "Netflix Inc",
		"symbol": "NFLX",
		"percentage": "0.62%"
	},
	{
		"number": "26",
		"name": "Chevron Corporation",
		"symbol": "CVX",
		"percentage": "0.61%"
	},
	{
		"number": "27",
		"name": "Adobe Inc.",
		"symbol": "ADBE",
		"percentage": "0.60%"
	},
	{
		"number": "28",
		"name": "Walmart Inc.",
		"symbol": "WMT",
		"percentage": "0.59%"
	},
	{
		"number": "29",
		"name": "Bank of America Corporation",
		"symbol": "BAC",
		"percentage": "0.56%"
	},
	{
		"number": "30",
		"name": "Accenture Plc",
		"symbol": "ACN",
		"percentage": "0.56%"
	},
	{
		"number": "31",
		"name": "Coca-Cola Company",
		"symbol": "KO",
		"percentage": "0.54%"
	},
	{
		"number": "32",
		"name": "Pepsico, Inc.",
		"symbol": "PEP",
		"percentage": "0.53%"
	},
	{
		"number": "33",
		"name": "Thermo Fisher Scientific, Inc.",
		"symbol": "TMO",
		"percentage": "0.52%"
	},
	{
		"number": "34",
		"name": "Linde Plc",
		"symbol": "LIN",
		"percentage": "0.51%"
	},
	{
		"number": "35",
		"name": "Mcdonald's Corporation",
		"symbol": "MCD",
		"percentage": "0.49%"
	},
	{
		"number": "36",
		"name": "Abbott Laboratories",
		"symbol": "ABT",
		"percentage": "0.48%"
	},
	{
		"number": "37",
		"name": "The Walt Disney Company",
		"symbol": "DIS",
		"percentage": "0.48%"
	},
	{
		"number": "38",
		"name": "Wells Fargo & Co.",
		"symbol": "WFC",
		"percentage": "0.47%"
	},
	{
		"number": "39",
		"name": "Cisco Systems, Inc.",
		"symbol": "CSCO",
		"percentage": "0.46%"
	},
	{
		"number": "40",
		"name": "Intel Corp",
		"symbol": "INTC",
		"percentage": "0.45%"
	},
	{
		"number": "41",
		"name": "Intuit Inc",
		"symbol": "INTU",
		"percentage": "0.43%"
	},
	{
		"number": "42",
		"name": "Qualcomm Inc",
		"symbol": "QCOM",
		"percentage": "0.43%"
	},
	{
		"number": "43",
		"name": "Oracle Corp",
		"symbol": "ORCL",
		"percentage": "0.42%"
	},
	{
		"number": "44",
		"name": "International Business Machines Corporation",
		"symbol": "IBM",
		"percentage": "0.41%"
	},
	{
		"number": "45",
		"name": "Applied Materials Inc",
		"symbol": "AMAT",
		"percentage": "0.41%"
	},
	{
		"number": "46",
		"name": "General Electric Company",
		"symbol": "GE",
		"percentage": "0.41%"
	},
	{
		"number": "47",
		"name": "Caterpillar Inc.",
		"symbol": "CAT",
		"percentage": "0.40%"
	},
	{
		"number": "48",
		"name": "Verizon Communications",
		"symbol": "VZ",
		"percentage": "0.39%"
	},
	{
		"number": "49",
		"name": "Danaher Corporation",
		"symbol": "DHR",
		"percentage": "0.39%"
	},
	{
		"number": "50",
		"name": "Comcast Corp",
		"symbol": "CMCSA",
		"percentage": "0.39%"
	},
	{
		"number": "51",
		"name": "Uber Technologies, Inc.",
		"symbol": "UBER",
		"percentage": "0.39%"
	},
	{
		"number": "52",
		"name": "Servicenow, Inc.",
		"symbol": "NOW",
		"percentage": "0.37%"
	},
	{
		"number": "53",
		"name": "Texas Instruments Incorporated",
		"symbol": "TXN",
		"percentage": "0.36%"
	},
	{
		"number": "54",
		"name": "Union Pacific Corp.",
		"symbol": "UNP",
		"percentage": "0.36%"
	},
	{
		"number": "55",
		"name": "Amgen Inc",
		"symbol": "AMGN",
		"percentage": "0.35%"
	},
	{
		"number": "56",
		"name": "Pfizer Inc.",
		"symbol": "PFE",
		"percentage": "0.34%"
	},
	{
		"number": "57",
		"name": "Intuitive Surgical Inc.",
		"symbol": "ISRG",
		"percentage": "0.33%"
	},
	{
		"number": "58",
		"name": "Philip Morris International Inc.",
		"symbol": "PM",
		"percentage": "0.32%"
	},
	{
		"number": "59",
		"name": "Lowe's Companies Inc.",
		"symbol": "LOW",
		"percentage": "0.32%"
	},
	{
		"number": "60",
		"name": "S&p Global Inc.",
		"symbol": "SPGI",
		"percentage": "0.32%"
	},
	{
		"number": "61",
		"name": "Conocophillips",
		"symbol": "COP",
		"percentage": "0.31%"
	},
	{
		"number": "62",
		"name": "Honeywell International, Inc.",
		"symbol": "HON",
		"percentage": "0.30%"
	},
	{
		"number": "63",
		"name": "Rtx Corporation",
		"symbol": "RTX",
		"percentage": "0.30%"
	},
	{
		"number": "64",
		"name": "Lam Research Corp",
		"symbol": "LRCX",
		"percentage": "0.30%"
	},
	{
		"number": "65",
		"name": "Goldman Sachs Group Inc.",
		"symbol": "GS",
		"percentage": "0.30%"
	},
	{
		"number": "66",
		"name": "American Express Company",
		"symbol": "AXP",
		"percentage": "0.29%"
	},
	{
		"number": "67",
		"name": "Prologis, Inc.",
		"symbol": "PLD",
		"percentage": "0.29%"
	},
	{
		"number": "68",
		"name": "Nike, Inc.",
		"symbol": "NKE",
		"percentage": "0.28%"
	},
	{
		"number": "69",
		"name": "Booking Holdings Inc.",
		"symbol": "BKNG",
		"percentage": "0.28%"
	},
	{
		"number": "70",
		"name": "Stryker Corporation",
		"symbol": "SYK",
		"percentage": "0.28%"
	},
	{
		"number": "71",
		"name": "At&t Inc.",
		"symbol": "T",
		"percentage": "0.28%"
	},
	{
		"number": "72",
		"name": "Elevance Health, Inc.",
		"symbol": "ELV",
		"percentage": "0.27%"
	},
	{
		"number": "73",
		"name": "Eaton Corporation, Plcs",
		"symbol": "ETN",
		"percentage": "0.27%"
	},
	{
		"number": "74",
		"name": "Blackrock, Inc.",
		"symbol": "BLK",
		"percentage": "0.27%"
	},
	{
		"number": "75",
		"name": "Boeing Company",
		"symbol": "BA",
		"percentage": "0.26%"
	},
	{
		"number": "76",
		"name": "Morgan Stanley",
		"symbol": "MS",
		"percentage": "0.26%"
	},
	{
		"number": "77",
		"name": "Medtronic Plc",
		"symbol": "MDT",
		"percentage": "0.26%"
	},
	{
		"number": "78",
		"name": "Nextra Energy, Inc.",
		"symbol": "NEE",
		"percentage": "0.26%"
	},
	{
		"number": "79",
		"name": "Tjx Companies, Inc.",
		"symbol": "TJX",
		"percentage": "0.26%"
	},
	{
		"number": "80",
		"name": "Progressive Corporation",
		"symbol": "PGR",
		"percentage": "0.26%"
	},
	{
		"number": "81",
		"name": "Vertex Pharmaceuticals Inc",
		"symbol": "VRTX",
		"percentage": "0.25%"
	},
	{
		"number": "82",
		"name": "United Parcel Service, Inc. Class B",
		"symbol": "UPS",
		"percentage": "0.25%"
	},
	{
		"number": "83",
		"name": "Citigroup Inc.",
		"symbol": "C",
		"percentage": "0.25%"
	},
	{
		"number": "84",
		"name": "Starbucks Corp",
		"symbol": "SBUX",
		"percentage": "0.24%"
	},
	{
		"number": "85",
		"name": "Micron Technology, Inc.",
		"symbol": "MU",
		"percentage": "0.24%"
	},
	{
		"number": "86",
		"name": "Regeneron Pharmaceuticals Inc",
		"symbol": "REGN",
		"percentage": "0.24%"
	},
	{
		"number": "87",
		"name": "Bristol-Myers Squibb Co.",
		"symbol": "BMY",
		"percentage": "0.24%"
	},
	{
		"number": "88",
		"name": "Chubb Limited",
		"symbol": "CB",
		"percentage": "0.23%"
	},
	{
		"number": "89",
		"name": "Automatic Data Processing",
		"symbol": "ADP",
		"percentage": "0.23%"
	},
	{
		"number": "90",
		"name": "The Charles Schwab Corporation",
		"symbol": "SCHW",
		"percentage": "0.23%"
	},
	{
		"number": "91",
		"name": "Marsh & Mclennan Companies, Inc.",
		"symbol": "MMC",
		"percentage": "0.23%"
	},
	{
		"number": "92",
		"name": "Boston Scientific Corp.",
		"symbol": "BSX",
		"percentage": "0.23%"
	},
	{
		"number": "93",
		"name": "The Cigna Group",
		"symbol": "CI",
		"percentage": "0.23%"
	},
	{
		"number": "94",
		"name": "Deere & Company",
		"symbol": "DE",
		"percentage": "0.23%"
	},
	{
		"number": "95",
		"name": "Kla Corporation",
		"symbol": "KLAC",
		"percentage": "0.23%"
	},
	{
		"number": "96",
		"name": "Mondelez International, Inc. Class A",
		"symbol": "MDLZ",
		"percentage": "0.23%"
	},
	{
		"number": "97",
		"name": "Analog Devices, Inc.",
		"symbol": "ADI",
		"percentage": "0.22%"
	},
	{
		"number": "98",
		"name": "American Tower Corporation",
		"symbol": "AMT",
		"percentage": "0.22%"
	},
	{
		"number": "99",
		"name": "Lockheed Martin Corp.",
		"symbol": "LMT",
		"percentage": "0.22%"
	},
	{
		"number": "100",
		"name": "Cvs Health Corporation",
		"symbol": "CVS",
		"percentage": "0.22%"
	},
	{
		"number": "101",
		"name": "Palo Alto Networks, Inc.",
		"symbol": "PANW",
		"percentage": "0.22%"
	},
	{
		"number": "102",
		"name": "Synopsys Inc",
		"symbol": "SNPS",
		"percentage": "0.21%"
	},
	{
		"number": "103",
		"name": "Gilead Sciences Inc",
		"symbol": "GILD",
		"percentage": "0.21%"
	},
	{
		"number": "104",
		"name": "Fiserv, Inc.",
		"symbol": "FI",
		"percentage": "0.21%"
	},
	{
		"number": "105",
		"name": "Blackstone Inc.",
		"symbol": "BX",
		"percentage": "0.21%"
	},
	{
		"number": "106",
		"name": "Cadence Design Systems",
		"symbol": "CDNS",
		"percentage": "0.20%"
	},
	{
		"number": "107",
		"name": "Zoetis Inc.",
		"symbol": "ZTS",
		"percentage": "0.20%"
	},
	{
		"number": "108",
		"name": "Equinix, Inc. Reit",
		"symbol": "EQIX",
		"percentage": "0.20%"
	},
	{
		"number": "109",
		"name": "T-Mobile Us, Inc.",
		"symbol": "TMUS",
		"percentage": "0.19%"
	},
	{
		"number": "110",
		"name": "Cme Group Inc.",
		"symbol": "CME",
		"percentage": "0.18%"
	},
	{
		"number": "111",
		"name": "The Sherwin-Williams Company",
		"symbol": "SHW",
		"percentage": "0.18%"
	},
	{
		"number": "112",
		"name": "Intercontinental Exchange  Inc.",
		"symbol": "ICE",
		"percentage": "0.18%"
	},
	{
		"number": "113",
		"name": "Csx Corporation",
		"symbol": "CSX",
		"percentage": "0.18%"
	},
	{
		"number": "114",
		"name": "Waste Management, Inc.",
		"symbol": "WM",
		"percentage": "0.18%"
	},
	{
		"number": "115",
		"name": "Chipotle Mexican Grill, Inc.",
		"symbol": "CMG",
		"percentage": "0.17%"
	},
	{
		"number": "116",
		"name": "The Southern Company",
		"symbol": "SO",
		"percentage": "0.17%"
	},
	{
		"number": "117",
		"name": "Arista Networks",
		"symbol": "ANET",
		"percentage": "0.17%"
	},
	{
		"number": "118",
		"name": "Colgate-Palmolive Company",
		"symbol": "CL",
		"percentage": "0.17%"
	},
	{
		"number": "119",
		"name": "Duke Energy Corporation",
		"symbol": "DUK",
		"percentage": "0.16%"
	},
	{
		"number": "120",
		"name": "Mckesson Corporation",
		"symbol": "MCK",
		"percentage": "0.16%"
	},
	{
		"number": "121",
		"name": "Illinois Tool Works Inc.",
		"symbol": "ITW",
		"percentage": "0.16%"
	},
	{
		"number": "122",
		"name": "Schlumberger Limited",
		"symbol": "SLB",
		"percentage": "0.16%"
	},
	{
		"number": "123",
		"name": "Altria Group, Inc.",
		"symbol": "MO",
		"percentage": "0.16%"
	},
	{
		"number": "124",
		"name": "Target Corporation",
		"symbol": "TGT",
		"percentage": "0.16%"
	},
	{
		"number": "125",
		"name": "Parker-Hannifin Corporation",
		"symbol": "PH",
		"percentage": "0.16%"
	},
	{
		"number": "126",
		"name": "Airbnb, Inc. Class A",
		"symbol": "ABNB",
		"percentage": "0.16%"
	},
	{
		"number": "127",
		"name": "Becton, Dickinson and Co.",
		"symbol": "BDX",
		"percentage": "0.16%"
	},
	{
		"number": "128",
		"name": "Eog Resources, Inc.",
		"symbol": "EOG",
		"percentage": "0.16%"
	},
	{
		"number": "129",
		"name": "Amphenol Corporation",
		"symbol": "APH",
		"percentage": "0.15%"
	},
	{
		"number": "130",
		"name": "U.S. Bancorp",
		"symbol": "USB",
		"percentage": "0.15%"
	},
	{
		"number": "131",
		"name": "Marathon Petroleum Corporation",
		"symbol": "MPC",
		"percentage": "0.15%"
	},
	{
		"number": "132",
		"name": "Trane Technologies Plc",
		"symbol": "TT",
		"percentage": "0.15%"
	},
	{
		"number": "133",
		"name": "Nxp Semiconductors N.v.",
		"symbol": "NXPI",
		"percentage": "0.15%"
	},
	{
		"number": "134",
		"name": "Northrop Grumman Corp.",
		"symbol": "NOC",
		"percentage": "0.15%"
	},
	{
		"number": "135",
		"name": "Transdigm Group Incorporated",
		"symbol": "TDG",
		"percentage": "0.15%"
	},
	{
		"number": "136",
		"name": "Paypal Holdings, Inc.",
		"symbol": "PYPL",
		"percentage": "0.15%"
	},
	{
		"number": "137",
		"name": "O'reilly Automotive, Inc.",
		"symbol": "ORLY",
		"percentage": "0.15%"
	},
	{
		"number": "138",
		"name": "Phillips 66",
		"symbol": "PSX",
		"percentage": "0.15%"
	},
	{
		"number": "139",
		"name": "Aon Plc Class A",
		"symbol": "AON",
		"percentage": "0.15%"
	},
	{
		"number": "140",
		"name": "Emerson Electric Co.",
		"symbol": "EMR",
		"percentage": "0.14%"
	},
	{
		"number": "141",
		"name": "Hca Healthcare, Inc.",
		"symbol": "HCA",
		"percentage": "0.14%"
	},
	{
		"number": "142",
		"name": "General Dynamics Corporation",
		"symbol": "GD",
		"percentage": "0.14%"
	},
	{
		"number": "143",
		"name": "Pnc Financial Services Group",
		"symbol": "PNC",
		"percentage": "0.14%"
	},
	{
		"number": "144",
		"name": "Marriot International Class A",
		"symbol": "MAR",
		"percentage": "0.14%"
	},
	{
		"number": "145",
		"name": "Moody's Corporation",
		"symbol": "MCO",
		"percentage": "0.14%"
	},
	{
		"number": "146",
		"name": "Paccar Inc",
		"symbol": "PCAR",
		"percentage": "0.14%"
	},
	{
		"number": "147",
		"name": "Norfolk Southern Corp.",
		"symbol": "NSC",
		"percentage": "0.14%"
	},
	{
		"number": "148",
		"name": "Roper Technologies, Inc.",
		"symbol": "ROP",
		"percentage": "0.13%"
	},
	{
		"number": "149",
		"name": "Ecolab, Inc.",
		"symbol": "ECL",
		"percentage": "0.13%"
	},
	{
		"number": "150",
		"name": "Fedex Corporation",
		"symbol": "FDX",
		"percentage": "0.13%"
	},
	{
		"number": "151",
		"name": "Constellation Energy Corporation",
		"symbol": "CEG",
		"percentage": "0.13%"
	},
	{
		"number": "152",
		"name": "General Motors Company",
		"symbol": "GM",
		"percentage": "0.13%"
	},
	{
		"number": "153",
		"name": "Motorola Solutions, Inc.",
		"symbol": "MSI",
		"percentage": "0.13%"
	},
	{
		"number": "154",
		"name": "Autodesk Inc",
		"symbol": "ADSK",
		"percentage": "0.13%"
	},
	{
		"number": "155",
		"name": "Freeport-Mcmoran Inc.",
		"symbol": "FCX",
		"percentage": "0.13%"
	},
	{
		"number": "156",
		"name": "Pioneer Natural Resource Co.",
		"symbol": "PXD",
		"percentage": "0.13%"
	},
	{
		"number": "157",
		"name": "Cintas Corp",
		"symbol": "CTAS",
		"percentage": "0.13%"
	},
	{
		"number": "158",
		"name": "Autozone, Inc.",
		"symbol": "AZO",
		"percentage": "0.13%"
	},
	{
		"number": "159",
		"name": "Air Products & Chemicals, Inc.",
		"symbol": "APD",
		"percentage": "0.12%"
	},
	{
		"number": "160",
		"name": "Edwards Lifesciences Corp",
		"symbol": "EW",
		"percentage": "0.12%"
	},
	{
		"number": "161",
		"name": "Arthur J. Gallagher & Co.",
		"symbol": "AJG",
		"percentage": "0.12%"
	},
	{
		"number": "162",
		"name": "Lululemon Athletica Inc.",
		"symbol": "LULU",
		"percentage": "0.12%"
	},
	{
		"number": "163",
		"name": "Hilton Worldwide Holdings Inc.",
		"symbol": "HLT",
		"percentage": "0.12%"
	},
	{
		"number": "164",
		"name": "Capital One Financial",
		"symbol": "COF",
		"percentage": "0.12%"
	},
	{
		"number": "165",
		"name": "Welltower Inc.",
		"symbol": "WELL",
		"percentage": "0.12%"
	},
	{
		"number": "166",
		"name": "American International Group, Inc.",
		"symbol": "AIG",
		"percentage": "0.12%"
	},
	{
		"number": "167",
		"name": "Ross Stores Inc",
		"symbol": "ROST",
		"percentage": "0.12%"
	},
	{
		"number": "168",
		"name": "3m Company",
		"symbol": "MMM",
		"percentage": "0.12%"
	},
	{
		"number": "169",
		"name": "Ford Motor Company",
		"symbol": "F",
		"percentage": "0.12%"
	},
	{
		"number": "170",
		"name": "The Travelers Companies, Inc.",
		"symbol": "TRV",
		"percentage": "0.12%"
	},
	{
		"number": "171",
		"name": "Simon Property Group, Inc.",
		"symbol": "SPG",
		"percentage": "0.12%"
	},
	{
		"number": "172",
		"name": "Valero Energy Corporation",
		"symbol": "VLO",
		"percentage": "0.11%"
	},
	{
		"number": "173",
		"name": "Crown Castle Inc.",
		"symbol": "CCI",
		"percentage": "0.11%"
	},
	{
		"number": "174",
		"name": "United Rentals, Inc.",
		"symbol": "URI",
		"percentage": "0.11%"
	},
	{
		"number": "175",
		"name": "Truist Financial Corporation",
		"symbol": "TFC",
		"percentage": "0.11%"
	},
	{
		"number": "176",
		"name": "Carrier Global Corporation",
		"symbol": "CARR",
		"percentage": "0.11%"
	},
	{
		"number": "177",
		"name": "Idexx Laboratories Inc",
		"symbol": "IDXX",
		"percentage": "0.11%"
	},
	{
		"number": "178",
		"name": "Dexcom, Inc.",
		"symbol": "DXCM",
		"percentage": "0.11%"
	},
	{
		"number": "179",
		"name": "Copart Inc",
		"symbol": "CPRT",
		"percentage": "0.11%"
	},
	{
		"number": "180",
		"name": "Microchip Technology Inc",
		"symbol": "MCHP",
		"percentage": "0.11%"
	},
	{
		"number": "181",
		"name": "Digital Realty Trust, Inc.",
		"symbol": "DLR",
		"percentage": "0.11%"
	},
	{
		"number": "182",
		"name": "Iqvia Holdings Inc.",
		"symbol": "IQV",
		"percentage": "0.11%"
	},
	{
		"number": "183",
		"name": "Nucor Corporation",
		"symbol": "NUE",
		"percentage": "0.11%"
	},
	{
		"number": "184",
		"name": "D.R. Horton Inc.",
		"symbol": "DHI",
		"percentage": "0.11%"
	},
	{
		"number": "185",
		"name": "Fortinet, Inc.",
		"symbol": "FTNT",
		"percentage": "0.11%"
	},
	{
		"number": "186",
		"name": "Public Storage",
		"symbol": "PSA",
		"percentage": "0.10%"
	},
	{
		"number": "187",
		"name": "American Electric Power Company, Inc.",
		"symbol": "AEP",
		"percentage": "0.10%"
	},
	{
		"number": "188",
		"name": "Oneok, Inc.",
		"symbol": "OKE",
		"percentage": "0.10%"
	},
	{
		"number": "189",
		"name": "Sempra",
		"symbol": "SRE",
		"percentage": "0.10%"
	},
	{
		"number": "190",
		"name": "Te Connectivity Ltd",
		"symbol": "TEL",
		"percentage": "0.10%"
	},
	{
		"number": "191",
		"name": "Williams Companies Inc.",
		"symbol": "WMB",
		"percentage": "0.10%"
	},
	{
		"number": "192",
		"name": "Msci, Inc.",
		"symbol": "MSCI",
		"percentage": "0.10%"
	},
	{
		"number": "193",
		"name": "Realty Income Corporation",
		"symbol": "O",
		"percentage": "0.10%"
	},
	{
		"number": "194",
		"name": "W.W. Grainger, Inc.",
		"symbol": "GWW",
		"percentage": "0.10%"
	},
	{
		"number": "195",
		"name": "Metlife, Inc.",
		"symbol": "MET",
		"percentage": "0.10%"
	},
	{
		"number": "196",
		"name": "Monster Beverage Corporation",
		"symbol": "MNST",
		"percentage": "0.10%"
	},
	{
		"number": "197",
		"name": "Fastenal Co",
		"symbol": "FAST",
		"percentage": "0.10%"
	},
	{
		"number": "198",
		"name": "Humana Inc.",
		"symbol": "HUM",
		"percentage": "0.10%"
	},
	{
		"number": "199",
		"name": "Bank of New York Mellon Corporation",
		"symbol": "BK",
		"percentage": "0.10%"
	},
	{
		"number": "200",
		"name": "Aflac Inc.",
		"symbol": "AFL",
		"percentage": "0.10%"
	},
	{
		"number": "201",
		"name": "Centene Corporation",
		"symbol": "CNC",
		"percentage": "0.10%"
	},
	{
		"number": "202",
		"name": "Agilent Technologies Inc.",
		"symbol": "A",
		"percentage": "0.10%"
	},
	{
		"number": "203",
		"name": "Ametek, Inc.",
		"symbol": "AME",
		"percentage": "0.10%"
	},
	{
		"number": "204",
		"name": "Kimberly-Clark Corp.",
		"symbol": "KMB",
		"percentage": "0.10%"
	},
	{
		"number": "205",
		"name": "Ameriprise Financial, Inc.",
		"symbol": "AMP",
		"percentage": "0.10%"
	},
	{
		"number": "206",
		"name": "Fidelity National Information Services, Inc.",
		"symbol": "FIS",
		"percentage": "0.10%"
	},
	{
		"number": "207",
		"name": "Johnson Controls International Plc",
		"symbol": "JCI",
		"percentage": "0.10%"
	},
	{
		"number": "208",
		"name": "The Allstate Corporation",
		"symbol": "ALL",
		"percentage": "0.09%"
	},
	{
		"number": "209",
		"name": "L3harris Technologies, Inc.",
		"symbol": "LHX",
		"percentage": "0.09%"
	},
	{
		"number": "210",
		"name": "Hess Corporation",
		"symbol": "HES",
		"percentage": "0.09%"
	},
	{
		"number": "211",
		"name": "Lennar Corporation Class A",
		"symbol": "LEN",
		"percentage": "0.09%"
	},
	{
		"number": "212",
		"name": "Constellation Brands, Inc.",
		"symbol": "STZ",
		"percentage": "0.09%"
	},
	{
		"number": "213",
		"name": "Sysco Corporation",
		"symbol": "SYY",
		"percentage": "0.09%"
	},
	{
		"number": "214",
		"name": "Occidental Petroleum Corporation",
		"symbol": "OXY",
		"percentage": "0.09%"
	},
	{
		"number": "215",
		"name": "Dow Inc.",
		"symbol": "DOW",
		"percentage": "0.09%"
	},
	{
		"number": "216",
		"name": "Old Dominion Freight Line",
		"symbol": "ODFL",
		"percentage": "0.09%"
	},
	{
		"number": "217",
		"name": "Cognizant Technology Solutions",
		"symbol": "CTSH",
		"percentage": "0.09%"
	},
	{
		"number": "218",
		"name": "Paychex Inc",
		"symbol": "PAYX",
		"percentage": "0.09%"
	},
	{
		"number": "219",
		"name": "Cencora, Inc.",
		"symbol": "COR",
		"percentage": "0.09%"
	},
	{
		"number": "220",
		"name": "Dominion Energy, Inc",
		"symbol": "D",
		"percentage": "0.09%"
	},
	{
		"number": "221",
		"name": "Otis Worldwide Corporation",
		"symbol": "OTIS",
		"percentage": "0.09%"
	},
	{
		"number": "222",
		"name": "Yum! Brands, Inc.",
		"symbol": "YUM",
		"percentage": "0.09%"
	},
	{
		"number": "223",
		"name": "Prudential Financial, Inc.",
		"symbol": "PRU",
		"percentage": "0.09%"
	},
	{
		"number": "224",
		"name": "Newmont Corporation",
		"symbol": "NEM",
		"percentage": "0.09%"
	},
	{
		"number": "225",
		"name": "Cummins Inc.",
		"symbol": "CMI",
		"percentage": "0.09%"
	},
	{
		"number": "226",
		"name": "Republic Services Inc.",
		"symbol": "RSG",
		"percentage": "0.09%"
	},
	{
		"number": "227",
		"name": "Corteva, Inc.",
		"symbol": "CTVA",
		"percentage": "0.09%"
	},
	{
		"number": "228",
		"name": "General Mills, Inc.",
		"symbol": "GIS",
		"percentage": "0.09%"
	},
	{
		"number": "229",
		"name": "Martin Marietta Materials",
		"symbol": "MLM",
		"percentage": "0.09%"
	},
	{
		"number": "230",
		"name": "Ingersoll Rand Inc.",
		"symbol": "IR",
		"percentage": "0.09%"
	},
	{
		"number": "231",
		"name": "Gartner, Inc.",
		"symbol": "IT",
		"percentage": "0.08%"
	},
	{
		"number": "232",
		"name": "Ge Healthcare Technologies Inc.",
		"symbol": "GEHC",
		"percentage": "0.08%"
	},
	{
		"number": "233",
		"name": "Costar Group Inc",
		"symbol": "CSGP",
		"percentage": "0.08%"
	},
	{
		"number": "234",
		"name": "Exelon Corporation",
		"symbol": "EXC",
		"percentage": "0.08%"
	},
	{
		"number": "235",
		"name": "Vulcan Materials Company",
		"symbol": "VMC",
		"percentage": "0.08%"
	},
	{
		"number": "236",
		"name": "Quanta Services, Inc.",
		"symbol": "PWR",
		"percentage": "0.08%"
	},
	{
		"number": "237",
		"name": "Pg&e Corporation",
		"symbol": "PCG",
		"percentage": "0.08%"
	},
	{
		"number": "238",
		"name": "Monolithic Power Systems, Inc.",
		"symbol": "MPWR",
		"percentage": "0.08%"
	},
	{
		"number": "239",
		"name": "Verisk Analytics, Inc.",
		"symbol": "VRSK",
		"percentage": "0.08%"
	},
	{
		"number": "240",
		"name": "On Semiconductor Corp",
		"symbol": "ON",
		"percentage": "0.08%"
	},
	{
		"number": "241",
		"name": "The Estee Lauder Companies Inc. Class A",
		"symbol": "EL",
		"percentage": "0.08%"
	},
	{
		"number": "242",
		"name": "Kinder Morgan, Inc.",
		"symbol": "KMI",
		"percentage": "0.08%"
	},
	{
		"number": "243",
		"name": "Electronic Arts Inc",
		"symbol": "EA",
		"percentage": "0.08%"
	},
	{
		"number": "244",
		"name": "Global Payments, Inc.",
		"symbol": "GPN",
		"percentage": "0.08%"
	},
	{
		"number": "245",
		"name": "Rockwell Automation, Inc.",
		"symbol": "ROK",
		"percentage": "0.08%"
	},
	{
		"number": "246",
		"name": "Cdw Corporation",
		"symbol": "CDW",
		"percentage": "0.08%"
	},
	{
		"number": "247",
		"name": "Equifax, Incorporated",
		"symbol": "EFX",
		"percentage": "0.08%"
	},
	{
		"number": "248",
		"name": "Kenvue Inc.",
		"symbol": "KVUE",
		"percentage": "0.08%"
	},
	{
		"number": "249",
		"name": "Ppg Industries, Inc.",
		"symbol": "PPG",
		"percentage": "0.08%"
	},
	{
		"number": "250",
		"name": "Dollar General Corp.",
		"symbol": "DG",
		"percentage": "0.08%"
	},
	{
		"number": "251",
		"name": "Arch Capital Group Ltd",
		"symbol": "ACGL",
		"percentage": "0.07%"
	},
	{
		"number": "252",
		"name": "The Kroger Co.",
		"symbol": "KR",
		"percentage": "0.07%"
	},
	{
		"number": "253",
		"name": "Fair Isaac Corporation",
		"symbol": "FICO",
		"percentage": "0.07%"
	},
	{
		"number": "254",
		"name": "Diamondback Energy, Inc.",
		"symbol": "FANG",
		"percentage": "0.07%"
	},
	{
		"number": "255",
		"name": "Biogen Inc.",
		"symbol": "BIIB",
		"percentage": "0.07%"
	},
	{
		"number": "256",
		"name": "Moderna, Inc.",
		"symbol": "MRNA",
		"percentage": "0.07%"
	},
	{
		"number": "257",
		"name": "Public Service Enterprise Group Incorporated",
		"symbol": "PEG",
		"percentage": "0.07%"
	},
	{
		"number": "258",
		"name": "Halliburton Company",
		"symbol": "HAL",
		"percentage": "0.07%"
	},
	{
		"number": "259",
		"name": "Extra Space Storage, Inc.",
		"symbol": "EXR",
		"percentage": "0.07%"
	},
	{
		"number": "260",
		"name": "Consolidated Edison, Inc.",
		"symbol": "ED",
		"percentage": "0.07%"
	},
	{
		"number": "261",
		"name": "Vici Properties Inc.",
		"symbol": "VICI",
		"percentage": "0.07%"
	},
	{
		"number": "262",
		"name": "Xylem Inc",
		"symbol": "XYL",
		"percentage": "0.07%"
	},
	{
		"number": "263",
		"name": "Dollar Tree Inc.",
		"symbol": "DLTR",
		"percentage": "0.07%"
	},
	{
		"number": "264",
		"name": "Discover Financial Services",
		"symbol": "DFS",
		"percentage": "0.07%"
	},
	{
		"number": "265",
		"name": "Dupont De Nemours, Inc.",
		"symbol": "DD",
		"percentage": "0.07%"
	},
	{
		"number": "266",
		"name": "Fortive Corporation",
		"symbol": "FTV",
		"percentage": "0.07%"
	},
	{
		"number": "267",
		"name": "Royal Caribbean Group",
		"symbol": "RCL",
		"percentage": "0.07%"
	},
	{
		"number": "268",
		"name": "Ansys Inc",
		"symbol": "ANSS",
		"percentage": "0.07%"
	},
	{
		"number": "269",
		"name": "Baker Hughes Company",
		"symbol": "BKR",
		"percentage": "0.07%"
	},
	{
		"number": "270",
		"name": "Keurig Dr Pepper Inc.",
		"symbol": "KDP",
		"percentage": "0.07%"
	},
	{
		"number": "271",
		"name": "The Hartford Financial Services Group, Inc.",
		"symbol": "HIG",
		"percentage": "0.07%"
	},
	{
		"number": "272",
		"name": "Devon Energy Corporation",
		"symbol": "DVN",
		"percentage": "0.07%"
	},
	{
		"number": "273",
		"name": "Archer Daniels Midland Company",
		"symbol": "ADM",
		"percentage": "0.07%"
	},
	{
		"number": "274",
		"name": "Willis Towers Watson Public Limited Companys",
		"symbol": "WTW",
		"percentage": "0.07%"
	},
	{
		"number": "275",
		"name": "Cbre Group, Inc.",
		"symbol": "CBRE",
		"percentage": "0.07%"
	},
	{
		"number": "276",
		"name": "Charter Comm Inc Del Cl a",
		"symbol": "CHTR",
		"percentage": "0.07%"
	},
	{
		"number": "277",
		"name": "Xcel Energy, Inc.",
		"symbol": "XEL",
		"percentage": "0.06%"
	},
	{
		"number": "278",
		"name": "Keysight Technologies, Inc.",
		"symbol": "KEYS",
		"percentage": "0.06%"
	},
	{
		"number": "279",
		"name": "Mettler-Toledo International",
		"symbol": "MTD",
		"percentage": "0.06%"
	},
	{
		"number": "280",
		"name": "The Kraft Heinz Company",
		"symbol": "KHC",
		"percentage": "0.06%"
	},
	{
		"number": "281",
		"name": "Cardinal Health, Inc.",
		"symbol": "CAH",
		"percentage": "0.06%"
	},
	{
		"number": "282",
		"name": "The Hershey Company",
		"symbol": "HSY",
		"percentage": "0.06%"
	},
	{
		"number": "283",
		"name": "Tractor Supply Co",
		"symbol": "TSCO",
		"percentage": "0.06%"
	},
	{
		"number": "284",
		"name": "Ulta Beauty, Inc.",
		"symbol": "ULTA",
		"percentage": "0.06%"
	},
	{
		"number": "285",
		"name": "Delta Air Lines, Inc.",
		"symbol": "DAL",
		"percentage": "0.06%"
	},
	{
		"number": "286",
		"name": "West Pharmaceutical Services, Inc.",
		"symbol": "WST",
		"percentage": "0.06%"
	},
	{
		"number": "287",
		"name": "Resmed Inc.",
		"symbol": "RMD",
		"percentage": "0.06%"
	},
	{
		"number": "288",
		"name": "Howmet Aerospace Inc.",
		"symbol": "HWM",
		"percentage": "0.06%"
	},
	{
		"number": "289",
		"name": "Zimmer Biomet Holdings, Inc.",
		"symbol": "ZBH",
		"percentage": "0.06%"
	},
	{
		"number": "290",
		"name": "T Rowe Price Group Inc",
		"symbol": "TROW",
		"percentage": "0.06%"
	},
	{
		"number": "291",
		"name": "Avalonbay Communities, Inc.",
		"symbol": "AVB",
		"percentage": "0.06%"
	},
	{
		"number": "292",
		"name": "Lyondellbasell Industries N.v. Class A",
		"symbol": "LYB",
		"percentage": "0.06%"
	},
	{
		"number": "293",
		"name": "Weyerhaeuser Company",
		"symbol": "WY",
		"percentage": "0.06%"
	},
	{
		"number": "294",
		"name": "Edison International",
		"symbol": "EIX",
		"percentage": "0.06%"
	},
	{
		"number": "295",
		"name": "Corning Incorporated",
		"symbol": "GLW",
		"percentage": "0.06%"
	},
	{
		"number": "296",
		"name": "Wabtec Inc.",
		"symbol": "WAB",
		"percentage": "0.06%"
	},
	{
		"number": "297",
		"name": "Ebay Inc",
		"symbol": "EBAY",
		"percentage": "0.06%"
	},
	{
		"number": "298",
		"name": "Hp Inc.",
		"symbol": "HPQ",
		"percentage": "0.06%"
	},
	{
		"number": "299",
		"name": "Wec Energy Group, Inc.",
		"symbol": "WEC",
		"percentage": "0.06%"
	},
	{
		"number": "300",
		"name": "Builders Firstsource, Inc.",
		"symbol": "BLDR",
		"percentage": "0.06%"
	},
	{
		"number": "301",
		"name": "Church & Dwight Co., Inc.",
		"symbol": "CHD",
		"percentage": "0.06%"
	},
	{
		"number": "302",
		"name": "Nvr, Inc.",
		"symbol": "NVR",
		"percentage": "0.06%"
	},
	{
		"number": "303",
		"name": "Fifth Third Bancorp",
		"symbol": "FITB",
		"percentage": "0.06%"
	},
	{
		"number": "304",
		"name": "Broadridge Financial Solutions Inc",
		"symbol": "BR",
		"percentage": "0.06%"
	},
	{
		"number": "305",
		"name": "Pultegroup, Inc.",
		"symbol": "PHM",
		"percentage": "0.06%"
	},
	{
		"number": "306",
		"name": "American Water Works Company, Inc",
		"symbol": "AWK",
		"percentage": "0.05%"
	},
	{
		"number": "307",
		"name": "Dover Corporation",
		"symbol": "DOV",
		"percentage": "0.05%"
	},
	{
		"number": "308",
		"name": "M&t Bank Corp.",
		"symbol": "MTB",
		"percentage": "0.05%"
	},
	{
		"number": "309",
		"name": "Take-Two Interactive Software Inc",
		"symbol": "TTWO",
		"percentage": "0.05%"
	},
	{
		"number": "310",
		"name": "Steris Plc",
		"symbol": "STE",
		"percentage": "0.05%"
	},
	{
		"number": "311",
		"name": "Iron Mountain Inc.",
		"symbol": "IRM",
		"percentage": "0.05%"
	},
	{
		"number": "312",
		"name": "Sba Communications Corp",
		"symbol": "SBAC",
		"percentage": "0.05%"
	},
	{
		"number": "313",
		"name": "State Street Corporation",
		"symbol": "STT",
		"percentage": "0.05%"
	},
	{
		"number": "314",
		"name": "Raymond James Financial, Inc.",
		"symbol": "RJF",
		"percentage": "0.05%"
	},
	{
		"number": "315",
		"name": "Dte Energy Company",
		"symbol": "DTE",
		"percentage": "0.05%"
	},
	{
		"number": "316",
		"name": "Axon Enterprise, Inc.",
		"symbol": "AXON",
		"percentage": "0.05%"
	},
	{
		"number": "317",
		"name": "Targa Resources Corp.",
		"symbol": "TRGP",
		"percentage": "0.05%"
	},
	{
		"number": "318",
		"name": "Molina Healthcare, Inc.",
		"symbol": "MOH",
		"percentage": "0.05%"
	},
	{
		"number": "319",
		"name": "Ptc, Inc",
		"symbol": "PTC",
		"percentage": "0.05%"
	},
	{
		"number": "320",
		"name": "Aptiv Plc",
		"symbol": "APTV",
		"percentage": "0.05%"
	},
	{
		"number": "321",
		"name": "Hewlett Packard Enterprise Company",
		"symbol": "HPE",
		"percentage": "0.05%"
	},
	{
		"number": "322",
		"name": "Align Technology Inc",
		"symbol": "ALGN",
		"percentage": "0.05%"
	},
	{
		"number": "323",
		"name": "Illumina Inc",
		"symbol": "ILMN",
		"percentage": "0.05%"
	},
	{
		"number": "324",
		"name": "Entergy Corporation",
		"symbol": "ETR",
		"percentage": "0.05%"
	},
	{
		"number": "325",
		"name": "Netapp, Inc",
		"symbol": "NTAP",
		"percentage": "0.05%"
	},
	{
		"number": "326",
		"name": "Baxter International Inc.",
		"symbol": "BAX",
		"percentage": "0.05%"
	},
	{
		"number": "327",
		"name": "Equity Residential",
		"symbol": "EQR",
		"percentage": "0.05%"
	},
	{
		"number": "328",
		"name": "Garmin Ltd",
		"symbol": "GRMN",
		"percentage": "0.05%"
	},
	{
		"number": "329",
		"name": "Genuine Parts Company",
		"symbol": "GPC",
		"percentage": "0.05%"
	},
	{
		"number": "330",
		"name": "Darden Restaurants, Inc.",
		"symbol": "DRI",
		"percentage": "0.05%"
	},
	{
		"number": "331",
		"name": "Hubbell Incorporated",
		"symbol": "HUBB",
		"percentage": "0.05%"
	},
	{
		"number": "332",
		"name": "Western Digital Corp.",
		"symbol": "WDC",
		"percentage": "0.05%"
	},
	{
		"number": "333",
		"name": "Eversource Energy",
		"symbol": "ES",
		"percentage": "0.05%"
	},
	{
		"number": "334",
		"name": "Waters Corp",
		"symbol": "WAT",
		"percentage": "0.05%"
	},
	{
		"number": "335",
		"name": "Invitation Homes Inc.",
		"symbol": "INVH",
		"percentage": "0.05%"
	},
	{
		"number": "336",
		"name": "The Cooper Companies, Inc.",
		"symbol": "COO",
		"percentage": "0.05%"
	},
	{
		"number": "337",
		"name": "Fleetcor Technologies, Inc.",
		"symbol": "FLT",
		"percentage": "0.05%"
	},
	{
		"number": "338",
		"name": "Ball Corporation",
		"symbol": "BALL",
		"percentage": "0.05%"
	},
	{
		"number": "339",
		"name": "Southwest Airlines Co.",
		"symbol": "LUV",
		"percentage": "0.05%"
	},
	{
		"number": "340",
		"name": "Teledyne Technologies Incorporated",
		"symbol": "TDY",
		"percentage": "0.05%"
	},
	{
		"number": "341",
		"name": "Cboe Global Markets, Inc.",
		"symbol": "CBOE",
		"percentage": "0.05%"
	},
	{
		"number": "342",
		"name": "Coterra Energy Inc.",
		"symbol": "CTRA",
		"percentage": "0.05%"
	},
	{
		"number": "343",
		"name": "Brown & Brown, Inc.",
		"symbol": "BRO",
		"percentage": "0.05%"
	},
	{
		"number": "344",
		"name": "Steel Dynamics Inc",
		"symbol": "STLD",
		"percentage": "0.05%"
	},
	{
		"number": "345",
		"name": "Alexandria Real Estate Equities, Inc.",
		"symbol": "ARE",
		"percentage": "0.05%"
	},
	{
		"number": "346",
		"name": "Ppl Corporation",
		"symbol": "PPL",
		"percentage": "0.05%"
	},
	{
		"number": "347",
		"name": "International Flavors & Fragrances Inc.",
		"symbol": "IFF",
		"percentage": "0.05%"
	},
	{
		"number": "348",
		"name": "Nasdaq, Inc.",
		"symbol": "NDAQ",
		"percentage": "0.04%"
	},
	{
		"number": "349",
		"name": "Firstenergy Corp.",
		"symbol": "FE",
		"percentage": "0.04%"
	},
	{
		"number": "350",
		"name": "Veralto Corporation",
		"symbol": "VLTO",
		"percentage": "0.04%"
	},
	{
		"number": "351",
		"name": "Huntington Bancshares Inc",
		"symbol": "HBAN",
		"percentage": "0.04%"
	},
	{
		"number": "352",
		"name": "Jabil Inc.",
		"symbol": "JBL",
		"percentage": "0.04%"
	},
	{
		"number": "353",
		"name": "Seagate Technology Holdings Plcs",
		"symbol": "STX",
		"percentage": "0.04%"
	},
	{
		"number": "354",
		"name": "Ameren Corporation",
		"symbol": "AEE",
		"percentage": "0.04%"
	},
	{
		"number": "355",
		"name": "Las Vegas Sands Corp.",
		"symbol": "LVS",
		"percentage": "0.04%"
	},
	{
		"number": "356",
		"name": "Clorox Company",
		"symbol": "CLX",
		"percentage": "0.04%"
	},
	{
		"number": "357",
		"name": "Laboratory Corporation of America Holdings",
		"symbol": "LH",
		"percentage": "0.04%"
	},
	{
		"number": "358",
		"name": "Jacobs Solutions Inc.",
		"symbol": "J",
		"percentage": "0.04%"
	},
	{
		"number": "359",
		"name": "Hologic Inc",
		"symbol": "HOLX",
		"percentage": "0.04%"
	},
	{
		"number": "360",
		"name": "Tyler Technologies, Inc.",
		"symbol": "TYL",
		"percentage": "0.04%"
	},
	{
		"number": "361",
		"name": "Expedia Group, Inc.",
		"symbol": "EXPE",
		"percentage": "0.04%"
	},
	{
		"number": "362",
		"name": "Warner Bros. Discovery, Inc. Series a",
		"symbol": "WBD",
		"percentage": "0.04%"
	},
	{
		"number": "363",
		"name": "Idex Corporation",
		"symbol": "IEX",
		"percentage": "0.04%"
	},
	{
		"number": "364",
		"name": "Ventas, Inc.",
		"symbol": "VTR",
		"percentage": "0.04%"
	},
	{
		"number": "365",
		"name": "Principal Financial Group, Inc.",
		"symbol": "PFG",
		"percentage": "0.04%"
	},
	{
		"number": "366",
		"name": "Regions Financial Corp.",
		"symbol": "RF",
		"percentage": "0.04%"
	},
	{
		"number": "367",
		"name": "Cincinnati Financial Corp",
		"symbol": "CINF",
		"percentage": "0.04%"
	},
	{
		"number": "368",
		"name": "Leidos Holdings, Inc.",
		"symbol": "LDOS",
		"percentage": "0.04%"
	},
	{
		"number": "369",
		"name": "Centerpoint Energy, Inc.",
		"symbol": "CNP",
		"percentage": "0.04%"
	},
	{
		"number": "370",
		"name": "Factset Research Systems",
		"symbol": "FDS",
		"percentage": "0.04%"
	},
	{
		"number": "371",
		"name": "Omnicom Group Inc.",
		"symbol": "OMC",
		"percentage": "0.04%"
	},
	{
		"number": "372",
		"name": "Epam Systems, Inc.",
		"symbol": "EPAM",
		"percentage": "0.04%"
	},
	{
		"number": "373",
		"name": "Masco Corporation",
		"symbol": "MAS",
		"percentage": "0.04%"
	},
	{
		"number": "374",
		"name": "Northern Trust Corp",
		"symbol": "NTRS",
		"percentage": "0.04%"
	},
	{
		"number": "375",
		"name": "Textron, Inc.",
		"symbol": "TXT",
		"percentage": "0.04%"
	},
	{
		"number": "376",
		"name": "Expeditors International of Washington, Inc.",
		"symbol": "EXPD",
		"percentage": "0.04%"
	},
	{
		"number": "377",
		"name": "Avery Dennison Corp.",
		"symbol": "AVY",
		"percentage": "0.04%"
	},
	{
		"number": "378",
		"name": "Cms Energy Corporation",
		"symbol": "CMS",
		"percentage": "0.04%"
	},
	{
		"number": "379",
		"name": "Mccormick & Company, Incorporated Non-Vtg Cs",
		"symbol": "MKC",
		"percentage": "0.04%"
	},
	{
		"number": "380",
		"name": "Verisign Inc",
		"symbol": "VRSN",
		"percentage": "0.04%"
	},
	{
		"number": "381",
		"name": "Atmos Energy Corporation",
		"symbol": "ATO",
		"percentage": "0.04%"
	},
	{
		"number": "382",
		"name": "W.R. Berkley Corporation",
		"symbol": "WRB",
		"percentage": "0.04%"
	},
	{
		"number": "383",
		"name": "Enphase Energy, Inc.",
		"symbol": "ENPH",
		"percentage": "0.04%"
	},
	{
		"number": "384",
		"name": "Synchrony Financial",
		"symbol": "SYF",
		"percentage": "0.04%"
	},
	{
		"number": "385",
		"name": "First Solar, Inc.",
		"symbol": "FSLR",
		"percentage": "0.04%"
	},
	{
		"number": "386",
		"name": "Skyworks Solutions Inc",
		"symbol": "SWKS",
		"percentage": "0.04%"
	},
	{
		"number": "387",
		"name": "Akamai Technologies Inc",
		"symbol": "AKAM",
		"percentage": "0.04%"
	},
	{
		"number": "388",
		"name": "Packaging Corp of America",
		"symbol": "PKG",
		"percentage": "0.04%"
	},
	{
		"number": "389",
		"name": "Jb Hunt Transport Services Inc",
		"symbol": "JBHT",
		"percentage": "0.04%"
	},
	{
		"number": "390",
		"name": "Teradyne, Inc.",
		"symbol": "TER",
		"percentage": "0.04%"
	},
	{
		"number": "391",
		"name": "Carnival Corporation",
		"symbol": "CCL",
		"percentage": "0.04%"
	},
	{
		"number": "392",
		"name": "Everest Group, Ltd.",
		"symbol": "EG",
		"percentage": "0.04%"
	},
	{
		"number": "393",
		"name": "Domino's Pizza Inc.",
		"symbol": "DPZ",
		"percentage": "0.04%"
	},
	{
		"number": "394",
		"name": "Essex Property Trust, Inc",
		"symbol": "ESS",
		"percentage": "0.04%"
	},
	{
		"number": "395",
		"name": "Albemarle Corporation",
		"symbol": "ALB",
		"percentage": "0.04%"
	},
	{
		"number": "396",
		"name": "Trimble Inc.",
		"symbol": "TRMB",
		"percentage": "0.04%"
	},
	{
		"number": "397",
		"name": "Pool Corporation",
		"symbol": "POOL",
		"percentage": "0.04%"
	},
	{
		"number": "398",
		"name": "Eqt Corp",
		"symbol": "EQT",
		"percentage": "0.04%"
	},
	{
		"number": "399",
		"name": "Celanese Corporation",
		"symbol": "CE",
		"percentage": "0.04%"
	},
	{
		"number": "400",
		"name": "Cf Industries Holding, Inc.",
		"symbol": "CF",
		"percentage": "0.04%"
	},
	{
		"number": "401",
		"name": "Tyson Foods, Inc.",
		"symbol": "TSN",
		"percentage": "0.04%"
	},
	{
		"number": "402",
		"name": "Snap-on Incorporated",
		"symbol": "SNA",
		"percentage": "0.03%"
	},
	{
		"number": "403",
		"name": "Best Buy Company, Inc.",
		"symbol": "BBY",
		"percentage": "0.03%"
	},
	{
		"number": "404",
		"name": "Mid-America Apartment Communities, Inc.",
		"symbol": "MAA",
		"percentage": "0.03%"
	},
	{
		"number": "405",
		"name": "Zebra Technologies Corporation",
		"symbol": "ZBRA",
		"percentage": "0.03%"
	},
	{
		"number": "406",
		"name": "Citizens Financial Group, Inc.",
		"symbol": "CFG",
		"percentage": "0.03%"
	},
	{
		"number": "407",
		"name": "Host Hotels & Resorts, Inc.",
		"symbol": "HST",
		"percentage": "0.03%"
	},
	{
		"number": "408",
		"name": "Viatris Inc.",
		"symbol": "VTRS",
		"percentage": "0.03%"
	},
	{
		"number": "409",
		"name": "Walgreens Boots Alliance, Inc",
		"symbol": "WBA",
		"percentage": "0.03%"
	},
	{
		"number": "410",
		"name": "Lamb Weston Holdings, Inc.",
		"symbol": "LW",
		"percentage": "0.03%"
	},
	{
		"number": "411",
		"name": "United Airlines Holdings, Inc.",
		"symbol": "UAL",
		"percentage": "0.03%"
	},
	{
		"number": "412",
		"name": "Nordson Corp",
		"symbol": "NDSN",
		"percentage": "0.03%"
	},
	{
		"number": "413",
		"name": "Marathon Oil Corporation",
		"symbol": "MRO",
		"percentage": "0.03%"
	},
	{
		"number": "414",
		"name": "Kellanova",
		"symbol": "K",
		"percentage": "0.03%"
	},
	{
		"number": "415",
		"name": "Live Nation Entertainment Inc.",
		"symbol": "LYV",
		"percentage": "0.03%"
	},
	{
		"number": "416",
		"name": "Quest Diagnostics Inc.",
		"symbol": "DGX",
		"percentage": "0.03%"
	},
	{
		"number": "417",
		"name": "Lkq Corporation",
		"symbol": "LKQ",
		"percentage": "0.03%"
	},
	{
		"number": "418",
		"name": "Stanley Black & Decker, Inc.",
		"symbol": "SWK",
		"percentage": "0.03%"
	},
	{
		"number": "419",
		"name": "Keycorp",
		"symbol": "KEY",
		"percentage": "0.03%"
	},
	{
		"number": "420",
		"name": "Loews Corporation",
		"symbol": "L",
		"percentage": "0.03%"
	},
	{
		"number": "421",
		"name": "Revvity, Inc.",
		"symbol": "RVTY",
		"percentage": "0.03%"
	},
	{
		"number": "422",
		"name": "Amcor Plcs",
		"symbol": "AMCR",
		"percentage": "0.03%"
	},
	{
		"number": "423",
		"name": "Charles River Laboratories International, Inc.",
		"symbol": "CRL",
		"percentage": "0.03%"
	},
	{
		"number": "424",
		"name": "Conagra Brands, Inc.",
		"symbol": "CAG",
		"percentage": "0.03%"
	},
	{
		"number": "425",
		"name": "Bunge Global Sa",
		"symbol": "BG",
		"percentage": "0.03%"
	},
	{
		"number": "426",
		"name": "Nrg Energy, Inc.",
		"symbol": "NRG",
		"percentage": "0.03%"
	},
	{
		"number": "427",
		"name": "Pentair Plc",
		"symbol": "PNR",
		"percentage": "0.03%"
	},
	{
		"number": "428",
		"name": "Henry (Jack) & Associates",
		"symbol": "JKHY",
		"percentage": "0.03%"
	},
	{
		"number": "429",
		"name": "Rollins, Inc.",
		"symbol": "ROL",
		"percentage": "0.03%"
	},
	{
		"number": "430",
		"name": "Carmax Inc.",
		"symbol": "KMX",
		"percentage": "0.03%"
	},
	{
		"number": "431",
		"name": "The J.M. Smucker Company",
		"symbol": "SJM",
		"percentage": "0.03%"
	},
	{
		"number": "432",
		"name": "International Paper Co.",
		"symbol": "IP",
		"percentage": "0.03%"
	},
	{
		"number": "433",
		"name": "The Interpublic Group of Companies, Inc.",
		"symbol": "IPG",
		"percentage": "0.03%"
	},
	{
		"number": "434",
		"name": "Alliant Energy Corporation",
		"symbol": "LNT",
		"percentage": "0.03%"
	},
	{
		"number": "435",
		"name": "Gen Digital Inc.",
		"symbol": "GEN",
		"percentage": "0.03%"
	},
	{
		"number": "436",
		"name": "Juniper Networks Inc",
		"symbol": "JNPR",
		"percentage": "0.03%"
	},
	{
		"number": "437",
		"name": "Kimco Realty Corp.",
		"symbol": "KIM",
		"percentage": "0.03%"
	},
	{
		"number": "438",
		"name": "Symbol Not Found",
		"symbol": "PEAK",
		"percentage": "0.03%"
	},
	{
		"number": "439",
		"name": "Bio-Techne Corp.",
		"symbol": "TECH",
		"percentage": "0.03%"
	},
	{
		"number": "440",
		"name": "Huntington Ingalls Industries, Inc.",
		"symbol": "HII",
		"percentage": "0.03%"
	},
	{
		"number": "441",
		"name": "Qorvo, Inc.",
		"symbol": "QRVO",
		"percentage": "0.03%"
	},
	{
		"number": "442",
		"name": "Insulet Corporation",
		"symbol": "PODD",
		"percentage": "0.03%"
	},
	{
		"number": "443",
		"name": "Molson Coors Beverage Company Class B",
		"symbol": "TAP",
		"percentage": "0.03%"
	},
	{
		"number": "444",
		"name": "Evergy, Inc.",
		"symbol": "EVRG",
		"percentage": "0.03%"
	},
	{
		"number": "445",
		"name": "F5, Inc.",
		"symbol": "FFIV",
		"percentage": "0.03%"
	},
	{
		"number": "446",
		"name": "Mgm Resorts International",
		"symbol": "MGM",
		"percentage": "0.03%"
	},
	{
		"number": "447",
		"name": "Westrock Company",
		"symbol": "WRK",
		"percentage": "0.03%"
	},
	{
		"number": "448",
		"name": "Udr, Inc.",
		"symbol": "UDR",
		"percentage": "0.03%"
	},
	{
		"number": "449",
		"name": "Allegion Public Limited Company",
		"symbol": "ALLE",
		"percentage": "0.03%"
	},
	{
		"number": "450",
		"name": "Incyte Genomics Inc",
		"symbol": "INCY",
		"percentage": "0.03%"
	},
	{
		"number": "451",
		"name": "Brown-Forman Corporation Class B",
		"symbol": "BF.B",
		"percentage": "0.03%"
	},
	{
		"number": "452",
		"name": "Tapestry, Inc.",
		"symbol": "TPR",
		"percentage": "0.03%"
	},
	{
		"number": "453",
		"name": "Globe Life Inc.",
		"symbol": "GL",
		"percentage": "0.03%"
	},
	{
		"number": "454",
		"name": "Aes Corporation",
		"symbol": "AES",
		"percentage": "0.02%"
	},
	{
		"number": "455",
		"name": "Nisource Inc.",
		"symbol": "NI",
		"percentage": "0.02%"
	},
	{
		"number": "456",
		"name": "Universal Health Services, Inc. Class B",
		"symbol": "UHS",
		"percentage": "0.02%"
	},
	{
		"number": "457",
		"name": "Teleflex Incorporated",
		"symbol": "TFX",
		"percentage": "0.02%"
	},
	{
		"number": "458",
		"name": "Eastman Chemical Company",
		"symbol": "EMN",
		"percentage": "0.02%"
	},
	{
		"number": "459",
		"name": "A.O. Smith Corporation",
		"symbol": "AOS",
		"percentage": "0.02%"
	},
	{
		"number": "460",
		"name": "Bath & Body Works, Inc.",
		"symbol": "BBWI",
		"percentage": "0.02%"
	},
	{
		"number": "461",
		"name": "Regency Centers Corporation",
		"symbol": "REG",
		"percentage": "0.02%"
	},
	{
		"number": "462",
		"name": "Camden Property Trust",
		"symbol": "CPT",
		"percentage": "0.02%"
	},
	{
		"number": "463",
		"name": "Catalent, Inc.",
		"symbol": "CTLT",
		"percentage": "0.02%"
	},
	{
		"number": "464",
		"name": "The Mosaic Company",
		"symbol": "MOS",
		"percentage": "0.02%"
	},
	{
		"number": "465",
		"name": "Dayforce, Inc.",
		"symbol": "DAY",
		"percentage": "0.02%"
	},
	{
		"number": "466",
		"name": "Henry Schein Inc",
		"symbol": "HSIC",
		"percentage": "0.02%"
	},
	{
		"number": "467",
		"name": "News Corporation Class A",
		"symbol": "NWSA",
		"percentage": "0.02%"
	},
	{
		"number": "468",
		"name": "Hormel Foods Corporation",
		"symbol": "HRL",
		"percentage": "0.02%"
	},
	{
		"number": "469",
		"name": "American Airlines Group Inc.",
		"symbol": "AAL",
		"percentage": "0.02%"
	},
	{
		"number": "470",
		"name": "Wynn Resorts Ltd",
		"symbol": "WYNN",
		"percentage": "0.02%"
	},
	{
		"number": "471",
		"name": "Match Group, Inc",
		"symbol": "MTCH",
		"percentage": "0.02%"
	},
	{
		"number": "472",
		"name": "Assurant, Inc.",
		"symbol": "AIZ",
		"percentage": "0.02%"
	},
	{
		"number": "473",
		"name": "Boston Properties, Inc.",
		"symbol": "BXP",
		"percentage": "0.02%"
	},
	{
		"number": "474",
		"name": "Apa Corporation",
		"symbol": "APA",
		"percentage": "0.02%"
	},
	{
		"number": "475",
		"name": "Caesars Entertainment, Inc.",
		"symbol": "CZR",
		"percentage": "0.02%"
	},
	{
		"number": "476",
		"name": "Paycom Software, Inc.",
		"symbol": "PAYC",
		"percentage": "0.02%"
	},
	{
		"number": "477",
		"name": "Robert Half Inc.",
		"symbol": "RHI",
		"percentage": "0.02%"
	},
	{
		"number": "478",
		"name": "Campbell Soup Company",
		"symbol": "CPB",
		"percentage": "0.02%"
	},
	{
		"number": "479",
		"name": "C.H. Robinson Worldwide, Inc.",
		"symbol": "CHRW",
		"percentage": "0.02%"
	},
	{
		"number": "480",
		"name": "Etsy, Inc.",
		"symbol": "ETSY",
		"percentage": "0.02%"
	},
	{
		"number": "481",
		"name": "Marketaxess Holdings Inc.",
		"symbol": "MKTX",
		"percentage": "0.02%"
	},
	{
		"number": "482",
		"name": "Norwegian Cruise Line Holdings Ltd.s",
		"symbol": "NCLH",
		"percentage": "0.02%"
	},
	{
		"number": "483",
		"name": "Franklin Resources, Inc.",
		"symbol": "BEN",
		"percentage": "0.02%"
	},
	{
		"number": "484",
		"name": "Pinnacle West Capital Corporation",
		"symbol": "PNW",
		"percentage": "0.02%"
	},
	{
		"number": "485",
		"name": "Federal Realty Investment Trust",
		"symbol": "FRT",
		"percentage": "0.02%"
	},
	{
		"number": "486",
		"name": "Fmc Corporation",
		"symbol": "FMC",
		"percentage": "0.02%"
	},
	{
		"number": "487",
		"name": "Borgwarner Inc.",
		"symbol": "BWA",
		"percentage": "0.02%"
	},
	{
		"number": "488",
		"name": "Fox Corporation Class A",
		"symbol": "FOXA",
		"percentage": "0.02%"
	},
	{
		"number": "489",
		"name": "Ralph Lauren Corporation",
		"symbol": "RL",
		"percentage": "0.02%"
	},
	{
		"number": "490",
		"name": "Dentsply Sirona Inc.",
		"symbol": "XRAY",
		"percentage": "0.02%"
	},
	{
		"number": "491",
		"name": "Invesco Ltd",
		"symbol": "IVZ",
		"percentage": "0.02%"
	},
	{
		"number": "492",
		"name": "Bio-Rad Laboratories, Inc.Class A",
		"symbol": "BIO",
		"percentage": "0.02%"
	},
	{
		"number": "493",
		"name": "Generac Holdings Inc",
		"symbol": "GNRC",
		"percentage": "0.02%"
	},
	{
		"number": "494",
		"name": "Davita Inc.",
		"symbol": "DVA",
		"percentage": "0.02%"
	},
	{
		"number": "495",
		"name": "Comerica Incorporated",
		"symbol": "CMA",
		"percentage": "0.02%"
	},
	{
		"number": "496",
		"name": "Hasbro, Inc.",
		"symbol": "HAS",
		"percentage": "0.01%"
	},
	{
		"number": "497",
		"name": "Mohawk Industries, Inc.",
		"symbol": "MHK",
		"percentage": "0.01%"
	},
	{
		"number": "498",
		"name": "Zions Bancorporation N.a.",
		"symbol": "ZION",
		"percentage": "0.01%"
	},
	{
		"number": "499",
		"name": "Whirlpool Corp.",
		"symbol": "WHR",
		"percentage": "0.01%"
	},
	{
		"number": "500",
		"name": "V.F. Corporation",
		"symbol": "VFC",
		"percentage": "0.01%"
	}
]
}

app.get('/v1/stock/:id', async (req, res) => {
    const Possibility = RequestController.checkPossibility()
    if (Possibility[0] == true) {
        const json = await StockController.getAllInfo(req.params.id)
        if (json.error == 404) {
            res.send(json)
        } else {
            const json2 = await StockController.getStaticstics(req.params.id)
            res.send([json, json2])
        }
    } else {
        res.send({title: "API Cooldown", cooldown: Possibility[1], message: `Wait ${Possibility[1]/1000} seconds before making a new API call`})
    }
})

app.get('/v1/sp500', async (req, res) => {
    res.send(data)
}) 

app.get('/v1/:id', async (req, res) => {
    const data = await StockController.getHistoricalData(req.params.id)

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="historical_data.csv"');
    res.send(data)
    
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})