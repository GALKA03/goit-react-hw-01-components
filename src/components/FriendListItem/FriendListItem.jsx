import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';
//import { FriendList } from 'components/FriendList/FriendList';

export const FriendListItem = ({ isOnline, avatar, name } ) =>  {
    return ( 
         <li className={style.item}>
                    {<span   className={isOnline ? style.statusOn : style.statusOff}  >{isOnline}</span>}
                    <img  className={style.img} src={avatar} alt="User avatar" width="48" />
                    <p>{name}</p>
                    
                </li> 
    )}


    FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
// FriendListItem.propTypes = {
//   friends: PropTypes.arrayOf(
  
//     PropTypes.shape({
//       avatar: PropTypes.string,
//       name: PropTypes.string,
//       isOnline: PropTypes.bool,
//       id: PropTypes.number

//     }))
//}
