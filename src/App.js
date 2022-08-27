import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom'
import Widgets from './components/Widgets';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div>
      
      <Routes>

        <Route path="/" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="dashboard" element={<div className='app'> <Sidebar /> <Feed /> <Widgets /> </div>} />

      </Routes>
      
    </div>
  );
}

export default App;
