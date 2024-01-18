import  { useEffect } from 'react';
import { animate, scroll } from 'motion';

const ImageContainer = (props) => {
  useEffect(() => {
    scroll(
      animate(
        '#projectimg',
        {
          filter: [
            'grayscale(100%)',
            'grayscale(100%)',
            'grayscale(0%)',
            'grayscale(0%)',
            'grayscale(0%)',
            'grayscale(100%)',
            'grayscale(100%)',
          ],
        },
        {
          easing: ['ease-in', 'linear', 'ease-out'],
        }
      ),
      {
        offset: ['start start', 'end end'],
      }
    );
  }, []); 

  return (
    <div className="group relative">
      <img
        id="projectimg"
        alt={props.title}
        width="3648"
        height="3117"
        decoding="async"
        className="w-full"
        sizes="(min-width: 1216px) 76rem, 100vw"
        src={props.src}
      />
    </div>
  );
};

export default ImageContainer;
