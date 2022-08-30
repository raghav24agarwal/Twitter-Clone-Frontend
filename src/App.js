import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route, Navigate } from 'react-router-dom'
import Widgets from './components/Widgets';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div>
      
      <Routes>

        <Route path="/" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="dashboard" element={
          <PrivateRoute >
          <div className='app'> 
            <Sidebar /> 
            <Feed /> 
            <Widgets /> 
          </div> 
          </PrivateRoute> 
        }/>

        <Route path="*" element={
          <Navigate to="/dashboard" />
        }/>

      </Routes>
      
    </div>
  );
}

export default App;
