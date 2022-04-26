import React, {useEffect , useState} from 'react';
import './MoreOnRecentSearch.css'
import { Typography ,Card , Row , Col , Spin , message } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useNavigate} from 'react-router-dom'
import {getRecentProperties , saveOrUnsaveProperties} from '../../../server_api/Api'
import moment from 'moment'


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
    const [ allProp , setAllprop ] =  useState([]);
    const [ loading , setLoading ] = useState(false)
    const [ msg , setMsg ] = useState("")

    const  location = useNavigate();

    useEffect(() => {
        const isCity = JSON.parse(localStorage.getItem('searchedCity'))
        if(isCity !== undefined){
            setLoading(true)
            const getData = async () => {
                const {data} = await getRecentProperties(isCity)
                setAllprop(data?.RelatedProperties)
                setLoading(false)
            }
            getData();
        }
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
            success();
            setMsg(data?.message);
        }else{
            setMsg(data?.message);
            error();
        }

    }

    return (
        <>
            {
                allProp?.length > 0 && (
                        <Spin spinning={loading}>
                            <div className="moreRecentRelated" >
                                <Typography className="moreRecentRelatedHead" >Your Recent Searches </Typography>
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
                                {
                                    allProp?.map((item) => (
                                        <div className="item" >
                                            <Card
                                                hoverable
                                                className="itemCard"
                                                cover={<img alt="item Img" src={item?.images[0]} style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px'}} />}
                                            >
                                                <div className="itemDesc" >
                                                    <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                                        <Row>
                                                            <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                                <Typography className="itemName" style={{minWidth : '200px'}} >{item?.title}</Typography>
                                                            </Col>
                                                            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                                                <img style={{ maxWidth : '80%' , maxHeight : '80%' , marginLeft : '20px' }} alt="Save icon" onClick={() => SaveOrUnSave(item?.owner,item?._id )} src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-Save-social-media-bearicons-detailed-outline-bearicons.png"/>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <Typography className="itemPrice" style={{textAlign : 'left' , marginLeft : '-20px' , marginTop : '10px'}} >$ {item?.price.toLocaleString()}</Typography>
                                                    <div style={{display : 'flex' , justifyContent : 'space-between'}}  >
                                                        <Typography className="itemAddress" style={{marginTop : '30px' ,  maxHeight : '50px', whiteSpace : 'nowrap' , minWidth : '130px' , maxWidth : '170px', overflow : 'hidden' , textOverflow :'ellipsis' }} >{item?.address.split(" ").splice(-3)}</Typography>
                                                        <Typography className="itemAddress" style={{marginRight : '-15px'}} > {moment(item?.createdAt).fromNow()}</Typography>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    ))
                                }
                                </Carousel>
                            </div>
                        </Spin>
                )
            }
        </>
    );
}

export default MoreRelated;
