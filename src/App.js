import './App.css';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from './Components/Dashboard';

import Login from './Components/login';
import Signup from './Components/signup';
import MailCheck from './Components/MailCheck';
import ResetPassword from './Components/ResetPassword';


function App() {
 

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
        <Route  path="/login">
          <Login></Login>
        </Route>
        <Route  path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/mailcheck">
          <MailCheck></MailCheck>
        </Route>
        <Route path="/resetpassword">
          <ResetPassword></ResetPassword>
        </Route>
        </Switch>
    </div>
  );
}

export default App;
