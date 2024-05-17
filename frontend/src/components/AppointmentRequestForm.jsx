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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';


import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const AppointmentRequestForm = () => {
    const [expand, onExpand] = useState({service: false, events: false});
    const minDate = dayjs('2024-03-12')

    function handleExpand(expandEvent){
        onExpand({...expand, [expandEvent]: !expand[expandEvent]})
    }

    useEffect(()=>{console.log(expand)},[expand])

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
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                                {expand.service ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={expand.service} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <Checkbox />
                                        </ListItemIcon>
                                        <ListItemText primary="Starred" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </Box>
                        <Box style={{
                            flex: 1
                        }}>
                            <ListItemButton onClick={() => handleExpand('events')}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                                {expand.events ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={expand.events} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                        <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText primary="Starred" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </Box>
                            
                        {/* <FormGroup >
                            <FormControlLabel control={<Checkbox />} label="Label" />
                            <FormControlLabel control={<Checkbox />} label="Label" />
                            <FormControlLabel control={<Checkbox />} label="Label" />
                            <FormControlLabel control={<Checkbox />} label="Label" />
                            <FormControlLabel control={<Checkbox />} label="Label" />
                            <FormControlLabel control={<Checkbox />} label="Label" />
                            <FormControlLabel control={<Checkbox />} label="Label" />
                            <FormControlLabel control={<Checkbox />} label="Label" />
                            <FormControlLabel control={<Checkbox />} label="Label" />
                            <FormControlLabel control={<Checkbox />} label="Label" />
                            <FormControlLabel control={<Checkbox />} label="Label" />
                            <FormControlLabel control={<Checkbox />} label="Label" />
                        </FormGroup>
                        */}
                    </Box>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar 
                    showDaysOutsideCurrentMonth 
                    fixedWeekNumber={6}
                    minDate={minDate}
                    />
                </LocalizationProvider>
            </Box>
        </div>
    )
}

export default AppointmentRequestForm