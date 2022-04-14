import React from 'react';
import MoreOnRecentSearch from './moreOnSearch/MoreRelated'
import HotPorperties from './hotProperties/HotProperties'

const Home = () => {
  return (
    <>
        <div style={{display : 'flex' , flexDirection : 'column'}} >
          <img alt="main cover" style={{width : '100%' , maxHeight : '250px' , objectFit : 'cover'}} src="./images/frontImageHome.jpg" />
          <MoreOnRecentSearch />
          <HotPorperties />
        </div>
    </>
  );
}

export default Home;
