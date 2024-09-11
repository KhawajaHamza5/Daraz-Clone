import React from 'react';
import Header from './Components/Header';
import LoginPage from './Components/Login/ContextLogin/LoginPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Layouts/Layout';
import { UserContextProvider } from './Components/Login/ContextLogin/CreateLoginContext';

const Root = () => {
  return (
    <>
        <div >
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/" element={<Home />} />
            
            </Route>
          </Routes>
        
       
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Root />
    </Router>
  );
};

export default App;
