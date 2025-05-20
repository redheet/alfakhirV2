import { FC } from "react";
import Image from "next/image";

interface GridImagesProps {
  images: {
    src: string;
    alt: string;
    description: string;
  }[];
  onClick: (index: number) => void;
}

const GridImages: FC<GridImagesProps> = (props) => {
    const { images, onClick } = props;

    const handleClickImage = (index: number) => {
        onClick(index);
    }

    return (
        <div className='images-container'>
      {images.map((slide, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className='image'
        >
          <Image 
            src={slide.src} 
            alt={slide.description}
            width={1000}
            height={1000}
            loading='lazy'
           />
        </div>
      ))}
    </div>
    )
}

export default GridImages;
