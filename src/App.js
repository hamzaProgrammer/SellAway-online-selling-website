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
              <Route exact path="/" element={ <SingleProperty/> } />

              {/* <Route exact path="/signup" element={
                  isAdmin ? (
                    <Home/>
                  ) : (
                    <SignUpCust/>
                  )
                }
              /> */}

        </Routes>
    </>
  );
}

export default App;
