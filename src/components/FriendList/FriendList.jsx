import PropTypes from 'prop-types';
import style from './FriendList.module.css';
import { FriendListItem }   from './FriendsListItem/FriendsListItem.jsx';

export const FriendList = ({ friends, children }) => {
    return (
            <FriendList className={style.list}>
            {friends.map(({ id, isOnline, avatar, name })   =>( 
                <FriendListItem
                key={id}
                isOnline = {isOnline}
                avatar ={avatar}
                name= {name}>
            {children}
                </FriendListItem>
            ))}  
    
                </FriendList>
    )

}
FriendList.propTypes = {
    friends:PropTypes.arrayOf()
}

// import PropTypes from 'prop-types';
// import style from './FriendList.module.css';
// export const FriendList = ({ friends, children }) => {   
//     return (
//     <>
//         {friends.map(({ id, avatar, name, isOnline ="off", children }) => {
//             return ( 
              
//                 <li key={id} className={style.item}>
//                     {<span   className={isOnline ? style.statusOn : style.statusOff}  >{isOnline}</span>}
//                     <img  className={style.img} src={avatar} alt="User avatar" width="48" />
//                     <p>{name}</p>
//                     {children}
//                 </li>
//             )})}
// </>
//     )

// }
// FriendList.propTypes = {
//     friends:PropTypes.arrayOf(
//         PropTypes.shape({
//         avatar: PropTypes.string,
//         name: PropTypes.string,
//         isOnline: PropTypes.bool,
//         id:PropTypes.number

//    }))
// }