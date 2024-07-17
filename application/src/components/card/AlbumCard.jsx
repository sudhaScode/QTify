import React from "react";
import { Card, CardMedia,CardContent, Box  } from "@mui/material";
import Chip from "@mui/material/Chip";
import styles from "./AlbumCard.module.css"

function AlbumCard ({album}){
    //console.log(album, "dwdeqeq")

    return (
        <Box sx={{position:"relative" }} className={styles["album-card"]}>
            {/* <Box className={styles["album-title"]}>{album.title}</Box> */}
            <CardMedia component="img"
             height="170"
            image={album.image}
            alt="Paella dish" className={styles["album-image"]} />
            <CardContent sx={{display:"flex",}} className={styles["album-content"]}>
                {/* <Box sx={{position:"absolute"}} className={styles["album-info"]}>
                    <Typography variant="captio">{album.description}</Typography>
                </Box> */}
                <Chip
                    label={album?.likes?`${album.likes} Likes`:`${album.follows} Follows`}
                    component="a"
                    href="#basic-chip"
                    clickable
                    className={styles["album-chip"]}
                    sx={{backgroundColor:"black", color:"white" }}
                />
            </CardContent>
            <Box className={styles["album-name"]}>{album.title}</Box>
        </Box>
    );

}
export default AlbumCard;