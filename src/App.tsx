import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
