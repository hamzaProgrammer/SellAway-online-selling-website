import React , {useState , useEffect } from 'react';
import { Row, Col , Typography , Input , Select , Divider ,  Upload  , Button , notification , Alert , Tag , Modal  } from 'antd';
import './AddNewProp.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {uploadPropertyData , uploadPropertyImages } from '../../server_api/Api'

const { TextArea } = Input;
const { Option } = Select;

const init = {
    title : '',
    city : '',
    address : '',
    price : 0,
    rooms : 0,
    baths : 0,
    bedrooms : 0,
    tvLaunch :'',
    kitchen: 0,
    area : 0,
    balcony : '',
    desc : '',
    status : '',
    owner : '',
    furnished: 'yes',
    features : ''
}

const initOne = {
    propertyImage : ""
}

const { CheckableTag } = Tag;

const AddNewProperty = () => {
    const [previewVisible , setpreviewVisible] = useState(false)
    const [ propertyData , setPropertyData ] = useState(init);
    const [isAdmin, setAdminLogin] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess ] = useState(false)
    const [msg, setMsg ] = useState(false)
    const location = useNavigate();
    const [previewImage , setpreviewImage] = useState('')
    const [ myFileOne , setMyFileone ] = useState([])
    const [ tagsData , settagsData ] = useState(['Servant Quarters', 'Drawing Room', 'Dining Room', 'Kitchen' , 'Study Room', 'Powder Room' , 'Gym' , 'Store Room' , 'Steam Room' , 'Lounge or Sitting Room' , 'Laundry Room']);
    const [ selectedTags , setselectedTags ] = useState([])
    // for adding new features using tags
    const handleTagChange = (tag, checked)  => {
        if(checked){
            setselectedTags([...selectedTags, tag]);
        }else{
            const myArray = selectedTags.filter(t => t !== tag);
            setselectedTags(myArray);
        }
        setPropertyData({...propertyData , features : selectedTags })
    }


    const handlePreview = (file) => {
        setpreviewImage(file.thumbUrl);
        setpreviewVisible(true)
    }
    const  handleCancel = () => setpreviewVisible(false)
    const handleChangeOne = (file) => {
        if(file?.fileList[0]?.status === "done"){
            let found = false;
            found = myFileOne.some(function(value) {
                if(value.name === file?.file?.originFileObj?.name){
                    return true
                }
            });

            if(found === false){
                setMyFileone([...myFileOne, file?.file?.originFileObj])
            }
        }
    }

    //checking if admin logged in or not
    useEffect(() => {
        const checkAdmin = () => {
        const user = JSON.parse(localStorage.getItem('profile'))
        if (user) {
            setAdminLogin(true)
            setPropertyData({...propertyData , owner : user?.User?._id})
        } else {
            setAdminLogin(false)
        }
        }
        checkAdmin();
    }, [location])

    const uploadButton = (
        <div>
            <div className="ant-upload-text" >Upload</div>
        </div>
    );

    // notification for added sucessfull
    const openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'SuccessFull',
            description:'New Property Added SuccessFully',
            duration : 3000
        });
    };

    // notification for added sucessfull
    const openNotificationWith = (type) => {
        notification[type]({
            message: 'UnSuccessFull',
            description:'Could Not Upload Property Images',
            duration : 3000
        });
    };

    // sending data to server
    const handleClick = async () => {
        console.log("propertyData : ", propertyData);
        console.log(" images : ",myFileOne );

        setIsError(false)
        setIsSuccess(false)
        setMsg("")
        if(propertyData?.title === '' || propertyData?.city === '' || propertyData?.price === 0 || propertyData?.address === '' || propertyData?.bedrooms === 0 || propertyData?.baths === 0 || propertyData?.status === ''  || propertyData?.area === 0 || propertyData?.bedrooms === 0  || propertyData?.desc  === '' || propertyData?.owner === '' ){
            setIsError(true)
            setMsg("Please Fill All Fields")
        }

        const {data} = await uploadPropertyData(propertyData);
        console.log("got data : ", data)
        let myData = data;

        if(myData?.success === true){
            setIsSuccess(true)
            setMsg(myData?.message)
            const formData = new FormData();
            myFileOne.forEach(file => formData.append('propertyImage', file))

            const {data} = await  uploadPropertyImages(formData , myData.PropertyId);
            console.log("res : ", data );
            if(data?.success === true){
                openNotificationWithIcon('success');
                setTimeout(openNotificationWithIcon, 2000)
                window.location.reload();
            }else{
                openNotificationWith('error')
            }
        }else{
            setIsError(true)
            setMsg(data?.message)
        }
    }



    return (
    <>
        <Row>
            <Col xs={{span : 16 , offset : 4}} sm={{span : 8 , offset : 4}} md={{span : 8 , offset : 8}} lg={{span : 8 , offset : 8}}  >
                <Typography className="newAddPropertyHead" >POST YOUR AD</Typography>
            </Col>
        </Row>
        <Row>
            <Col xs={{span :22 , offset : 1}} sm={{span :22 , offset : 1}} md={{span :22 , offset : 1}} lg={{span :22 , offset : 1}} >
                <div className="newAddPropertyMainDiv" >
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
                    <Typography className="labelNewAddProperty"  >Ad Title</Typography>
                    <Input className="newAddPropertyInput" allowClear showCount={true} maxLength={40} name="title  " onChange={(e) => setPropertyData({...propertyData , title : e.target.value})}  />
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Typography className="labelNewAddProperty" >Select City</Typography>
                            <Select size="large" defaultValue="Istanbul" className="newAddPropertySelect"  onChange={(value) => setPropertyData({...propertyData , city : value})}>
                                <Option value="istanbul"  >Istanbul</Option>
                                <Option value="izmir"  >Izmir</Option>
                                <Option value="antalya" >Antalya</Option>
                                <Option value="bursa"  >Bursa</Option>
                                <Option value="ankara">Ankara</Option>
                                <Option value="trabzon">Trabzon</Option>
                                <Option value="alanya">Alanya</Option>
                            </Select>
                        </Col>
                        <Col xs={24} sm={24} md={{span : 11 , offset : 1}} lg={{span : 11 , offset : 1}} >
                            <Typography className="labelNewAddProperty" >Type of Listing</Typography>
                            <Select size="large" defaultValue="Sell" className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , status : value})} >
                                <Option value="sell">Sell</Option>
                                <Option value="rent">Rent</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Typography className="labelNewAddProperty" >Ad Description</Typography>
                    <TextArea className="newAddPropertyInput" name="desc" onChange={(e) => setPropertyData({...propertyData , [e.target.name] : e.target.value})}  rows={7} maxLength={1000} />
                    <Divider style={{marginTop : '20px' , marginBottom : '0px' , backgroundColor : '#95a5a6'}} />
                    <Typography className="propDetNewAddProperty" >Property Details</Typography>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Typography className="labelNewAddProperty" >Select Bedrooms</Typography>
                            <Select size="large" defaultValue="1" className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , bedrooms : value})}>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3 </Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                            </Select>
                        </Col>
                        <Col xs={24} sm={24} md={{span : 11 , offset : 1}} lg={{span : 11 , offset : 1}} >
                            <Typography className="labelNewAddProperty" >Select No of Bathrooms</Typography>
                            <Select size="large" defaultValue="1" className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , baths : value})}>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3+ </Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Typography className="labelNewAddProperty" >No of Kitchens</Typography>
                            <Select size="large" defaultValue="Townhome" className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , kitchen : value})}>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3 </Option>
                                <Option value="4">4+</Option>
                            </Select>
                        </Col>
                        <Col xs={24} sm={24} md={{span : 11 , offset : 1}} lg={{span : 11 , offset : 1}} >
                            <Typography className="labelNewAddProperty" >Select No of Living Rooms</Typography>
                            <Select size="large" defaultValue="1" className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , rooms : value})}>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3+ </Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Typography className="labelNewAddProperty" >Has TV Launch</Typography>
                            <Select size="large" defaultValue="Yes" className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , tvLaunch : value})}>
                                <Option value="Yes">Yes, it has TV Launch</Option>
                                <Option value="No">No, It has no TV Launch</Option>
                            </Select>
                        </Col>
                        <Col xs={24} sm={24} md={{span : 11 , offset : 1}} lg={{span : 11 , offset : 1}} >
                            <Typography className="labelNewAddProperty" >Has Balcony</Typography>
                            <Select size="large" defaultValue="Yes" className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , balcony : value})}>
                                <Option value="Yes">Yes, it has Balcony</Option>
                                <Option value="No">No, It has no Balcony</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Typography className="labelNewAddProperty" >Is Furnished</Typography>
                            <Select size="large" defaultValue="Yes" className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , furnished : value})}>
                                <Option value="Yes">Yes, it is Furnished</Option>
                                <Option value="No">No, It is not Furnished</Option>
                            </Select>
                        </Col>
                        <Col xs={24} sm={24} md={{span : 11 , offset : 1}} lg={{span : 11 , offset : 1}} >
                            <Typography className="labelNewAddProperty" >Area in (sq/km)</Typography>
                            <Input className="newAddPropertyInput" allowClear showCount={true} type="number" name="area" onChange={(e) => setPropertyData({...propertyData , [e.target.name] : e.target.value})}  />
                        </Col>
                    </Row>
                    <Divider style={{marginTop : '20px' , marginBottom : '0px' , backgroundColor : '#95a5a6'}} />
                    <Typography className="propDetNewAddProperty" >Price and Address</Typography>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Typography className="labelNewAddProperty" >Complete Address</Typography>
                            <Input className="newAddPropertyInput" allowClear showCount={true} maxLength={200} name="address" onChange={(e) => setPropertyData({...propertyData , [e.target.name] : e.target.value})}  />
                        </Col>
                        <Col xs={24} sm={24} md={{span : 11 , offset : 1}} lg={{span : 11 , offset : 1}} >
                            <Typography className="labelNewAddProperty" >Your  Price</Typography>
                            <Input className="newAddPropertyInput" allowClear showCount={true} type="number" name="price" onChange={(e) => setPropertyData({...propertyData , [e.target.name] : e.target.value})} />
                        </Col>
                    </Row>
                    <Divider style={{marginTop : '20px' , marginBottom : '0px' , backgroundColor : '#95a5a6'}} />
                    <Typography className="propDetNewAddProperty" >Add Some Features of your Property</Typography>
                    <Row style={{marginTop : '15px'}} >
                        <Col xs={24} sm={24} md={24} lg={24}>
                            {tagsData.map(tag => (
                                    <CheckableTag
                                    key={tag}
                                    checked={selectedTags.indexOf(tag) > -1}
                                    onChange={checked => handleTagChange(tag, checked)}
                                    style={{fontWeight : 600 , fontSize : '18px' , border : '1px solid #636e72' , paddingTop : '3px' , height : '30px' , textAlign : 'center' , alignSelf : 'center' , marginBottom : '15px' }}
                                >
                                    {tag}
                                </CheckableTag>
                            ))}
                        </Col>
                    </Row>
                    <Divider style={{marginTop : '20px' , marginBottom : '0px' , backgroundColor : '#95a5a6'}} />
                    <Typography className="propDetNewAddProperty" >Upload Some Your Property Images</Typography>
                    <Row style={{marginTop : '15px'}} >
                        <Col xs={4} sm={4} md={4} lg={4}></Col>
                        <Col xs={16} sm={16} md={16} lg={16} style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column'}} >
                            <Typography style={{fontSize: '12px' , color : '#d63031'}} >You can upload many photos at the same time</Typography>
                            <div className="clearfix">
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    maxCount={12}
                                    multiple={true}
                                    onPreview={handlePreview}
                                    onChange={handleChangeOne}
                                >
                                    {myFileOne.length === 12 ? null : uploadButton}
                                </Upload>
                                <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4}></Col>
                    </Row>
                    <Row style={{marginTop : '15px'}} >
                        <Col xs={0} sm={0} md={8} lg={8} style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column'}} >
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column'}} >
                            <Button className="newAddPropertyBtn" onClick={handleClick} >Post Now</Button>
                        </Col>
                        <Col xs={0} sm={0} md={8} lg={8} style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column'}} >
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col xs={0} sm={0} md={1} lg={1} ></Col>
        </Row>
    </>
    );
}

export default AddNewProperty;
