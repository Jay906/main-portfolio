// import React, {useState} from "react";
// import Slider from "react-slick";
// import exp from "../assets/exp.jpg";
// import code from "../assets/code.jpg";
// import small from "../assets/small.jpg";
// const images = ["", exp, code, small, ""];
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// function Slides() {
//   const [current, setCurrent] = useState(0);
//   const NextArrow = ({ onClick }) => {
//     return (
//       <div onClick={onClick} className="arrow next">
//         <FaArrowRight />
//       </div>
//     );
//   };

//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div onClick={onClick} className="arrow prev">
//         <FaArrowLeft />
//       </div>
//     );
//   };

//   const settings = {
//     infinite: true,
//     dots: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0px",
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };
//   return (
//     <div className="slides">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={image} alt={image} className="carousel-image" />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Slides;

import React, { useState } from "react";
import kanban from "../assets/kanban.png";
import movieSearcher from "../assets/movie-searcher.png";
import budgeting from "../assets/budgeting-app.png";
import styled from "styled-components";

const images = [kanban, movieSearcher, budgeting];

const Carousel = styled.section`
  height: 50vh;
  width: 100%;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;
  display: flex;

  .carousel-content {
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    transform: ${({ index }) => `translateX(${index * -90}%)`};
    align-items: center;
    transition: all 0.4s;
  }

  .carousel-image {
    min-width: 90%;
    max-height: 100%;
    height: 100%;
    transform: scale(0.98, 0.8);
    transition: all 0.4s;
  }

  .active {
    transform: scale(1, 1);
  }

  .arrow {
    color: black;
    border: none;
    border-radius: 50%;
    font-size: 2rem;
    z-index: 1;
    height: 3rem;
    width: 3rem;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;
  }

  .next {
    right: 1rem;
    display: ${({ index }) =>
      index === images.length - 2 ? "none" : "inline-block"};
  }

  .prev {
    left: 1rem;
    display: ${({ index }) => (index === -1 ? "none" : "inline-block")};
  }
`;

function Slides() {
  const [current, setCurrent] = useState(0);

  const leftClick = () => {
    if (current === -1) {
      return;
    }

    setCurrent(current - 1);
  };

  const rightClick = () => {
    if (current === images.length - 2) {
      return;
    }
    console.group(current, images.length);
    setCurrent(current + 1);
  };

  return (
    <Carousel className="carousel" index={current}>
      <button className="arrow prev" onClick={leftClick}>
        {"<"}
      </button>
      <article className="carousel-content">
        {images.map((image, index) => (
          <img
            src={image}
            key={index}
            alt={image}
            className={
              current === index - 1 ? "active carousel-image" : "carousel-image"
            }
          />
        ))}
      </article>
      <button className="arrow next" onClick={rightClick}>
        {">"}
      </button>
    </Carousel>
  );
}

export default Slides;
