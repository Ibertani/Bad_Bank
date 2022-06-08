import React from 'react';
import {Card} from './context.jsx';
import {UserContext} from './index.js';

function Login(){
  
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  
  
function handleLogIn(){
for (var i =0; i<ctx.users.length; i++){
  if (ctx.users[i].name == name && ctx.users[i].email==email && ctx.users[i].password ==password)
  { ctx.users[i].loggedin = true }


}

if (!validateLogIn(name,     'name'))     return;
if (!validateLogIn(email,    'email'))    return;
if (!validateLogIn(password, 'password')) return;
setShow(false);
}
 
function validateLogIn(field, label){
  if (!field) {
    setStatus('Error: ' + label);
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  return true;
}


function clearLogInForm(){
  setName('');
  setEmail('');
  setPassword('');
  setShow(true);
}


  return (
    
    <Card
    bgcolor="primary"
    header="Login"
    status={status}
    body={show? (  
            <>
            Name<br/>
            <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleLogIn}>Login</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearLogInForm}>login different user</button>
            </>
          )}
  />
  )  
}

export default Login;
