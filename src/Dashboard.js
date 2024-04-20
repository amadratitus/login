import React from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = ({ username }) => {
  const history = useHistory();

  const handleLogout = () => {
    // Here you can add logout logic
    // For simplicity, let's just redirect to the login page
    history.push('/');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Welcome, {username}!</h5>
              <p className="card-text text-center">You are now logged in to the dashboard.</p>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;