import Profile from './Profile';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export default function App() {
  return (
    <>
      {userData.map((user, id) => (
        <Profile key={id} data={user} />
      ))}
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendList data={friend} />
          </li>
        ))}
      </ul>
      <TransactionHistory data={transactions}/>
    </>
  );
}
