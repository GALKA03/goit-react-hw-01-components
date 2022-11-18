import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import friends  from './startfile/friends.json';
import user from './startfile/user.json';
import data from './startfile/data.json';
import transactions from './startfile/transactions.json'

export const App = () => {
 
  return (
    <> 
        <Profile user={user} />
     
      <section>
        <Statistics  stats={data} />
      </section>
      
      <ul>
        <FriendList friends={friends} />; 
      </ul> 
      
        <TransactionHistory items={transactions} />;
    
</>
  );
};
