import styled from 'styled-components';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';
import { useMemo } from 'react';


const StyledCarousel = styled(Carousel)`
width: 95%;
margin-left: 1rem;
@media (max-width: 1000px) {
  width: 90%;
}
`

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 5,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 800
    },
    items: 3,
  },
  largeTablet: {
    breakpoint: {
      max: 1280,
      min: 1025
    },
    items: 4,
  },
  mobile: {
    breakpoint: {
      max: 548,
      min: 0
    },
    items: 1,
  },
  largeMobile: {
    breakpoint: {
      max: 800,
      min: 548
    },
    items: 2,
  }
}

  

const CardCarousel = ({data}) => {

  const restaurants = [...data];
  const mostFrequent = useMemo(function() {
    const arr = restaurants?.sort((a, b) => b.totalOrders - a.totalOrders).slice(0,8);
    return arr;
  },[data]);
 
  const displayCards = mostFrequent.map((item,index) => (
    <Card key = {index} frequentOrder={true} data = {item}/>
  ))

  return (
        <StyledCarousel
          additionalTransfrom={0}
          arrows
          responsive={responsive}
          autoPlaySpeed={3000}
          centerMode={false}
          draggable = {false}
          focusOnSelect={false}
          infinite
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {displayCards}
        </StyledCarousel>
    
  )
}

export default CardCarousel