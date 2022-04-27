import React , {useState , useEffect} from 'react'
import {Typography , Button , Drawer , notification } from 'antd'
import './SideBar.css'
import {useNavigate } from 'react-router-dom'
import {getUserInfo} from '../../../server_api/Api'

const EditProfilesideBar = ({isImgRender, setisImgRender}) => {
    const [ userInfo , setuserInfo ] = useState({});
    const  location = useNavigate();
    const [ isToRender , setIsToRender ] = useState(isImgRender)
    console.log("isImgRender in sde bar : ",isImgRender)
    useEffect(() => {
        if(isImgRender === true){
            console.log("isImgRender : ",isImgRender)
            const checkAdmin = async () => {
                const user = JSON.parse(localStorage.getItem('profile'))
                if (user) {
                    console.log("user got", user.User._id)
                    setAdminLogin(true)
                    setIsAdmin(user?.User);
                    const {data} = await getUserInfo(user.User._id);
                    if(data?.success === true){
                        setuserInfo(data?.User);
                    }
                } else {
                    setAdminLogin(false)
                }
                setisImgRender(false)
            }
            checkAdmin();
        }
    },[isImgRender])

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
  };
    const [isAUser, setIsAdmin ] = useState({})
    const [isAdmin, setAdminLogin] = useState(false)

    //checking if admin logged in or not
    useEffect(() => {
      const checkAdmin = async () => {
        const user = JSON.parse(localStorage.getItem('profile'))
        if (user) {
          setAdminLogin(true)
          setIsAdmin(user?.User);
          const {data} = await getUserInfo(user.User._id);
            if(data?.success === true){
                setuserInfo(data?.User);
            }
        } else {
          setAdminLogin(false)
        }
      }
      checkAdmin();
    }, [location])

    // navigating towards edit profile page
    const editProfile = () => {
        if(isAdmin ){
            location(`/myProfile/${isAUser?._id}`)
        }else{
            openNotificationWithIcon();
        }
    }

    // navigating towards saved search pages
    const savedSearches = () => {
        if(isAdmin ){
            location(`/allSavedSearches/${isAUser?._id}`)
        }else{
            openNotificationWithIcon();
        }
    }

    // navigating towards saved properties
    const savedProperties = () => {
        if(isAdmin ){
            location(`/allSavedProperties/${isAUser?._id}`)
        }else{
            openNotificationWithIcon();
        }
    }

    const Allprop = () => {
        if(isAdmin ){
            location(`/allListedProperties/${isAUser?._id}`)
        }else{
            openNotificationWithIcon();
        }
    }

    const AllSoldprop = () => {
        if(isAdmin ){
            location(`/allSoldProperties/${isAUser?._id}`)
        }else{
            openNotificationWithIcon();
        }
    }


    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Please Sign In  first to Continue',
        });
    };

    return (
        <>{console.log("userInfo : ",userInfo)}
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
                        <Typography className="name" style={{color : '#c0392b'}} >Your Name </Typography>
                    )
                }
                <div style={{display : 'flex' , flexDirection : 'column' , width : '100%' , marginTop : '15px'}} >
                    <Button className="profileBtns" style={{borderTop : '1px solid transparent'}} block  onClick={editProfile} > <img alt="all sold properties icon" src="/icons/edit.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}}  /> Edit Profile</Button>
                    <Button className="profileBtns" block  onClick={Allprop} > <img alt="all properties icon" src="/icons/allProperties.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> All Properties</Button>
                    <Button className="profileBtns" block  onClick={AllSoldprop} > <img alt="all sold properties icon" src="/icons/soldProeperties.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Sold Properties</Button>
                    <Button className="profileBtns" block  onClick={savedSearches} > <img alt="all sold properties icon" src="/icons/savedHomes.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Saved Searches</Button>
                    <Button className="profileBtns" style={{borderBottom : '1px solid #b2bec3'}} block  onClick={savedProperties} > <img alt="all sold properties icon" src="/icons/savedProp.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Saved Properties</Button>
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
                    <Button className="profileBtns" style={{borderTop : '1px solid transparent'}} block  onClick={editProfile} > <img alt="all sold properties icon" src="/icons/edit.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Edit Profile</Button>
                    <Button className="profileBtns" block  onClick={Allprop} > <img alt="all properties icon" src="/icons/allProperties.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> All Properties</Button>
                    <Button className="profileBtns" block  onClick={AllSoldprop} > <img alt="all sold properties icon" src="/icons/soldProeperties.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Sold Properties</Button>
                    <Button className="profileBtns" block  onClick={savedSearches} > <img alt="all saved search icon" src="/icons/savedHomes.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Saved Searches</Button>
                    <Button className="profileBtns" style={{borderBottom : '1px solid #b2bec3'}} block  onClick={savedProperties} > <img alt="all sold properties icon" src="/icons/savedProp.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Saved Properties</Button>
                </div>
            </Drawer>

        </>
    )
}

export default EditProfilesideBar
