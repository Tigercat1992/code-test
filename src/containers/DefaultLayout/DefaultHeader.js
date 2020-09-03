import React, { Component, Suspense } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Nav, Navbar,
  Form, FormControl,
  Button, Image, ProgressBar
} from 'react-bootstrap';
import { Images } from '../../images';

class DefaultHeader extends Component {
  state = { 
    isLoading: false,
  }

  render() {
    const { children, ...attributes } = this.props;
    return (
      <div className='navbar-background' >
        <Navbar className='navBar_mainWrapper' expand="lg" >
          <Navbar.Brand  href="#home">
            <Image src={Images.logo} width={145} height={19} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navBar_ItemWrapper">
              <Nav.Link className='navBar_Item' href="#home"><span >Work</span></Nav.Link>
              <Nav.Link className='navBar_Item' href="#solutions">Solutions</Nav.Link>
              <Nav.Link className='navBar_Item' href="#services">Services</Nav.Link>
              <Nav.Link className='navBar_Item' href="#aboutus">About us</Nav.Link>
              <Nav.Link className='navBar_Item' href="#blog">Blog</Nav.Link>
              <Button className='btn btn-dark navBar_Button' onClick={this.props.openNav} >Requst a quote</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default DefaultHeader;
