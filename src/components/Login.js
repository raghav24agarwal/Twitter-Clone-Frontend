import React , { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { userActions } from '../store/index';
import axios from 'axios';
import "./Login.css";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    let navigate = useNavigate();
    const dispatch = useDispatch()

    const logIn = e => {
        e.preventDefault();
        console.log("log in")

        if (username === '' || password === '') {
          setError(true);
          alert("One or more field is empty!");
          
        } 
        else {
          const payload = {
            username: username,
            password: password
          }

          axios('http://127.0.0.1:8000/signin/',{
            method:'POST',
            data:payload,
          })
          .then((res) => {
            console.log(res)
            let uname = res.data['username']
            console.log(uname)
            let path = '/dashboard'; 
            navigate(path);

            dispatch(userActions.userDetails({
              'username': res.data['username'],
              'fullname': res.data['fullname'],
              'display': res.data['avatar']
            }))
            
          }).catch((err) => {
            alert("Incorrect username or password")
          })
          }

        
      }


  return (
    <div className="login-container-fluid">
      <div className="login-card">
        <div className="login-form">
          <div className="login-left-side">
            <img src="https://wallpaperaccess.com/full/1459080.jpg" />
          </div>

          <div className="login-right-side">
            <div className="login-register">
              <p>
                Not a member? <Link to="/">Register Now</Link>
              </p>
            </div>

            <div className="login-hello">
              <h2><b>Welcome back</b></h2>
              <h4>Don't forget to activate the account before logging</h4>
            </div>

            <form>
              
              <div className="login-input_text">
              
              <input
                type="text"
                className='login-input'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
              </div>

              <div className="login-input_text">
              
              <input
                type="password"
                className='login-input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              </div>

              <div className='login-btn'>
              <button
                type="submit"
                onClick={logIn}
              >
              Login
              </button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login