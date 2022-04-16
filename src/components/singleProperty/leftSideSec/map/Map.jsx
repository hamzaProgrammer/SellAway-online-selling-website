import React , {useState} from 'react'
import {
    GoogleMap,
    Marker,
    InfoWindow,
} from '@react-google-maps/api'
import {Typography} from 'antd';


const Map = () => {
    // google map
    const mapStyles = {
        height: "300px",
        minWidth: "100%",
        marginBottom : "20px"
    };
    const [ isSpinning , setIsSpinning ] = useState(false)
    const [ defaultCenter , setDefaultCenter ] = useState({lat: 33.72968039150898,lng : 73.03713213941786})
    const [ selected, setSelected ] = useState(true);
    const [ loading , setloading ] = useState(false);
    const onSelect = item => {
        setSelected(true);
    }

    // getting coordinates of current cities
    // useEffect(() => {
    //     if(propertyData?.coordinates?.length > 0 ){
    //         setIsSpinning(true);
    //         setDefaultCenter({lat: propertyData?.coordinates[0],lng : propertyData?.coordinates[1]})
    //         setIsSpinning(false);
    //     }
    // },[propertyData?.coordinates  ])

    return (
        <>
            <div className="map" style={{border : '1px solid #b2bec3', borderRadius : '5px' , marginTop : '15px' , padding : '10px'}} >
                <Typography style={{fontSize : '22px', paddingBottom : '10px',  fontWeight : 600}} > Location on Google Map</Typography>
                {/* {
                    propertyData !== {} ? (
                        propertyData?.coordinates && (
                            propertyData?.coordinates.length > 0  && ( */}
                                <GoogleMap
                                    mapContainerStyle={mapStyles}
                                    zoom={13}
                                    center={defaultCenter}
                                    scrollwheel = {false}
                                    streetViewControl = {false}
                                    mapTypeControl = {false}
                                >
                                    {

                                        <Marker key={"hamza"}
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
                                                            <img alt="property cover" width="100%" height="70" src="https://lh5.googleusercontent.com/p/AF1QipM-2PszVWE7sLT5mQXfypvwSvtBOdiRrBT9eAV7=w408-h265-k-no" style={{objectFit : 'cover' , }} />
                                                            <Typography style={{fontSize: '15px' , fontWeight : 600  }} >hamza Property</Typography>
                                                            <Typography style={{fontSize: '12px' , paddingTop : '10px'  }} >Rwp</Typography>
                                                        </div>
                                                    </InfoWindow>
                                                )
                                            }
                                        </Marker>
                                    }
                                </GoogleMap>
                            {/* )
                        )
                    ) : (
                        <Typography style={{fontSize : '22px' , marginTop : '15px' , fontWeight : 700, textAlign : 'center'}} >Could Not Found Location of Property</Typography>
                    )
                } */}
            </div>
        </>
    )
}

export default Map
