import React , {useState , useEffect } from 'react'
import {Row , Col , Typography ,Divider , Spin } from 'antd';
import Sidebar from '../sidebar/Sidebar'
import SavedSearchComp from './SavedSearchComp'
import {useParams} from 'react-router-dom';
import {getUsersavedSearches} from '../../../server_api/Api'



const MyProfile = () => {
    const [ allProp , setAllProp ] = useState([]);
    const [ isRender  , setIsRender ] = useState(false);
    const [ loading , setloading ] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        const getData = async () => {
            setloading(true)
            const {data} = await getUsersavedSearches(id);
            setAllProp(data?.SavedSearches)
            console.log("saved searches : ", data?.SavedSearches)
            setloading(false)
        }
        getData();
    },[id])

    // rendering on deleting any saved search
    useEffect(() => {
        const getData = async () => {
            const {data} = await getUsersavedSearches(id);
            setAllProp(data?.SavedSearches)
        }
        getData();
    } , [isRender])
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
                    <Spin spinning={loading}>
                        {
                            allProp.length > 0 ? (
                                Object.values(allProp)?.map((item) => (
                                    <>
                                        <SavedSearchComp item={item} setIsRender={setIsRender} />
                                        <Divider style={{backgroundColor : '#8395a7'}} />
                                    </>
                                ))
                            ) : (
                                <Typography style={{fontSize : '22px' , fontWeight : 600 , textAlign : 'center' , marginTop : '50px' , color : '#c0392b' }} >No Saved Searches Available</Typography>
                            )
                        }
                    </Spin>
                </Col>
            </Row>
        </>
    )
}

export default MyProfile
