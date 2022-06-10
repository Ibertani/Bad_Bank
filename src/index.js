import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './navbar.jsx';
import AllData from './alldata.jsx';
import Withdraw from './withdraw.jsx';
import CreateAccount from './createaccount.jsx';
import Deposit from './deposit.jsx';
import {Route,Link,HashRouter,Routes} from 'react-router-dom';
import Home from './home.jsx';
import Login from  './login.jsx';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.bundle';





const UserContext = React.createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));

function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100, loggedin: false}]}}>
        <div className="container" style={{padding: "20px"}}>
         <Routes>
          <Route path="/bad_bank" element={<Home />} >
            
            </Route>
          <Route path="/CreateAccount/" element={<CreateAccount/>} >
             
          </Route>
          <Route path="/login/" element={<Login/>}  >

          </Route>
          <Route path="/deposit/" element={<Deposit/>} >

          </Route>
          <Route path="/withdraw/" element={<Withdraw/>} >

          </Route>
          <Route path="/alldata/" element={<AllData/>} >

          </Route>
          </Routes>
        </div>
      </UserContext.Provider>      
    </HashRouter>
   
  );
}



root.render(<Spa/>);
  

export {UserContext};

