
import PropTypes from 'prop-types';
export const Statistics = ({ stats, title = "" }) => {
    return ( 
       <>
<h2>{title}</h2> 
          
            <ul>  
                {stats.map(({ label, percentage, id }) => {
           return (         
               <li key={id}>
     <span>{label}</span>
    <span>{percentage}</span>
                  </li>
        )} )}   
            </ul>
    </>    
    )
  
 }
Statistics.propTypes = {

    stats: PropTypes.arrayOf(
            PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number
    }))

}
   
    


// { label = 'no label', percentage, children }, title = 'no title', id }) => {
//     return (
//         <section>     
//             <h2>{title}</h2> 
          
//             <ul>
               
//                 stats.map(stat => (
                    
//                     <li key={id}>
//                         <span>{label}</span>
//                         <span>{percentage}</span>
//                     </li>))
//                  {children}
//             </ul>
//     </section> 
//     )


// }