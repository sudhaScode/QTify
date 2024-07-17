import { Box, Stack, Typography, Button, Grid,Tabs,Tab } from "@mui/material"
import AlbumCard from "../card/AlbumCard"
import styles from "./Section.module.css"
import { useEffect, useState } from "react"
import { config } from "../../App"
import Carousel from "../carousel/Carousel"
import CustomTabs from "./tabs/Tabs"


function Section ({header, hasTabFilter, id}){
   const [data, setData] = useState([]);
   const [view, setView]= useState("Show all")
   const [genres, setGenres] = useState({})


   const handleClick =()=>{
     setView(prev=> prev === "Collapse"? "Show all":"Collapse")
   }

   
  useEffect(()=>{
    
    const fetchAlbum = async(URL, addData)=>{
        //console.log(URL)
        try{
            const response = await fetch(URL);
            if(!response.ok){
                throw Error({status: response.status}) 
            }
            const data = await response.json();
           // console.log(data)
            addData(data)
            return
            
        }     
        catch(error){
            console.error(error)
        }
    }
    const path = header.split(" ")[0].toLowerCase();
    if(hasTabFilter){
        fetchAlbum(`${config.endPoint}/${path}`, setData)
        fetchAlbum(`${config.endPoint}/genres`, setGenres)
    }
    else{
       fetchAlbum(`${config.endPoint}/albums/${path}`, setData)
    } 
  },[])
    return (
        <Box className={styles.section} >
            <Stack direction="row" justifyContent="space-between">
                <Typography className={styles["section-header"]}> {header}</Typography>
                {!hasTabFilter && <Button className={styles["section-collapse"]} onClick={()=>handleClick()}>{view}</Button>}
            </Stack>
            <Box className={styles["album-grid"]}>
                { hasTabFilter && <CustomTabs genres={genres}/>}
                {view === "Collapse"?
                    <Grid container spacing={3.5}  >
                        {data && data.map((album)=>(
                        <Grid item><AlbumCard  album = {album} key={album.id}/></Grid>
                        ))}
                    </Grid>:<Carousel albums={data} id={id}/>}
            </Box>
        </Box>
    )
}

export default Section;