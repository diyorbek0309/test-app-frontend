import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { routes } from './routes';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={routes.home}>
          <Route index element={<Login />} />
          <Route path={routes.register} element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
