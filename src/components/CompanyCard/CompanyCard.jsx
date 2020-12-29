import './CompanyCard.css'

export const CompanyCard = (props) => {
    const {country,currency,finnhubIndustry,ipo,marketCapitalization,name,ticker} = props.companyData.profileData;
    const {c} = props.companyData.priceData;
    return(
        <div>
            <table>
                <caption> 
                    {`${ticker}:${name}`} 
                </caption>
                <tbody>
                    <tr>
                        <td>Country</td>
                        <td>{country}</td>
                    </tr>
                    <tr>
                        <td>Currency</td>
                        <td>{currency}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>{c}</td>
                    </tr>
                    <tr>
                        <td>Industry</td>
                        <td>{finnhubIndustry}</td>
                    </tr>
                    <tr>
                        <td>IPO</td>
                        <td>{ipo}</td>
                    </tr>
                    <tr>
                        <td>Market Cap</td>
                        <td>{marketCapitalization}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
