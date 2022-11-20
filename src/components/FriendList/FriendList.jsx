import PropTypes from 'prop-types';
import style from './FriendList.module.css';
export const FriendList = ({ friends }) => {   
    return (
    <>
        {friends.map(({ id, avatar, name, isOnline ="off", children }) => {
            return ( 
              
                <li key={id} className={style.item}>
                    {<span   className={isOnline ? style.statusOn : style.statusOff}  >{isOnline}</span>}
                    <img  className={style.img} src={avatar} alt="User avatar" width="48" />
                    <p>{name}</p>
                    {children}
                </li> )})}
</>
    )

}
FriendList.propTypes = {
    friends:PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id:PropTypes.number

   }))
}
//isOnline && <span className={style.status}  >