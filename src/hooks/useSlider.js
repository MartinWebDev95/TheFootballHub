import { useEffect, useRef, useState } from "react";

function useSlider() {
  let interval;

  const carouselRef = useRef();
  const matchWidth = useRef();
  const btnRef = useRef();

  const [isEnter, setIsEnter] = useState(false);

  // Function that update the data-selected attribute of the different buttons
  const updateBtnState = (firstElement) => {
    let idMatch = parseInt(firstElement.getAttribute('data-id'), 10);

    idMatch = idMatch + 1;

    if (idMatch > btnRef.current.childNodes.length) {
      idMatch = 1;
    }
      
    btnRef.current.childNodes.forEach((btn) => {
      if(btn.getAttribute('data-match') === idMatch.toString()) {
        btn.setAttribute('data-selected', 'true');
      } else {
        btn.setAttribute('data-selected', 'false');
      }
    });
  }

  const handleCarousel = () => { 
    matchWidth.current = carouselRef?.current?.children[1]?.offsetWidth;

    const firstElement = carouselRef?.current.childNodes[0];

    carouselRef.current.style.transition = 'all .3s ease-in-out';
    carouselRef.current.style.transform = `translateX(-${matchWidth.current}px)`;

    const finishTransition = () => {
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = 'translateX(0px)';

      firstElement.ariaHidden = "true";

      updateBtnState(firstElement);

      carouselRef.current.appendChild(firstElement);

      carouselRef.current.childNodes[0].ariaHidden = "false";

      carouselRef.current.removeEventListener('transitionend', finishTransition);
    };

    carouselRef?.current.addEventListener('transitionend', finishTransition);
  }

  // When the carousel is rendered for the first time the first button state is updated and the 
  // aria-hidden attribute of the first fixture is also updated 
  useEffect(() => {
    carouselRef.current.childNodes[0].ariaHidden = "false";
    btnRef.current.childNodes[0].setAttribute('data-selected', 'true');
  }, []);

  // Every five seconds the carousel is updated
  useEffect(() => {
    if (!isEnter) {
      interval = setInterval(() => {
        handleCarousel();
      }, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isEnter]);

  return { btnRef, carouselRef, matchWidth, setIsEnter }
}

export default useSlider;