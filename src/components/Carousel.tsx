import React from "react";

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out transform">
          {images.map((image, index) => (
            <div
              key={index}
              className={`min-w-full flex-shrink-0 h-64 sm:h-96 md:h-120 lg:h-160 xl:h-200 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={image} alt={`Image ${index}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white opacity-75 px-2 py-1 rounded-full"
        onClick={previousImage}
      >
        Previous
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white opacity-75 px-2 py-1 rounded-full"
        onClick={nextImage}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
