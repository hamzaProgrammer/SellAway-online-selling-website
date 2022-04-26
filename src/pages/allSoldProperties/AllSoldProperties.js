import React from 'react';
import { Layout } from 'antd';
import '../home/Home.css'


import NavbarTop from '../../components/upperNavbar/UpperNavbar'
import AllSoldProperties from  '../../components/myProfile/allSoldProperties/AllSoldProperties'
import MyFooter from '../../components/footer/Footer'

const { Header, Footer, Content } = Layout;

const AllListedProp = () => {
  return (
    <>
        <Layout>
            <Header style={{backgroundColor :'#FFFFFF', position: 'sticky', zIndex: 1, width: '100%' , left : 0, right : 0 , top : 0 }}  >
                    <NavbarTop />
            </Header>
                <Content style={{backgroundColor : '#FFFFFF' , padding : '20px'}} >
                    <AllSoldProperties />
                </Content>
            <Footer style={{backgroundColor : '#F7F8F8'}} >
                <MyFooter />
            </Footer>
        </Layout>
    </>
  );
}

export default AllListedProp;
