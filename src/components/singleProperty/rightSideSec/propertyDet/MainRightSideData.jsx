import React , {useState , useEffect} from 'react';
import './MainRightSide.css'
import {Typography , Spin } from 'antd'
import {getPropertyDet} from '../../../../server_api/Api'
import {useParams} from 'react-router-dom'
import moment from 'moment'


const MainRightSideData = () => {
    const [ realtedData , setRelated ] = useState([]);
    const [ loading , setloading ] = useState(false);

    const {id} = useParams();
    useEffect(() => {
        const getImages = async () => {
            setloading(true)
            const {data} = await getPropertyDet(id);
            setRelated(data)
            setloading(false)
        }
        getImages();
    },[id])
  return (
    <>
        <div className="mainRightDiv" >
            <Spin spinning={loading} >
                <div className="firstDiv" >
                    <Typography className="SingleItemPrice" >$ {realtedData?.Price?.toLocaleString()}</Typography>
                    <img alt="save later icon" style={{maxWidth :'30px' , maxHeight : '30px' , cursor : 'pointer'}} src="https://img.icons8.com/ios/50/000000/like--v1.png" />
                </div>
                <div className="propertyIcons" >
                    <img alt="beds icon" className="propertyIcon" src="/icons/bedIcon.png" />
                    <Typography className="iconHead" >{realtedData?.Bedrooms} </Typography>
                    <img alt="beds icon" className="propertyIcon" src="/icons/bathroomIcon.png" />
                    <Typography className="iconHead" >{realtedData?.Baths}</Typography>
                    <img alt="beds icon" className="propertyIcon" src="/icons/areaIcon.png" />
                    <Typography className="iconHead" >{realtedData?.Area} </Typography>
                </div>
                <Typography className="singlepropHead" >{realtedData?.Title}</Typography>
                <div style={{display : 'flex' , justifyContent : 'space-between' , paddingLeft: '10px' , paddingTop : '15px',  paddingRight : '10px'}}  >
                    <Typography   >{realtedData?.Address?.split(" ").splice(-4)}</Typography>
                    <Typography   > {moment(realtedData?.CreatedAt).fromNow()}</Typography>
                </div>
            </Spin>
        </div>
    </>
  );
}

export default MainRightSideData;
