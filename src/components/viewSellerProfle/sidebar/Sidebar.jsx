import React , {useState , useEffect} from 'react'
import {Typography , Button , Drawer , notification } from 'antd'
import '../../myProfile/sidebar/SideBar.css'
import {useNavigate , useParams } from 'react-router-dom'
import {getUserInfo} from '../../../server_api/Api'

const EditProfilesideBar = ({isImgRender, setisImgRender}) => {
    const [ userInfo , setuserInfo ] = useState({});
    const  location = useNavigate();
    const {id} = useParams();

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
  };
    //checking if admin logged in or not
    useEffect(() => {
        const getUser = async () => {
            const {data} = await getUserInfo(id);
            if(data?.success === true){
                setuserInfo(data?.User);
            }
        }
        getUser();
    }, [location])

    // navigating towards edit profile page
    const editProfile = () => {
        location(`/viewUserProfile/${userInfo?._id}`)
    }

    const Allprop = () => {
        location(`/viewSellerAllProp/${userInfo?._id}`)
    }

    const AllSoldprop = () => {
        location(`/viewSellerAllSoldProp/${userInfo?._id}`)
    }
    return (
        <>
            <div className="editProfileMainDiv" >
                {
                    userInfo?.profilePic !== "" ? (
                        <img alt="user Avatar" style={{width : '150px'  , height : '150px' , borderRadius : '50%' , marginBottom : '15px'}} src={userInfo?.profilePic} />
                    ) : (
                        <img alt="user Avatar" style={{width : '150px'  , height : '150px' , borderRadius : '50%' , marginBottom : '15px'}} src="https://img.icons8.com/stickers/100/000000/user.png" />
                    )
                }
                {
                    userInfo?.name  ? (
                        <Typography className="name" >{userInfo?.name}</Typography>
                    ) : (
                        <Typography className="name" style={{color : '#c0392b'}} >OLX User </Typography>
                    )
                }
                <div style={{display : 'flex' , flexDirection : 'column' , width : '100%' , marginTop : '15px'}} >
                    <Button className="profileBtns" style={{borderTop : '1px solid transparent'}} block  onClick={editProfile} > <img alt="all sold properties icon" src="/icons/edit.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}}  /> View Profile</Button>
                    <Button className="profileBtns" block  onClick={Allprop} > <img alt="all properties icon" src="/icons/allProperties.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Listed Properties</Button>
                    <Button className="profileBtns" block  onClick={AllSoldprop} > <img alt="all sold properties icon" src="/icons/soldProeperties.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Sold Properties</Button>
                </div>
            </div>
            <img alt="menu icon" className="menuIconOfSidebar" src="/icons/menuIcon.png" onClick={showDrawer} />

            <Drawer width={250} closable={false}  placement="left" color="primary" bodyStyle={{ backgroundColor: "#FFFFFF", padding: "0" , width : "100%"}}  onClose={onClose} visible={visible}>
                <div style={{display : 'flex' , flexDirection : 'column' , width : '100%' , marginTop : '15px'}} >
                    {
                        userInfo?.profilePic === "" ? (
                            <img alt="user Avatar" style={{width : '100px'  , height : '100px' , borderRadius : '50%' , marginBottom : '15px' , marginLeft : '70px' }} src={userInfo?.profilePic} />
                        ) : (
                            <img alt="user Avatar" style={{width : '100px'  , height : '100px' , borderRadius : '50%' , marginBottom : '15px' , marginLeft : '70px' }} src="/icons/userAvatar.png" />
                        )
                    }
                    {
                        userInfo?.name  ? (
                            <Typography className="name" style={{marginLeft : '80px' , fontWeight : 600, marginBottom : '15px', marginTop : '-10px'}} >{userInfo?.name}</Typography>
                        ) : (
                            <Typography className="name" style={{color : '#c0392b', marginLeft : '80px' , fontWeight : 600, marginBottom : '15px', marginTop : '-10px'}} >Your Name </Typography>
                        )
                    }
                    <Button className="profileBtns" style={{borderTop : '1px solid transparent'}} block  onClick={editProfile} > <img alt="all sold properties icon" src="/icons/edit.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> View Profile</Button>
                    <Button className="profileBtns" block  onClick={Allprop} > <img alt="all properties icon" src="/icons/allProperties.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Listed Properties</Button>
                    <Button className="profileBtns" block  onClick={AllSoldprop} > <img alt="all sold properties icon" src="/icons/soldProeperties.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Sold Properties</Button>
                </div>
            </Drawer>

        </>
    )
}

export default EditProfilesideBar
