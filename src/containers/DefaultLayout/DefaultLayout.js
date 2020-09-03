import React, { Component, Suspense } from 'react';
import { Image } from 'react-bootstrap';
import { Images } from '../../images';

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));
const DefaultContent = React.lazy(() => import('./DefaultContent'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  
  closeNav = () => {
    // document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.width = '0px';
  }

  openNav = () => {
    // document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("mySidenav").style.width = '500px';
  }

  render() {
    return (
      <div>
        <Suspense fallback={this.loading()}>
          <DefaultHeader openNav={this.openNav}/>
        </Suspense>
        <Suspense fallback={this.loading()}>
          <DefaultContent />
        </Suspense>
        <Suspense fallback={this.loading()}>
          <DefaultFooter />
        </Suspense>
        <div id="mySidenav" style={{display: 'block'}} className="sidenav">
          <Image src={Images.btnClose} className="btnClose" onClick={this.closeNav} />
          <div className="right-aside-main-wrapper">
            <div className="right-aside-content-wrapper">
              <h1 className="right-aside-content-header">Request a quote</h1>
              <p className="right-aside-content-bodyContent">
                Get a ballpark costing on the product or idea you want to build. Be specific to get a more concise cost and timeline.
              </p>
              <p className="right-aside-content-legend">*Mandatory fields</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
