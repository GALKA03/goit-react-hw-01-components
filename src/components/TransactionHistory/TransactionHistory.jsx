import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (
        
        <table>
            < thead >
               
                <tr >
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
               
            </thead>
            <tbody>
                {items.map(( {id, type, amount, currency }) => {
                    return <tr key={id}>
                        <td>Invoice {type}</td>
                        <td>125 {amount}</td>
                        <td>USD {currency}</td>
                    </tr>
                })} 
            </tbody>
        </table>
    
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            amount: PropTypes.string,
            id: PropTypes.string,

        }))
}