import PropTypes from 'prop-types';
import styles from './Profile.module.css'
export const Profile = ({ user:
    { avatar, username, tag, location,
    stats: { followers, views, likes
} } }) => {
    return (
      <div className={styles.userConteiner}>
      <div className={styles.userConteinerTop}>
          <img className={styles.userAvatar} src={avatar} alt={tag} width="200"/>
          <p className={styles.userName}>{username}</p>
        <p className={styles.userTag}>{tag}</p>
        <p className={styles.userLocation}>{location}</p>
      </div>
            <ul className={styles.userList}>
              <li className={styles.userItem}><span className={styles.userItemText}>followers</span> <br/>{followers}</li>
              <li className={styles.userItem}><span className={styles.userItemText}>views</span> <br/>{views}</li>
              <li className={styles.userItem}><span className={styles.userItemText}>likes</span> <br/>{likes}</li>
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
