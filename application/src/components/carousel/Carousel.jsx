import React,{useEffect, useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AlbumCard from '../card/AlbumCard';
import nextArrow from "../../assets/prev.svg"
import prevArrow from "../../assets/next.svg";
import SwiperCore from 'swiper';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import styles from "./Carousel.module.css"

// Configure Swiper to use Navigation
SwiperCore.use([Navigation,Scrollbar, A11y]);

const Carousel = ({ albums,id }) => {
        const swiperRef = useRef(null);
      
        const onInit = (swiper) => {
          swiperRef.current = swiper;
          swiper.navigation.init();
          swiper.navigation.update();
        };
      
        useEffect(() => {
          if (swiperRef.current) {
            swiperRef.current.navigation.update();
          }
        }, []);
    
        const prevButtonClass = `custom-prev-button-${id}`;
       const nextButtonClass = `custom-next-button-${id}`;


  return (
    <div className={styles["carousel-container"]}>
    <Swiper
      onInit={onInit}
      spaceBetween={130}
      slidesPerView={7}
      navigation={{
        prevEl: `.${prevButtonClass}`,
        nextEl: `.${nextButtonClass}`,
      }}
      className="mySwiper"
    >
      {albums.map((album) => (
        <SwiperSlide key={album.id}>
          <AlbumCard album={album}  key={`${album.id}${album.id}`}/>
        </SwiperSlide>
      ))} 
       <SwiperSlide key="dummy-1"></SwiperSlide>
    </Swiper>
    <div  className={`${styles["custom-prev-button"]} ${prevButtonClass}`}>
        <img src={prevArrow} alt="Previous" />
      </div>
      <div className={`${styles["custom-next-button"]} ${nextButtonClass}`}>
        <img src={nextArrow} alt="Next" />
      </div>
    </div>      
  );
};

export default Carousel;
