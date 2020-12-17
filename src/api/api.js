const axios = require('axios')
const base_url = 'https://finnhub.io/api/v1/'
const API_URLS = {
    company_profile_url: 'stock/profile2?symbol=',
    news_url: 'news?category=',
    quote_url: 'quote?symbol='
}

export const getCompanyProfile = (companySymbol) => {
    return axios.get(`${base_url}${API_URLS.company_profile_url}${companySymbol}&token=${process.env.REACT_APP_API_KEY}`)
}

export const getNews = (newsCategory) => {
    return axios.get(`${base_url}${API_URLS.news_url}${newsCategory}&token=${process.env.REACT_APP_API_KEY}`)
}

export const getQuote = (companySymbol) => {
    return axios.get(`${base_url}${API_URLS.quote_url}${companySymbol}&token=${process.env.REACT_APP_API_KEY}`)
}
