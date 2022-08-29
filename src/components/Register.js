import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/index';
import axios from 'axios';
import './Register.css';

function Register() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [display, setDisplay] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  let navigate = useNavigate(); 
  const dispatch = useDispatch()

  const signIn = e => {
    e.preventDefault();
    console.log("sig in")

    if (username === '' || fullname === '' || email === '' || password === '') {
      setError(true);
      alert("One or more field is empty!");
      
    } else {
        const payload = {
          username: username,
          fullname: fullname,
          email: email,
          password: password
        }

        axios.post('http://127.0.0.1:8000/signup/',payload)
        .then((res) => {
          console.log(res)
          let path = '/login'; 
          navigate(path);

          dispatch(userActions.userDetails({
            'username': username,
            'fullname': fullname,
            'display': display
          }))
          
        })
        .catch((err) => {
          alert("Server Error, please try again!!")
        })
    }
  }

  return (
    <div className="register-container-fluid">
      <div className="register-card">
        <div className="register-form">
          <div className="register-left-side">
            <img src="https://i.pinimg.com/736x/22/47/d0/2247d03a78ea754d3cea7f7841547fbb.jpg" />
          </div>

          <div className="register-right-side">
            <div className="register-register">
              <p>
                Already a member? <Link to="/login">Login Now</Link>
              </p>
            </div>

            <div className="register-helloo">
              <h2>
                <b>Welcome to Twitter 2.0</b>
              </h2>
              <h4>See what's happening</h4>
            </div>

            <form>
              <div className="register-input_text">
                <input
                  className="register-input"
                  type="text"
                  value={username}
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                />
              </div>

              <div className="register-input_text">
                <input
                  type="text"
                  className="register-input"
                  value={fullname}
                  name="fullname"
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Fullname"
                />
              </div>

              <div className="register-input_text">
                <input
                  className="register-input"
                  type="text"
                  value={display}
                  name="username"
                  onChange={(e) => setDisplay(e.target.value)}
                  placeholder="Display pic link (Optional)"
                  required
                />
              </div>

              <div className="register-input_text">
                <input
                  type="text"
                  className="register-input"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="register-input_text">
                <input
                  type="password"
                  className="register-input"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>

              <div className="btn">
                <button type="submit" onClick={signIn}>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
