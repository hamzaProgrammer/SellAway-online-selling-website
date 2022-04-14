import React from 'react'
import '../moreOnSearch/MoreOnRecentSearch.css'
import { Typography , Row , Card , Col, Button } from 'antd';

const HotProperties = () => {
    return (
        <>
            <div className="hotProperties" >
                <Typography className="moreRecentRelatedHead" style={{color : '#1e272e'}} >Hot Properties for you </Typography>
                <Row>
                    <Col xs={0} sm={0} md={0} lg={1} xl={1} ></Col>
                    <Col xs={23} sm={23} md={23} lg={23} xl={23} >
                        <Row gutter={[0,16]}>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6} >
                                <Card
                                    hoverable
                                    className="itemCard newItem"
                                    style={{border: '1px solid #dcdde1', backgroundColor : '#FFFFFF' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                                    cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px' ,paddingTop : '2px' , borderTopLeftRadius : '5px' ,borderTopRightRadius : '5px'}} />}
                                >
                                    <div className="itemDesc" >
                                        <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                            <Row>
                                                <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                    <Typography className="itemName" >home Paints and home wall grace</Typography>
                                                </Col>
                                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Typography className="itemPrice" style={{textAlign : 'left' , marginLeft : '-20px' , marginTop : '10px'}} >$ 500</Typography>
                                        <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6} >
                                <Card
                                    hoverable
                                    className="itemCard newItem"
                                    style={{border: '1px solid #dcdde1', backgroundColor : '#FFFFFF' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                                    cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px' ,paddingTop : '2px' , borderTopLeftRadius : '5px' ,borderTopRightRadius : '5px'}} />}
                                >
                                    <div className="itemDesc" >
                                        <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                            <Row>
                                                <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                    <Typography className="itemName" >home Paints and home wall grace</Typography>
                                                </Col>
                                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Typography className="itemPrice" style={{textAlign : 'left' , marginLeft : '-20px' , marginTop : '10px'}} >$ 500</Typography>
                                        <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6} >
                                <Card
                                    hoverable
                                    className="itemCard newItem"
                                    style={{border: '1px solid #dcdde1', backgroundColor : '#FFFFFF',  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                                    cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px' ,paddingTop : '2px' , borderTopLeftRadius : '5px' ,borderTopRightRadius : '5px'}} />}
                                >
                                    <div className="itemDesc" >
                                        <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                            <Row>
                                                <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                    <Typography className="itemName" >home Paints and home wall grace</Typography>
                                                </Col>
                                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Typography className="itemPrice" style={{textAlign : 'left' , marginLeft : '-20px' , marginTop : '10px'}} >$ 500</Typography>
                                        <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6} >
                                <Card
                                    hoverable
                                    className="itemCard newItem"
                                    style={{border: '1px solid #dcdde1', backgroundColor : '#FFFFFF' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                                    cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px' ,paddingTop : '2px' , borderTopLeftRadius : '5px' ,borderTopRightRadius : '5px'}} />}
                                >
                                    <div className="itemDesc" >
                                        <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                            <Row>
                                                <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                    <Typography className="itemName" >home Paints and home wall grace</Typography>
                                                </Col>
                                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Typography className="itemPrice" style={{textAlign : 'left' , marginLeft : '-20px' , marginTop : '10px'}} >$ 500</Typography>
                                        <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6} >
                                <Card
                                    hoverable
                                    className="itemCard newItem"
                                    style={{border: '1px solid #dcdde1', backgroundColor : '#FFFFFF' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                                    cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px' ,paddingTop : '2px' , borderTopLeftRadius : '5px' ,borderTopRightRadius : '5px'}} />}
                                >
                                    <div className="itemDesc" >
                                        <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                            <Row>
                                                <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                    <Typography className="itemName" >home Paints and home wall grace</Typography>
                                                </Col>
                                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Typography className="itemPrice" style={{textAlign : 'left' , marginLeft : '-20px' , marginTop : '10px'}} >$ 500</Typography>
                                        <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6} >
                                <Card
                                    hoverable
                                    className="itemCard newItem"
                                    style={{border: '1px solid #dcdde1', backgroundColor : '#FFFFFF' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                                    cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px' ,paddingTop : '2px' , borderTopLeftRadius : '5px' ,borderTopRightRadius : '5px'}} />}
                                >
                                    <div className="itemDesc" >
                                        <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                            <Row>
                                                <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                    <Typography className="itemName" >home Paints and home wall grace</Typography>
                                                </Col>
                                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Typography className="itemPrice" style={{textAlign : 'left' , marginLeft : '-20px' , marginTop : '10px'}} >$ 500</Typography>
                                        <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6} xl={6} >
                                <Card
                                    hoverable
                                    className="itemCard newItem"
                                    style={{border: '1px solid #dcdde1', backgroundColor : '#FFFFFF' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                                    cover={<img alt="item Img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px' ,paddingTop : '2px' , borderTopLeftRadius : '5px' ,borderTopRightRadius : '5px'}} />}
                                >
                                    <div className="itemDesc" >
                                        <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                            <Row>
                                                <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                    <Typography className="itemName" >home Paints and home wall grace</Typography>
                                                </Col>
                                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                                    <img style={{ maxWidth : '100%' , maxHeight : '100%' }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Typography className="itemPrice" style={{textAlign : 'left' , marginLeft : '-20px' , marginTop : '10px'}} >$ 500</Typography>
                                        <Typography className="itemAddress" >cantt Lahore, 2 weeks ago</Typography>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={0} xl={0} ></Col>
                </Row>
                <Row>
                    <Col xs={8} sm={8} lg={8} xl={8} ></Col>
                    <Col xs={8} sm={8} lg={8} xl={8} >
                        <div style={{display: 'flex' , justifyContent : 'center', alignItems : 'center'}} >
                            <Button className="loadMoreBtn" >Load More</Button>
                        </div>
                    </Col>
                    <Col xs={8} sm={8} lg={8} xl={8} ></Col>
                </Row>
            </div>
        </>
    )
}

export default HotProperties
