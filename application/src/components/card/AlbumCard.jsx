import React from "react";
import { Card, CardMedia,CardContent, Typography, CardHeader, Box  } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from '@mui/material/Stack';
import styles from "./AlbumCard.module.css"

function AlbumCard ({data}){

    return (
        <Box sx={{position:"relative" }} className={styles["album-card"]}>
            {/* <Box className={styles["album-title"]}>{data.title}</Box> */}
            <CardMedia component="img"
             height="170"
            image={data.image}
            alt="Paella dish" className={styles["album-image"]} />
            <CardContent sx={{display:"flex",}} className={styles["album-content"]}>
                {/* <Box sx={{position:"absolute"}} className={styles["album-info"]}>
                    <Typography variant="captio">{data.description}</Typography>
                </Box> */}
                <Chip
                    label={`${data.follows} Follows`}
                    component="a"
                    href="#basic-chip"
                    clickable
                    className={styles["album-chip"]}
                    sx={{backgroundColor:"black", color:"white" }}
                />
            </CardContent>
            <Box className={styles["album-name"]}>{data.title}</Box>
        </Box>
    );

}
export default AlbumCard;