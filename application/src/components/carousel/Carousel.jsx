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
      navigation={{
        prevEl: `.${prevButtonClass}`,
        nextEl: `.${nextButtonClass}`,
      }}
      className="mySwiper"
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        // when window width is >= 640px
        576: {
          slidesPerView: 3,
          spaceBetween: 80
        },
        // when window width is >= 768px
        799: {
          slidesPerView: 5,
          spaceBetween: 130
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 7,
          spaceBetween: 180
        },
      }}
    >
      {albums.map((album) => (
        <SwiperSlide key={album.id} className={styles["swiper-slide"]}>
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
