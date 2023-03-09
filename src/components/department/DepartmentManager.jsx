import { Check } from '@mui/icons-material';
import { Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material'
import { green } from '@mui/material/colors';
import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners';
import request from '../../utils/request';
import Title from '../title/Title'

const DepartmentManager = () => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [departments, setDepartments] = useState([]);
  const [managers, setManagers] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true)
    // request.get('Department', {
    //   params: {
    //     sortBy: 'Id', order: 'Asc',
    //     pageIndex: 1, pageSize: 1000
    //   }
    // })
    //   .then(res => {
    //     if (res.data) {
    //       setDepartments(res.data);
    //       setLoad(false)
    //     }
    //   })
    //   .catch(err => {
    //     alert('Fail to load departments')
    //     setLoad(false)
    //   })
    setDepartments([
      {
        "Id": "CFL",
        "DepartmentName": "Computing Fundamental",
        "DepartmentGroupId": "SE",
        "DepartmentGroupName": "Software engineering",
        "Status": 1
      },
      {
        "Id": "ITS",
        "DepartmentName": "Information Technology Specialization",
        "DepartmentGroupId": "SE",
        "DepartmentGroupName": "Software engineering",
        "Status": 1
      },
      {
        "Id": "LAB",
        "DepartmentName": "Lab",
        "DepartmentGroupId": "SE",
        "DepartmentGroupName": "Software engineering",
        "Status": 1
      },
      {
        "Id": "SWE",
        "DepartmentName": "Software Engineering",
        "DepartmentGroupId": "SE",
        "DepartmentGroupName": "Software engineering",
        "Status": 1
      }
    ]);
    setLoad(false);
  }, [])

  useEffect(() => {
    // request.get('User', {
    //   params:{RoleIDs: 'DMA',pageIndex: 1, pageSize: 100}
    // })
    // .then(res => {
    //   if(res.data){
    //     setManagers(res.data)
    //   }
    // })
    // .catch(err => {
    //   alert('Fail to load managers')
    // })
    setManagers([
      {
        "Id": "HoaDNT",
        "Name": "Tran Tuan Minh",
        "Email": "minhtt3102000@gmail.com",
        "Dob": "2000-10-04T00:00:00",
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
        "DateOfBirthFormatted": "2000-10-04"
      },
      {
        "Id": "HuongNTC2",
        "Name": "Nguyễn Thị Cẩm Hương",
        "Email": "huongntc712@gmail.com",
        "Dob": "1989-07-05T00:00:00",
        "Gender": 0,
        "Idcard": "123443216746",
        "Address": "FPT HCM",
        "Phone": "0987654321",
        "PriorityLecturer": 5,
        "IsFullTime": 1,
        "DepartmentId": "SWE",
        "DepartmentName": "Software Engineering",
        "RoleIDs": [
          "LC",
          "DMA"
        ],
        "Status": 1,
        "DateOfBirthFormatted": "1989-07-05"
      },
      {
        "Id": "TaiNT",
        "Name": "Nguyễn Trọng Tài",
        "Email": "TaiNT@fe.edu.vn",
        "Dob": "1989-05-04T00:00:00",
        "Gender": 1,
        "Idcard": "123443216789",
        "Address": "FPT University",
        "Phone": "0987654321",
        "PriorityLecturer": 5,
        "IsFullTime": 1,
        "DepartmentId": "ITS",
        "DepartmentName": "Information Technology Specialization",
        "RoleIDs": [
          "LC",
          "DMA"
        ],
        "Status": 1,
        "DateOfBirthFormatted": "1989-05-04"
      },
      {
        "Id": "TruongLV2",
        "Name": "Lê Vũ Trường",
        "Email": "duong97498@gmail.com",
        "Dob": "1986-02-04T00:00:00",
        "Gender": 1,
        "Idcard": "123443216789",
        "Address": "FPT University",
        "Phone": "0987654321",
        "PriorityLecturer": 5,
        "IsFullTime": 0,
        "DepartmentId": "LAB",
        "DepartmentName": "Lab",
        "RoleIDs": [
          "DMA",
          "LC"
        ],
        "Status": 1,
        "DateOfBirthFormatted": "1986-02-04"
      }
    ]);
  }, [])


  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack mt={1} mb={4} px={9}>
        <Title title='Department' subTitle='List of all departments' />
      </Stack>
      {load && <Stack px={9}><HashLoader size={30} color={green[600]}/></Stack>}
      {!load && <Stack px={9} mb={2}>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell className='subject-header'>Code</TableCell>
                  <TableCell className='subject-header'>Name</TableCell>
                  <TableCell className='subject-header'>Manager</TableCell>
                  <TableCell className='subject-header' align='center'>Group</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {departments.map(department => (
                    <TableRow key={department.Id} hover>
                      <TableCell>{department.Id}</TableCell>
                      <TableCell>
                        <Stack direction='row' alignItems='center' gap={1}>
                          <Typography fontSize='14px'>{department.DepartmentName}</Typography>
                          {account.DepartmentId === department.Id && 
                            <Tooltip title='My Department'>
                              <Check sx={{color: green[600]}}/>
                            </Tooltip>}
                        </Stack>
                      </TableCell>
                      <TableCell>
                        {managers.find(manager => manager.DepartmentId === department.Id)?.Name}
                      </TableCell>
                      <TableCell align='center'>{department.DepartmentGroupId}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Stack>}
    </Stack>
  )
}

export default DepartmentManager