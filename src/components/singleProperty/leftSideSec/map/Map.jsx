import React , {useState , useEffect } from 'react'
import {
    GoogleMap,
    Marker,
    InfoWindow,
} from '@react-google-maps/api'
import {Typography , Spin} from 'antd';
import {getPropertyCords} from '../../../../server_api/Api'
import {useParams} from 'react-router-dom'


const Map = () => {
    const [ propMap , setPropMap ] = useState([]);
    const [ loading , setloading ] = useState(false);
    const [ defaultCenter , setDefaultCenter ] = useState({})

    const {id} = useParams();
    useEffect(() => {
        const getImages = async () => {
            setloading(true)
            const {data} = await getPropertyCords(id);
            setDefaultCenter({lat: Number(data?.Coordinates[0]) ,lng : Number(data?.Coordinates[1])})
            setPropMap(data)
            setloading(false)
            setSelected(true)
        }
        getImages();
    },[id])
    // google map
    const mapStyles = {
        height: "300px",
        minWidth: "100%",
        marginBottom : "20px"
    };
    const [ selected, setSelected ] = useState(false);
    const onSelect = item => {
        setSelected(true);
    }


    return (
        <>
            <div className="map" style={{border : '1px solid #b2bec3', borderRadius : '5px' , marginTop : '15px' , padding : '10px'}} >
                <Typography style={{fontSize : '22px', paddingBottom : '10px',  fontWeight : 600}} > Location on Google Map</Typography>
                <Spin spinning={loading} >
                    {
                        propMap ? (
                            <GoogleMap
                                mapContainerStyle={mapStyles}
                                zoom={13}
                                center={defaultCenter}
                                scrollwheel = {false}
                                streetViewControl = {false}
                                mapTypeControl = {false}
                            >
                                {

                                    <Marker key={propMap?.Title}
                                        position={defaultCenter}
                                        onClick={() => onSelect(true)}
                                    >
                                        {
                                            selected && (
                                                <InfoWindow
                                                    position={defaultCenter}
                                                    clickable={true}
                                                    onCloseClick={() => setSelected(false)}
                                                >
                                                    <div style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column' , width : '150px'}} >
                                                        {
                                                            propMap?.Image && (
                                                                <img alt="property cover" width="100%" height="70" src={propMap?.Image[0]}  style={{objectFit : 'cover' , }} />
                                                            )
                                                        }
                                                        <Typography style={{fontSize: '15px' , fontWeight : 600  }} >{propMap?.Title}</Typography>
                                                        <Typography style={{fontSize: '12px' , paddingTop : '10px'  }} >{propMap?.Address}</Typography>
                                                    </div>
                                                </InfoWindow>
                                            )
                                        }
                                    </Marker>
                                }
                            </GoogleMap>
                        ) : (
                            <Typography style={{fontSize : '20px', textAlign : 'center' , colro : '#c0392b'}} >Could Not get Address of Property on Map</Typography>
                        )
                    }
                </Spin>
            </div>
        </>
    )
}

export default Map
