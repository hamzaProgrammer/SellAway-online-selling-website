import React , {useState , useEffect } from 'react';
import './MoreOnRecentSearch.css'
import { Typography ,Card , Row , Col , Spin } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {getPropertyRelated} from '../../../../server_api/Api'
import {useParams} from 'react-router-dom'
import moment from 'moment'
 

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
    const [ realtedData , setRelated ] = useState([]);
    const [ loading , setloading ] = useState(false);

    const {id} = useParams();
    useEffect(() => {
        const getImages = async () => {
            setloading(true)
            const {data} = await getPropertyRelated(id);
            setRelated(data)
            setloading(false)
        }
        getImages();
    },[id])
    return (
        <>
            <div style={{border : '1px solid #b2bec3', borderRadius : '5px' , padding : '10px', marginTop : '25px'}} >
                <div className="moreRecentRelatedNew" style={{marginTop : '-10px'}} >
                    <Typography className="moreRecentRelatedHead" style={{backgroundColor : '#FFFFFF' , paddingBottom : '15px'}} >Related Properties</Typography>
                    <Spin spinning={loading} >
                        {
                            realtedData?.length > 0 ? (
                                realtedData?.map((item) => (
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
                                                cover={<img alt="item Img" src={item?.images[0]} style={{maxWidth : '100%' , maxHeight : '140px' , objectFit : 'cover'  , paddingLeft : '2px' , paddingRight : '2px'}} />}
                                            >
                                                <div className="itemDesc" >
                                                    <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , padding : 0}} >
                                                        <Row>
                                                            <Col xs={23} sm={23} md={23} lg={23} xl={23}>
                                                                <Typography className="itemName" style={{minWidth : '240px'}} >{item?.title}</Typography>
                                                            </Col>
                                                            <Col xs={1} sm={1} md={1} lg={1} xl={1}  >
                                                                <img style={{ maxWidth : '25px' , maxHeight : '25px' }} alt="Save icon" src="https://img.icons8.com/fluency/48/000000/filled-like.png"/>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <Typography className="itemPrice" style={{textAlign : 'left' , marginLeft : '-20px' , marginTop : '10px'}} >$ {item?.price.toLocaleString()}</Typography>
                                                    <div style={{display : 'flex' , justifyContent : 'space-between'}}  >
                                                        <Typography className="itemAddress" style={{minWidth : '200px'}} >{item?.address.split(" ").splice(-3)}</Typography>
                                                        <Typography className="itemAddress" style={{marginRight : '-15px'}} > {moment(item?.createdAt).fromNow()}</Typography>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    </Carousel>
                                ))
                            ) : (
                                <Typography className="moreRecentRelatedHead" style={{color : '#c0392b' , paddingBottom : '15px' , fontSize : '15px'}} >No Related Properties Available</Typography>
                            )
                        }
                    </Spin>
                </div>
            </div>
        </>
    );
}

export default MoreRelated;
