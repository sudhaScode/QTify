import { Box, Stack, Typography, Button, Grid } from "@mui/material"
import AlbumCard from "../card/AlbumCard"
import styles from "./Section.module.css"
import { useEffect, useState } from "react"
import { config } from "../../App"


function Section ({header}){
   const [data, setData] = useState([]);
  useEffect(()=>{
    const path = header.split(" ")[0].toLowerCase();
    const URL = `${config.endPoint}/${path}`
    const fetchAlbum = async(URL)=>{
        try{
            const response = await fetch(URL);
            if(!response.ok){
                throw Error({status: response.status}) 
            }
            const data = await response.json();
            //console.log(data)
            setData(data)
            return
            
        }     
        catch(error){
            console.error(error)
        }

    }
    fetchAlbum(URL)

    
  },[])
    return (
        <Box className={styles.section} >
            <Stack direction="row" justifyContent="space-between">
                <Typography className={styles["section-header"]}> {header}</Typography>
                <Button className={styles["section-collapse"]}>Collapse</Button>
            </Stack>
            <Grid container spacing={4}  className={styles["album-grid"]}>
                {data && data.map((album)=>(
                   <Grid item><AlbumCard  data = {album} key={album.id}/></Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Section;