import React from 'react';
import './Footer.css'
import { Row, Col ,Button , Typography } from 'antd';


const Footer = () => {
    return (
        <>
            <Row gutter={16}>
                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                    <div className="footerDiv" >
                        <Typography className="footerHead" >About us</Typography>
                        <Button type="link" className="footerLink" >
                            OLX blogs
                        </Button>
                        <Button type="link" className="footerLink" >
                            contact us
                        </Button>
                        <Button type="link" className="footerLink" >
                            OLX for business
                        </Button>
                    </div>
                </Col>
                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                    <div className="footerDiv" >
                        <Typography className="footerHead" >OLX</Typography>
                        <Button type="link" className="footerLink" >
                            Help
                        </Button>
                        <Button type="link" className="footerLink" >
                            Sitemap
                        </Button>
                        <Button type="link" className="footerLink" >
                            Terms of use
                        </Button>
                    </div>
                </Col>
                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                    <div className="footerDiv" >
                        <Typography className="footerHead" >Follow us</Typography>
                        <div className="lastFooterDiv" >
                            <img alt="facebook icon" style={{maxWidth : '30px', maxHeight : '30px' , marginBottom : '10px' }} src="https://img.icons8.com/fluency/48/000000/facebook-new.png"/>
                            <img alt="instagram icon" style={{maxWidth : '30px', maxHeight : '30px' , marginBottom : '10px' }} src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"/>
                            <img alt="twitter icon" style={{maxWidth : '30px', maxHeight : '30px'  }} src="https://img.icons8.com/color/48/000000/twitter--v1.png"/>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Footer;
