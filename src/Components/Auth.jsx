import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Auth({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      handleLogin();
      alert('Login successful');
      navigate('/home');
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <MDBContainer fluid style={{ height: '100vh' }}>
      <MDBRow style={{ height: '100%' }}>
    
        <MDBCol md="6" className="d-flex justify-content-center align-items-center">
          <img 
            src="https://indiater.com/wp-content/uploads/2019/11/ecommerce-shopping-website-template-psd-free-download-1024x505.jpg" 
            alt="Login" 
            style={{ width: '500px', height: '300px',  }} 
          />
        </MDBCol>

        <MDBCol md="6" className="d-flex justify-content-center align-items-center">
          <MDBContainer 
            className="shadow p-4 rounded bg-light" 
            style={{ width: '400px' }}
          >
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <MDBInput 
                label="Username" 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
                className="mb-3"
              />
              <MDBInput 
                label="Password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                className="mb-3"
              />
              <button type="submit" className="btn btn-dark w-100 mt-3">Login</button>
            </form>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Auth;



