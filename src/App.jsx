import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AddUser from './components/AddUser';
import AddStore from './components/AddStore';
import ListUsers from './components/ListUsers';
import ListStores from './components/ListStores';
import Logout from './components/Logout';
import './styles.css';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"


const App = () => {
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  return (
    <div className="app-container">
      <button
        className="btn btn-primary toggle-sidebar"
        id="toggle-sidebar"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <Sidebar toggleSidebar={sidebarHidden} />
      <div className={`content ${sidebarHidden ? 'expanded' : ''}`}>
        <Dashboard />
        <AddUser />
        <AddStore />
        <ListUsers />
        <ListStores />
        <Logout />
      </div>
    </div>
  );
};

export default App;
