import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import friends  from './startfile/friends.json';
import user from './startfile/user.json';
import data from './startfile/data.json';
import transactions from './startfile/transactions.json'
import styles from './Statistics/Statistics.module.css'
export const App = () => {
 
  return (
    <div style={{
      backgroundColor: "rgb(207, 232, 232)",
      border:"0.5 solid"
      }}> 
        <Profile user={user} />
      <section className={styles.section}>
        <Statistics title="UPLOAD STATS" variant="item" stats={data} />
        {/* <Statistics variant="red" ></Statistics>
        <Statistics variant="violet" ></Statistics>
        <Statistics variant="mediumslateblue" ></Statistics> */} 
      </section>
      
      <FriendList friends={friends} >
       <FriendListItem FriendListItem ={friends} />
        </FriendList>; 
     
        <TransactionHistory items={transactions} />;
    
</div>
  );
};
