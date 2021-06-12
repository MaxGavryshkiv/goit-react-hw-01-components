import React from 'react';
import ProfileList from './Profile/ProfileList';
import users from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import statisticalData from './Statistics/statistical-data.json';
import FriendList from './Friends/FriendList';
import friends from './Friends/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

import styles from './index.css';

const App = () => {
    return (
        <div>
            <ProfileList users={users} />
            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    );
};

export default App;
