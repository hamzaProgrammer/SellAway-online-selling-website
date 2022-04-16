import React from 'react';
import { Row, Col  } from 'antd';
import './MainSingle.css'

import ImagesCarousel from './leftSideSec/imageCrousel/ImagesCarousel'
import Desc from './leftSideSec/propertyDetails/Details'
import RelatedProperties from './leftSideSec/relatedProperties/RelatedCarousel'
import MapOfProperty from './leftSideSec/map/Map'


import RightSideData from './rightSideSec/propertyDet/MainRightSideData'
import ContactSeller from './rightSideSec/contactSeller/ContactSeller'
import Features from './rightSideSec/featuresOfProperty/FeaturesOfProperty'



const MainSinglePropComp = () => {
  return (
    <>
        <Row gutter={16}>
            <Col xs={{span : 24 , offset : 0}} sm={{span : 24 , offset : 0}} md={{span : 24 , offset : 0}} lg={{span : 23 , offset : 1}} xl={{span : 23 , offset : 1}}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                        <ImagesCarousel />
                        <div className="showFeatures" >
                            <RightSideData/>
                            <Features />
                        </div>
                        <Desc />
                        <div className="showFeatures" >
                            <ContactSeller />
                        </div>
                        <MapOfProperty />
                        <RelatedProperties />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <div className="hideFeatures" >
                            <RightSideData/>
                            <Features />
                            <ContactSeller />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
  );
}

export default MainSinglePropComp;
