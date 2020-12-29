const axios = require('axios')
const base_url = 'https://finnhub.io/api/v1/'
const base_url_yahoo = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/'
const API_URLS = {
    company_profile_url: 'stock/profile2?symbol=',
    news_url: 'news?category=',
    quote_url: 'quote?symbol='
}

export const getCompanyProfile = (companySymbol) => {
    const profile_url = `${base_url}${API_URLS.company_profile_url}${companySymbol}&token=${process.env.REACT_APP_API_KEY}`;
    const price_url = `${base_url}${API_URLS.quote_url}${companySymbol}&token=${process.env.REACT_APP_API_KEY}`
    return axios.all([axios.get(profile_url),axios.get(price_url)])
}

export const getNews = (newsCategory) => {
    return axios.get(`${base_url}${API_URLS.news_url}${newsCategory}&token=${process.env.REACT_APP_API_KEY}`)
}

export const getQuote = (companySymbol) => {
    return axios.get(`${base_url}${API_URLS.quote_url}${companySymbol}&token=${process.env.REACT_APP_API_KEY}`)
}

export const getMarketMovers = () => {
    const options = {
        method: 'GET',
        url: `${base_url_yahoo}get-movers` ,
        params: {region: 'US', lang: 'en-US', start: '0', count: '6'},
        headers: {
          'x-rapidapi-key': `${process.env.REACT_APP_X_RAPID_API_KEY}`,
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      };
      
    return axios.request(options)
}
