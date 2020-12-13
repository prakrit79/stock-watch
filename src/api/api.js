const axios = require('axios')
const base_url = 'https://finnhub.io/api/v1/stock/'
const company_profile_url = 'profile2?symbol='
require('dotenv').config();

export const getCompanyProfile = (companySymbol) => {
    console.log(process.env)
    return axios.get(`${base_url}${company_profile_url}${companySymbol}&token=${process.env.REACT_APP_API_KEY}`)
}
