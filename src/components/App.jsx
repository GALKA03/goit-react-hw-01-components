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
    <div style={{
      backgroundColor: "rgb(207, 232, 232)",
      border:"0.5 solid"
      }}> 
        <Profile user={user} />
     
      <section style ={{
        width: 700,
    backgroundColor:"white",
    marginLeft: "auto",
    marginRight: "auto",
      }}>
        <Statistics title = "UPLOAD STATS" variant="item"  stats={data} />
        {/* <Statistics variant="red" ></Statistics>
        <Statistics variant="violet" ></Statistics>
        <Statistics variant="mediumslateblue" ></Statistics> */}
        
      </section>
      
      <ul style={{
        width: 200,
    height: "auto",
        marginLeft: "auto",
        marginRight: "auto",
      marginTop:60,
      }}>
        <FriendList friends={friends} />; 
      </ul> 
      
        <TransactionHistory items={transactions} />;
    
</div>
  );
};
