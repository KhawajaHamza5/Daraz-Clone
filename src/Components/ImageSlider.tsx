
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

const slideImages = [
  {
    url: 'https://img.lazcdn.com/us/domino/99a30fa7-4d17-43a9-b493-33c3065c0140_PK-1053-360.jpg_760x760q80.jpg_.webp',
  },
  {
    url: 'https://img.lazcdn.com/us/domino/a96c9e6a-ba9f-4bc7-a4f8-077c96f3d313_PK-1053-360.jpg_760x760q80.jpg_.webp',
  },
  {
    url: 'https://img.lazcdn.com/us/domino/4f7910d8-e62b-4f23-8887-82f46146376f_PK-1053-360.png_760x760q80.png_.webp',
  },
  {
    url: 'https://img.lazcdn.com/us/domino/99a30fa7-4d17-43a9-b493-33c3065c0140_PK-1053-360.jpg_760x760q80.jpg_.webp',
  },
  {
    url: 'https://img.lazcdn.com/us/domino/cea9881c-d41e-4ded-8132-20aa6d04c3c2_PK-1053-360.jpg_760x760q80.jpg_.webp',
  },
];

const ImageSlider = () => {

  return (
    <div className='relative w-full p-5 mb-10 sm:h-52 md:h-60 h-52 lg:h-72 xl:h-80 2xl:h-[500px]'>
      <Fade
        prevArrow={<div className='hidden' />} 
        nextArrow={<div className='hidden' />}
        duration={3000}
        transitionDuration={1000} 
      >
        {slideImages.map((Image, index) => (
          <div key={index}>
            <img
              className='h-40 sm:h-52 md:h-60 w-full xl:h-80 rounded-lg object-center lg:h-72 2xl:h-[500px]'
              src={Image.url}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default ImageSlider;
