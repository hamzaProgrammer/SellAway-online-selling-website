import React from 'react';
import './MainRightSide.css'
import {Typography} from 'antd'


const MainRightSideData = () => {
  return (
    <>
        <div className="mainRightDiv" >
            <div className="firstDiv" >
                <Typography className="SingleItemPrice" >$ 2,40,0000</Typography>
                <img alt="save later icon" style={{maxWidth :'30px' , maxHeight : '30px' , cursor : 'pointer'}} src="https://img.icons8.com/ios/50/000000/like--v1.png" />
            </div>
            <div className="propertyIcons" >
                <img alt="beds icon" className="propertyIcon" src="./icons/bedIcon.png" />
                <Typography className="iconHead" >2 </Typography>
                <img alt="beds icon" className="propertyIcon" src="./icons/bathroomIcon.png" />
                <Typography className="iconHead" >3</Typography>
                <img alt="beds icon" className="propertyIcon" src="./icons/areaIcon.png" />
                <Typography className="iconHead" >10 </Typography>
            </div>
            <Typography className="singlepropHead" >10-Marla Slightly Used House For Sale In Good Location Reasonable Price</Typography>
            <div className="singlePropAddress" >
                <Typography className="addressName" >cannt, lahore, pakistan</Typography>
                <Typography className="addressName" >2 weeks ago</Typography>
            </div>
        </div>
    </>
  );
}

export default MainRightSideData;
