import React from 'react';
 //import { Slide } from 'react-slideshow-image';
 import 'react-slideshow-image/dist/styles.css';
 import './Slider.css';


const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;
const slideImages = [
     {
       url: 'https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg',
       caption: 'I'
     },
     {
       url: '	https://m.media-amazon.com/images/I/61Ky5NkNWcL._SX3000_.jpg',
       caption: 'II'
     },
     {
       url: 'https://m.media-amazon.com/images/I/6191mjjqxYL._SX3000_.jpg',
      caption: 'III'
    },
    {
      url: 'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
      caption: 'IV'
    },
    {
      url: 'https://m.media-amazon.com/images/I/61ASx7NHTWL._SX3000_.jpg',
      caption: 'V'
    },
    {
      url: 'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg',
      caption: 'VI'
    },
    {
      url: 'https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg',
      caption: 'VII'
    }
  ];
   
function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slideImages.map((slideImage, index) => (
          <div
            className="slide"
            key={index}
            style={{'backgroundImage': `url(${slideImage.url})`}}
          ></div>
        ))}
      </div>
      <div className="slideshowDots">
        {slideImages.map((_, index2) => (
          <div
            key={index2}
            className={`slideshowDot${index === index2 ? " active" : ""}`}
            onClick={() => {
              setIndex(index2);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;