import React from 'react'
import {Row, Col , Typography , Divider } from 'antd';
import './FeaturesMain.css'

const FeaturesOfProperty = () => {
    return (
        <>
            <div className="featuresMainDiv" >
                <Typography className="featuresHead" >Main Features</Typography>
                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '5px'}} />
                <Row gutter={[10,16]} >
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHead" >Bedrooms : </Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHeadOne" >4</Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHead" >Bathrooms : </Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHeadOne" >2</Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHead" >Kicthens : </Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHeadOne" >3</Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHead" > Rooms : </Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHeadOne" >6</Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHead" > TV Launch : </Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHeadOne" >Yes</Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHead" > Balcony : </Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHeadOne" >Yes</Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHead" > Furnished : </Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHeadOne" >Yes</Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHead" > Area : </Typography>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography className="featureHeadOne" >585 sq/km</Typography>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default FeaturesOfProperty
