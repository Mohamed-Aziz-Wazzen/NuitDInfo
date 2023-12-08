import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/header.css';
import img from '../Images/image2.png';

import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    
      <Container className="header-container">
        <figure className="">
          <img src={img} alt='Back' className='img-fluid header-image' />
        </figure>     
      </Container>
    
  );
};

export default Header;