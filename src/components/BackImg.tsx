import bgImage from '../assets/image.png';
import ImageCard from './ImageCard';

function BackImage() {
  return (
 
    <div className="relative w-full h-[500px]">
      <img src={bgImage} alt="Background" className="w-full h-full object-cover" />

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex">
        <ImageCard
          title="Hotel or Destination"
          subtitle="Select"
          backgroundColor="bg-gray"
        />
        <ImageCard
          title="Departure"
          subtitle="14.11.2028"
          backgroundColor="bg-dark"
        />
        <ImageCard
          title="Arrivals"
          subtitle="25.10.2025"
          backgroundColor="bg-blue"
        />
      </div>
    </div>
  );
}

export default BackImage;
