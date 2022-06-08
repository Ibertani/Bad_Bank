
import React from 'react';
import {UserContext} from './index.js';

function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data in Bank</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}

export default AllData;
