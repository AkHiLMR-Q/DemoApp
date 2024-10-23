import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn, handleLogout }) {
  return (
    <div>
      <MDBNavbar className='navbar navbar-expand-lg navbar-light fixed-top' style={{ backgroundColor: 'rgba(250, 240, 230, 0.6)' }}>
        <MDBContainer fluid className="d-flex justify-content-between">
          <MDBNavbarBrand href='#' className="d-flex align-items-center">
            <MDBIcon icon='shopping-cart' className='me-2' size='lg' /> 
            <h2 className='text-dark'>DEMO APP</h2>
          </MDBNavbarBrand>
          {!isLoggedIn ? ( 
            <Link to="/">
              <MDBBtn color="dark" className="ms-auto">Login</MDBBtn>
            </Link>
          ) : (
            <MDBBtn color="dark" className="ms-auto" onClick={handleLogout}>Logout</MDBBtn> 
          )}
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;






