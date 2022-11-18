import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {   
    return (
    <>
        {friends.map(({ id, avatar, name, isOnline ="off", children }) => {
            return ( 
              
                <li key={id}>
                    {children}
                    {isOnline && <span >{isOnline}</span>}
                    <img src={avatar} alt="User avatar" width="48" />
                    <p>{name}</p>
                </li>
            )})}
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