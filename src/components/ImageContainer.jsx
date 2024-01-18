import React from 'react';

import { animate, scroll } from "motion";

 
// scroll(
//   animate(
//     "#projectimg",
//     {
//       filter: [
//         "grayscale(100%)",
//         "grayscale(100%)",
//         "grayscale(0%)",
//         "grayscale(0%)",
//         "grayscale(0%)",
//         "grayscale(100%)",
//         "grayscale(100%)",
//       ],
//     },
//     {
//       easing: ["ease-in", "linear", "ease-out"],
//     }
//   ),
//   {
//     offset: ["start start", "end end"],
//   }
// );

class ImageContainer extends React.Component {
    
    render() {
      return  <div class="group relative">
      <img
        id="projectimg"
        alt={this.props.title}
        width="3648"
        height="3117"
        decoding="async"
        class="w-full"
        sizes="(min-width: 1216px) 76rem, 100vw"
        src={this.props.src}
      />
</div>;
    }
  }

  

  export default ImageContainer;