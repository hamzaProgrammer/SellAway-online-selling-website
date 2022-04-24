import React , {useState , useEffect } from 'react'
import './ImagesCarousel.css'
import Flickity from "react-flickity-component";
import {getPropertyImages} from '../../../../server_api/Api'
import {useParams} from 'react-router-dom'
import {Spin} from 'antd';



const ImagesCarousel = () => {
    const [ propImages , setPropImages ] = useState([]);
    const [ loading  , setLoading ] = useState(false);
    const {id} = useParams();
    useEffect(() => {
        const getImages = async () => {
            setLoading(true)
            const {data} = await getPropertyImages(id);
            setPropImages(data?.PropertyImages)
            setLoading(false)
        }
        getImages();
    },[id])
    return (
        <>
            <Spin spinning={loading}>
                {
                    propImages.length > 0 ? (
                        <Flickity >
                            {
                                propImages?.map((item) => (
                                    <img style={{minWidth : '100%' , borderRadius : '5px', maxHeight : '400px' , objectFit : 'cover'}} alt="Property Imag" src={item}  />
                                ))
                            }
                        </Flickity>
                    ) : (
                        <img style={{minWidth : '100%' , borderRadius : '5px', maxHeight : '400px' , objectFit : 'cover'}} alt="Img dummy" src="/images/imageNotFound.jpg"   />
                    )
                }
            </Spin>
        </>
    )
}

export default ImagesCarousel