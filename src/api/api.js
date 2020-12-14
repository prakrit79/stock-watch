const axios = require('axios')
const base_url = 'https://finnhub.io/api/v1/'
const company_profile_url = 'stock/profile2?symbol='
const news_url = 'news?category='

export const getCompanyProfile = (companySymbol) => {
    return axios.get(`${base_url}${company_profile_url}${companySymbol}&token=${process.env.REACT_APP_API_KEY}`)
}

export const getNews= (newsCategory) => {
    return axios.get(`${base_url}${news_url}${newsCategory}&token=${process.env.REACT_APP_API_KEY}`)
}
