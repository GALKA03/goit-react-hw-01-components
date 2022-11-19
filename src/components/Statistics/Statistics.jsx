import styles from './Statistics.module.css'
import PropTypes from 'prop-types';


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ stats, title = "UPLOAD STATS",variant,children }) => {
    return ( 
       <>
<h2 className={styles.title}>{title}</h2> 
          
            <ul className={styles.list}>  
                {stats.map(({ label, percentage, id }) => {
                    return (
               
                        <li key={id}
                            style ={{backgroundColor: getRandomHexColor()}}
                            className={styles.item} >
                    
     <span > {label}</span>
                            <br /><span>{percentage}%</span>
                           
               </li>   
        )} )}  
                 {children}
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
  // import clsx from "clsx"; 
//  className={clsx(styles.item, styles[variant])}



