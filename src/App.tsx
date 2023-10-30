import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import './index.css'
import Edit, {Privacy, Security, UserData, Workspace} from './pages/Edit/Edit';

function App() {
  return (
      <BrowserRouter basename={"/at-work-test"}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/edit" element={<Edit />}>
                  <Route path="profile/:userId" element={<UserData />} />
                  <Route path="workspace/:userId" element={<Workspace />} />
                  <Route path="privacy/:userId" element={<Privacy />} />
                  <Route path="security/:userId" element={<Security />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
