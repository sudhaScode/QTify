import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React, {useState} from 'react';
import styles from "./Tabs.module.css"


function CustomTabs({genres}){

    const [value, setValue] = useState(0);
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }


    const handleChange = (event , newValue) => {
        setValue(newValue);
      };
    return (
        <Tabs value={value} onChange={handleChange} aria-label="genres">
                <Tab label={"All"} {...a11yProps(genres.data?.length)} className={styles.tabs} />    
                { genres.data && genres.data.map((type,index)=>( <Tab label={type.label} {...a11yProps(index)} />           
                ))}
        </Tabs> 
    );
}

export default CustomTabs;