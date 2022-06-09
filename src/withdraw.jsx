
import React from 'react';
import { UserContext } from './index.js';
import {Card} from './context.jsx';





function Withdraw(){
  const ctx = React.useContext(UserContext);
  var currUser = ctx.users[0];
  const reactState = ()=> {
    for (var i=0; i<ctx.users.length; i++){
      if (ctx.users[i].loggedin == true){
       currUser = ctx.users[i]
      }
    }
    return currUser;
  }
  reactState();
  
  const [Balance, setBalance]= React.useState(currUser.balance);
    const [Withdraw, setWithdraw] = React.useState(' ');
    const [show, setShow]         = React.useState(true);

 currUser.balance = Balance;
 

 function handleSubmit(){
   
 if (Withdraw<0   ){alert("invalid amount please type positive number")
return;}

  if (Withdraw > Balance){alert("overdraw!!! try again") 
  return;}
  
  if (Withdraw == ' ' || Withdraw=='') return;
  
  setBalance(Balance-Withdraw);
   
   setWithdraw(0);
    setShow(false);
  
 }

 function clearForm(){
  
  setShow(true);
}
  
  return (
   
    <Card   bgcolor="primary"
    header="Withdrawals"
    text= { `Available Balance is : ${Balance} \n ` +  "Enter Withdrawal Amount Below:" }
    
     body={show?  (<><input type="number" 
     className="form-control"  onChange = {e=> setWithdraw(e.target.value)}   /><br/>
     <button  type="submit" className="btn btn-light"  onClick = {handleSubmit} >Submit</button>
    </>):(
      <>
      <h5>Success </h5>
      <button type="submit" className="btn btn-light" onClick={clearForm}>withdraw again</button>
      </>
    )
    
  }
  />
  )
}

export default Withdraw;