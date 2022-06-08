import React from 'react';
import {Card} from './context.jsx';
import {UserContext} from './index.js'


function Deposit(){
  
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
      const [Deposit, setDeposit] = React.useState(' ');
      const [show, setShow]         = React.useState(true);
   
      currUser.balance = Balance;
  
   function handleSubmit(){
    
    if (Deposit <0   ){alert("invalid amount please type positive number")
    return;}
    
    if (Deposit == ' '|| Deposit == '' ) return;
    
    setBalance(parseInt(Deposit) + Balance );
    
     setDeposit(0);
     setShow(false);
    
    
   }

   function clearForm(){
  
    setShow(true);
  }
    
    return (
     
      <Card   bgcolor="success"
      header="Deposits"
      text= { `Available Balance is : ${Balance} \n ` +  "Enter Deposit Amount Below:" }
      
       body={show? (<><input type="number" 
       className="form-control"  onChange = {e=> setDeposit(e.target.value)}   /><br/>
       <button  type="submit" className="btn btn-light"  onClick = {handleSubmit} >Submit</button>
      </>):(
      <>
      <h5>Success </h5>
      <button type="submit" className="btn btn-light" onClick={clearForm}>deposit again</button>
      </>
    )
      
    }
    />
    )
  
}

export default Deposit;
