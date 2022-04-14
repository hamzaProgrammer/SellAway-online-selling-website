import React from 'react';
import { Layout } from 'antd';
import './Home.css'


import NavbarTop from '../../components/upperNavbar/UpperNavbar'
import MainNavbar from '../../components/mainNavbar/ManiNavbar'
import HomeComp from  '../../components/home/Home'
import MyFooter from '../../components/footer/Footer'

const { Header, Footer, Content } = Layout;

const Home = () => {
  return (
    <>
        <Layout>
            <Header style={{backgroundColor :'#F7F8F8', position: 'sticky', zIndex: 1, width: '100%' , left : 0, right : 0 , top : 0 }} className="homeHeader" >
                  <NavbarTop />
                  <MainNavbar />
            </Header>
                <Content style={{backgroundColor : '#FFFFFF' , padding : '20px'}} >
                  <HomeComp />
                </Content>
            <Footer style={{backgroundColor : '#F7F8F8'}} >
              <MyFooter />
            </Footer>
        </Layout>
    </>
  );
}

export default Home;
