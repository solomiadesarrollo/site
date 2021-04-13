// // import React, { useState } from 'react';
// import React, { useState } from 'react';
// import CarouselData from "./CarouselData"
// import img1 from "../../assets/images/img1.png";
// import img2 from "../../assets/images/img2.png";
// import img3 from "../../assets/images/img3.png";
// import img4 from "../../assets/images/img4.png";
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import './Carousel.css';


// function Carousel() {
//     let carouselArr = [
//         <CarouselData src={img1} />,
//         <CarouselData src={img2} />,
//         <CarouselData src={img3} />,
//         <CarouselData src={img4} />

//     ];
//     const [x, setX] = useState(0)
//     const goLeft = () => {
//         x === 0 ? setX(-100 * (carouselArr.length - 1)) : setX(x + 100);

//     };
//     const goRight = () => {
//         x === -100 * (carouselArr.length) ? setX(0) : setX(x - 100);

//     };
                   
//     return (
//         <div className="slider">
//             {carouselArr.map((item, index) => {
//                 return (
//                     <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
//                         {item}

//                     </div>
                    
                    
//                 );
//             })}
//             <button id="goLeft" onClick={goLeft}>
//                 <FaChevronLeft />
//             </button>
//             <button id="goRight" onClick={goRight}>
//                 <FaChevronRight />
//             </button>
//         </div>
//     )


// }
// export default Carousel;






