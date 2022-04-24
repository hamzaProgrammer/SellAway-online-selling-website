import './App.css';
import 'antd/dist/antd.css';
import {useEffect , useState } from 'react'
import { Routes , Route  } from 'react-router-dom'


// Home Page
import Home from './pages/home/Home'


// city wse properties
import CityProperties from './pages/cityProperties/CityProperties'


// Single Property
import SingleProperty from './pages/singleProperty/SingleProperty'


// Add new Property
import AddNewProperty from './pages/addNewProperty/AddNewProperty'


// edit single Property
import EditProperty from './pages/editProperty/EditSingleProperty'


// view single add
import ViewAdd from './pages/viewProperty/ViewSingleAd'


// user profile page
import MyProfile from './pages/profilePage/MyProfile'


// my all properties page
import AllProperties from './pages/allListedProperties/AllListedProperties'


// my all sold properties page
import AllSoldProperties from './pages/allSoldProperties/AllSoldProperties'


// my all saved  properties page
import AllSavedProperties from './pages/allSavedProperties/AllSavedProperties'


// my all saved  search page
import AllSavedSearches from './pages/savedSearches/SavedSearches'

function App() {
    const [isAdmin, setAdminLogin] = useState(false)
    //const location = useNavigate();

    //checking if admin logged in or not
    // useEffect(() => {
    //   const checkAdmin = () => {
    //     const user = JSON.parse(localStorage.getItem('profile'))
    //     if (user) {
    //       setAdminLogin(true)
    //     } else {
    //       setAdminLogin(false)
    //     }
    //   }
    //   checkAdmin();
    // }, [location])
  return (
    <>
        <Routes>
              <Route exact path="/" element={ <Home/> } />

              <Route exact path="/singleProperty/:id" element={<SingleProperty/>} />

              <Route exact path="/allProperties" element={<CityProperties/>} />

              <Route exact path="/allSavedProperties/:id" element={<AllSavedProperties/>} />

              <Route exact path="/allSavedSearches/:id" element={<AllSavedSearches/>} />

              <Route exact path="/myProfile/:id" element={<MyProfile/>} />

        </Routes>
    </>
  );
}

export default App;
