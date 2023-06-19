import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Login() {
  const navigate = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = () => {
    // login logic based on the selected role
    run();
    async function run() {
      const userInfo = {
        email,
        password,
      };
      const res = await fetch(`https://forgot-password-express.vercel.app/users/login`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (data.data === 'invalid') {
        alert('Invalid email/password');
      } else {
        localStorage.setItem('token', data.data);
        navigate.push('/');
      }
    }
  };

  return (
    <div className="container mt-5 login_container">
      <div className="row">
        <div className="col-md-6 mx-auto">
         
          <div className="card">
            <div className="card-body">
              <div>
                <h5 className="card-title">User Login</h5>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <Link to="/mailcheck" className="ml-3">
                    Forgot Password?
                  </Link>
                </div>
                <button className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
                <button className="btn btn-primary" onClick={() => navigate.push('/signup')}>
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
