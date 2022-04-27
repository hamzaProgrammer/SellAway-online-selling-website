import React , {useState , useEffect} from 'react'
import {Typography ,Input , Button , notification , Alert , Upload , Modal} from 'antd';
import {getUserInfo ,updateProfilePic , updateUserInfo} from '../../../server_api/Api'
import {useParams} from 'react-router-dom'
import '../sidebar/SideBar.css'

const init = {
    email : '',
    password : '',
    address : '',
    phoneNo : '',
    name : ''
}

const EditPortion = ({setIsRender ,setisImgRender}) => {
    const [ userInfo , setuserInfo ] = useState({});
    const [ userSendInfo , setSendInfo ] = useState(init);
    const {id} = useParams();
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess ] = useState(false)
    const [msg, setMsg ] = useState(false)
    const [previewVisible , setpreviewVisible] = useState(false)
    const [previewImage , setpreviewImage] = useState('')
    const [ myFileOne , setMyFileone ] = useState([])
    const  handleCancel = () => setpreviewVisible(false)


    useEffect(() => {
        const getData = async () => {
            const {data} = await getUserInfo(id);
            setuserInfo(data?.User)
        }
        getData();
    } , [id,isSuccess ])

    // notification for added sucessfull
    const openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'SuccessFull',
            description:'User Profile Updated SuccessFully',
            duration : 3000
        });
    };

    const openNotificationWithImage = (type) => {
        notification[type]({
            message: 'SuccessFull',
            description:'User Profile Image Updates SuccessFully',
            duration : 2000
        });
    };

    const openNotificationWithError = (type) => {
        notification[type]({
            message: 'UnSuccessFull',
            description:'Sorry! Could Not Update Your Information.',
            duration : 2000
        });
    };

    const openNotificationWithErrorOne = (type) => {
        notification[type]({
            message: 'UnsuccessFull',
            description:'You have Not Sent Any Data fro Updating',
            duration : 2000
        });
    };

    const openNotificationWithImageNot = (type) => {
        notification[type]({
            message: 'UnSuccessFull',
            description:'User Profile Image Could Not be Updated',
            duration : 2000
        });
    };

    // sending data to server
    const handleClick = async () => {
        setIsError(false)
        setIsSuccess(false)
        setMsg("");

        if(userSendInfo?.password === ""){
            delete userSendInfo.password;
        }
        if(userSendInfo?.name === ""){
            delete userSendInfo.name;
        }
        if(userSendInfo?.email === ""){
            delete userSendInfo.email;
        }
        if(userSendInfo?.address === ""){
            delete userSendInfo.address;
        }
        if(userSendInfo?.phoneNo === ""){
            delete userSendInfo.phoneNo;
        }
        if(Object.keys(userSendInfo).length < 1){
            setTimeout(openNotificationWithErrorOne('error'),2000);
            return;
        }

        const {data} = await updateUserInfo(userInfo._id, userSendInfo );

        if(data?.success === true){
            openNotificationWithIcon('success');
            setTimeout(window.location.reload(),2000);
            setIsRender(true)
        }else{
            openNotificationWithError('error')
        }
    }

    const handlePreview = (file) => {
        setpreviewImage(file.thumbUrl);
        setpreviewVisible(true)
    }

    // uplaoding profile image only
    const handleChangeOne = async ({ fileList }) => {
        if(fileList[0]?.percent == 100){
            setIsError(false)
            setIsSuccess(false)
            setMsg("");
            let formData = new FormData()
            const myImg = fileList[0].originFileObj;
            formData.append("profilePic" , myImg )
            const {data} = await updateProfilePic( formData, userInfo._id);
            console.log("got data : ", data)
    
            if(data?.success === true){
                openNotificationWithImage('success');
                setisImgRender(true)
            }else{
                openNotificationWithImageNot('error')
            }
        }

    }

    const uploadButton = (
    <div>
        <div className="ant-upload-text">Update Photo</div>
    </div>
    );
    return (
        <>
            <div className="editProfileSecDiv" >
                <Typography className="editprofileMainHead" >Edit Profile</Typography>
                {
                    isError && (
                        <Alert message={msg} type="error"  />
                    )
                }
                {
                    isSuccess && (
                        <Alert message={msg} type="success" closable={true} />
                    )
                }
                <Typography  className="labelNewAddProperty" style={{fontSize : '14px'}} > Email</Typography>
                <Input value={userSendInfo?.email} name="email" onChange={(e) => setSendInfo({...userSendInfo , [e.target.name] : e.target.value}) } className="myInput" placeholder={userInfo?.email} type="email"  />
                <Typography className="labelNewAddProperty" style={{fontSize : '14px'}} > Name</Typography>
                <Input value={userSendInfo?.name} name="name" onChange={(e) => setSendInfo({...userSendInfo , [e.target.name] : e.target.value}) } className="myInput" placeholder={userInfo?.name} />
                <Typography className="labelNewAddProperty" style={{fontSize : '14px'}} > Password</Typography>
                <Input value={userSendInfo?.password} name="password" onChange={(e) => setSendInfo({...userSendInfo , [e.target.name] : e.target.value}) } className="myInput" placeholder="********" type="text" />
                <Typography className="labelNewAddProperty" style={{fontSize : '14px'}} > Phone No</Typography>
                <Input value={userSendInfo?.phoneNo} name="phoneNo" onChange={(e) => setSendInfo({...userSendInfo , [e.target.name] : e.target.value}) } className="myInput" placeholder={userInfo?.phoneNo} type="number" />
                <Typography className="labelNewAddProperty" style={{fontSize : '14px'}} > Location</Typography>
                <Input value={userSendInfo?.address} name="address" onChange={(e) => setSendInfo({...userSendInfo , [e.target.name] : e.target.value}) } className="myInput" placeholder={userInfo?.address} />
                <Typography className="labelNewAddProperty" style={{marginBottom : '10px' , fontSize : '14px'}} >Edit Profile Image</Typography>
                <div className="clearfix">
                    <Upload
                        action="//jsonplaceholder.typicode.com/posts/"
                        listType="picture-card"
                        maxCount={1}
                        onPreview={handlePreview}
                        onChange={handleChangeOne}
                        type="images/*"
                    >
                        {myFileOne.length === 1 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
                <div className="editProfileSubBtn" >
                    <Button style={{backgroundColor : '#00b894' , color : '#FFFFFF' , fontWeight: 600  , borderRadius : '10px' , width : '100px'}} onClick={handleClick} >Update</Button>
                </div>
            </div>
        </>
    )
}

export default EditPortion
