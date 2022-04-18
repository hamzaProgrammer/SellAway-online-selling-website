import React , {useState , useEffect} from 'react'
import {Typography , Button , Drawer } from 'antd'
import './SideBar.css'
//import {getUserInfo} from '../../../server_api/Api'
import {useParams , useNavigate } from 'react-router-dom'

const EditProfilesideBar = () => {
    const [ userInfo , setuserInfo ] = useState({});
    const  location = useNavigate();

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
  };
    
    const {id} = useParams();
    // useEffect(() => {
    //     const getData = async () => {
    //         const {data} = await getUserInfo(id);
    //         setuserInfo(data?.User)
    //     }
    //     getData();
    // } , [id])

    // navigating towards edit profile page
    const editProfile = () => {
        // if(userInfo === {}){
        //     location(`/signin`)
        // }else{
        //     location(`/editProfile/${userInfo?._id}`)
        // }
    }

    // navigating towards saved search pages
    const savedSearches = () => {
        // if(userInfo === {}){
        //     location(`/signin`)
        // }else{
        //     location(`/getAllUserSavedSearches/${userInfo?._id}`)
        // }
    }

    // navigating towards saved properties
    const savedProperties = () => {
        // if(userInfo === {}){
        //     location(`/signin`)
        // }else{
        //     location(`/allSavedProperties/${userInfo?._id}`)
        // }
    }

    return (
        <>
            <div className="editProfileMainDiv" >
                {
                    userInfo?.profilePic === "" ? (
                        <img alt="user Avatar" style={{width : '150px'  , height : '150px' , borderRadius : '50%' , marginBottom : '15px'}} src={userInfo?.profilePic} />
                    ) : (
                        <img alt="user Avatar" style={{width : '150px'  , height : '150px' , borderRadius : '50%' , marginBottom : '15px'}} src="./icons/userAvatar.png" />
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
                    <Button className="profileBtns" style={{borderTop : '1px solid transparent'}} block  onClick={editProfile} > <img alt="all sold properties icon" src="./icons/edit.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Edit Profile</Button>
                    <Button className="profileBtns" block  onClick={savedSearches} > <img alt="all properties icon" src="./icons/allProperties.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> All Properties</Button>
                    <Button className="profileBtns" block  onClick={savedSearches} > <img alt="all sold properties icon" src="./icons/soldProeperties.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Sold Properties</Button>
                    <Button className="profileBtns" block  onClick={savedSearches} > <img alt="all sold properties icon" src="./icons/savedHomes.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Saved Searches</Button>
                    <Button className="profileBtns" style={{borderBottom : '1px solid #b2bec3'}} block  onClick={savedProperties} > <img alt="all sold properties icon" src="./icons/savedProp.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Saved Properties</Button>
                </div>
            </div>
            <img alt="menu icon" className="menuIconOfSidebar" src="./icons/menuIcon.png" onClick={showDrawer} />

            <Drawer width={250} closable={false}  placement="left" color="primary" bodyStyle={{ backgroundColor: "#FFFFFF", padding: "0" , width : "100%"}}  onClose={onClose} visible={visible}>
                <div style={{display : 'flex' , flexDirection : 'column' , width : '100%' , marginTop : '15px'}} >
                    {
                        userInfo?.profilePic === "" ? (
                            <img alt="user Avatar" style={{width : '100px'  , height : '100px' , borderRadius : '50%' , marginBottom : '15px' , marginLeft : '70px' }} src={userInfo?.profilePic} />
                        ) : (
                            <img alt="user Avatar" style={{width : '100px'  , height : '100px' , borderRadius : '50%' , marginBottom : '15px' , marginLeft : '70px' }} src="./icons/userAvatar.png" />
                        )
                    }
                    {
                        userInfo?.name  ? (
                            <Typography className="name" style={{marginLeft : '80px' , fontWeight : 600, marginBottom : '15px', marginTop : '-10px'}} >{userInfo?.name}</Typography>
                        ) : (
                            <Typography className="name" style={{color : '#c0392b', marginLeft : '80px' , fontWeight : 600, marginBottom : '15px', marginTop : '-10px'}} >Your Name </Typography>
                        )
                    }
                    <Button className="profileBtns" style={{borderTop : '1px solid transparent'}} block  onClick={editProfile} > <img alt="all sold properties icon" src="./icons/edit.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Edit Profile</Button>
                    <Button className="profileBtns" block  onClick={savedSearches} > <img alt="all properties icon" src="./icons/allProperties.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> All Properties</Button>
                    <Button className="profileBtns" block  onClick={savedSearches} > <img alt="all sold properties icon" src="./icons/soldProeperties.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Sold Properties</Button>
                    <Button className="profileBtns" block  onClick={savedSearches} > <img alt="all saved search icon" src="./icons/savedHomes.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Saved Searches</Button>
                    <Button className="profileBtns" style={{borderBottom : '1px solid #b2bec3'}} block  onClick={savedProperties} > <img alt="all sold properties icon" src="./icons/savedProp.png" style={{maxWidth : '20px', maxHeight : '20px' , marginRight : '10px', marginBottom : '5px'}} /> Saved Properties</Button>
                </div>
            </Drawer>

        </>
    )
}

export default EditProfilesideBar
