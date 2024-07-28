import { useRef } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

import USER_TESTIMONIALS from "../constants";
import TestimonialCard from "./TestimonialCard";

import "swiper/css";
import "swiper/css/autoplay";

const TestimonialContainer = styled(Box)(() => ({
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   height: "100vh",
   width: "100%",
}));

const TestimonialTitleBox = styled(Stack)(({ theme }) => ({
   width: "48%",
   [theme.breakpoints.down("md")]: {
      width: "90%",
   },
   maxWidth: "1050px",
   height: "auto",
   textAlign: "center",
   padding: "20px",
   alignItems: "center",
   justifyContent: "center",
}));

const TestimonialTitle = styled(Typography)(({ theme, variant }) => ({
   fontFamily: "Montserrat",
   textAlign: "center",
   fontSize: variant === "h1" ? "2rem" : "1rem",
   [theme.breakpoints.up("sm")]: {
      fontSize: variant === "h1" ? "3rem" : "1.5rem",
   },
}));

const SwiperBox = styled(Box)(() => ({
   width: "100%",
}));

const SwiperContainer = styled(Swiper)(({ theme }) => ({
   height: "500px",
   position: "relative",
   ".swiper-slide": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "transform 1s ease-in-out",
      height: "100%",
   },
   ".swiper-slide:nth-child(odd)": {
      transform: "translateY(30px)",
   },
   ".swiper-slide:nth-child(even)": {
      transform: "translateY(-30px)",
   },
   [theme.breakpoints.down("md")]: {
      ".swiper-slide": {
         transform: "translateY(0) !important",
      },
   },
   "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "100px",
      zIndex: 10,
   },
   "&::before": {
      left: 0,
      background:
         "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))",
   },
   "&::after": {
      right: 0,
      background:
         "linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))",
   },
}));

const TestimonialCarousal = () => {
   const testimonials = USER_TESTIMONIALS;
   const swiperRef = useRef<SwiperCore | null>(null);

   return (
      <TestimonialContainer>
         <TestimonialTitleBox>
            <TestimonialTitle variant="h1">What user says</TestimonialTitle>
            <TestimonialTitle variant="h4">
               Testimonials that speak louder than words! Customer stories that
               light up our day.
            </TestimonialTitle>
         </TestimonialTitleBox>
         <SwiperBox>
            <SwiperContainer
               spaceBetween={30}
               centeredSlides={true}
               slidesPerView={1}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
               }}
               speed={1500}
               loop={true}
               modules={[Autoplay]}
               onSwiper={(swiper) => {
                  swiperRef.current = swiper;
               }}
               onInit={(swiper) => {
                  const swiperEl = swiper.el;
                  swiperEl.addEventListener("mouseenter", () =>
                     swiper.autoplay.stop()
                  );
                  swiperEl.addEventListener("mouseleave", () =>
                     swiper.autoplay.start()
                  );
               }}
               breakpoints={{
                  320: {
                     slidesPerView: 1,
                     spaceBetween: 10,
                  },
                  640: {
                     slidesPerView: 1,
                     spaceBetween: 10,
                  },
                  768: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                  },
                  1024: {
                     slidesPerView: 3,
                     spaceBetween: 30,
                  },
                  1280: {
                     slidesPerView: 4,
                  },
               }}
            >
               {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                     <TestimonialCard {...item} />
                  </SwiperSlide>
               ))}
            </SwiperContainer>
         </SwiperBox>
      </TestimonialContainer>
   );
};

export default TestimonialCarousal;
