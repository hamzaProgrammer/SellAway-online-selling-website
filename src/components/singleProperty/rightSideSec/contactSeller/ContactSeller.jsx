import React ,{useState , useEffect} from 'react'
import {Typography , Row , Col, Button , Spin , notification} from 'antd';
import './ContactSeller.css'
import {getPropertyOwner} from '../../../../server_api/Api'
import {useParams , useNavigate} from 'react-router-dom'


const ContactSeller = () => {
    const [ realtedData , setRelated ] = useState([]);
    const [ loading , setloading ] = useState(false);

    const {id} = useParams();
    useEffect(() => {
        const getImages = async () => {
            setloading(true)
            const {data} = await getPropertyOwner(id);
            setRelated(data)
            setloading(false)
        }
        getImages();
    },[id])

    const [isAdmin, setAdminLogin] = useState(false)
    const location = useNavigate();

    //checking if admin logged in or not
    useEffect(() => {
      const checkAdmin = () => {
        const user = JSON.parse(localStorage.getItem('profile'))
        if (user) {
          setAdminLogin(true)
        } else {
          setAdminLogin(false)
        }
      }
      checkAdmin();
    }, [location])


    const handleClick = () => {
        openNotificationWithIcon('error');
    }

    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Error',
            description:"Please Sign In to Continue"
        });
    };

    const SellerProf = async () => {
        location(`/viewUserProfile/${realtedData?.Id}`);
    }

    return (
        <>
            <div className="mainContactSeller" >
                <Typography className="contactHead" >Contact Seller</Typography>
                <Spin spinning={loading} >
                    {
                        realtedData ? (
                            <>
                                <Row>
                                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                        {
                                            realtedData?.ProfileImage   ? (
                                                <img alt="user avatar" style={{maxWidth : '50px' , maxHeight : '50px' , marginTop :'10px' , borderRadius : '50%' }} src={realtedData?.ProfileImage} />
                                            ) : (
                                                <img alt="user avatar" style={{maxWidth : '50px' , maxHeight : '50px' , marginTop : '10px' , borderRadius : '50%' }} src="/icons/userAvatar.png" />
                                            )
                                        }
                                    </Col>
                                    <Col xs={12} sm={14} md={14} lg={12} xl={14}>
                                        <Typography className="sellerName" >{realtedData?.Name ? realtedData?.Name : "OLX User"}</Typography>
                                    </Col>
                                    <Col xs={3} sm={6} md={6} lg={6} xl={6}>
                                        <Button type="link"  style={{color : '#0097e6' , fontWeight : 600 }} onClick={SellerProf} >View Profile</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <div style={{display : 'flex', marginTop : '25px'}} >
                                            <img alt="user avatar" style={{maxWidth : '35px' , maxHeight : '35px'}} src="/icons/phoneIcon.png" />
                                            {
                                                isAdmin ? (
                                                    <Typography style={{fontSize : '15px', fontWeight : 600 , marginTop : '0px'}} >+92 {realtedData?.PhoneNo}</Typography>
                                                ) : (
                                                    <>
                                                        <Button type="link" style={{color : '#0097e6' , fontWeight : 600 }} onClick={handleClick} >Show Number</Button>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                    </Col>
                                </Row>
                            </>
                        ) : (
                            <Typography style={{fontSize : '15px', fontWeight : 600 , marginTop : '0px' , color : '#e74c3c'}} >Could Not Get Seller Information</Typography>
                        )
                    }
                </Spin>
            </div>
        </>
    )
}

export default ContactSeller
