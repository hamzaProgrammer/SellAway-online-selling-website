import React from 'react'
import {Row , Col , Button  ,Typography } from 'antd';
import '../../cityProperties/CityProperty.css'


const PropertyComp = () => {
    return (
        <>
            <Typography style={{fontSize : '18px', fontWeight : 700 , marginLeft : '30px' , marginBottom : '20px' , marginTop : '20px'}} >All Listed Properties</Typography>
            <Row>
                <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
                <Col xs={24} sm={24} md={24} lg={22} xl={22}>
                    <Row gutter={[16,16]} >
                        <Col xs={24} sm={12} md={12} lg={8} xl={6} >
                            <div className="secItemDiv" >
                                <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '150px' , maxHeight : '150px' , objectFit : 'cover', padding : 0 }} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                <Typography className="firstItemName" style={{fontSize : '14px'}}  >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                <Typography className="firstItemPrice" style={{fontSize : '25px' , fontWeight : 700}} >$ 500</Typography>
                                                <Typography className="firstItemAddress" style={{marginTop : '20px'}} >cantt , Lahore, Pakistan</Typography>
                                            </div>
                                        </Col>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' , cursor : 'pointer' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                        </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={8} xl={6} >
                            <div className="secItemDiv" >
                                <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '150px' , maxHeight : '150px' , objectFit : 'cover', padding : 0 }} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                <Typography className="firstItemName" style={{fontSize : '14px'}}  >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                <Typography className="firstItemPrice" style={{fontSize : '25px' , fontWeight : 700}} >$ 500</Typography>
                                                <Typography className="firstItemAddress" style={{marginTop : '20px'}} >cantt , Lahore, Pakistan</Typography>
                                            </div>
                                        </Col>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' , cursor : 'pointer' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                        </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={8} xl={6} >
                            <div className="secItemDiv" >
                                <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '150px' , maxHeight : '150px' , objectFit : 'cover', padding : 0 }} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                <Typography className="firstItemName" style={{fontSize : '14px'}}  >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                <Typography className="firstItemPrice" style={{fontSize : '25px' , fontWeight : 700}} >$ 500</Typography>
                                                <Typography className="firstItemAddress" style={{marginTop : '20px'}} >cantt , Lahore, Pakistan</Typography>
                                            </div>
                                        </Col>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' , cursor : 'pointer' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                        </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={8} xl={6} >
                            <div className="secItemDiv" >
                                <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '150px' , maxHeight : '150px' , objectFit : 'cover', padding : 0 }} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                <Typography className="firstItemName" style={{fontSize : '14px'}}  >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                <Typography className="firstItemPrice" style={{fontSize : '25px' , fontWeight : 700}} >$ 500</Typography>
                                                <Typography className="firstItemAddress" style={{marginTop : '20px'}} >cantt , Lahore, Pakistan</Typography>
                                            </div>
                                        </Col>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' , cursor : 'pointer' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                        </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={8} xl={6} >
                            <div className="secItemDiv" >
                                <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '150px' , maxHeight : '150px' , objectFit : 'cover', padding : 0 }} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                <Typography className="firstItemName" style={{fontSize : '14px'}}  >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                <Typography className="firstItemPrice" style={{fontSize : '25px' , fontWeight : 700}} >$ 500</Typography>
                                                <Typography className="firstItemAddress" style={{marginTop : '20px'}} >cantt , Lahore, Pakistan</Typography>
                                            </div>
                                        </Col>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' , cursor : 'pointer' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                        </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={8} xl={6} >
                            <div className="secItemDiv" >
                                <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '150px' , maxHeight : '150px' , objectFit : 'cover', padding : 0 }} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                <Typography className="firstItemName" style={{fontSize : '14px'}}  >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                <Typography className="firstItemPrice" style={{fontSize : '25px' , fontWeight : 700}} >$ 500</Typography>
                                                <Typography className="firstItemAddress" style={{marginTop : '20px'}} >cantt , Lahore, Pakistan</Typography>
                                            </div>
                                        </Col>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' , cursor : 'pointer' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                        </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
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
        </>
    )
}

export default PropertyComp