import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import styles from './Friend.module.css';

const FriendList = ({ friends }) => (
    <ul className={styles.friendList}>
        {friends.map(
            ({ id, avatar, name, isOnline }) =>
                (isOnline && (
                    <li
                        className={styles.item}
                        style={{ backgroundColor: 'green' }}
                        key={id}
                    >
                        <FriendListItem
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                        />
                    </li>
                )) || (
                    <li
                        className={styles.item}
                        style={{ backgroundColor: 'red' }}
                        key={id}
                    >
                        <FriendListItem
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                        />
                    </li>
                ),
        )}
    </ul>
);

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};
