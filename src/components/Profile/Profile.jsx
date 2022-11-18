import PropTypes from 'prop-types';

export const Profile = ({ user:
    { avatar, username, tag, location,
    stats: { followers, views, likes
} } }) => {
    return (
      <div>
      <div>
        { <img src={avatar} alt={tag}/>}
          <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
            <ul>
                {/* <li>{stats}</li> */}
              <li >{followers}</li>
              <li>{views}</li>
              <li>{likes}</li>
            </ul>
        </div>
  );
};
Profile.propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string,
        username: PropTypes.string.isRequired,
tag: PropTypes.string,
        location: PropTypes.string,
        stats: PropTypes.shape({
            followers:PropTypes.number,
                views:PropTypes.number,
            likes:PropTypes.number
        })

    } )
}
