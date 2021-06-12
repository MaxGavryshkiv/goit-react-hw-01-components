import Profile from './Profile';
import styles from './Profile.module.css';

const ProfileList = ({ users }) => (
    <ul>
        {users.map((user, index) => (
            <li className={styles.card} key={index}>
                <Profile
                    name={user.name}
                    tag={user.tag}
                    location={user.location}
                    avatar={user.avatar}
                    stats={user.stats}
                />
            </li>
        ))}
    </ul>
);

export default ProfileList;
