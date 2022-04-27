import React , {useState , useEffect } from 'react'
import {Row , Col , Button  ,Typography , Spin , Popconfirm , notification} from 'antd';
import '../cityProperties/CityProperty.css'
import {useParams , Link , useNavigate} from 'react-router-dom';
import {getUserAllProperties} from '../../server_api/Api'


const PropertyComp = () => {
    const [ allProp , setAllProp ] = useState([]);
    const [ loading , setloading ] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        const getData = async () => {
            setloading(true)
            const {data} = await getUserAllProperties(id);
            setAllProp(data?.AllListedProperties);
            setloading(false)
        }
        getData();
    },[id])

    return (
        <>
            <Typography style={{fontSize : '18px', fontWeight : 700 , marginLeft : '30px' , marginBottom : '20px' , marginTop : '20px'}} >All Listed Properties</Typography>
            <Row>
                <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
                <Col xs={24} sm={24} md={24} lg={22} xl={22}>
                    <Spin spinning={loading}>
                        <Row gutter={[16,16]} >
                            {
                                allProp?.length > 0 ? (
                                    allProp?.map((item) => (
                                        item?.allListedProperties?.map((itemOne) => (
                                        <>
                                            <Col xs={24} sm={12} md={12} lg={8} xl={6} >
                                                <div className="secItemDiv" >
                                                    <Link to={`/singleProperty/${itemOne?.PropertyId}`}>
                                                        <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '150px' , maxHeight : '150px' , objectFit : 'cover', padding : 0 }} src={itemOne?.PropImages[0]} />
                                                    </Link>
                                                        <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                                            <Col xs={23} sm={23} md={23} lg={23} xl={23}>
                                                                <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                                    <Typography className="firstItemName" style={{fontSize : '14px'}}  >{itemOne?.PropTitle}</Typography>
                                                                    <Typography className="firstItemPrice" style={{fontSize : '25px' , fontWeight : 700}} >$ {itemOne?.PropPrice}</Typography>
                                                                    <Typography className="firstItemAddress" style={{marginTop : '20px' , maxHeight : '50px', whiteSpace : 'nowrap' , overflow : 'hidden' , textOverflow :'ellipsis' }} >{itemOne?.PropAddress}</Typography>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                </div>
                                            </Col>
                                            </>
                                        ))
                                    ))
                                ) : (
                                    <Typography style={{fontSize : '15px', color : '#ee5253', fontWeight : 600, marginLeft : '50px' , marginTop : '50px'}} >No Properties Sold By You yet</Typography>
                                )
                            }
                        </Row>
                    </Spin>
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