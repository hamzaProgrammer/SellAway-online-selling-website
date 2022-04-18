import React from 'react'
import {Row , Col , Typography } from 'antd';
import Sidebar from '../sidebar/Sidebar'
import SavedSearchComp from './SavedSearchComp'



const MyProfile = () => {
    return (
        <>
            <Row>
                <Col xs={1} sm={1} md={1} lg={0} xl={0}>
                    <Sidebar />
                </Col>
            </Row>

            <Row>
                <Col xs={0} sm={0} md={0} lg={4} xl={4}>
                    <Sidebar />
                </Col>
                <Col xs={{span : 24 , offset : 0}} sm={{span : 22 , offset : 1}} md={{span : 19 , offset :2}} lg={{span : 19 , offset : 0}} xl={{span : 19 , offset : 0}}>
                    <Typography style={{fontSize : '20px' , fontWeight : 700 , marginLeft : '20px' , marginBottom : '40px' , marginTop : '10px'}} >All Saved Searches</Typography>
                    <SavedSearchComp />
                    <SavedSearchComp />
                    <SavedSearchComp />
                </Col>
            </Row>
        </>
    )
}

export default MyProfile
