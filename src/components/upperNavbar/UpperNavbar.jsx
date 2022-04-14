import React from 'react'
import './UpperNavbar.css'
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';


const UpperNavbar = () => {
    return (
        <>
            <div className="upperMainNavBar" >
                <img alt="logo" style={{width : '40px' , height : '40px'}} src="./logo.jpg" />
                <Button className="btn" icon={<HomeOutlined style={{fontSize : '18px' , color : '#57606f'}} className="logoIcon" />} ghost size="medium"  >
                    Property
                </Button>
            </div>
        </>
    )
}

export default UpperNavbar
