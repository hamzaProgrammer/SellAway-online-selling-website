import React , {useState , useEffect } from 'react'
import {Typography} from 'antd';
import './Details.css'
import {getPropertyDesc} from '../../../../server_api/Api'
import {useParams} from 'react-router-dom'
import {Spin} from 'antd';


const Details = () => {
    const [ propImages , setPropImages ] = useState([]);
    const [ loading  , setLoading ] = useState(false);
    const {id} = useParams();
    useEffect(() => {
        const getImages = async () => {
            setLoading(true)
            const {data} = await getPropertyDesc(id);
            setPropImages(data?.Desc)
            setLoading(false)
        }
        getImages();
    },[id])
    return (
        <>
            <div className="singlePropDetailMain" >
                <Typography className="descHead" >Description</Typography>
                <Spin spinning={loading}>
                {
                    propImages ? (
                <Typography className="PropDesc" >
                    {propImages}
                </Typography>
                ) : (
                        <Typography className="PropDesc" style={{color : '#c0392b'}} >Could Not Find Description of Property</Typography>
                    )
                }
            </Spin>
            </div>
        </>
    )
}

export default Details
