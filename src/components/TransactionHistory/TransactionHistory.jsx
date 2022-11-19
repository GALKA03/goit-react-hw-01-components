import PropTypes from 'prop-types';
import {Conteiner, HeadTablet,Colomn, Zebra, HeadLine} from './TransactionHistory.styled'
export const TransactionHistory = ({ items }) => {
    return (
        
        <Conteiner>
            < thead >
               
                <HeadTablet >
                    <HeadLine>Type</HeadLine>
                    <HeadLine>Amount</HeadLine>
                    <th>Currency</th>
                </HeadTablet>
               
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    
                    return< Zebra key = { id } >
                        <Colomn>Invoice {type}</Colomn>
                        <Colomn>125 {amount}</Colomn>
                        <td>USD {currency}</td>
                    </Zebra>
                })} 
            </tbody>
        </Conteiner>
    
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