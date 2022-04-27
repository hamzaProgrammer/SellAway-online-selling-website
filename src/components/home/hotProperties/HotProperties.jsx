import React , {useState , useEffect } from 'react'
import '../moreOnSearch/MoreOnRecentSearch.css'
import { Typography , Row , Card , Col , Spin , message } from 'antd';
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

    const mySuccessOne = () => {
        message.success("Ad Saved for Later SuccessFully");
    };
    const mySuccessTwo = () => {
        message.success("Ad Removed from Saved Later SuccessFully");
    };

    const error = () => {
        message.error(msg);
    };

    const errorSignIn = () => {
        message.error("Please Sign In First");
    };

    const SaveOrUnSave = async (propId) => {
        if(isAdmin === true ){
            const {data} = await saveOrUnsaveProperties(isUser , propId)
            if(data?.success === true){
                if(data?.message === "Property Removed from Saved Later"){
                    mySuccessTwo()
                }else{
                    mySuccessOne();
                }
            }else{
                setMsg(data?.message);
                error();
            }
        }else{
            errorSignIn();
        }

    }

    const [isAdmin, setAdminLogin] = useState(false)
    const [isUser , setIsuser ] = useState("")

    //checking if admin logged in or not
    useEffect(() => {
        const checkAdmin = () => {
            const user = JSON.parse(localStorage.getItem('profile'))
            if (user) {
                setAdminLogin(true)
                setIsuser(user?.User?._id)
            } else {
                setAdminLogin(false)
            }
        }
        checkAdmin();
    }, [location])

    return (
        <>
            <div className="hotProperties" >
                <Typography className="moreRecentRelatedHead" style={{color : '#1e272e'}} >Hot Properties for you </Typography>
                <Row>
                    <Col xs={23} sm={23} md={23} lg={23} xl={23} >
                        <Spin spinning={loading}>
                            <Row gutter={[5,16]} style={{marginLeft : '5%'}} >
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
                                                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                                            <Link to={`/singleProperty/${item?._id}`}>
                                                                                <Typography className="itemName" style={{width : '100%'}} >{item?.title}</Typography>
                                                                            </Link>
                                                                        </Col>
                                                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}  >
                                                                            <img style={{ maxWidth : '80%' , maxHeight : '80%' , marginLeft : '10px' }} alt="Save icon" onClick={() => SaveOrUnSave(item?._id )} src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-Save-social-media-bearicons-detailed-outline-bearicons.png"/>
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
            </div>
        </>
    )
}

export default HotProperties
