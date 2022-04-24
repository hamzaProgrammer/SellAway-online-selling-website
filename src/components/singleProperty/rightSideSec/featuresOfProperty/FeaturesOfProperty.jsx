import React ,{useState , useEffect} from 'react'
import {Row, Col , Typography , Divider ,Spin } from 'antd';
import './FeaturesMain.css'
import {getPropertyFeatures} from '../../../../server_api/Api'
import {useParams} from 'react-router-dom'

const FeaturesOfProperty = () => {
    const [ realtedData , setRelated ] = useState([]);
    const [ loading , setloading ] = useState(false);

    const {id} = useParams();
    useEffect(() => {
        const getImages = async () => {
            setloading(true)
            const {data} = await getPropertyFeatures(id);
            setRelated(data)
            setloading(false)
        }
        getImages();
    },[id])
    return (
        <>{console.log("realtedData?.TvLaunch : ",realtedData?.TvLaunch)}
            <div className="featuresMainDiv" >
                <Typography className="featuresHead" >Main Features</Typography>
                <Divider style={{backgroundColor : '#dcdde1' , marginTop : '5px'}} />
                <Spin spinning={loading} >
                    <Row gutter={[10,16]} >
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHead" >Bedrooms : </Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHeadOne" >{realtedData?.Bedrooms}</Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHead" >Bathrooms : </Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHeadOne" >{realtedData?.Baths}</Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHead" >Kicthens : </Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHeadOne" >{realtedData?.Kitchens}</Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHead" > Rooms : </Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHeadOne" >{realtedData?.Rooms}</Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHead" > TV Launch : </Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHeadOne" >{realtedData?.TvLaunch ? "Yes" : "No"}</Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHead" > Balcony : </Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHeadOne" >{realtedData?.Balcony ? "Yes" : "No"}</Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHead" > Furnished : </Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHeadOne" >{realtedData?.Furnished ? "Yes" : "No"}</Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHead" > Area : </Typography>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                            <Typography className="featureHeadOne" >{realtedData?.Area} sq/km</Typography>
                        </Col>
                    </Row>
                </Spin>
            </div>
        </>
    )
}

export default FeaturesOfProperty
