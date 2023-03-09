import { Stack, Typography } from '@mui/material';
import { green, red } from '@mui/material/colors';
import { HashLoader } from 'react-spinners';
import React, { useEffect, useMemo, useState } from 'react';
import Day from './Day';
import request from '../../utils/request'

const Timetable = ({ selectedSemester, selectedWeekObj, lecturerId, popUp, isSwap, clickSlotToSwap, afterSwap, isPublic, overTen }) => {
  const [courseAssign, setCourseAssign] = useState([]);
  const [slotType, setSlotType] = useState([]);
  const [loadingCourseAssign, setLoadingCourseAssign] = useState(false);
  const [loadingSlotType, setLoadingSlotType] = useState(false);
  const [dates, setDates] = useState([]);
  const [schedulePublic, setSchedulePublic] = useState(-1)

  const [mon, setMon] = useState([]);
  const [tue, setTue] = useState([]);
  const [wed, setWed] = useState([]);
  const [thu, setThu] = useState([]);
  const [fri, setFri] = useState([]);
  const [sat, setSat] = useState([]);

  const renderDays = useMemo(() => {
    return [
      {id:1, day: 'MON', slots: mon},
      {id:2, day: 'TUE', slots: tue},
      {id:3, day: 'WED', slots: wed},
      {id:4, day: 'THU', slots: thu},
      {id:5, day: 'FRI', slots: fri},
      {id:6, day: 'SAT', slots: sat},
      {id:7, day: 'SUN', slots: []},
    ]
  }, [mon, tue, wed, thu, fri, sat])

  //get schedule is public or not
  useEffect(() => {
    if(selectedSemester){
      // request.get('Schedule', {
      //   params: { SemesterId: selectedSemester,
      //     pageIndex: 1, pageSize: 1}
      // }).then(res => {
      //   if(res.data.length > 0) setSchedulePublic(res.data[0].IsPublic)
      // }).catch(err => {})
      setSchedulePublic(1)
    }
  }, [selectedSemester])

  //1. get Schedule by semester, ispublic - 2.get course assign by lecturerId, scheduleId
  useEffect(() => {
    setLoadingCourseAssign(true)
    const getCourseAssign = async () => {
      try {
        // const responseSchedule = await request.get('Schedule', {
        //   params: {
        //     IsPublic: isPublic ? 1 : '',
        //     SemesterId: selectedSemester,
        //     pageIndex: 1, pageSize: 1
        //   }
        // })
        // if(responseSchedule.data.length > 0){
        //   const scheduleId = responseSchedule.data[0].Id;
        //   const responseCourseAssign = await request.get('CourseAssign', {
        //     params: {
        //       LecturerId: lecturerId, ScheduleId: scheduleId,
        //       pageIndex: 1, pageSize: 50
        //     }
        //   })
        //   if(responseCourseAssign.data){
        //     if(overTen){
        //       setCourseAssign([])
        //       setLoadingCourseAssign(false)
        //       return
        //     }
        //     setCourseAssign(responseCourseAssign.data)
        //     setLoadingCourseAssign(false)
        //   }
        // }
        // else{
        //   setLoadingCourseAssign(false)
        // }
        setCourseAssign([
          {
            "Id": "4b8sRD5sCkIXsbByxMXcoPREPFTTpi",
            "LecturerId": "HoaDNT",
            "LecturerName": "Đoàn Nguyễn Thành Hòa",
            "CourseId": "OSG202_SE1716",
            "SlotTypeId": "bx7ggbbzWaffNfBqr9lkl98YbljdO8",
            "SlotTypeCode": "ST13",
            "Duration": "12:30 - 14:45",
            "ConvertDateOfWeek": "Monday - Thursday",
            "ScheduleId": "sqDcwXJRxKhaYT8ZhBPG4NnhihRjz4",
            "isAssign": 0,
            "Status": 1
          },
          {
            "Id": "8xmMVSZ12j65c99l5KEWPFEwdvzQAI",
            "LecturerId": "HoaDNT",
            "LecturerName": "Đoàn Nguyễn Thành Hòa",
            "CourseId": "OSG202_SE1717",
            "SlotTypeId": "WTrvbf3VtZndmevhnpCBLpwHNUyHQn",
            "SlotTypeCode": "ST21",
            "Duration": "07:00 - 09:15",
            "ConvertDateOfWeek": "Tuesday - Friday",
            "ScheduleId": "sqDcwXJRxKhaYT8ZhBPG4NnhihRjz4",
            "isAssign": 0,
            "Status": 1
          },
          {
            "Id": "D5nBqfohYIlg2bb0bNs1e5u74Mozki",
            "LecturerId": "HoaDNT",
            "LecturerName": "Đoàn Nguyễn Thành Hòa",
            "CourseId": "PRJ301_SE1603",
            "SlotTypeId": "oydgDRhy4Q1Fnr7EcSRxZP3gO0ncl4",
            "SlotTypeCode": "ST24",
            "Duration": "15:00 - 17:15",
            "ConvertDateOfWeek": "Tuesday - Friday",
            "ScheduleId": "sqDcwXJRxKhaYT8ZhBPG4NnhihRjz4",
            "isAssign": 0,
            "Status": 1
          },
          {
            "Id": "eAUzeVZ3jpg3qSCpgn34tqzFtSTNSI",
            "LecturerId": "HoaDNT",
            "LecturerName": "Đoàn Nguyễn Thành Hòa",
            "CourseId": "DBI202_SE1752",
            "SlotTypeId": "obMSZ1niskiewfmbdhuVt7Tq3LQkJZ",
            "SlotTypeCode": "ST11",
            "Duration": "07:00 - 09:15",
            "ConvertDateOfWeek": "Monday - Thursday",
            "ScheduleId": "sqDcwXJRxKhaYT8ZhBPG4NnhihRjz4",
            "isAssign": 0,
            "Status": 1
          },
          {
            "Id": "lYaHIARZfv3AZxtSUXTm1JnfGee6rI",
            "LecturerId": "HoaDNT",
            "LecturerName": "Đoàn Nguyễn Thành Hòa",
            "CourseId": "PRJ301_SE1604",
            "SlotTypeId": "qlv723zG5PS2wFGXDLgkCbMQKemSkE",
            "SlotTypeCode": "ST31",
            "Duration": "07:00 - 09:15",
            "ConvertDateOfWeek": "Wednesday - Saturday",
            "ScheduleId": "sqDcwXJRxKhaYT8ZhBPG4NnhihRjz4",
            "isAssign": 0,
            "Status": 1
          },
          {
            "Id": "qXBGK0ZvY4xG9TKc7BehRAgGZZIHqv",
            "LecturerId": "HoaDNT",
            "LecturerName": "Đoàn Nguyễn Thành Hòa",
            "CourseId": "PRJ301_SE1605",
            "SlotTypeId": "sQPUC3idtnaS2RrflbHPIchgWrqXuM",
            "SlotTypeCode": "ST32",
            "Duration": "09:30 - 11:45",
            "ConvertDateOfWeek": "Wednesday - Saturday",
            "ScheduleId": "sqDcwXJRxKhaYT8ZhBPG4NnhihRjz4",
            "isAssign": 0,
            "Status": 1
          },
          {
            "Id": "rAjol1VafQGXDXpL8tapoiNgRm8Jpl",
            "LecturerId": "HoaDNT",
            "LecturerName": "Đoàn Nguyễn Thành Hòa",
            "CourseId": "DBI202_SE1751",
            "SlotTypeId": "0sPIFCLITzLQzsG1k4y9HQ9n9BX2f5",
            "SlotTypeCode": "ST12",
            "Duration": "09:30 - 11:45",
            "ConvertDateOfWeek": "Monday - Thursday",
            "ScheduleId": "sqDcwXJRxKhaYT8ZhBPG4NnhihRjz4",
            "isAssign": 0,
            "Status": 1
          },
          {
            "Id": "sGw8A80NCYHldGj3vWMAhudVtPPk8s",
            "LecturerId": "HoaDNT",
            "LecturerName": "Đoàn Nguyễn Thành Hòa",
            "CourseId": "OSG202_SE1718",
            "SlotTypeId": "7symstcZBlvL4aSpUPERw9ZlNf9CRr",
            "SlotTypeCode": "ST22",
            "Duration": "09:30 - 11:45",
            "ConvertDateOfWeek": "Tuesday - Friday",
            "ScheduleId": "sqDcwXJRxKhaYT8ZhBPG4NnhihRjz4",
            "isAssign": 0,
            "Status": 1
          },
          {
            "Id": "sxYnW1OTzglN6H7JzrDXm4i4xmwAFJ",
            "LecturerId": "HoaDNT",
            "LecturerName": "Đoàn Nguyễn Thành Hòa",
            "CourseId": "DBI202_SE1753",
            "SlotTypeId": "q2xJ7MF6MH1TConKu4DqTYoSGyq7MU",
            "SlotTypeCode": "ST14",
            "Duration": "15:00 - 17:15",
            "ConvertDateOfWeek": "Monday - Thursday",
            "ScheduleId": "sqDcwXJRxKhaYT8ZhBPG4NnhihRjz4",
            "isAssign": 0,
            "Status": 1
          },
          {
            "Id": "YINIotdKxLW50jB8r5QUy5gGQAvkca",
            "LecturerId": "HoaDNT",
            "LecturerName": "Đoàn Nguyễn Thành Hòa",
            "CourseId": "PRF192_SE1707",
            "SlotTypeId": "WLH1aRuSwzctnermgTyd9Jrqbuaw99",
            "SlotTypeCode": "ST23",
            "Duration": "12:30 - 14:45",
            "ConvertDateOfWeek": "Tuesday - Friday",
            "ScheduleId": "sqDcwXJRxKhaYT8ZhBPG4NnhihRjz4",
            "isAssign": 0,
            "Status": 1
          }
        ])
        setLoadingCourseAssign(false)
      }
      catch (error) {
        alert('Fail to load Schedule!')
        setLoadingCourseAssign(false)
      }
    }

    if(selectedSemester && lecturerId){
      getCourseAssign();
    }

    return () => {
      setCourseAssign([]);
    }
  }, [lecturerId, selectedSemester, selectedWeekObj, afterSwap, isPublic, overTen])

  //get slottype list
  useEffect(() => {
    const getSlotType = async () => {
      setLoadingSlotType(true)
      if(selectedSemester){
        try {
          // const response = await request.get('SlotType', {
          //   params: {
          //     SemesterId: selectedSemester,
          //     pageIndex: 1, pageSize: 50
          //   }
          // })
          // if (response.status === 200) {
          //   setSlotType(response.data)
          //   setLoadingSlotType(false)
          // }
          setSlotType([
            {
              "Id": "0sPIFCLITzLQzsG1k4y9HQ9n9BX2f5",
              "SlotTypeCode": "ST12",
              "TimeStart": "09:30:00",
              "TimeEnd": "11:45:00",
              "SlotNumber": 2,
              "DateOfWeek": 36,
              "Duration": "09:30 - 11:45",
              "SemesterId": "jXlng7b4CTsJCRfs8CfqlRY9pqq3DK",
              "Term": "Spring 2023",
              "ConvertDateOfWeek": "Monday - Thursday",
              "Status": 1
            },
            {
              "Id": "7symstcZBlvL4aSpUPERw9ZlNf9CRr",
              "SlotTypeCode": "ST22",
              "TimeStart": "09:30:00",
              "TimeEnd": "11:45:00",
              "SlotNumber": 2,
              "DateOfWeek": 72,
              "Duration": "09:30 - 11:45",
              "SemesterId": "jXlng7b4CTsJCRfs8CfqlRY9pqq3DK",
              "Term": "Spring 2023",
              "ConvertDateOfWeek": "Tuesday - Friday",
              "Status": 1
            },
            {
              "Id": "bx7ggbbzWaffNfBqr9lkl98YbljdO8",
              "SlotTypeCode": "ST13",
              "TimeStart": "12:30:00",
              "TimeEnd": "14:45:00",
              "SlotNumber": 3,
              "DateOfWeek": 36,
              "Duration": "12:30 - 14:45",
              "SemesterId": "jXlng7b4CTsJCRfs8CfqlRY9pqq3DK",
              "Term": "Spring 2023",
              "ConvertDateOfWeek": "Monday - Thursday",
              "Status": 1
            },
            {
              "Id": "obMSZ1niskiewfmbdhuVt7Tq3LQkJZ",
              "SlotTypeCode": "ST11",
              "TimeStart": "07:00:00",
              "TimeEnd": "09:15:00",
              "SlotNumber": 1,
              "DateOfWeek": 36,
              "Duration": "07:00 - 09:15",
              "SemesterId": "jXlng7b4CTsJCRfs8CfqlRY9pqq3DK",
              "Term": "Spring 2023",
              "ConvertDateOfWeek": "Monday - Thursday",
              "Status": 1
            },
            {
              "Id": "oydgDRhy4Q1Fnr7EcSRxZP3gO0ncl4",
              "SlotTypeCode": "ST24",
              "TimeStart": "15:00:00",
              "TimeEnd": "17:15:00",
              "SlotNumber": 4,
              "DateOfWeek": 72,
              "Duration": "15:00 - 17:15",
              "SemesterId": "jXlng7b4CTsJCRfs8CfqlRY9pqq3DK",
              "Term": "Spring 2023",
              "ConvertDateOfWeek": "Tuesday - Friday",
              "Status": 1
            },
            {
              "Id": "q2xJ7MF6MH1TConKu4DqTYoSGyq7MU",
              "SlotTypeCode": "ST14",
              "TimeStart": "15:00:00",
              "TimeEnd": "17:15:00",
              "SlotNumber": 4,
              "DateOfWeek": 36,
              "Duration": "15:00 - 17:15",
              "SemesterId": "jXlng7b4CTsJCRfs8CfqlRY9pqq3DK",
              "Term": "Spring 2023",
              "ConvertDateOfWeek": "Monday - Thursday",
              "Status": 1
            },
            {
              "Id": "qlv723zG5PS2wFGXDLgkCbMQKemSkE",
              "SlotTypeCode": "ST31",
              "TimeStart": "07:00:00",
              "TimeEnd": "09:15:00",
              "SlotNumber": 1,
              "DateOfWeek": 144,
              "Duration": "07:00 - 09:15",
              "SemesterId": "jXlng7b4CTsJCRfs8CfqlRY9pqq3DK",
              "Term": "Spring 2023",
              "ConvertDateOfWeek": "Wednesday - Saturday",
              "Status": 1
            },
            {
              "Id": "sQPUC3idtnaS2RrflbHPIchgWrqXuM",
              "SlotTypeCode": "ST32",
              "TimeStart": "09:30:00",
              "TimeEnd": "11:45:00",
              "SlotNumber": 2,
              "DateOfWeek": 144,
              "Duration": "09:30 - 11:45",
              "SemesterId": "jXlng7b4CTsJCRfs8CfqlRY9pqq3DK",
              "Term": "Spring 2023",
              "ConvertDateOfWeek": "Wednesday - Saturday",
              "Status": 1
            },
            {
              "Id": "WLH1aRuSwzctnermgTyd9Jrqbuaw99",
              "SlotTypeCode": "ST23",
              "TimeStart": "12:30:00",
              "TimeEnd": "14:45:00",
              "SlotNumber": 3,
              "DateOfWeek": 72,
              "Duration": "12:30 - 14:45",
              "SemesterId": "jXlng7b4CTsJCRfs8CfqlRY9pqq3DK",
              "Term": "Spring 2023",
              "ConvertDateOfWeek": "Tuesday - Friday",
              "Status": 1
            },
            {
              "Id": "WTrvbf3VtZndmevhnpCBLpwHNUyHQn",
              "SlotTypeCode": "ST21",
              "TimeStart": "07:00:00",
              "TimeEnd": "09:15:00",
              "SlotNumber": 1,
              "DateOfWeek": 72,
              "Duration": "07:00 - 09:15",
              "SemesterId": "jXlng7b4CTsJCRfs8CfqlRY9pqq3DK",
              "Term": "Spring 2023",
              "ConvertDateOfWeek": "Tuesday - Friday",
              "Status": 1
            },
            {
              "Id": "XZM9X1qE9FExXPPf1di3O28d53wEJs",
              "SlotTypeCode": "ST34",
              "TimeStart": "15:00:00",
              "TimeEnd": "17:15:00",
              "SlotNumber": 4,
              "DateOfWeek": 144,
              "Duration": "15:00 - 17:15",
              "SemesterId": "jXlng7b4CTsJCRfs8CfqlRY9pqq3DK",
              "Term": "Spring 2023",
              "ConvertDateOfWeek": "Wednesday - Saturday",
              "Status": 1
            },
            {
              "Id": "YUjJUpgHO3UDOyGh1tNdp6hhKCYWGN",
              "SlotTypeCode": "ST33",
              "TimeStart": "12:30:00",
              "TimeEnd": "14:45:00",
              "SlotNumber": 3,
              "DateOfWeek": 144,
              "Duration": "12:30 - 14:45",
              "SemesterId": "jXlng7b4CTsJCRfs8CfqlRY9pqq3DK",
              "Term": "Spring 2023",
              "ConvertDateOfWeek": "Wednesday - Saturday",
              "Status": 1
            }
          ])
          setLoadingSlotType(false)
        }
        catch (error) {
          alert('Fail to load slot type')
        }
      }
    }

    getSlotType();

    return () => {
      setSlotType([])
    }
  }, [selectedSemester])

  //clarify courseAssign into 6 days by slottype list
  useEffect(() => {
    if (courseAssign.length > 0 && slotType.length > 0) {
      for (let i in courseAssign) {
        const time = slotType.find(slot => slot.Id === courseAssign[i].SlotTypeId);
        const { Id, Status, ...rest } = time;
        const day = time.ConvertDateOfWeek.split(' - ')
        for (let j in day) {
          switch (day[j]) {
            case 'Monday':
              setMon(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'Tuesday':
              setTue(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'Wednesday':
              setWed(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'Thursday':
              setThu(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'Friday':
              setFri(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'Saturday':
              setSat(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            default:
              return;
          }
        }
      }
    }

    return () => {
      setMon([]);
      setTue([]);
      setWed([]);
      setThu([]);
      setFri([]);
      setSat([]);
    }
  }, [courseAssign, slotType])

  //seperate weekObj into each day to pass slot
  useEffect(() => {
    if (Object.values(selectedWeekObj).length > 0) {
      const result = [];
      const week = selectedWeekObj.week.split(' to ')
      const start = new Date(week[0]);
      const end = new Date(week[1]);
      do {
        result.push(start.toLocaleDateString('en-CA'))
        start.setDate(start.getDate() + 1)
      } while (start <= end)

      setDates(result);
    }

    return () => {
      setDates([]);
    }
  }, [selectedWeekObj])

  return (
    <>
      {
        (loadingCourseAssign || loadingSlotType) ? (
          <Stack alignItems='center' width='100%' gap={1} mt={4}>
            <HashLoader size={40} color={green[600]} />
            <Typography color={green[600]}>Loading...</Typography>
          </Stack>
        ) : (
          <>
          {schedulePublic === 0 && courseAssign.length === 0 &&
            <Typography color={red[600]} px={popUp ? '' : 9}>The schedule haven't been public yet</Typography>}
          {schedulePublic === 1 && courseAssign.length === 0 &&
            <Typography color={red[600]} px={popUp ? '' : 9}>No courses in this time</Typography>}
          <Stack height='100%' direction='row' px={popUp ? '' : 9} mb={1} minWidth='920px' minHeight='445px'>
            <Stack flex={0.6} bgcolor='white'>
              <Stack flex={0.8} color='white' bgcolor={green[600]}
                borderRight='1px solid #e3e3e3' borderBottom='1px solid #e3e3e3'
                justifyContent='center'
              >
                <Typography textAlign='right' mr={1} fontWeight={500}
                  color='white' fontSize='14px'>
                  Day
                </Typography>
                <Typography ml={1} fontWeight={500} color='white' fontSize='14px'>
                  Slot
                </Typography>
              </Stack>
              <Stack flex={9} bgcolor={green[600]}>
                <Stack flex={1}
                  justifyContent='center'
                  className='timetable-time'
                >
                  <Typography className='time-title'>Slot 1</Typography>
                </Stack>
                <Stack flex={1}
                  justifyContent='center'
                  className='timetable-time'
                >
                  <Typography className='time-title'>Slot 2</Typography>
                </Stack>
                <Stack flex={1}
                  justifyContent='center'
                  className='timetable-time'
                >
                  <Typography className='time-title'>Slot 3</Typography>
                </Stack>
                <Stack flex={1} justifyContent='center'
                  className='timetable-time'
                >
                  <Typography className='time-title'>Slot 4</Typography>
                </Stack>
                <Stack flex={1} justifyContent='center'
                  className='timetable-time'
                >
                  <Typography className='time-title'>Slot 5</Typography>
                </Stack>
                <Stack flex={1} justifyContent='center'
                  className='timetable-time'
                >
                  <Typography className='time-title'>Slot 6</Typography>
                </Stack>
              </Stack>
            </Stack>
            {renderDays.map(item => (
              <Day key={item.id} day={item.day} 
                date={dates.length > 0 && dates[item.id-1].split('-')[2] + '/' + dates[0].split('-')[1]}
                slots={item.slots} isSwap={isSwap} clickSlotToSwap={clickSlotToSwap}
              />
            ))}
          </Stack>
          </>
        )
      }
    </>

  )
}

export default Timetable