import React , {useState , useEffect} from 'react'
import {Typography ,Input , Button , notification , Alert , Upload , Modal} from 'antd';
import {getUserInfo} from '../../../server_api/Api'
import {useParams} from 'react-router-dom'
import '../sidebar/Sidebar'

const EditPortion = () => {
    const [ userInfo , setuserInfo ] = useState({});
    const {id} = useParams();


    useEffect(() => {
        const getData = async () => {
            const {data} = await getUserInfo(id);
            setuserInfo(data?.User)
        }
        getData();
    } , [id])



    return (
        <>
            <div className="editProfileSecDiv" >
                <Typography className="editprofileMainHead" >View Profile Details</Typography>
                <Typography  className="labelNewAddProperty" style={{fontSize : '14px'}} > Email</Typography>
                <Input value={userInfo?.email} name="email" onChange={(e) => setuserInfo({...userInfo , [e.target.name] : e.target.value}) } className="myInput" placeholder={userInfo?.email} type="email"  />
                <Typography className="labelNewAddProperty" style={{fontSize : '14px'}} > Name</Typography>
                <Input value={userInfo?.name} name="name" onChange={(e) => setuserInfo({...userInfo , [e.target.name] : e.target.value}) } className="myInput" placeholder={userInfo?.name} />
                <Typography className="labelNewAddProperty" style={{fontSize : '14px'}} > Phone No</Typography>
                <Input value={userInfo?.phoneNo} name="phoneNo" onChange={(e) => setuserInfo({...userInfo , [e.target.name] : e.target.value}) } className="myInput" placeholder={userInfo?.phoneNo} type="number" />
                <Typography className="labelNewAddProperty" style={{fontSize : '14px'}} > Location</Typography>
                <Input value={userInfo?.address} name="address" onChange={(e) => setuserInfo({...userInfo , [e.target.name] : e.target.value}) } className="myInput" placeholder={userInfo?.address} />
            </div>
        </>
    )
}

export default EditPortion
