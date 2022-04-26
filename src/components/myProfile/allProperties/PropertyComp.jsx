import React , {useState , useEffect } from 'react'
import {Row , Col , Button  ,Typography , Spin , Popconfirm , notification} from 'antd';
import '../../cityProperties/CityProperty.css'
import {useParams , Link} from 'react-router-dom';
import {getUserAllProperties , deleteProperty} from '../../../server_api/Api'
import {DeleteOutlined} from '@ant-design/icons'


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


    function confirm(id) {
        console.log(id);
        const deletOne = async () => {
            const {data} = await deleteProperty(id);
            if(data?.success === true){
                openNotificationWithIcon('success')
            }else{
                openNotificationWith('error')
            }
        }
        deletOne();
    }
    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Ad Deleted SuccessFully',
        });
    };
    const openNotificationWith = type => {
        notification[type]({
            message: 'Sorry! Ad Not Deleted',
        });
    };

    function cancel(e) {
        console.log(e);
    }

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
                                                    <Link to={`/editMyAdvertise/${itemOne?.PropertyId}`}>
                                                        <img alt="product img" style={{maxWidth : '100%' , width : '100%' , minWidth : '100%' ,  height : '150px' , maxHeight : '150px' , objectFit : 'cover', padding : 0 }} src={itemOne?.PropImages[0]} />
                                                    </Link>
                                                        <Row style={{marginTop : '5px', minWidth : '100%' }} >
                                                            <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                                                <div style={{display : 'flex' , flexDirection : 'column' , paddingLeft: '7px'}} >
                                                                    <Typography className="firstItemName" style={{fontSize : '14px'}}  >{itemOne?.PropTitle}</Typography>
                                                                    <Typography className="firstItemPrice" style={{fontSize : '25px' , fontWeight : 700}} >$ {itemOne?.PropPrice}</Typography>
                                                                    <Typography className="firstItemAddress" style={{marginTop : '20px' , maxHeight : '50px', whiteSpace : 'nowrap' , overflow : 'hidden' , textOverflow :'ellipsis' }} >{itemOne?.PropAddress}</Typography>
                                                                </div>
                                                            </Col>
                                                            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                                                <Popconfirm
                                                                    title="Are you sure to delete this Ad?"
                                                                    onConfirm={() =>confirm(itemOne?.PropertyId)}
                                                                    onCancel={cancel}
                                                                    okText="Yes"
                                                                    cancelText="No"
                                                                >
                                                                    <DeleteOutlined  style={{color : '#eb4d4b', fontSize : '17px'}} />
                                                                </Popconfirm>
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