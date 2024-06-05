import { useEffect, useState } from 'react';
import checkForm from './Helper/CheckForm';
import './AppointmentRequestForm.sass'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import FormControl from '@mui/material/FormControl';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';


import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CheckboxList from './Helper/CheckboxList';
import Button from '@mui/material/Button';

const AppointmentRequestForm = () => {
    const [expand, onExpand] = useState({service: false, events: false});
    const [list, setList] = useState({})

    let bookDaysInAdvance = 7
    let maxFutureMonths = 3
    let firstAvailable = dayjs().add(bookDaysInAdvance, 'day')
    dayjs.extend(utc)
    const [form, setForm] = useState({
        constant:{
            minDate: dayjs().add(bookDaysInAdvance, 'day'),
            maxDate: dayjs().add(maxFutureMonths, 'month'),
            maxCharacters: 255
        },
        checkResult:{
            fname:{},
            lname:{},
            email:{},
            message:{},
            hasError: true
        },
        fname:"",
        lname:"",
        email:"",
        phone:"",
        address:"",
        calendar:firstAvailable,
        message:"",
        
    })

    useEffect(() => {
        //dev variables remove when changing to production
        const serviceList = [
            'service-1',
            'service-2',
            'service-3',
            'service-4',
            'service-5',
            'service-6',
            'service-7',
            'service-8',
            'service-9',
            'service-10',
        ]
        const eventList = [
            'event-1',
            'event-2',
            'event-3',
            'event-4',
            'event-5',
            'event-6',
            'event-7',
            'event-8',
            'event-9',
            'event-10'
        ]

        async function fetchList(){
            const serviceObj = serviceList.reduce((acc, current) =>{
                acc[current] = false
                return acc
            }, {})

            const eventObj = eventList.reduce((acc, current) =>{
                acc[current] = false
                return acc
            }, {})
            setList((prev)=> {return {...prev, service:{...serviceObj}}})
            setList((prev)=> {return {...prev, event:{...eventObj}}})
        }
        fetchList()
    }, [])

    //handles expand use state for services and event list
    function handleExpand(expandEvent){
        onExpand({...expand, [expandEvent]: !expand[expandEvent]})
    }

    //handles check when textField looses focus from user
    function handleBlur(e){
        const fieldName  = e.target.name
        const error  = checkForm(form, fieldName)
        const hasError = checkForm(form).hasError
        setForm((prev)=>({
            ...prev,
            checkResult:{
                ...prev.checkResult,
                ...error,
                hasError: hasError
            }
        }))

    }

    //handles final checkForm and submit form to backend
    function submitForm(e){
        e.preventDefault()
        
        if(checkForm(form).hasError)
            return

        let selected = Object.keys(list).reduce((acc, service)=>{
            acc[service] = Object.keys(list[service]).filter((key) => list[service][key]).map((key)=>{
                if(list[service][key])
                    return key
            })
            return acc
        },{})

        let submitObj = {...form}
        delete submitObj.constant
        delete submitObj.checkResult
        submitObj.selected = selected
        //format submit to month-day-year
        submitObj.calendar = `${submitObj.calendar.month()+1}-${submitObj.calendar.date()}-${submitObj.calendar.year()}`
        console.log(JSON.stringify(submitObj))

        //reset form
        let service = list.service
        let event = list.event


        // Object.keys(service).map((key)=>{service[key] = false})
        // Object.keys(event).map((key)=>{event[key] = false})

        // setList((prev)=>{return {...prev, service:{...service}, event:{...event}}})

        // setForm((prev)=>{return {...prev, 
        //     fname:"",
        //     lname:"",
        //     email:"",
        //     phone:"",
        //     address:"",
        // }})
    }

    function handleInputUpdate(e){
        // console.log(e.target.value)
        setForm((prev)=>{return {...prev, [e.target.name]:e.target.value}})
    }

    return(
        <div id="contactForm">
            <Box 
                component="form"
                noValidate
                autoComplete="off"
                // sx={{
                //     '& .MuiTextField-root': { m: 1},
                // }}
            >
                <Box className="fname-lname" sx={{gap:1}}>
                    <TextField
                        label="First name"
                        variant="filled"
                        name="fname"
                        value={form.fname}
                        onChange={(e)=>handleInputUpdate(e)}
                        error={form.checkResult.fname.error}
                        helperText={form.checkResult.fname.message}
                        onBlur={(e)=>handleBlur(e)}
                        required
                    />
                    <TextField
                        label="Last name"
                        variant="filled"
                        name="lname"
                        value={form.lname}
                        onChange={(e)=>handleInputUpdate(e)}
                        error={form.checkResult.lname.error}
                        helperText={form.checkResult.lname.message}
                        onBlur={(e)=>handleBlur(e)}
                        required
                    />
                </Box>
                <TextField
                    label="Email address"
                    variant="filled"
                    name="email"
                    value={form.email}
                    onChange={(e)=>handleInputUpdate(e)}
                    error={form.checkResult.email.error}
                    helperText={form.checkResult.email.message}
                    onBlur={(e)=>handleBlur(e)}
                    required
                />
                <TextField
                    label="Phone number"
                    variant="filled"
                    name="phone"
                    value={form.phone}
                    onChange={(e)=>handleInputUpdate(e)}
                />
                <TextField
                    label="Event address"
                    variant="filled"
                    name="address"
                    value={form.address}
                    onChange={(e)=>handleInputUpdate(e)}
                />
                <FormControl >
                    <Box style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                    }}>
                        <Box style={{
                            flex: 1
                        }}>
                            <ListItemButton onClick={() => handleExpand('service')}>
                                <ListItemIcon>
                                    
                                </ListItemIcon>
                                <ListItemText primary="Services" />
                                {expand.service ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            {
                                Object.keys(list).length > 0 &&
                                <Collapse in={expand.service}>
                                    <CheckboxList listName="service" listManager={{list, setList}}/>
                                </Collapse>
                            }
                        </Box>
                        <Box style={{
                            flex: 1
                        }}>
                            <ListItemButton onClick={() => handleExpand('events')}>
                                <ListItemIcon>
                                    
                                </ListItemIcon>
                                <ListItemText primary="Events" />
                                {expand.events ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            {
                                Object.keys(list).length > 0 &&
                                <Collapse in={expand.events}>
                                    <CheckboxList listName="event" listManager={{list, setList}}/>
                                </Collapse>
                            }
                        </Box>
                    </Box>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar 
                    showDaysOutsideCurrentMonth 
                    fixedWeekNumber={6}
                    minDate={form.constant.minDate}
                    maxDate={form.constant.maxDate}
                    views={['month', 'day']}
                    name="calendar"
                    value={form.calendar}
                    onChange={(val) => {
                        setForm((prev)=>{return {...prev, calendar:val.local()}})
                    }}
                    />
                </LocalizationProvider>
                <TextField 
                    name="message"
                    label={`Comments & Messages ${form.message.length!=0 ? `${form.message.length}/${form.constant.maxCharacters}` : ""}`}
                    variant="filled"
                    multiline
                    maxRows={4}
                    minRows={4}
                    value={form.message}
                    onChange={(e)=>handleInputUpdate(e)}
                    error={form.message.length > form.constant.maxCharacters}
                    helperText={form.checkResult.message.message}
                    onBlur={(e)=>handleBlur(e)}
                />
                <Button type="submit" onClick={(event) => submitForm(event)} disabled={form.checkResult.hasError}>Submit</Button>
            </Box>
        </div>
    )
}

export default AppointmentRequestForm