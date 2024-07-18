import { Box, Stack, Typography, Button, Grid } from "@mui/material";
import AlbumCard from "../card/AlbumCard";
import styles from "./Section.module.css";
import { useEffect, useState } from "react";
import { config } from "../../App";
import Carousel from "../carousel/Carousel";
import CustomTabs from "./tabs/Tabs";

function Section({ header, hasTabFilter, id }) {
  const [albums, setAlbums] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [view, setView] = useState("Show all");
  const [genres, setGenres] = useState({});
  const [error, setError] = useState(null);

  // Function to fetch albums data
  const fetchAlbums = async (URL) => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching albums:", error);
      setError(error.message);
    }
  };

  // Function to fetch genres data
  const fetchGenres = async () => {
    try {
      const response = await fetch(`${config.endPoint}/genres`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching genres:", error);
      setError(error.message);
    }
  };

  // Effect to fetch data when component mounts or dependencies change
  useEffect(() => {
    const fetchData = async () => {
      const path = header.split(" ")[0].toLowerCase();
      try {
        // Fetch albums based on path
        const albumsData = await fetchAlbums(
          hasTabFilter ? `${config.endPoint}/${path}` : `${config.endPoint}/albums/${path}`
        );
        setAlbums(albumsData);

        // Fetch genres if tab filtering is enabled
        if (hasTabFilter) {
          const genresData = await fetchGenres();
          setGenres(genresData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, [header, hasTabFilter]);

  // Effect to update filtered data when albums state changes
  useEffect(() => {
    setFilterData(albums);
  }, [albums]);

  // Handler for toggling view mode between "Show all" and "Collapse"
  const handleClick = () => {
    setView((prev) => (prev === "Collapse" ? "Show all" : "Collapse"));
  };

  // Handler for updating filtered data based on selected tab
  const handleStateUpdate = (tab) => {
    tab = tab.toLowerCase();
    if (["jazz", "pop", "rock", "blues"].includes(tab)) {
      setFilterData(albums.filter((song) => song.genre.key === tab));
    } else {
      setFilterData(albums); // Reset to all albums if no specific genre selected
    }
  };

  return (<>{!error &&
    <Box className={styles.section}>
      <Stack direction="row" justifyContent="space-between">
        <Typography className={styles["section-header"]}>{header}</Typography>
        {!hasTabFilter && (
          <Button className={styles["section-collapse"]} onClick={handleClick}>
            {view}
          </Button>
        )}
      </Stack>
      <Box className={styles["album-grid"]}>
        {hasTabFilter && <CustomTabs genres={genres} toggleTab={handleStateUpdate} />}
        {view === "Collapse" ? (
          <Grid container spacing={3.5}>
            {filterData.map((album) => (
              <Grid item key={album.id}>
                <AlbumCard album={album} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Carousel albums={filterData} id={id} />
        )}
      </Box>
    </Box>}</>
  );
}

export default Section;
