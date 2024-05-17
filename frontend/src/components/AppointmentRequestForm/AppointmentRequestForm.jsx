import { useEffect, useState } from 'react';
import './AppointmentRequestForm.sass'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';

import List from '@mui/material/List';
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

    const minDate = dayjs('2024-03-12')

    function handleExpand(expandEvent){
        onExpand({...expand, [expandEvent]: !expand[expandEvent]})
    }

    function submitForm(){
        console.log("submitting form")

        let selected = Object.keys(list).reduce((acc, service)=>{
            acc[service] = Object.keys(list[service]).filter((key) => list[service][key]).map((key)=>{
                if(list[service][key])
                    return key
            })
            return acc
        },{})

        console.log(selected)
    }

    return(
        <div>
            <Box 
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                    '& .MuiTextField-root': { m: 1},
                }}
            >
                <Box>
                    <TextField
                        label="First name"
                        variant="filled"
                    />
                    <TextField
                        label="Last name"
                        variant="filled"
                    />
                </Box>
                <TextField
                    label="Email address"
                    variant="filled"
                />
                <TextField
                    label="Phone number"
                    variant="filled"
                />
                <TextField
                    label="Event address"
                    variant="filled"
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
                    minDate={minDate}
                    />
                </LocalizationProvider>
                <Button onClick={() => submitForm()}>Submit</Button>
            </Box>
        </div>
    )
}

export default AppointmentRequestForm