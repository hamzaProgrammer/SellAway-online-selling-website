import React from 'react';
import { Layout } from 'antd';


import NavbarTop from '../../components/upperNavbar/UpperNavbar'
import MainNavbar from '../../components/mainNavbar/ManiNavbar'
import CityProperty from  '../../components/cityProperties/CityPropertries'
import MyFooter from '../../components/footer/Footer'

const { Header, Footer, Content } = Layout;

const CityProperties = () => {
  return (
    <>
        <Layout>
            <Header style={{backgroundColor :'#FFFFFF', position: 'sticky', zIndex: 1, width: '100%' , left : 0, right : 0 , top : 0 }} className="homeHeader" >
                    <NavbarTop />
                    <MainNavbar />
            </Header>
                <Content style={{backgroundColor : '#FFFFFF' , padding : '20px'}} >
                  <CityProperty />
                </Content>
            <Footer style={{backgroundColor : '#F7F8F8'}} >
                <MyFooter />
            </Footer>
        </Layout>
    </>
  );
}

export default CityProperties;
