import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context/context'
import './App.css';
import Navbar from './components/UI/navbar/Navbar';



function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, [])
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
