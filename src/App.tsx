import React from 'react';
import LoginPage from './Components/Login/LoginPage';

import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Layouts/Layout';
import useUserStore from './Components/Login/Zustrand/CreateLoginZustand';

const Root = () => {
const {isLogined} = useUserStore();
  return (
    <>
        <div >
          <Routes>
          {isLogined ? (
            <>
           <Route path="/" element={<Layout />}>
           <Route path="/Login" element={<Navigate to="/" replace />} />
                <Route path="/" element={<Home />} />
                </Route>
                </>
          ) : (
            <>
              <Route path="/" element={<Layout />}>
                <Route path="/Login" element={<LoginPage/>} />
                <Route path="/Loogin" element={<LoginPage/>} />
                <Route path="/" element={<Home />} />
              </Route>
            </>
          )}
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
