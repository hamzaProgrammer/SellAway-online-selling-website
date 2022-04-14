import React , {useState} from 'react'
import { Row, Col , Select , Menu, Dropdown , Avatar , Button , Drawer } from 'antd';
import { NotificationOutlined  ,LogoutOutlined ,MenuUnfoldOutlined , MessageOutlined , CloudUploadOutlined  } from '@ant-design/icons';
import './MainNavbar.css'

const { Option } = Select;

const ManiNavbar = () => {
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

    return (
        <>
            <Row gutter={10}  className="mainNavbarMain" >
                <Col xs={24} sm={24} md={5} lg={5} xl={5}>
                    <Select
                        showSearch
                        style={{width : '100%', border: '2px solid #353b48' , borderRadius : '5px' }}
                        size="large"
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
                        <Option value="1">Not Identified</Option>
                        <Option value="2">Closed</Option>
                        <Option value="3">Communicated</Option>
                        <Option value="4">Identified</Option>
                        <Option value="5">Resolved</Option>
                        <Option value="6">Cancelled</Option>
                    </Select>
                </Col>
                <Col xs={21} sm={20} md={16} lg={12} xl={14}>
                    <div style={{display : 'flex' , justifyContent : 'flex-start' , marginTop : '10px'}} >
                        <Select
                            showSearch
                            size="large"
                            style={{width : '90%' ,border: '2px solid #353b48' , borderRadius : '5px'  }}
                            className="navbarSearchLeft"
                            placeholder="Find Your Property"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            <Option value="1">Not Identified</Option>
                            <Option value="2">Closed</Option>
                            <Option value="3">Communicated</Option>
                            <Option value="4">Identified</Option>
                            <Option value="5">Resolved</Option>
                            <Option value="6">Cancelled</Option>
                        </Select>
                        <img alt="search icon" src="./icons/searchIcon.gif" style={{maxWidth : '40px' , maxHeight : '40px' , cursor : 'pointer' , marginLeft : '5px'}} />
                    </div>
                </Col>
                <Col xs={2} sm={2} md={2} lg={7} xl={5}>
                    <div className="thirdSecOfMainNav" >
                        <img alt="message Icon" className="mainNavbarImg" src="./icons/chatIcon.png" />
                        <Dropdown overlay={notificationMenu} trigger={['click']}>
                            <img alt="notification icon" style={{maxWidth : '30px' , maxHeight : '30px' , cursor : 'pointer'}} src="https://img.icons8.com/ios-filled/50/000000/appointment-reminders--v1.png"/>
                        </Dropdown>
                        <Dropdown overlay={profileMenu} trigger={['click']}>
                            <Avatar style={{backgroundColor : '#EAB543' , cursor : 'pointer'}} >H</Avatar>
                        </Dropdown>
                        <Button className="button-71" icon={<CloudUploadOutlined />} >Advertise</Button>
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