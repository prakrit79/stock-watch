import './QuoteCard.css'

export const QuoteCard = (props) => {
    const {o,h,c,l,pc} = props.quoteData;
    let status;
    if(c >= pc){
        status = 'gain'
    }else{
        status = 'loss'
    }
    
    return(
        <div>
            <table class={status}>
                <caption> 
                    {`Day Performance`} 
                </caption>
                <tbody>
                    <tr>
                        <td>Open Price</td>
                        <td>{o}</td>
                    </tr>
                    <tr>
                        <td>Current Price</td>
                        <td>{c}</td>
                    </tr>
                    <tr>
                        <td>High Price</td>
                        <td>{h}</td>
                    </tr>
                    <tr>
                        <td>Low Price</td>
                        <td>{l}</td>
                    </tr>
                    <tr>
                        <td>Previous close</td>
                        <td>{pc}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
