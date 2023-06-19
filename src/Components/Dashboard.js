import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Dashboard() {
    const history=useHistory();
    const isAuthenticated = !!localStorage.getItem("token");
  
  if (!isAuthenticated ) {
    history.push('/login');
    return null;
  }
  return (
    <div>
      <h1>Successfully logedin</h1>
    </div>
  )
}

export default Dashboard
