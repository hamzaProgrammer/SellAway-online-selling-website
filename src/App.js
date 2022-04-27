import './App.css';
import 'antd/dist/antd.css';
import {useEffect , useState } from 'react'
import { Routes , Route , useNavigate } from 'react-router-dom'


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


// show seller pofile
import SellerProfile from './pages/userProfileView/UserProfile'

// show seller all properties listed
import SellerAllProp from './pages/allSellerProp/AllPropOfSeller'

// show seller all sold properties
import SellerAllSoldProp from './pages/allSellerSoldProp/AllSold'

function App() {
    const [isAdmin, setAdminLogin] = useState(false)
    const location = useNavigate();

    //checking if admin logged in or not
    useEffect(() => {
      const checkAdmin = () => {
        const user = JSON.parse(localStorage.getItem('profile'))
        if (user) {
          setAdminLogin(true)
        } else {
          setAdminLogin(false)
        }
      }
      checkAdmin();
    }, [location])
  return (
    <>
        <Routes>
              <Route exact path="/" element={ <Home/> } />

              <Route exact path="/singleProperty/:id" element={<SingleProperty/>} />

              <Route exact path="/allProperties" element={<CityProperties/>} />

              <Route exact path="/allSavedProperties/:id" element={<AllSavedProperties/>} />

              <Route exact path="/allSavedSearches/:id" element={<AllSavedSearches/>} />

              <Route exact path="/myProfile/:id" element={<MyProfile/>} />

              <Route exact path="/allListedProperties/:id" element={<AllProperties/>} />

              <Route exact path="/allSoldProperties/:id" element={<AllSoldProperties/>} />

              <Route exact path="/advertiseMyAdd/:id" element={<AddNewProperty/>} />

              <Route exact path="/editMyAdvertise/:id" element={<ViewAdd/>} />

              <Route exact path="/viewUserProfile/:id" element={<SellerProfile/>} />

              <Route exact path="/viewSellerAllProp/:id" element={<SellerAllProp/>} />

              <Route exact path="/viewSellerAllSoldProp/:id" element={<SellerAllSoldProp/>} />

        </Routes>
    </>
  );
}

export default App;
