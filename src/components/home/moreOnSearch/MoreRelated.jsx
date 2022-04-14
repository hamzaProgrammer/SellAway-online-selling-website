import React from 'react';
import './MoreOnRecentSearch.css'
import { Typography ,Card , Row , Col  } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const MoreRelated = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3300, min: 2000 },
            items: 5.7
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 4.7
        },
        tablet: {
            breakpoint: { max: 1024, min: 769 },
            items: 3.7
        },
        mobile: {
            breakpoint: { max: 768, min: 577 },
            items: 2.7
        },
        miniMobile: {
            breakpoint: { max: 576, min: 426 },
            items: 2.2
        },
        smallestMobile: {
            breakpoint: { max: 425, min: 320 },
            items: 1.4
        }
    };
    return (
        <>
            <div className="moreRecentRelated" >
                <Typography className="moreRecentRelatedHead" >More Homes in Rawalpindi</Typography>
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
                    <div className="item" >
                        <Card
                            hoverable
                            className="itemCard"
                            cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px'}} />}
                        >
                            <div className="itemDesc" >
                                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                    <Row>
                                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                            <Typography className="itemName" >home Paints and home wall grace</Typography>
                                        </Col>
                                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                            <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                        </Col>
                                    </Row>
                                </div>
                                <Typography className="itemPrice" >$ 500</Typography>
                                <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                            </div>
                        </Card>
                    </div>
                    <div className="item" >
                        <Card
                            hoverable
                            className="itemCard"
                            cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover' , paddingLeft : '2px' , paddingRight : '2px'}} />}
                        >
                            <div className="itemDesc" >
                                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                    <Row>
                                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                            <Typography className="itemName" >home Paints and home wall grace</Typography>
                                        </Col>
                                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                            <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/carbon-copy/100/000000/filled-like.png"/>
                                        </Col>
                                    </Row>
                                </div>
                                <Typography className="itemPrice" >$ 500</Typography>
                                <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                            </div>
                        </Card>
                    </div>
                    <div className="item" >
                        <Card
                            hoverable
                            className="itemCard"
                            cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover' , paddingLeft : '2px' , paddingRight : '2px'}} />}
                        >
                            <div className="itemDesc" >
                                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                    <Row>
                                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                            <Typography className="itemName" >home Paints and home wall grace</Typography>
                                        </Col>
                                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                            <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                        </Col>
                                    </Row>
                                </div>
                                <Typography className="itemPrice" >$ 500</Typography>
                                <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                            </div>
                        </Card>
                    </div>
                    <div className="item" >
                        <Card
                            hoverable
                            className="itemCard"
                            cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover' , paddingLeft : '2px' , paddingRight : '2px'}} />}
                        >
                            <div className="itemDesc" >
                                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                    <Row>
                                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                            <Typography className="itemName" >home Paints and home wall grace</Typography>
                                        </Col>
                                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                            <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/carbon-copy/100/000000/filled-like.png"/>
                                        </Col>
                                    </Row>
                                </div>
                                <Typography className="itemPrice" >$ 500</Typography>
                                <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                            </div>
                        </Card>
                    </div>
                    <div className="item" >
                        <Card
                            hoverable
                            className="itemCard"
                            cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover' , paddingLeft : '2px' , paddingRight : '2px'}} />}
                        >
                            <div className="itemDesc" >
                                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                    <Row>
                                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                            <Typography className="itemName" >home Paints and home wall grace</Typography>
                                        </Col>
                                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                            <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                        </Col>
                                    </Row>
                                </div>
                                <Typography className="itemPrice" >$ 500</Typography>
                                <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                            </div>
                        </Card>
                    </div>
                    <div className="item" >
                        <Card
                            hoverable
                            className="itemCard"
                            cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover', paddingLeft : '2px' , paddingRight : '2px'}} />}
                        >
                            <div className="itemDesc" >
                                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                    <Row>
                                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                            <Typography className="itemName" >home Paints and home wall grace</Typography>
                                        </Col>
                                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                            <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/carbon-copy/100/000000/filled-like.png"/>
                                        </Col>
                                    </Row>
                                </div>
                                <Typography className="itemPrice" >$ 500</Typography>
                                <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                            </div>
                        </Card>
                    </div>
                    <div className="item" >
                        <Card
                            hoverable
                            className="itemCard"
                            cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover' , paddingLeft : '2px' , paddingRight : '2px'}} />}
                        >
                            <div className="itemDesc" >
                                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                    <Row>
                                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                            <Typography className="itemName" >home Paints and home wall grace</Typography>
                                        </Col>
                                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                            <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/carbon-copy/100/000000/filled-like.png"/>
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
        </>
    );
}

export default MoreRelated;
