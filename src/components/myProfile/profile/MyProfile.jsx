import React from 'react'
import {Row , Col } from 'antd';
import Sidebar from '../sidebar/Sidebar'
import EditProfile from './ProfileComp'



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
                <Col xs={{span : 24 , offset : 0}} sm={{span : 22 , offset : 2}} md={{span : 20 , offset :4}} lg={{span : 20 , offset : 0}} xl={{span : 20 , offset : 0}}>
                    <EditProfile />
                </Col>
            </Row>
        </>
    )
}

export default MyProfile
