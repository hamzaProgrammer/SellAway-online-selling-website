import React , {useState , useEffect } from 'react'
import { Typography , Row , Col , Divider , Radio , Input  ,  Tag , Button,  Select , Drawer , Collapse , Spin } from 'antd';
import './CityProperty.css'
import {DollarCircleOutlined , MenuOutlined } from '@ant-design/icons'
import {getFilteredProperties} from '../../server_api/Api'
import {useLocation} from 'react-router-dom'
import axios from 'axios'


const { Panel } = Collapse;
function callback(key) {
    console.log(key);
}
const { Option } = Select;


const CityPropertries = () => {
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const [ allProperties , setAllProperties ] = useState([])
    const [loading, setLoading ] = useState(false)
    const [bedrooms, setbedrooms ] = useState(0)
    const [area, setarea ] = useState(0)
    const [balcony, setbalcony ] = useState('')
    const [tvLaunch, settvLaunch ] = useState('')
    const [kitchen, setkitchen ] = useState(0)
    const [minPrice, setminPrice ] = useState(0)
    const [maxPrice, setmaxPrice ] = useState(0)
    const [ sortBy, setsortBy ] = useState('')

    const search = useLocation().search;
    const city = new URLSearchParams(search).get('city');
    const activeStatus = new URLSearchParams(search).get('activeStatus');

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const {data} = await getFilteredProperties(city,activeStatus);
            setAllProperties(data?.AllProperties);
            setLoading(false)
        }
        getData();
    },[search])

    // gettting results on applying filter
    useEffect(() => {
        let filters = {};
        if(sortBy !== ""){
            console.log(" inner : ", sortBy)
            filters = {...filters , sortBy : sortBy }
        }
        if(bedrooms !== 0){
            filters = {...filters , bedrooms : bedrooms }
        }
        if(area !== 0){
            filters = {...filters , area : area }
        }
        if(balcony !== ""){
            filters = {...filters , balcony : balcony }
        }
        if(tvLaunch !== ""){
            filters = {...filters , tvLaunch : tvLaunch }
        }
        if(kitchen !== 0){
            filters = {...filters , kitchen : kitchen }
        }
        if(minPrice !== 0){
            filters = {...filters , minPrice : minPrice }
        }
        if(maxPrice !== 0){
            filters = {...filters , maxPrice : maxPrice }
        }

        let url = `http://localhost:8080/api/properties/getFilteredProperties?city=${city}&activeStatus=${activeStatus}&`;
        for (const [key, value] of Object.entries(filters)) {
            url = url + `${key}=${value}&`;
        }

        console.log("url" , url)
        axios.get(url)
        .then(function (response) {
            // handle success
            setAllProperties(response?.data?.AllProperties)
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },[bedrooms,area,balcony, kitchen, maxPrice, minPrice, tvLaunch , sortBy ])


    // removing filters
    const filterRemove = async () => {
        setbedrooms(0);
        setarea(0);
        setbalcony('');
        settvLaunch("");
        setminPrice(0);
        setkitchen(0);
        setmaxPrice(0);

        const getData = async () => {
            setLoading(true)
            const {data} = await getFilteredProperties(city,activeStatus);
            setAllProperties(data?.AllProperties);
            setLoading(false)
        }
        getData();
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
                    <Typography className="cityPropertiesHead" >Home For {activeStatus.charAt(0).toUpperCase() + activeStatus.slice(1)} Properties in {city.charAt(0).toUpperCase() + city.slice(1)} </Typography>
                    <Row style={{marginTop : '40px'}} >
                        <Col xs={0} sm={0} md={0} lg={5} xl={5}>
                            <div className="cityFilters" >
                                <Typography style={{fontSize : '20px' , fontWeight : 600 , color : '#2f3640'}} >Filters</Typography>
                                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '5px'}} />
                                <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640' , alignSelf : 'flex-start' , marginTop : '-10px'}} >Bedrooms</Typography>
                                <Radio.Group name="radiogroup" value={bedrooms === 0 ? null : bedrooms}  style={{display : 'flex' , flexDirection : 'column' , marginLeft : '-60px' , marginTop : '10px' , marginBottom : '10px'}} >
                                    <Radio value={2} className="bedroomRadio" onClick={() => setbedrooms(2)}  >2 bedrooms</Radio>
                                    <Radio value={3} className="bedroomRadio" onClick={() => setbedrooms(3)} >3 bedrooms</Radio>
                                    <Radio value={4} className="bedroomRadio" onClick={() => setbedrooms(4)} >4 bedrooms</Radio>
                                    <Radio value={5} className="bedroomRadio" onClick={() => setbedrooms(5)} >5+ bedrooms</Radio>
                                </Radio.Group>
                                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '0px'}} />
                                <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640' , alignSelf : 'flex-start' , marginTop : '-10px'}} >Area</Typography>
                                <Radio.Group name="radiogroup" value={area === 0 ? null : area}  style={{display : 'flex' , flexDirection : 'column' , marginLeft : '-60px' , marginTop : '10px' ,  marginBottom : '10px'}} >
                                    <Radio value={1000} className="bedroomRadio" onClick={(e) => setarea(1000)}  >1000+ sq/km</Radio>
                                    <Radio value={2000} className="bedroomRadio" onClick={(e) => setarea(2000)} >2000+ sq/km</Radio>
                                    <Radio value={4000} className="bedroomRadio" onClick={(e) => setarea(4000)} >4000+ sq/km</Radio>
                                    <Radio value={5000} className="bedroomRadio" onClick={(e) => setarea(5000)} >5000+ sq/km</Radio>
                                </Radio.Group>
                                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '0px'}} />
                                <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640' , alignSelf : 'flex-start' , marginTop : '-10px'}} >Has a  Balcony</Typography>
                                <Radio.Group name="radiogroup" value={balcony === "" ? null : balcony}  style={{display : 'flex' , flexDirection : 'row' , marginLeft : '-60px' , marginTop : '10px' ,  marginBottom : '10px'}} >
                                    <Radio value="yes" className="bedroomRadio" onClick={(e) => setbalcony("yes")}  >Yes</Radio>
                                    <Radio value="no" className="bedroomRadio" onClick={(e) => setbalcony("no")} >No</Radio>
                                </Radio.Group>
                                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '0px'}} />
                                <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640' , alignSelf : 'flex-start' , marginTop : '-10px'}} >Has a  Tv Launch</Typography>
                                <Radio.Group value={tvLaunch === "" ? null : tvLaunch} name="radiogroup"  style={{display : 'flex' , flexDirection : 'row' , marginLeft : '-60px' , marginTop : '10px' ,  marginBottom : '10px'}} >
                                    <Radio value={"yes"} className="bedroomRadio" onClick={(e) => settvLaunch("yes")} >Yes</Radio>
                                    <Radio value={"no"} className="bedroomRadio" onClick={(e) => settvLaunch("no")} >No</Radio>
                                </Radio.Group>
                                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '0px'}} />
                                <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640' , alignSelf : 'flex-start' , marginTop : '-10px'}} >Kitchens</Typography>
                                <Radio.Group value={kitchen === "" ? null : kitchen} name="radiogroup"  style={{display : 'flex' , flexDirection : 'column' , marginLeft : '-60px' , marginTop : '10px' ,  marginBottom : '10px'}} >
                                    <Radio value={1} className="bedroomRadio" onClick={(e) => setkitchen(1)}  >1 Kitchen</Radio>
                                    <Radio value={2} className="bedroomRadio" onClick={(e) => setkitchen(2)} >2 Kitchens</Radio>
                                    <Radio value={3} className="bedroomRadio" onClick={(e) => setkitchen(3)} >3 Kitchens</Radio>
                                </Radio.Group>
                                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '0px'}} />
                                <Typography style={{fontSize : '17px' , fontWeight : 600 , color : '#2f3640' , alignSelf : 'flex-start' , marginTop : '-10px'}} >Price Range</Typography>
                                <div style={{display : 'flex' , justifyContent: 'space-between' , width : '100%', marginTop : '15px'}} >
                                    <Input value={minPrice}  size="medium" placeholder="min Price" type="number" onChange={(e) => setminPrice(e.target.value)} prefix={<DollarCircleOutlined />} style={{marginRight : '10px' , border : '1px solid #222f3e'}} />
                                    <Input value={maxPrice} size="medium" placeholder="max Price" type="number" onChange={(e) => setmaxPrice(e.target.value)} prefix={<DollarCircleOutlined />} style={{marginRight : '10px' , border : '1px solid #222f3e'}} />
                                </div>
                                {
                                    (bedrooms !== 0 || area !== 0  || balcony !== "" || kitchen !== 0 || maxPrice !== 0 || minPrice !== 0 || tvLaunch !== "") && (
                                        <Button style={{backgroundColor : '#c0392b' , color : '#FFFFFF' , fontWeight : 600 , marginTop : '20px' , marginLeft : '-10px' , width : '150px'}} onClick={filterRemove} >Remove Filters </Button>
                                    )
                                }
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={19} xl={19}>
                            <div className="rightFilter" >
                                <MenuOutlined onClick={showDrawer} className="menuIcon" style={{fontSize : '25px'}}  />
                                <Tag color="#34ace0" style={{fontSize : '15px' , fontWeight : 600}} >{allProperties.length} ads</Tag>
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
                                        <Select defaultValue="latest" onSelect={(value) => setsortBy(value)} style={{ width: 100 }} onChange={handleChange}>
                                            <Option value="new" >Latest</Option>
                                            <Option value="older">Older</Option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <Divider style={{backgroundColor : '#dcdde1' , marginTop : '7px' , marginLeft : '10px'}} />
                            <Spin spinning={loading}>
                            {
                                allProperties.length > 0 ? (
                                    <>
                                        {/* first layout */}
                                        {
                                            layOutDir === "one" && (
                                                <div style={{marginLeft : '0px' , paddingLeft : '15px'}} >
                                                    {
                                                        allProperties?.map((item) => (
                                                            <Row style={{marginTop : '10px'}} >
                                                                <Col xs={7} sm={7} md={7} lg={7} xl={7} >
                                                                    <img alt="product img" style={{maxWidth : '100%' , width : '100%' , height : '150px' , maxHeight : '150px' , objectFit : 'cover' , borderTopLeftRadius : '5px' , borderBottomLeftRadius : '5px'}} src={item?.images[0]} />
                                                                </Col>
                                                                <Col xs={17} sm={17} md={17} lg={17} xl={17} style={{border : '1px solid #bdc3c7' , borderTopRightRadius : '5px', borderBottomRightRadius : '5px' , borderLeft : '1px solid transparent' }} >
                                                                    <Row style={{marginTop : '5px' }} >
                                                                        <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                                                                            <div style={{display : 'flex' , flexDirection : 'column' , marginLeft: '20px' }} >
                                                                                <Typography className="firstItemName" >{item?.title}</Typography>
                                                                                <Typography className="firstItemPrice" >$ {item?.price}</Typography>
                                                                                <Typography className="firstItemAddress" style={{marginTop : '25px'}} >c{item?.address}</Typography>
                                                                            </div>
                                                                        </Col>
                                                                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                                                            <img alt="save property icon" style={{maxWidth : '30px', maxHeight : '30px'}} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }

                                        {/* second layout */}
                                        {
                                            layOutDir === "two" && (
                                                <div className="secLayOut" >
                                                    <Row gutter={[16, 16]} >
                                                        {
                                                            allProperties?.map((item) => (
                                                                <Col xs={24} sm={12} md={8} lg={8} xl={8} >
                                                                    <div className="secItemDiv" >
                                                                        <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '150px' , maxHeight : '150px' , objectFit : 'cover', padding : 0 }} src={item?.images[0]} />
                                                                        <Row style={{marginTop : '5px', minWidth : '100%', maxHeight : '155px' }} >
                                                                                <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                                                    <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                                                        <Typography className="firstItemName"  >{item?.title}</Typography>
                                                                                        <Typography className="firstItemPrice" style={{fontSize : '23px' , fontWeight : 700}} >$ {item?.price}</Typography>
                                                                                        <Typography className="firstItemAddress" style={{marginTop : '20px'}} >{item?.address}</Typography>
                                                                                    </div>
                                                                                </Col>
                                                                                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                                                                    <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                                                                </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Col>
                                                            ))
                                                        }
                                                    </Row>
                                                </div>
                                            )
                                        }

                                        {/* Third Layout */}
                                        {
                                            layOutDir === "three" && (
                                                <div className="secLayOut" >
                                                    <Row>
                                                        {
                                                            allProperties?.map((item) => (
                                                                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop : '20px'}} >
                                                                    <div className="secItemDiv" >
                                                                        <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '200px' , maxHeight : '200px' , objectFit : 'cover', padding : 0 }} src={item?.images[0]} />
                                                                        <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                                                                <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                                                                                    <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                                                        <Typography className="firstItemName"  >{item?.title}</Typography>
                                                                                        <Typography className="firstItemPrice" style={{fontSize : '23px' , fontWeight : 700}} >$ {item?.price}</Typography>
                                                                                        <Typography className="firstItemAddress" style={{marginTop : '20px'}} >{item?.address}</Typography>
                                                                                    </div>
                                                                                </Col>
                                                                                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                                                                    <img alt="save property icon" style={{maxWidth : '28px', maxHeight : '28px' , marginRight : '10px' }} src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/>
                                                                                </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Col>
                                                            ))
                                                        }
                                                    </Row>
                                                </div>
                                            )
                                        }
                                    </>
                                ) : (
                                    <Typography className="cityPropertiesHead" style={{fontSize : '15px' , fontWeight : 600 , color : '#c0392b' , textAlign : 'center'}} >No Properties Found </Typography>
                                )
                            }
                            </Spin>
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} sm={0} md={0} lg={0} xl={1}></Col>
            </Row>

            <Drawer width={250} closable={false}  placement="left" color="primary" bodyStyle={{ backgroundColor: "#FFFFFF", padding: "0" , width : "100%"}}  onClose={onClose} visible={visible}>
                <Typography style={{fontSize : '20px' , fontWeight : 700 , color : '#2f3640' , textAlign : 'center' , marginTop : '15px'}} >Filters</Typography>
                <Collapse  onChange={callback} className="collapse" ghost expandIconPosition="center">
                    <Panel header="Bedrooms" key="1" style={{fontWeight : 600}} >
                        <Radio.Group name="radiogroup" value={bedrooms === 0 ? null : bedrooms} style={{display : 'flex' , flexDirection : 'column' , marginLeft : '30px' ,  marginTop : '-10px'}} >
                            <Radio value={2} className="bedroomRadio" onClick={(e) => setbedrooms(2)}  >2 bedrooms</Radio>
                            <Radio value={3} className="bedroomRadio" onClick={(e) => setbedrooms(3)} >3 bedrooms</Radio>
                            <Radio value={4} className="bedroomRadio" onClick={(e) => setbedrooms(4)} >4 bedrooms</Radio>
                            <Radio value={5} className="bedroomRadio" onClick={(e) => setbedrooms(5)} >5+ bedrooms</Radio>
                        </Radio.Group>
                    </Panel>
                    <Panel header="Area" key="2" style={{fontWeight : 600}}>
                        <Radio.Group name="radiogroup" value={area === 0 ? null : area}  style={{display : 'flex' , flexDirection : 'column' , marginLeft : '30px' ,  marginTop : '-10px'}} >
                            <Radio value={1000} className="bedroomRadio" onClick={(e) => setarea(1000)} >1000+ sq/km</Radio>
                            <Radio value={2000} className="bedroomRadio" onClick={(e) => setarea(2000)} >2000+ sq/km</Radio>
                            <Radio value={4000} className="bedroomRadio" onClick={(e) => setarea(4000)} >4000+ sq/km</Radio>
                            <Radio value={5000} className="bedroomRadio" onClick={(e) => setarea(5000)} >5000+ sq/km</Radio>
                        </Radio.Group>
                    </Panel>
                    <Panel header="Has a  Balcony" key="3" style={{fontWeight : 600}}>
                        <Radio.Group name="radiogroup" value={balcony === "" ? null : balcony} style={{display : 'flex' , flexDirection : 'row' ,  marginTop : '-10px' , marginLeft : '30px' , marginBottom : '10px'}} >
                            <Radio value={"yes"} className="bedroomRadio"  onClick={(e) => setbalcony("yes")} >Yes</Radio>
                            <Radio value={"No"} className="bedroomRadio" onClick={(e) => setbalcony("no")} >No</Radio>
                        </Radio.Group>
                    </Panel>
                    <Panel header="Has a  Tv Launch" key="4" style={{fontWeight : 600}}>
                        <Radio.Group name="radiogroup" value={tvLaunch === "" ? null : tvLaunch}  style={{display : 'flex' , flexDirection : 'row' ,  marginTop : '-10px' , marginLeft : '30px' , marginBottom : '10px'}} >
                            <Radio value={"yes"} className="bedroomRadio" onClick={(e) => settvLaunch("yes")}  >Yes</Radio>
                            <Radio value={"no"} className="bedroomRadio" onClick={(e) => settvLaunch("no")} >No</Radio>
                        </Radio.Group>
                    </Panel>
                    <Panel header="Kitchens" key="5" style={{fontWeight : 600}}>
                        <Radio.Group name="radiogroup" value={kitchen === "" ? null : kitchen}  style={{display : 'flex' , flexDirection : 'column' , marginLeft : '30px' ,  marginTop : '-10px'}} >
                            <Radio value={1} className="bedroomRadio"  onClick={(e) => setkitchen(1)}  >1 Kitchen</Radio>
                            <Radio value={2} className="bedroomRadio"  onClick={(e) => setkitchen(2)}>2 Kitchens</Radio>
                            <Radio value={3} className="bedroomRadio"  onClick={(e) => setkitchen(3)} >3 Kitchens</Radio>
                        </Radio.Group>
                    </Panel>
                    <Panel header="Price Range" key="6" style={{fontWeight : 600}}>
                        <div style={{display : 'flex' , justifyContent: 'space-between' , width : '100%', marginTop : '15px'}} >
                            <Input value={minPrice} size="medium" placeholder="min Price" type="number" onChange={(e) => setminPrice(e.target.value)} prefix={<DollarCircleOutlined />} style={{marginRight : '10px' , border : '1px solid #222f3e'}} />
                            <Input value={maxPrice} size="medium" placeholder="max Price" type="number" onChange={(e) => setmaxPrice(e.target.value)} prefix={<DollarCircleOutlined />} style={{marginRight : '10px' , border : '1px solid #222f3e'}} />
                        </div>
                    </Panel>
                    <Panel header="Sort By" key="7" style={{fontWeight : 600}} className="sortHide" >
                        <Select defaultValue="latest" onSelect={(value) => setsortBy(value)} style={{ width: 100 }} onChange={handleChange}>
                            <Option value="new">Latest</Option>
                            <Option value="older">Older</Option>
                        </Select>
                    </Panel>
                    <Button style={{backgroundColor : '#e67e22' , color : '#FFFFFF' , fontWeight : 600 , marginTop : '20px' , marginLeft : '30px' , width : '150px'}} onClick={filterRemove} >Remove Filters</Button>
                </Collapse>
            </Drawer>
        </>
    )
}

export default CityPropertries
