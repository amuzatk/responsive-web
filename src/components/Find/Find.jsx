// import React from "react";
// import Swiper from "swiper";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import styles from "./Find.module.css";
// import "swiper/css";
// import "swiper/css/pagination";

// const Find = () => {
//   return (
//     <div className={styles.find}>
//       <div className={styles.heading}>
//         <h1>Find your drive</h1>
//         <div className={styles.text_bg}>
//           <p>
//             <span>Explore the Wolrd's largest sharing marketplace</span>
//           </p>
//         </div>
//       </div>
//       <div className={styles.slider_container}>
//         <Swiper
//         spaceBetween={30}
//         slidesPerView={3}
//         onSlideChange={()=> console.log('slide change')}
//         ></Swiper>
//       </div>
//     </div>
//   );
// };

// export default Find;

// react-responsive-carousel
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Find.module.css";
import Image1 from "../../../src/images/hospital1.jpg";
import Image2 from "../../../src/images/hospital2.jpg";
import Card from "./Card";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

// import SwiperCore, { Navigation, Pagination } from "swiper/core";

// SwiperCore.use([Navigation, Pagination]);

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your drive</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the World's largest sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Carousel
          autoPlay={true}
          interval={3000} // Auto-play interval in milliseconds
          infiniteLoop={true}
          showStatus={false} // Hide status indicator
          showThumbs={false} // Hide thumbnail navigation
          showArrows={true} // Show navigation arrows
          dynamicHeight={true} // Adjust slide height based on content
        >
          <Card
            image="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
            make="Kazmah"
          />
          <Card
            image="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
            make="Kazmah"
          />
          <Card
            image="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
            make="Kazmah"
          />
          <Card
            image="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
            make="Kazmah"
          />
        </Carousel>

        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
};

export default Find;
