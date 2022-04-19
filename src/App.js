import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import ProtectedRoute from './Components/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import { UserAuthContextProvider } from './Context/UserAuthContext';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <UserAuthContextProvider>
          <Routes>
            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </div>
  );
}

export default App;
