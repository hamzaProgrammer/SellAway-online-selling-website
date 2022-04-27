import React , {useState , useEffect} from 'react'
import './UpperNavbar.css'
import { Button ,Drawer ,Modal  , Typography ,Input , Alert  } from 'antd';
import {signUpUser ,signInUser} from '../../server_api/Api'
import {useNavigate} from 'react-router-dom'

const init = {
    email : '',
    password : '',
    address : ''
}

const initOne = {
    email : '',
    password : '',
}

const UpperNavbar = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSignModalVisible, setisSignModalVisible] = useState(false);
    const [signUpData, setsignUpData] = useState(init);
    const [signInData, setsignInData] = useState(initOne);

    const [isError, setisError] = useState(false);
    const [isSuccess, setisSuccess] = useState(false);
    const [isMsg , setisMsg] = useState("");

    const [isUser, setIsUser ] = useState(false);
    const [user, setUser ] = useState({});
    const location = useNavigate();

    //checking if admin logged in or not
    useEffect(() => {
        const checkAdmin = () => {
        const user = JSON.parse(localStorage.getItem('profile'))
            if (user) {
                setIsUser(true)
                setUser(user);
            } else {
                setIsUser(false)
            }
        }
        checkAdmin();
    }, [location])

    const showModal = () => {
        setisSuccess(false)
        setisError(false);
        setisMsg("");
        setIsModalVisible(true);
        setisSignModalVisible(false)
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const showModalSignIn = () => {
        setisSuccess(false)
        setisError(false);
        setisMsg("");
        setIsModalVisible(false);
        setisSignModalVisible(true)
    };
    const handleOkSignIn = () => {
        setIsModalVisible(false);
        setisSignModalVisible(false)
    };
    const handleCancelSignIn = () => {
        setIsModalVisible(false);
        setisSignModalVisible(false)
    };
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    // sign up
    const SignUpNow = async () => {
        setisSuccess(false)
        setisError(false);
        setisMsg("");
        if(signUpData?.email === "" || signUpData?.password === "" || signUpData?.address === ""){
            setisError(true);
            setisMsg("Please Fill All Required Fields");
        }else{
            const {data} = await signUpUser(signUpData);
            if(data?.success === true){
                setisSuccess(true);
                setisMsg(data?.message)
                setTimeout(showModalSignIn, 2000);
            }else{
                setisError(true);
                setisMsg(data?.message)
            }
        }
    }

    // sign In Now
    const SignInNow = async () => {
        setisSuccess(false)
        setisError(false);
        setisMsg("");
        if(signInData?.email === "" || signInData?.password === ""){
            setisError(true);
            setisMsg("Please Fill All Required Fields");
        }else{
            const {data} = await signInUser(signInData);
            console.log("res : ", data);
            if(data?.success === true){
                setisMsg(data?.message)
                setisSuccess(true);
                localStorage.setItem("profile", JSON.stringify(data));
                setTimeout(window.location.reload(), 2000);
            }else{
                setisMsg(data?.message)
                setisError(true);
            }
        }
    }

    // logging out
    const logout = () => {
        localStorage.removeItem("profile");
        window.location.reload();
    }

    const savedProp = () => {
        if(isUser){
            location(`/allSavedProperties/${user?.User?._id}`);
        }else{
            showModal();
        }
    }

    const savedSearches = () => {
        if(isUser){
            location(`/allSavedSearches/${user?.User?._id}`);
        }else{
            showModal();
        }
    }

    const homePage = () => {
        location(`/`);
    }

    return (
        <>
            <div className="upperMainNavBar" >
                <img alt="logo" style={{width : '40px' , height : '40px' , cursor : 'pointer'}} src="/logo.jpg" onClick={homePage} />
                <div className="mainUpperDiv">
                    <Button className="btn" ghost size="medium"  onClick={savedProp} >
                        Saved Properties
                    </Button>
                    <Button className="btn" ghost size="medium" onClick={savedSearches}  >
                        Saved Searches
                    </Button>
                    {
                        isUser ? (
                            <Button className="btn" ghost size="medium" onClick={logout} >
                                Log Out
                            </Button>
                        ) : (
                            <Button className="btn" ghost size="medium" onClick={showModal} >
                                Sign In
                            </Button>
                        )
                    }
                </div>
                <img className="hideUperNav" alt="menu Icon" src="/icons/menuIcon.png" onClick={showDrawer} />
            </div>

            <Drawer width={250} closable={false}  placement="right" color="primary" bodyStyle={{ backgroundColor: "#3B4144", padding: "0" , width : "100%"}}  onClose={onClose} visible={visible}>
                <div className="upperMainNavBar" >
                    <div style={{display : 'flex', justifyContent : 'space-between' , marginBottom : '-15px' , marginLeft : '70px' , marginTop : '20px',  flexDirection: 'column' }} >
                        {
                            isUser ? (
                                <Button className="btn" ghost size="medium" onClick={logout} >
                                    Log Out
                                </Button>
                            ) : (
                                <Button className="btn" ghost size="medium" onClick={showModal} >
                                    Sign In
                                </Button>
                            )
                        }
                        <Button className="btn" style={{marginBottom : '10px' , color : '#FFFFFF'}} ghost size="medium" onClick={savedProp}   >
                            Saved Properties
                        </Button>
                        <Button className="btn" style={{marginBottom : '10px' , color : '#FFFFFF'}} ghost size="medium" onClick={savedSearches} >
                            Saved Searches
                        </Button>
                    </div>
                </div>
            </Drawer>


            <Modal className="modal" maskClosable={false} footer={[]} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="signIn" >
                    <Typography className="signInText" style={{fontSize : '20px' , color : '#c44569' ,  marginBottom : '20px' , textAlign : 'center'}} >Sign Up Now</Typography>
                    {
                        isError === true && (
                            <Alert
                                message={isMsg}
                                type="error"
                                style={{marginBottom: '10px' }}
                            />
                        )
                    }
                    {
                        isSuccess === true && (
                            <Alert
                                message={isMsg}
                                type="success"
                                style={{marginBottom : '10px' }}
                            />
                        )
                    }
                    <Typography className="signInText" >Email: </Typography>
                    <Input name="email" type="email" value={signUpData?.email} onChange={(e) => setsignUpData({...signUpData, [e.target.name] : e.target.value})} style={{borderRadius : '5px' , marginBottom : '10px'}} size="large" />
                    <Typography className="signInText" >Password: </Typography>
                    <Input name="password" value={signUpData?.password} onChange={(e) => setsignUpData({...signUpData, [e.target.name] : e.target.value})} type="password" style={{borderRadius : '5px' , marginBottom : '10px'}} size="large" />
                    <Typography className="signInText" >Address: </Typography>
                    <Input name="address" value={signUpData?.address} onChange={(e) => setsignUpData({...signUpData, [e.target.name] : e.target.value})} style={{borderRadius : '5px' , marginBottom : '10px'}} size="large" />
                    <Button className="signInBtn" onClick={SignUpNow} >Sign Up Now</Button>
                    <Typography style={{fontSize : '13px' , color : '#2f3640' , cursor : 'pointer', textAlign: 'center', textDecoration : 'underline', marginTop : '20px'}} onClick={showModalSignIn} >Already Have An Account? Sign In Now</Typography>
                </div>
            </Modal>

            <Modal className="modal" maskClosable={false} footer={[]} visible={isSignModalVisible} onOk={handleOkSignIn} onCancel={handleCancelSignIn}>
                <div className="signIn" >
                    <Typography className="signInText" style={{fontSize : '20px' , color : '#c44569' ,  marginBottom : '20px' , textAlign : 'center'}} >Sign In Now</Typography>
                    {
                        isError === true && (
                            <Alert
                                message={isMsg}
                                type="error"
                                style={{marginBottom: '10px' }}
                            />
                        )
                    }
                    {
                        isSuccess === true && (
                            <Alert
                                message={isMsg}
                                type="success"
                                style={{marginBottom : '10px' }}
                            />
                        )
                    }
                    <Typography className="signInText" >Email: </Typography>
                    <Input name="email" type="email" value={signInData?.address} onChange={(e) => setsignInData({...signInData, [e.target.name] : e.target.value})} style={{borderRadius : '5px' , marginBottom : '10px'}} size="large" />
                    <Typography className="signInText" >Password: </Typography>
                    <Input name="password" value={signInData?.password} onChange={(e) => setsignInData({...signInData, [e.target.name] : e.target.value})} type="password" style={{borderRadius : '5px' , marginBottom : '10px'}} size="large" />
                    <Button className="signInBtn" onClick={SignInNow} >Sign In Now</Button>
                    <Typography style={{fontSize : '13px' , color : '#2f3640' , cursor : 'pointer', textAlign: 'center', textDecoration : 'underline', marginTop : '20px'}}  onClick={showModal} >Do Not Have An Account?Sign Up Now</Typography>
                </div>
            </Modal>

        </>
    )
}

export default UpperNavbar
