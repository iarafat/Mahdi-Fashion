import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
`;


const Footer = () => {
  return(
    <FooterWrapper>
        <div className="footer-top">
          <div className="top-left-block">
            <div>
              <span>1 hour delivery </span>
            </div>
            <div>
              <span>Cash on delivery </span>
            </div>
          </div>
          <div className="top-right-block">
            <ul>
              <li className="text">Pay with</li>
              <li className="icon"></li>
              <li className="icon"></li>
              <li className="icon"></li>
              <li className="icon"></li>
              <li className="icon"></li>
            </ul>
          </div>
        </div>
        <div className="footer-main">
          <div className="footer-content-block">
            <div className="footer-logo"></div>
            <p>
              Mehadi-Fashion is an online shop in Dhaka, Bangladesh. 
              We believe time is valuable to our fellow Dhaka 
              residents, and that they should not 
              have to waste hours in traffic, brave 
              bad weather and wait in line just to 
              buy basic necessities like eggs! 
              This is why Chaldal delivers everything 
              you need right at your door-step and at 
              no additional cost.
            </p>
            <div className="footer-widgets">
              <div className="footer-widget">
                <h4>Customer Service</h4>
                <ul>
                  <li> 
                    <a href="#">
                    Contact Us
                    </a>
                  </li>
                  <li> 
                    <a href="#">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget">
                <h4>About Chaldal</h4>
                <ul>
                  <li> 
                    <a href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li> 
                    <a href="#">
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget">
                <h4>For Business</h4>
                <ul>
                  <li> 
                    <a href="#">
                      Corporate
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-other">
            <div className="footer-mobile-apps">
              <a href="#"></a>
              <a href="#"></a>
            </div>
            <div className="footer-phone-email">
              <div className="footer-phone">
                <h2>0188-1234567</h2>
              </div>
              <p className="footer-email">or email 
                <strong> support@chaldal.com</strong>
              </p>
            </div>
            <ul className="footer-social">
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
        </div>
    </FooterWrapper>
  )
};

export default Footer;
