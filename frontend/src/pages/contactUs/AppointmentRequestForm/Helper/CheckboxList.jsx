import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from "@mui/material/ListItem";

import Checkbox from '@mui/material/Checkbox';

const CheckboxList = ({listName, listManager}) => {
    const {list, setList} = listManager

    function handleToggle(name){
        setList((prev)=>{return {
            ...prev, 
            [listName]:{
                ...prev[listName],
                [name]:!prev[listName][name]
            }
        }})
    }

    return(
        <List component="div" disablePadding>
            {Object.keys(list[listName]).length > 0 && 
                Object.keys(list[listName]).map((name) => {
                    return(
                        <ListItem key={name} disablePadding>
                            <ListItemButton onClick={()=>handleToggle(name)} dense>
                                <ListItemIcon>
                                    <Checkbox 
                                        checked={list[listName][name]}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText primary={name} />
                            </ListItemButton>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default CheckboxList