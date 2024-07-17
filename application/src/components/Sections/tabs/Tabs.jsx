import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React, {useState} from 'react';
import styles from "./Tabs.module.css"
import { styled } from '@mui/material/styles';


function CustomTabs({genres}){

  const AntTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
      backgroundColor: '#34C94B',
      borderRadius: "10px",
      height: "4px",
      marginBottom:"1rem",
    },
  });
  
  const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    marginBottom:"1rem",
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: "300",
    fontSize:"1.1rem",
    marginRight: theme.spacing(1),
    color: '#ffff',
    fontFamily: [
      "Poppins"
    ].join(','),
    '&:hover': {
      color: '',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#ffff',
      fontWeight: "bolder",
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#ffff',
    },
  }));

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
        <AntTabs value={value} onChange={handleChange} aria-label="genres" >
                <AntTab label={"All"} {...a11yProps(genres.data?.length)} />    
                { genres.data && genres.data.map((type,index)=>( <AntTab label={type.label} {...a11yProps(index)} />           
                ))}
        </AntTabs> 
    );
}

export default CustomTabs;