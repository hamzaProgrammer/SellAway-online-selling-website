import React , {useState , useEffect } from 'react';
import { Row, Col , Typography , Input , Select , Divider ,  Upload  , Button , message,  notification , Alert , Tag , Modal  } from 'antd';
import '../addNewProperty/AddNewProp.css'
import {useNavigate , useParams} from 'react-router-dom'
import {updateSingleProperty , uploadSinglePropertyImage , getSinglePropData , deleteSinglePropertyImage , addNewPropertyImage } from '../../server_api/Api'

const { TextArea } = Input;
const { Option } = Select;


const { CheckableTag } = Tag;

const AddNewProperty = () => {
    const [previewVisible , setpreviewVisible] = useState(false)
    const [ propertyData , setPropertyData ] = useState({});
    const [isAdmin, setAdminLogin] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess ] = useState(false)
    const [msg, setMsg ] = useState(false)
    const location = useNavigate();
    const [previewImage , setpreviewImage] = useState('')
    const [ myFileOne , setMyFileone ] = useState(false)
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
    const handleChangeOne = async (file , id ,  index) => {
        if(file?.fileList[0]?.status === "done"){
            const formData = new FormData();
            formData.append('propertySingleImage', file.file.originFileObj)
            const {data} = await uploadSinglePropertyImage(formData , id , index )

            if(data?.success === true){
                success();
                setMyFileone(true)
            }else{
                error();
            }
        }
    }
    const success = () => {
        message.success('Image Updated SuccessFully');
    };
    const error = () => {
        message.error('Image Not Updated');
    };

    const successDel = () => {
        message.success('Image Deleted SuccessFully');
    };
    const errorDel = () => {
        message.error('Image Could Not Be Deleted');
    };
    const handleDelete = async (id,index) => {
        const {data} = await deleteSinglePropertyImage(id , index)

        if(data?.success === true){
            successDel();
            setMyFileone(true)
        }else{
            errorDel();
        }
    }

    const successAdd = () => {
        message.success('Image Added SuccessFully');
    };
    const errorAdd = () => {
        message.error('Image Could Not Be Added');
    };
    const uploadOneImage = async (file) => {
        if(file?.fileList[0]?.status === "done"){
            const formData = new FormData();
            formData.append('addPropertyImage', file.file.originFileObj)
            const {data} = await addNewPropertyImage(formData , propertyData._id , propertyData.owner)

            if(data?.success === true){
                successAdd();
                setMyFileone(true)
            }else{
                errorAdd();
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

    
    const {id} = useParams();
    //checking if admin logged in or not
    useEffect(() => {
        const getPropertyData = async () => {
            const {data} = await getSinglePropData(id);
            setPropertyData(data?.SingleProperty)
            console.log("data?.SingleProperty : ",data?.SingleProperty)
            setselectedTags(data?.SingleProperty?.features)
        }
        getPropertyData();
    }, [id])

    useEffect(() => {
        const getPropertyData = async () => {
            console.log("now calling")
            const {data} = await getSinglePropData(id);
            setselectedTags(data?.SingleProperty?.features)
            setPropertyData(data?.SingleProperty)
        }
        getPropertyData();
    }, [myFileOne])

    const uploadButton = (
        <div>
            <div className="ant-upload-text" >Update</div>
        </div>
    );

    const AddButton = (
        <div>
            <div className="ant-upload-text" >Add New Image</div>
        </div>
    );

    // notification for added sucessfull
    const openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'SuccessFull',
            description:'Property Updated SuccessFully',
            duration : 3000
        });
    };

    // sending data to server
    const handleClick = async () => {
        var key = "images";
        delete propertyData[key];
        console.log("propertyData : ", propertyData);

        setPropertyData({...propertyData , features : selectedTags })
        setIsError(false)
        setIsSuccess(false)
        setMsg("")
        const {data} = await updateSingleProperty(propertyData , propertyData._id , propertyData.owner);
        console.log("got data : ", data)
        let myData = data;

        if(myData?.success === true){
            setIsSuccess(true)
            setMsg(myData?.message)
            openNotificationWithIcon('success');
            window.location.reload();
        }else{
            setIsError(true)
            setMsg(data?.message)
        }
    }


    return (
    <>
        <Row>
            <Col xs={{span : 16 , offset : 4}} sm={{span : 8 , offset : 4}} md={{span : 8 , offset : 8}} lg={{span : 8 , offset : 8}}  >
                <Typography className="newAddPropertyHead" >Edit Your AD</Typography>
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
                    <Input className="newAddPropertyInput" allowClear showCount={true} maxLength={40} value={propertyData?.title} name="title  " onChange={(e) => setPropertyData({...propertyData , title : e.target.value})}  />
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Typography className="labelNewAddProperty" >Select City</Typography>
                            <Select size="large" value={propertyData?.city} className="newAddPropertySelect"  onChange={(value) => setPropertyData({...propertyData , city : value})}>
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
                            <Select size="large" value={propertyData?.status} className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , status : value})} >
                                <Option value="sell">Sell</Option>
                                <Option value="rent">Rent</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Typography className="labelNewAddProperty" >Ad Description</Typography>
                    <TextArea className="newAddPropertyInput" name="desc" value={propertyData?.desc} onChange={(e) => setPropertyData({...propertyData , [e.target.name] : e.target.value})}  rows={7} maxLength={1000} />
                    <Divider style={{marginTop : '20px' , marginBottom : '0px' , backgroundColor : '#95a5a6'}} />
                    <Typography className="propDetNewAddProperty" >Property Details</Typography>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Typography className="labelNewAddProperty" >Select Bedrooms</Typography>
                            <Select size="large" value={propertyData?.bedrooms} className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , bedrooms : value})}>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3 </Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                            </Select>
                        </Col>
                        <Col xs={24} sm={24} md={{span : 11 , offset : 1}} lg={{span : 11 , offset : 1}} >
                            <Typography className="labelNewAddProperty" >Select No of Bathrooms</Typography>
                            <Select size="large" value={propertyData?.baths} className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , baths : value})}>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3+ </Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Typography className="labelNewAddProperty" >No of Kitchens</Typography>
                            <Select size="large" value={propertyData?.kitchen} className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , kitchen : value})}>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3 </Option>
                                <Option value="4">4+</Option>
                            </Select>
                        </Col>
                        <Col xs={24} sm={24} md={{span : 11 , offset : 1}} lg={{span : 11 , offset : 1}} >
                            <Typography className="labelNewAddProperty" >Select No of Living Rooms</Typography>
                            <Select size="large" value={propertyData?.rooms} className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , rooms : value})}>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3+ </Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Typography className="labelNewAddProperty" >Has TV Launch</Typography>
                            <Select size="large" value={propertyData?.tvLaunch === true ? "Yes" : "No"} className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , tvLaunch : value})}>
                                <Option value="Yes">Yes, it has TV Launch</Option>
                                <Option value="No">No, It has no TV Launch</Option>
                            </Select>
                        </Col>
                        <Col xs={24} sm={24} md={{span : 11 , offset : 1}} lg={{span : 11 , offset : 1}} >
                            <Typography className="labelNewAddProperty" >Has Balcony</Typography>
                            <Select size="large" value={propertyData?.balcony === true ? "Yes" : "No"} className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , balcony : value})}>
                                <Option value="Yes">Yes, it has Balcony</Option>
                                <Option value="No">No, It has no Balcony</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Typography className="labelNewAddProperty" >Is Furnished</Typography>
                            <Select size="large" value={propertyData?.furnished === true ? "Yes" : "No"} className="newAddPropertySelect" onChange={(value) => setPropertyData({...propertyData , furnished : value})}>
                                <Option value="Yes">Yes, it is Furnished</Option>
                                <Option value="No">No, It is not Furnished</Option>
                            </Select>
                        </Col>
                        <Col xs={24} sm={24} md={{span : 11 , offset : 1}} lg={{span : 11 , offset : 1}} >
                            <Typography className="labelNewAddProperty" >Area in (sq/km)</Typography>
                            <Input className="newAddPropertyInput" value={propertyData?.area} allowClear showCount={true} type="number" name="area" onChange={(e) => setPropertyData({...propertyData , [e.target.name] : e.target.value})}  />
                        </Col>
                    </Row>
                    <Divider style={{marginTop : '20px' , marginBottom : '0px' , backgroundColor : '#95a5a6'}} />
                    <Typography className="propDetNewAddProperty" >Price and Address</Typography>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Typography className="labelNewAddProperty" >Complete Address</Typography>
                            <Input className="newAddPropertyInput" value={propertyData?.address} allowClear showCount={true} maxLength={200} name="address" onChange={(e) => setPropertyData({...propertyData , [e.target.name] : e.target.value})}  />
                        </Col>
                        <Col xs={24} sm={24} md={{span : 11 , offset : 1}} lg={{span : 11 , offset : 1}} >
                            <Typography className="labelNewAddProperty" >Your  Price</Typography>
                            <Input className="newAddPropertyInput" value={propertyData?.price} allowClear showCount={true} type="number" name="price" onChange={(e) => setPropertyData({...propertyData , [e.target.name] : e.target.value})} />
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
                    <Typography className="propDetNewAddProperty" >Update  Your Property Images</Typography>
                    <Row style={{marginTop : '15px'}} >
                        {
                            propertyData?.images?.length > 0 && (
                                propertyData?.images?.map((item , ind) => (
                                    <Col xs={24} sm={12} md={16} lg={6} xl={6} style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column'}} >
                                        <div className="clearfix clear" >
                                            <div style={{display : 'flex', flexDirection : 'column'}} >
                                                <img alt="imag cover" style={{maxWidth : '100px' , minHeight : '100px' , minWidth : '100px' , maxHeight : '100px', marginRight : '20px' , marginBottom : '5px'}} src={item} />
                                                <Button style={{backgroundColor : '#eb4d4b', marginBottom : '10px', color : '#FFFFFF' , border: 'none' , fontWeight : 600,  borderRadius : '10px' , marginLeft : '10px',  maxWidth : '80px'}} onClick={() => handleDelete(propertyData?._id , ind)} >Remove</Button>
                                            </div>
                                            <Upload
                                                action="//jsonplaceholder.typicode.com/posts/"
                                                listType="picture-card"
                                                maxCount={1}
                                                onPreview={handlePreview}
                                                onChange={(file) => handleChangeOne(file , propertyData?._id , ind)}
                                            >
                                                {uploadButton}
                                            </Upload>
                                            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                            </Modal>
                                        </div>
                                    </Col>
                                ))
                            )
                        }
                    </Row>
                    <Divider style={{marginTop : '20px' , marginBottom : '0px' , backgroundColor : '#95a5a6'}} />
                    <Typography className="propDetNewAddProperty" >Add New Property Images</Typography>
                    <Row style={{marginTop : '15px'}} >
                        <Col xs={0} sm={0} md={8} lg={8} xl={8} ></Col>
                        <Col xs={24} sm={12} md={8} lg={8} xl={8} style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column'}} >
                            <div className="clearfix clear" >
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    maxCount={1}
                                    onPreview={handlePreview}
                                    onChange={(file) => uploadOneImage(file)}
                                >
                                    {AddButton}
                                </Upload>
                                <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        </Col>
                        <Col xs={0} sm={0} md={8} lg={8} xl={8} ></Col>
                    </Row>
                    <Row style={{marginTop : '15px'}} >
                        <Col xs={0} sm={0} md={8} lg={8} style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column'}} >
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column'}} >
                            <Button className="newAddPropertyBtn" onClick={handleClick} >Update Now</Button>
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
