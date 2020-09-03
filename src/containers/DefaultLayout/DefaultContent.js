import React, { Component, Suspense } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Nav, Navbar,
  Form, FormControl,
  Button, Image, Row, Col
} from 'react-bootstrap';
import { Images } from '../../images';

class DefaultContent extends Component {
  render() {
    const { children, ...attributes } = this.props;
    return (
      <React.Fragment >
        <div className='work'>
          <p className='work_header'>Here’s 5% of</p>
          <p className='work_header'>our published work.</p>
          <p className='work_header_red'>See 100% of our power.</p>
          <div className='mt-10' style={{marginTop: 100}}>
            <div >
              <Row>
                <Col className='work_category_item' xs={12} md={4}>All</Col>
                {['Food & Beverage', 'Media', 'Transport & Logistics', 'Banking & Finance', 'Lifestyle', 
                'Co-incubation', 'Healthcare', 'Retail & Entertainment', 'Telco', 'Others', 'Start-ups'].map( (item, idx) => 
                <Col className='work_category_item' key={idx} xs={12} md={4}>{item}</Col>
                )}
              </Row>
            </div>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default DefaultContent;
