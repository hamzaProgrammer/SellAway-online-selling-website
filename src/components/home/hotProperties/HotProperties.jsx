import React , {useState , useEffect } from 'react'
import '../moreOnSearch/MoreOnRecentSearch.css'
import { Typography , Row , Card , Col, Button , Spin , message } from 'antd';
import {getHotProperties , saveOrUnsaveProperties} from '../../../server_api/Api'
import {useNavigate , Link} from 'react-router-dom'
import moment from 'moment'

const HotProperties = () => {
    const [hotProperties , setHotProperties ] = useState();
    const [loading , setloading ] = useState(false);
    const location = useNavigate();
    const [ msg , setMsg ] = useState("")

    useEffect(() => {
        const getData = async () => {
            setloading(true)
            const {data} = await getHotProperties();
            setHotProperties(data?.AllProperties);
            setloading(false)
        }
        getData();
    },[location])

    const success = () => {
        message.success(msg);
    };

    const error = () => {
        message.error(msg);
    };

    const SaveOrUnSave = async (userId , propId) => {
        const {data} = await saveOrUnsaveProperties(userId , propId)
        console.log("saved : ", data);
        if(data?.success === true){
            setMsg(data?.message);
            success();
        }else{
            setMsg(data?.message);
            error();
        }

    }

    return (
        <>
            <div className="hotProperties" >
                <Typography className="moreRecentRelatedHead" style={{color : '#1e272e'}} >Hot Properties for you </Typography>
                <Row>
                    <Col xs={23} sm={23} md={23} lg={23} xl={23} >
                        <Spin spinning={loading}>
                            <Row gutter={[0,16]} style={{marginLeft : '5%'}} >
                                {
                                    hotProperties?.length > 0 ? (
                                        hotProperties?.map((item) => (
                                            <Col xs={24} sm={12} md={8} lg={6} xl={6} >
                                                    <Card
                                                        hoverable
                                                        className="itemCard newItem"
                                                        style={{border: '1px solid #dcdde1', backgroundColor : '#FFFFFF' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                                                        cover={<img alt="item Img" src={item?.images[1]} style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px' ,paddingTop : '2px' , borderTopLeftRadius : '5px' ,borderTopRightRadius : '5px'}} />}
                                                    >
                                                        <div className="itemDesc" >
                                                                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                                                    <Row>
                                                                            <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                                                                                <Link to={`/singleProperty/${item?._id}`}>
                                                                                    <Typography className="itemName" style={{minWidth : '240px'}} >{item?.title}</Typography>
                                                                                </Link>
                                                                            </Col>
                                                                        <Col xs={2} sm={2} md={2} lg={2} xl={2}  >
                                                                            {console.log("item?.owner : ",item?.owner)}
                                                                            <img style={{ maxWidth : '80%' , maxHeight : '80%' , marginLeft : '10px' }} alt="Save icon" onClick={() => SaveOrUnSave(item?.owner,item?._id )} src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-Save-social-media-bearicons-detailed-outline-bearicons.png"/>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <Link to={`/singleProperty/${item?._id}`}>
                                                                    <Typography className="itemPrice" style={{textAlign : 'left' , marginLeft : '-20px' , marginTop : '10px'}} >$ {item?.price.toLocaleString()}</Typography>
                                                                    <div style={{display : 'flex' , justifyContent : 'space-between'}}  >
                                                                        <Typography className="itemAddress" style={{marginTop : '30px' ,  maxHeight : '50px', whiteSpace : 'nowrap' , minWidth : '150px' , overflow : 'hidden' , textOverflow :'ellipsis' }} >{item?.address.split(" ").splice(-2)}</Typography>
                                                                        <Typography className="itemAddress" style={{marginRight : '-15px'}} > {moment(item?.createdAt).fromNow()}</Typography>
                                                                    </div>
                                                                </Link>
                                                        </div>
                                                    </Card>
                                            </Col>
                                        ))
                                    ) : (
                                        <Typography clasName="noContentText" >Sorry , No Content Found</Typography>
                                    )
                                }
                            </Row>
                        </Spin>
                    </Col>
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
