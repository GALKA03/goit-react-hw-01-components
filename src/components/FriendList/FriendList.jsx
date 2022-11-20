import PropTypes from 'prop-types';
import style from './FriendList.module.css';
import { FriendListItem }   from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends, children }) => {
    return (
        <ul className={style.list}> 
             {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
                 />
                 
      ))}
               

                </ul>
    )

}
// id, isOnline, avatar, name 
// FriendList.propTypes = {
//     friends:PropTypes.arrayOf()
// }

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
FriendList.propTypes = {
    friends:PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id:PropTypes.number

   }))
}
// {friends.map((friend => (
//              <FriendListItem
//                     key={friend.id}
//                     isOnline={friend.isOnline}
//                     avatar={friend.avatar}
//                     name={friend.name}
                    
//                 />