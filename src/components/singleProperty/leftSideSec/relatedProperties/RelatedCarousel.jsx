import React from 'react';
import './MoreOnRecentSearch.css'
import { Typography ,Card , Row , Col  } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
 

const MoreRelated = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3300, min: 2000 },
            items: 4.7
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 3.7
        },
        tablet: {
            breakpoint: { max: 1024, min: 769 },
            items: 2.3
        },
        mobile: {
            breakpoint: { max: 768, min: 577 },
            items: 2.3
        },
        miniMobile: {
            breakpoint: { max: 576, min: 426 },
            items: 2.1
        },
        smallestMobile: {
            breakpoint: { max: 425, min: 320 },
            items: 1.4
        }
    };
    return (
        <>
            <div style={{border : '1px solid #b2bec3', borderRadius : '5px' , padding : '10px', marginTop : '25px'}} >
                <div className="moreRecentRelatedNew" style={{marginTop : '-10px'}} >
                    <Typography className="moreRecentRelatedHead" style={{backgroundColor : '#FFFFFF' , paddingBottom : '15px'}} >Related Properties</Typography>
                    <Carousel
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        //deviceType={props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        autoPlay={false}
                    >
                        <div className="item"  >
                            <Card
                                hoverable
                                className="itemCardNew"
                                style={{backgroundColor : '#FFFFFF'}}
                                cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px'}} />}
                            >
                                <div className="itemDesc" >
                                    <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0 , marginRight : '-15px' }} >
                                        <Row>
                                            <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                <Typography className="itemName" >home Paints and home wall grace</Typography>
                                            </Col>
                                            <Col xs={3} sm={3} md={3} lg={3} xl={3} >
                                                <img style={{ maxWidth : '100%' , maxHeight : '100%', }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Typography className="itemPrice" >$ 500</Typography>
                                    <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                                </div>
                            </Card>
                        </div>
                        <div className="item"  >
                            <Card
                                hoverable
                                className="itemCardNew"
                                style={{backgroundColor : '#FFFFFF'}}
                                cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px'}} />}
                            >
                                <div className="itemDesc" >
                                    <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0 , marginRight : '-15px' }} >
                                        <Row>
                                            <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                <Typography className="itemName" >home Paints and home wall grace</Typography>
                                            </Col>
                                            <Col xs={3} sm={3} md={3} lg={3} xl={3} >
                                                <img style={{ maxWidth : '100%' , maxHeight : '100%', }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Typography className="itemPrice" >$ 500</Typography>
                                    <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                                </div>
                            </Card>
                        </div>
                        <div className="item"  >
                            <Card
                                hoverable
                                className="itemCardNew"
                                style={{backgroundColor : '#FFFFFF'}}
                                cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px'}} />}
                            >
                                <div className="itemDesc" >
                                    <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0 , marginRight : '-15px' }} >
                                        <Row>
                                            <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                <Typography className="itemName" >home Paints and home wall grace</Typography>
                                            </Col>
                                            <Col xs={3} sm={3} md={3} lg={3} xl={3} >
                                                <img style={{ maxWidth : '100%' , maxHeight : '100%', }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Typography className="itemPrice" >$ 500</Typography>
                                    <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                                </div>
                            </Card>
                        </div>
                        <div className="item"  >
                            <Card
                                hoverable
                                className="itemCardNew"
                                style={{backgroundColor : '#FFFFFF'}}
                                cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px'}} />}
                            >
                                <div className="itemDesc" >
                                    <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0 , marginRight : '-15px' }} >
                                        <Row>
                                            <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                <Typography className="itemName" >home Paints and home wall grace</Typography>
                                            </Col>
                                            <Col xs={3} sm={3} md={3} lg={3} xl={3} >
                                                <img style={{ maxWidth : '100%' , maxHeight : '100%', }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Typography className="itemPrice" >$ 500</Typography>
                                    <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                                </div>
                            </Card>
                        </div>
                        <div className="item"  >
                            <Card
                                hoverable
                                className="itemCardNew"
                                style={{backgroundColor : '#FFFFFF'}}
                                cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px'}} />}
                            >
                                <div className="itemDesc" >
                                    <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0 , marginRight : '-15px' }} >
                                        <Row>
                                            <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                <Typography className="itemName" >home Paints and home wall grace</Typography>
                                            </Col>
                                            <Col xs={3} sm={3} md={3} lg={3} xl={3} >
                                                <img style={{ maxWidth : '100%' , maxHeight : '100%', }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Typography className="itemPrice" >$ 500</Typography>
                                    <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                                </div>
                            </Card>
                        </div>
                        <div className="item"  >
                            <Card
                                hoverable
                                className="itemCardNew"
                                style={{backgroundColor : '#FFFFFF'}}
                                cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px'}} />}
                            >
                                <div className="itemDesc" >
                                    <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0 , marginRight : '-15px' }} >
                                        <Row>
                                            <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                <Typography className="itemName" >home Paints and home wall grace</Typography>
                                            </Col>
                                            <Col xs={3} sm={3} md={3} lg={3} xl={3} >
                                                <img style={{ maxWidth : '100%' , maxHeight : '100%', }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Typography className="itemPrice" >$ 500</Typography>
                                    <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                                </div>
                            </Card>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default MoreRelated;
