import React , {useState} from 'react'
import { Typography , Row , Col , Divider , Radio , Input  ,  Tag , Select , Drawer , Collapse , Button } from 'antd';
import './CityProperty.css'
import {DollarCircleOutlined , MenuOutlined } from '@ant-design/icons'



const { Panel } = Collapse;
function callback(key) {
    console.log(key);
}
const { Option } = Select;
const CityPropertries = () => {
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    // drawer
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    // changing layout by state
    const [ layOutDir , seLayOutDir ] = useState("one")
    return (
        <>
            <Row>
                <Col xs={0} sm={0} md={0} lg={0} xl={1}></Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={22} >
                    <Typography className="cityPropertiesHead" >Home For Sale in Islamabad Capital Territory</Typography>
                    <Row style={{marginTop : '40px'}} >
                        <Col xs={0} sm={0} md={0} lg={5} xl={5}>
                            <div className="cityFilters" >
                                <Typography style={{fontSize : '20px' , fontWeight : 600 , color : '#2f3640'}} >Filters</Typography>
                                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '5px'}} />
                                <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640' , alignSelf : 'flex-start' , marginTop : '-10px'}} >Bedrooms</Typography>
                                <Radio.Group name="radiogroup" style={{display : 'flex' , flexDirection : 'column' , marginLeft : '-60px' , marginTop : '10px' , marginBottom : '10px'}} >
                                    <Radio value={1} className="bedroomRadio"  >2 bedrooms</Radio>
                                    <Radio value={2} className="bedroomRadio" >3 bedrooms</Radio>
                                    <Radio value={3} className="bedroomRadio" >4 bedrooms</Radio>
                                    <Radio value={4} className="bedroomRadio" >5+ bedrooms</Radio>
                                </Radio.Group>
                                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '0px'}} />
                                <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640' , alignSelf : 'flex-start' , marginTop : '-10px'}} >Area</Typography>
                                <Radio.Group name="radiogroup"  style={{display : 'flex' , flexDirection : 'column' , marginLeft : '-60px' , marginTop : '10px' ,  marginBottom : '10px'}} >
                                    <Radio value={1} className="bedroomRadio"  >1000+ sq/km</Radio>
                                    <Radio value={2} className="bedroomRadio" >2000+ sq/km</Radio>
                                    <Radio value={3} className="bedroomRadio" >4000+ sq/km</Radio>
                                    <Radio value={4} className="bedroomRadio" >5000+ sq/km</Radio>
                                </Radio.Group>
                                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '0px'}} />
                                <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640' , alignSelf : 'flex-start' , marginTop : '-10px'}} >Has a  Balcony</Typography>
                                <Radio.Group name="radiogroup"  style={{display : 'flex' , flexDirection : 'row' , marginLeft : '-60px' , marginTop : '10px' ,  marginBottom : '10px'}} >
                                    <Radio value={1} className="bedroomRadio"  >Yes</Radio>
                                    <Radio value={2} className="bedroomRadio" >No</Radio>
                                </Radio.Group>
                                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '0px'}} />
                                <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640' , alignSelf : 'flex-start' , marginTop : '-10px'}} >Has a  CarPorch</Typography>
                                <Radio.Group name="radiogroup"  style={{display : 'flex' , flexDirection : 'row' , marginLeft : '-60px' , marginTop : '10px' ,  marginBottom : '10px'}} >
                                    <Radio value={1} className="bedroomRadio"  >Yes</Radio>
                                    <Radio value={2} className="bedroomRadio" >No</Radio>
                                </Radio.Group>
                                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '0px'}} />
                                <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640' , alignSelf : 'flex-start' , marginTop : '-10px'}} >Kitchens</Typography>
                                <Radio.Group name="radiogroup"  style={{display : 'flex' , flexDirection : 'column' , marginLeft : '-60px' , marginTop : '10px' ,  marginBottom : '10px'}} >
                                    <Radio value={1} className="bedroomRadio"  >1 Kitchen</Radio>
                                    <Radio value={2} className="bedroomRadio" >2 Kitchens</Radio>
                                    <Radio value={3} className="bedroomRadio" >3 Kitchens</Radio>
                                </Radio.Group>
                                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '0px'}} />
                                <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640' , alignSelf : 'flex-start' , marginTop : '-10px'}} >Price Range</Typography>
                                <div style={{display : 'flex' , justifyContent: 'space-between' , width : '100%', marginTop : '15px'}} >
                                    <Input size="medium" placeholder="min Price" type="number" prefix={<DollarCircleOutlined />} style={{marginRight : '10px' , border : '1px solid #222f3e'}} />
                                    <Input size="medium" placeholder="max Price" type="number" prefix={<DollarCircleOutlined />} style={{marginRight : '10px' , border : '1px solid #222f3e'}} />
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={19} xl={19}>
                            <div className="rightFilter" >
                                <MenuOutlined onClick={showDrawer} className="menuIcon" style={{fontSize : '25px'}}  />
                                <Tag color="#34ace0" style={{fontSize : '15px' , fontWeight : 600}} >1920+ ads</Tag>
                                <div style={{display : 'flex' , justifyContent : 'space-between', width : '350px'}} >
                                    <div style={{display : 'flex', justifyContent : 'space-between' , alignItems : 'center' , width : '150px'}} >
                                    <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640'}} >VIEW: </Typography>
                                        <img alt="menu icon" className="hideIcon" src="https://www.olx.com.pk/assets/iconList_noinline.fc368d8e5a57a18cef128d2179dc9b51.svg" style={{maxWidth : '30px' , maxHeight :'30px' , cursor : 'pointer'}} onClick={() => seLayOutDir("one")} />
                                        <img style={{maxWidth : '30px' , maxHeight :'30px' , cursor : 'pointer'}} alt="menu icon" src="https://www.olx.com.pk/assets/iconGrid_noinline.20d3115f90d4e01862afb7d21be83420.svg" onClick={() => seLayOutDir("two")} />
                                        <img style={{maxWidth : '30px' , maxHeight :'30px' , cursor : 'pointer'}} className="secIconHide" alt="menu icon" src="https://www.olx.com.pk/assets/iconGallery_noinline.0812d3e7194bb21f539ef9e77bdd3a1c.svg" onClick={() => seLayOutDir("three")} />
                                    </div>
                                    <Divider style={{backgroundColor : '#2C3A47', height : '30px' }} type="vertical " />
                                    <div className="sortBy" >
                                        <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640'}} >SORT By: </Typography>
                                        <Select defaultValue="latest" style={{ width: 100 }} onChange={handleChange}>
                                            <Option value="latest">Latest</Option>
                                            <Option value="top">Top</Option>
                                            <Option value="older">Older</Option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <Divider style={{backgroundColor : '#dcdde1' , marginTop : '7px' , marginLeft : '10px'}} />

                            {/* first layout */}
                            {
                                layOutDir === "one" && (
                                    <div style={{marginLeft : '0px'}} >
                                        <Row style={{marginTop : '10px'}} >
                                            <Col xs={7} sm={7} md={7} lg={7} xl={7} >
                                                <img alt="product img" style={{maxWidth : '100%' , width : '100%' , height : '150px' , maxHeight : '150px' , objectFit : 'cover' , borderTopLeftRadius : '5px' , borderBottomLeftRadius : '5px'}} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                            </Col>
                                            <Col xs={17} sm={17} md={17} lg={17} xl={17} style={{border : '1px solid #bdc3c7' , borderTopRightRadius : '5px', borderBottomRightRadius : '5px' , borderLeft : '1px solid transparent' }} >
                                                <Row style={{marginTop : '5px'}} >
                                                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                                                        <div style={{display : 'flex' , flexDirection : 'column' , marginLeft: '20px' }} >
                                                            <Typography className="firstItemName" >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                            <Typography className="firstItemPrice" >$ 500</Typography>
                                                            <Typography className="firstItemAddress" >cantt , Lahore, Pakistan</Typography>
                                                        </div>
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                                        <img alt="save property icon" style={{maxWidth : '30px', maxHeight : '30px'}} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row style={{marginTop : '10px'}} >
                                            <Col xs={7} sm={7} md={7} lg={7} xl={7} >
                                                <img alt="product img" style={{maxWidth : '100%' , width : '100%' , height : '150px' , maxHeight : '150px' , objectFit : 'cover' , borderTopLeftRadius : '5px' , borderBottomLeftRadius : '5px'}} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                            </Col>
                                            <Col xs={17} sm={17} md={17} lg={17} xl={17} style={{border : '1px solid #bdc3c7' , borderTopRightRadius : '5px', borderBottomRightRadius : '5px' , borderLeft : '1px solid transparent' }} >
                                                <Row style={{marginTop : '5px'}} >
                                                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                                                        <div style={{display : 'flex' , flexDirection : 'column' , marginLeft: '20px' }} >
                                                            <Typography className="firstItemName" >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                            <Typography className="firstItemPrice" >$ 500</Typography>
                                                            <Typography className="firstItemAddress" >cantt , Lahore, Pakistan</Typography>
                                                        </div>
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                                        <img alt="save property icon" style={{maxWidth : '30px', maxHeight : '30px'}} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row style={{marginTop : '10px'}} >
                                            <Col xs={7} sm={7} md={7} lg={7} xl={7} >
                                                <img alt="product img" style={{maxWidth : '100%' , width : '100%' , height : '150px' , maxHeight : '150px' , objectFit : 'cover' , borderTopLeftRadius : '5px' , borderBottomLeftRadius : '5px'}} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                            </Col>
                                            <Col xs={17} sm={17} md={17} lg={17} xl={17} style={{border : '1px solid #bdc3c7' , borderTopRightRadius : '5px', borderBottomRightRadius : '5px' , borderLeft : '1px solid transparent' }} >
                                                <Row style={{marginTop : '5px'}} >
                                                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                                                        <div style={{display : 'flex' , flexDirection : 'column' , marginLeft: '20px' }} >
                                                            <Typography className="firstItemName" >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                            <Typography className="firstItemPrice" >$ 500</Typography>
                                                            <Typography className="firstItemAddress" >cantt , Lahore, Pakistan</Typography>
                                                        </div>
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                                        <img alt="save property icon" style={{maxWidth : '30px', maxHeight : '30px'}} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            }

                            {/* second layout */}
                            {
                                layOutDir === "two" && (
                                    <div className="secLayOut" >
                                        <Row gutter={[16, 16]} >
                                            <Col xs={24} sm={12} md={8} lg={8} xl={8} >
                                                <div className="secItemDiv" >
                                                    <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '150px' , maxHeight : '150px' , objectFit : 'cover', padding : 0 }} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                                    <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                                            <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                                <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                                    <Typography className="firstItemName"  >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                                    <Typography className="firstItemPrice" style={{fontSize : '23px' , fontWeight : 700}} >$ 500</Typography>
                                                                    <Typography className="firstItemAddress" style={{marginTop : '20px'}} >cantt , Lahore, Pakistan</Typography>
                                                                </div>
                                                            </Col>
                                                            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                                                <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                                            </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={12} md={8} lg={8} xl={8} >
                                                <div className="secItemDiv" >
                                                    <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '150px' , maxHeight : '150px' , objectFit : 'cover', padding : 0 }} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                                    <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                                            <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                                <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                                    <Typography className="firstItemName"  >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                                    <Typography className="firstItemPrice" style={{fontSize : '23px' , fontWeight : 700}} >$ 500</Typography>
                                                                    <Typography className="firstItemAddress" style={{marginTop : '20px'}} >cantt , Lahore, Pakistan</Typography>
                                                                </div>
                                                            </Col>
                                                            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                                                <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                                            </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={12} md={8} lg={8} xl={8} >
                                                <div className="secItemDiv" >
                                                    <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '150px' , maxHeight : '150px' , objectFit : 'cover', padding : 0 }} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                                    <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                                            <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                                <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                                    <Typography className="firstItemName"  >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                                    <Typography className="firstItemPrice" style={{fontSize : '23px' , fontWeight : 700}} >$ 500</Typography>
                                                                    <Typography className="firstItemAddress" style={{marginTop : '20px'}} >cantt , Lahore, Pakistan</Typography>
                                                                </div>
                                                            </Col>
                                                            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                                                <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                                            </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            }

                            {/* Third Layout */}
                            {
                                layOutDir === "three" && (
                                    <div className="secLayOut" >
                                        <Row>
                                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop : '20px'}} >
                                                <div className="secItemDiv" >
                                                    <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '200px' , maxHeight : '200px' , objectFit : 'cover', padding : 0 }} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                                    <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                                            <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                                                                <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                                    <Typography className="firstItemName"  >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                                    <Typography className="firstItemPrice" style={{fontSize : '23px' , fontWeight : 700}} >$ 500</Typography>
                                                                    <Typography className="firstItemAddress" style={{marginTop : '20px'}} >cantt , Lahore, Pakistan</Typography>
                                                                </div>
                                                            </Col>
                                                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                                                <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                                            </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop : '20px'}} >
                                                <div className="secItemDiv" >
                                                    <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '200px' , maxHeight : '200px' , objectFit : 'cover', padding : 0 }} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                                    <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                                            <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                                                                <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                                    <Typography className="firstItemName"  >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                                    <Typography className="firstItemPrice" style={{fontSize : '23px' , fontWeight : 700}} >$ 500</Typography>
                                                                    <Typography className="firstItemAddress" style={{marginTop : '20px'}} >cantt , Lahore, Pakistan</Typography>
                                                                </div>
                                                            </Col>
                                                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                                                <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                                            </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop : '20px'}} >
                                                <div className="secItemDiv" >
                                                    <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '200px' , maxHeight : '200px' , objectFit : 'cover', padding : 0 }} src="https://images.olx.com.pk/thumbnails/240770461-240x180.webp" />
                                                    <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                                            <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                                                                <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                                    <Typography className="firstItemName"  >Furniture for sale (Beds, Matress and Dressing Table )</Typography>
                                                                    <Typography className="firstItemPrice" style={{fontSize : '23px' , fontWeight : 700}} >$ 500</Typography>
                                                                    <Typography className="firstItemAddress" style={{marginTop : '20px'}} >cantt , Lahore, Pakistan</Typography>
                                                                </div>
                                                            </Col>
                                                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                                                <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                                            </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            }

                        </Col>
                    </Row>
                </Col>
                <Col xs={0} sm={0} md={0} lg={0} xl={1}></Col>
            </Row>

            <Drawer width={250} closable={false}  placement="left" color="primary" bodyStyle={{ backgroundColor: "#FFFFFF", padding: "0" , width : "100%"}}  onClose={onClose} visible={visible}>
                    <Typography style={{fontSize : '20px' , fontWeight : 700 , color : '#2f3640' , textAlign : 'center' , marginTop : '15px'}} >Filters</Typography>
                    <Collapse  onChange={callback} className="collapse" ghost expandIconPosition="center">
                        <Panel header="Bedrooms" key="1" style={{fontWeight : 600}} >
                            <Radio.Group name="radiogroup" style={{display : 'flex' , flexDirection : 'column' , marginLeft : '30px' ,  marginTop : '-10px'}} >
                                <Radio value={1} className="bedroomRadio"  >2 bedrooms</Radio>
                                <Radio value={2} className="bedroomRadio" >3 bedrooms</Radio>
                                <Radio value={3} className="bedroomRadio" >4 bedrooms</Radio>
                                <Radio value={4} className="bedroomRadio" >5+ bedrooms</Radio>
                            </Radio.Group>
                        </Panel>
                        <Panel header="Area" key="2" style={{fontWeight : 600}}>
                            <Radio.Group name="radiogroup"  style={{display : 'flex' , flexDirection : 'column' , marginLeft : '30px' ,  marginTop : '-10px'}} >
                                <Radio value={1} className="bedroomRadio"  >1000+ sq/km</Radio>
                                <Radio value={2} className="bedroomRadio" >2000+ sq/km</Radio>
                                <Radio value={3} className="bedroomRadio" >4000+ sq/km</Radio>
                                <Radio value={4} className="bedroomRadio" >5000+ sq/km</Radio>
                            </Radio.Group>
                        </Panel>
                        <Panel header="Has a  Balcony" key="3" style={{fontWeight : 600}}>
                            <Radio.Group name="radiogroup"  style={{display : 'flex' , flexDirection : 'row' ,  marginTop : '-10px' , marginLeft : '30px' , marginBottom : '10px'}} >
                                <Radio value={1} className="bedroomRadio"  >Yes</Radio>
                                <Radio value={2} className="bedroomRadio" >No</Radio>
                            </Radio.Group>
                        </Panel>
                        <Panel header="Has a  CarPorch" key="4" style={{fontWeight : 600}}>
                            <Radio.Group name="radiogroup"  style={{display : 'flex' , flexDirection : 'row' ,  marginTop : '-10px' , marginLeft : '30px' , marginBottom : '10px'}} >
                                <Radio value={1} className="bedroomRadio"  >Yes</Radio>
                                <Radio value={2} className="bedroomRadio" >No</Radio>
                            </Radio.Group>
                        </Panel>
                        <Panel header="Kitchens" key="5" style={{fontWeight : 600}}>
                            <Radio.Group name="radiogroup"  style={{display : 'flex' , flexDirection : 'column' , marginLeft : '30px' ,  marginTop : '-10px'}} >
                                <Radio value={1} className="bedroomRadio"  >1 Kitchen</Radio>
                                <Radio value={2} className="bedroomRadio" >2 Kitchens</Radio>
                                <Radio value={3} className="bedroomRadio" >3 Kitchens</Radio>
                            </Radio.Group>
                        </Panel>
                        <Panel header="Price Range" key="6" style={{fontWeight : 600}}>
                            <div style={{display : 'flex' , justifyContent: 'space-between' , width : '100%', marginTop : '15px'}} >
                                <Input size="medium" placeholder="min Price" type="number" prefix={<DollarCircleOutlined />} style={{marginRight : '10px' , border : '1px solid #222f3e'}} />
                                <Input size="medium" placeholder="max Price" type="number" prefix={<DollarCircleOutlined />} style={{marginRight : '10px' , border : '1px solid #222f3e'}} />
                            </div>
                        </Panel>
                        <Panel header="Sort By" key="7" style={{fontWeight : 600}} className="sortHide" >
                            <Select defaultValue="latest" style={{ width: 100 }} onChange={handleChange}>
                                <Option value="latest">Latest</Option>
                                <Option value="top">Top</Option>
                                <Option value="older">Older</Option>
                            </Select>
                        </Panel>
                    </Collapse>
            </Drawer>
        </>
    )
}

export default CityPropertries
