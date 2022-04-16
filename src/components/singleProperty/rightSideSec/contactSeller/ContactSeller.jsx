import React from 'react'
import {Typography , Row , Col, Button } from 'antd';
import './ContactSeller.css'


const ContactSeller = () => {
    return (
        <>
            <div className="mainContactSeller" >
                <Typography className="contactHead" >Contact Seller</Typography>
                <Row>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <img alt="user avatar" style={{maxWidth : '50px' , maxHeight : '50px'}} src="./icons/userAvatar.png" />
                    </Col>
                    <Col xs={12} sm={14} md={14} lg={12} xl={14}>
                        <Typography className="sellerName" >Hamza Maqsood</Typography>
                    </Col>
                    <Col xs={3} sm={6} md={6} lg={6} xl={6}>
                        <Button type="link" style={{color : '#0097e6' , fontWeight : 600 }} >View Profile</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div style={{display : 'flex', marginTop : '25px'}} >
                            <img alt="user avatar" style={{maxWidth : '35px' , maxHeight : '35px'}} src="./icons/phoneIcon.png" />
                            {/* <Typography style={{fontSize : '15px', fontWeight : 600 , marginTop : '0px'}} >+92 336 5454564</Typography> */}
                            <Button type="link" style={{color : '#0097e6' , fontWeight : 600 }} >Show Number</Button>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ContactSeller
