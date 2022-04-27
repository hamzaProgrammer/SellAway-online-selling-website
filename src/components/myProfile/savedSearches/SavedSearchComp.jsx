import React , {useState , useEffect } from 'react'
import './SavedSearch.css'
import { Tag , Row , Col , Popconfirm , Typography , notification , Spin } from 'antd';
import {DeleteOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom';
import {saveOrUnsaveSavedSearch} from '../../../server_api/Api'



const InnerComp = ({item ,setIsRender}) => {
    const [ myUrl , setUrl ] = useState("")
    const [ user , setUser ] = useState("")
    const [ mySendArray , setMyArray ] = useState([]);
    const [ sendItem , setSendItem ] = useState({savedSearch : ''});

    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Saved Search Removed SuccessFully',
        });
    };

    useEffect(() => {
        setSendItem({savedSearch : item})
        let text = item
        const myArray = text.split("?")
        toString(myArray[1])
        setUrl(myArray[1])
        const yourArray = myArray[1].split("&")
        const length = yourArray?.length;
        toString(yourArray[1]);
        let newArray = [];
        for(let i =0; i !== length; i++){
            let ourArray = yourArray[i].split("=")
            newArray.push(ourArray)
        }
        setMyArray(newArray)
    },[item])

    //checking if admin logged in or not
    useEffect(() => {
        const checkAdmin = () => {
            const myUser = JSON.parse(localStorage.getItem('profile'))
            if (myUser) {
                setUser(myUser?.User?._id)
            } else {
                setUser("")
            }
        }
        checkAdmin();
    }, [item])


    // Popconfirm
    function confirm() {
        const deleteSearch = async () =>{
            const {data} = await saveOrUnsaveSavedSearch(user , sendItem)
            if(data?.success){
                setIsRender(true)
                openNotificationWithIcon('success')
            }else{
                openNotificationWithIcon('error')
                setIsRender(false)
            }
        }
        deleteSearch()
    }

    function cancel(e) {
    }

        return (
        <>
            <div className="savedSearchesDiv" style={{borderBottom : '1px solid #dfe6e9'}} >
                <div style={{display : 'flex' , justifyContent : 'space-between' ,marginBottom : '10px' , alignItems : 'center'}} >
                    <Row>
                        {
                            mySendArray?.length > 0 ? (
                                mySendArray?.map((itemOne) => (
                                    <Col xs={{span : 13 , offset : 1}} sm={{span : 13 , offset : 1}} md={{span : 7, offset : 1}} lg={{span : 7, offset : 1}} xl={{span : 7, offset : 1}} style={{marginBottom : '10px' , marginLeft : '10px'}} >
                                        {
                                            itemOne[0]  !== "page" && (
                                                itemOne[0] === "istvLaunch" ? (
                                                    <Tag color="red">TV Launch : {itemOne[1]}</Tag>
                                                ) : (
                                                    <Tag color="red">{itemOne[0]} : {itemOne[1]}</Tag>
                                                )
                                            )
                                        }
                                    </Col>
                                ))
                            ) : (
                                <Typography style={{fontSize : '15px' , color : '#c23616' , textAlign : 'center' , marginTop : '20px'}} >You have No Saved Searches</Typography>
                            )
                        }
                    </Row>
                </div>
                <div className="lowerSaved" >
                    <Link to={`/allProperties?${myUrl}`} target="_blank" >
                        <img alt="view icon" style={{maxWidth : '30px' , maxHeight : '30px' , marginRight : '10px', marginBottom: '7px' }} src="/icons/viewIcon.png" />
                        <Popconfirm
                            title="Are you sure to delete this Saved Search?"
                            onConfirm={() => confirm()}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <DeleteOutlined style={{color : '#c23616' , fontWeight: 600 , fontSize : '25px' , cursor : 'pointer'}}  />
                        </Popconfirm>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default InnerComp
