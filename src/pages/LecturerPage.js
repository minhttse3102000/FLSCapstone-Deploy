import { Box, Stack } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate} from 'react-router-dom'
import Leftbar from '../components/leftbar/Leftbar'
import Navbar from '../components/navbar/Navbar'
import {lecturerTabs} from  '../utils/lecturerTab'
import {useGoogleAuth} from '../utils/googleAuth' 
import request from '../utils/request'

const LecturerPage = () => {
  const navigate = useNavigate();
  const [isExtend, setIsExtend] = useState(true)
  const { isSignedIn, googleUser, isInitialized } = useGoogleAuth();
  const [data, setData] = useState(JSON.parse(localStorage.getItem('web-user')));

  useEffect(() => {
    if(isInitialized){
      if (isSignedIn) {
        // request.get(`User/email/${googleUser.profileObj.email}`)
        // .then(res => {
        //   if(res.data){
            // if(res.data.RoleIDs.includes('LC')){
            //   setData(localStorage.setItem('web-user', JSON.stringify(res.data)))
            // }else{navigate('/');}
            setData(localStorage.setItem('web-user', JSON.stringify({
              "Id": "HoaDNT",
              "Name": "Tran Tuan Minh",
              "Email": "minhtt3102000@gmail.com",
              "Dob": "2000-10-03T00:00:00",
              "Gender": 1,
              "Idcard": "123443216789",
              "Address": "FPT University",
              "Phone": "0987654321",
              "PriorityLecturer": 4,
              "IsFullTime": 1,
              "DepartmentId": "CFL",
              "DepartmentName": "Computing Fundamental",
              "RoleIDs": [
                "LC",
                "DMA"
              ],
              "Status": 1,
              "DateOfBirthFormatted": "2000-10-03"
            })))
        //   }
        // })
        // .catch(err => {navigate('/');})
      }else{navigate('/')}
    }
    
  }, [isSignedIn, googleUser, navigate, isInitialized])

  return (
    <Box height='100vh'>
      <Navbar isExtend={isExtend} setIsExtend={setIsExtend}/>
      <Stack direction='row'>
        {
          data !== null &&
          <>
            <Leftbar isExtend={isExtend} user={'lecturer'} tabs={lecturerTabs}/>
            <Outlet/>
          </>
        }
      </Stack>
    </Box>
  )
}

export default LecturerPage