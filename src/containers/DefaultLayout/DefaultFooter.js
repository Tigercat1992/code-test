import React, { Component, Suspense } from 'react';
import { Row, Col
} from 'react-bootstrap';
import { Images } from '../../images';

class DefaultFooter extends Component {
  render() {
    const { children, ...attributes } = this.props;
    return (
      <React.Fragment >
        <footer className="footer">
          <span className="footer_header">Let’s have a chat</span>
          <Row className="subfooter">
            <Col className="item_Wrapper">
              <div className="itemWrapper_item">
                <span className="item_title">Build</span>
                <div className="item_desp">Help you build something</div>
              </div>
            </Col>
            <Col className="item_Wrapper">
              <div className="itemWrapper_item">
                <span className="item_title">Co-incubate</span>
                <div className="item_desp">Co-incubate an idea together</div>
              </div>
            </Col>
            <Col className="item_Wrapper">
              <div className="itemWrapper_item">
                <span className="item_title">Customise</span>
                <div className="item_desp">Customise a solution for your business</div>
              </div>
            </Col>
            <Col className="item_Wrapper">
              <div className="">
                <span className="item_title">Organise</span>
                <div className="item_desp">Organise learning sessions with us</div>
              </div>
            </Col>
          </Row>
          <div className="social_wrapper">
            <a href="https://www.facebook.com/codigo.co/" target="_blank" className="social_wrapper_item">
              <img src="https://www.codigo.co/img/icons/social-facebook.svg" width="12" height="22" />
            </a>
            <a href="https://twitter.com/CodigoApps" target="_blank" className="social_wrapper_item">
              <img src="https://www.codigo.co/img/icons/social-twitter.svg" width="23" height="18" />
            </a>
            <a href="https://www.instagram.com/hellocodigo/" target="_blank" className="social_wrapper_item">
              <img src="https://www.codigo.co/img/icons/social-instagram.svg" width="21" height="19" />
            </a>
            <a href="https://www.linkedin.com/company/codigo-pte-ltd" target="_blank" className="social_wrapper_item">
              <img src="https://www.codigo.co/img/icons/social-linkedIn.svg" width="20" height="20" />
            </a>
          </div>
          <div className="copyright_content">Copyright © Codigo - Mobile App Developer Singapore</div>
          <div className="address">+65 6455 9790 • 26 Sin Ming Lane, Midview City #07-115 Singapore 573971</div>
        </footer>
      </React.Fragment>
    );
  }
}

export default DefaultFooter;


