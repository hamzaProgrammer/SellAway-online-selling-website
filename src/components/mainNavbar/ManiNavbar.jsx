import React , {useState , useEffect} from 'react'
import { Row, Col , Select , Menu, Dropdown , Avatar , Button , Drawer , notification  } from 'antd';
import { NotificationOutlined  ,LogoutOutlined ,MenuUnfoldOutlined , MessageOutlined , CloudUploadOutlined  } from '@ant-design/icons';
import './MainNavbar.css'
import {useNavigate} from 'react-router-dom'


const { Option } = Select;

const ManiNavbar = () => {
    const navigate = useNavigate();
    const [ searchType , setTypeOfSearch ] = useState("")
    const [ searchCity , setsearchCity ] = useState("")
    const notificationMenu = (
        <Menu>
            <Menu.Item key="0">
            <a href="https://www.antgroup.com">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
            <a href="https://www.aliyun.com">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );

    const profileMenu = (
        <Menu>
            <Menu.Item key="0">
            <a href="https://www.antgroup.com">Profile</a>
            </Menu.Item>
            <Menu.Item key="1">
            <a href="https://www.aliyun.com">Chats</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const serachMyCity = async () => {
        if(searchType === "" || searchCity === ""){
            searchNotification();
        }else{
            navigate(`/allProperties?city=${searchCity}&activeStatus=${searchType}`)
        }

    }

    const searchNotification = () => {
        notification.open({
            message: 'Please Select Type of Property and City for Searching.',
        });
    };

    const location = useNavigate();
    const [ isUser , setIsUser ] = useState(false)
    const [ user , setUser ] = useState({})

    //checking if admin logged in or not
    useEffect(() => {
        const checkAdmin = () => {
        const myUser = JSON.parse(localStorage.getItem('profile'))
            if (myUser) {
                setIsUser(true)
                setUser(myUser)
            } else {
                setIsUser(false)
            }
        }
        checkAdmin();
    }, [location])

    const myProfile = () => {
        if(isUser){
            location(`/myProfile/${user?.User?._id}`);
        }
    }

    return (
        <>
            <Row gutter={10}  className="mainNavbarMain" >
                <Col xs={24} sm={24} md={5} lg={5} xl={5}>
                    <Select
                        onSelect={(value , event) => setTypeOfSearch(value)}
                        style={{width : '100%', border: '2px solid #353b48' , borderRadius : '5px' }}
                        size="large"
                        className="navbarSearchLeft"
                        placeholder="Select Property Type"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        <Option value="sell" >Properties for Sale</Option>
                        <Option value="rent" >Properties for Rent</Option>
                        <Option value="sold" >Sold Properties</Option>
                    </Select>
                </Col>
                <Col xs={21} sm={20} md={16} lg={15} xl={16}>
                    <div style={{display : 'flex' , justifyContent : 'flex-start' , marginTop : '10px'}} >
                        <Select
                            showSearch
                            onSelect={(value) => setsearchCity(value)}
                            size="large"
                            style={{width : '90%' ,border: '2px solid #353b48' , borderRadius : '5px'  }}
                            className="navbarSearchLeft"
                            placeholder="Select Your City"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            <Option value="istanbul">Istanbul</Option>
                            <Option value="izmir">Izmir</Option>
                            <Option value="ankara">Ankara</Option>
                            <Option value="ankara1">Ankara</Option>
                            <Option value="5">New City</Option>
                            <Option value="6">New City</Option>
                        </Select>
                        <img alt="search icon" src="/icons/newSearch.png" onClick={serachMyCity}  style={{maxWidth : '30px' , maxHeight : '30px' , marginTop : '7px' , cursor : 'pointer' , marginLeft : '5px'}} />
                    </div>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <div className="thirdSecOfMainNav" >
                        {/* <img alt="message Icon" className="mainNavbarImg" src="/icons/chatIcon.png" />
                        <Dropdown overlay={notificationMenu} trigger={['click']}>
                            <img alt="notification icon" style={{maxWidth : '30px' , maxHeight : '30px' , cursor : 'pointer'}} src="/icons/notificationIcon.png"/>
                        </Dropdown> */}
                        {
                            isUser && (
                                user?.profilePic !== undefined ? (
                                    <img alt="user Imag" style={{maxWidth : '40px' , maxHeight : '40px' , marginRight : '25px' , cursor : 'pointer'}} src={user?.profilePic} onClick={myProfile} />
                                ) : (
                                    <img alt="user Imag" style={{maxWidth : '40px' , maxHeight : '40px' , marginRight : '25px' , cursor : 'pointer'}} src="https://img.icons8.com/color/48/000000/user.png" onClick={myProfile} />
                                )
                        )
                        }
                        <Button  style={{fontSize : '17px' , marginTop  : '-5px' , height : '40px', minHeight : 'auto' , minWidth : 'auto' ,  borderRadius : '20px', backgroundColor : '#ff6b81' , color : '#FFFFFF'  , fontWeight : 600 , boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' , border: '1px solid transparent'}} >Advertise</Button>
                    </div>
                    <MenuUnfoldOutlined className="drawerIcon" onClick={showDrawer} />
                </Col>
            </Row>

            <Drawer width={250} closable={false}  placement="right" color="primary" bodyStyle={{ backgroundColor: "#3B4144", padding: "0" , width : "100%"}}  onClose={onClose} visible={visible}>
                <div className="mainNavHide" >
                    <Button className="drawerBtn" icon={<MessageOutlined />} >My Chats</Button>
                    <Dropdown overlay={notificationMenu} trigger={['click']}>
                        <Button className="drawerBtn" icon={<NotificationOutlined />} >Notifications</Button>
                    </Dropdown>
                    <Dropdown overlay={profileMenu} trigger={['click']}>
                        <Button className="drawerBtn" icon={ <Avatar style={{backgroundColor : '#EAB543' , cursor : 'pointer' , marginRight : '20px'}} >H</Avatar>} >Profile</Button>
                    </Dropdown>
                    <Button className="drawerBtn" icon={<LogoutOutlined style={{fontSize : '18px' , fontWeight : 600}} />} >Advertise</Button>;
                </div>
            </Drawer>
        </>
    )
}

export default ManiNavbar