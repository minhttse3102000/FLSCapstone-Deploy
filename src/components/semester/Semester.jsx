import { Grid, Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import './Semester.css'
import {HashLoader} from 'react-spinners';
import request from '../../utils/request';
import SemesterCard from './SemesterCard';
import { green, red } from '@mui/material/colors';

const Semester = () => {
  const [semesters, setSemesters] = useState([]);
  const [loading, setLoading] = useState(false);

  //get semester list
  useEffect(() => {
    setLoading(true)
    // request.get('Semester', {
    //   params: {
    //     sortBy: 'DateEnd',
    //     order: 'Des',
    //     pageIndex: 1,
    //     pageSize: 100
    //   }
    // })
    //   .then(res => {
    //     if (res.status === 200) {
    //       setSemesters(res.data)
    //       setLoading(false);
    //     }
    //   })
    //   .catch(err => {
    //     alert('Fail to load semesters!')
    //     setLoading(false)
    //   })
    setSemesters([
      {
        "Id": "FA22",
        "Term": "Fall 2022",
        "DateStart": "2022-09-05T00:00:00",
        "DateStartFormat": "2022-09-05",
        "DateEnd": "2023-01-01T00:00:00",
        "DateEndFormat": "2023-01-01",
        "State": 1,
        "Status": 1,
        "DateStatus": "Close"
      },
      {
        "Id": "jXlng7b4CTsJCRfs8CfqlRY9pqq3DK",
        "Term": "Spring 2023",
        "DateStart": "2023-01-02T00:00:00",
        "DateStartFormat": "2023-01-02",
        "DateEnd": "2023-04-30T00:00:00",
        "DateEndFormat": "2023-04-30",
        "State": 3,
        "Status": 1,
        "DateStatus": "On Going"
      },
      {
        "Id": "SP22",
        "Term": "Spring 2022",
        "DateStart": "2022-01-03T00:00:00",
        "DateStartFormat": "2022-01-03",
        "DateEnd": "2022-05-08T00:00:00",
        "DateEndFormat": "2022-05-08",
        "State": 1,
        "Status": 1,
        "DateStatus": "Close"
      },
      {
        "Id": "SU22",
        "Term": "Summer 2022",
        "DateStart": "2022-05-09T00:00:00",
        "DateStartFormat": "2022-05-09",
        "DateEnd": "2022-09-04T00:00:00",
        "DateEndFormat": "2022-09-04",
        "State": 1,
        "Status": 1,
        "DateStatus": "Close"
      }
    ]);
    setLoading(false);
  }, [])

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Typography variant='h5' color='#778899' fontWeight={500} px={9} mt={1}>
        Semester
      </Typography>
      <Typography color='gray' px={9} variant='subtitle1' mb={4}>
        List of all semesters
      </Typography>
      {loading && <Stack px={9}><HashLoader size={30} color={green[600]}/></Stack>}
      {!loading && semesters.length === 0 && 
        <Typography px={9} color={red[600]}>No semesters have been created.</Typography>}
      {!loading && <Grid container spacing={6} px={9} mb={2}>
        {semesters.map(semester => (
          <Grid item xs={4} key={semester.Id}>
            <SemesterCard semester={semester} />
          </Grid>
        ))}
      </Grid>}
    </Stack>
  )
}

export default Semester
