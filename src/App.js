// import React from 'react';
import Profile from './components/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList_qqqqq friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
