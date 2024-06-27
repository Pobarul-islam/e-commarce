import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { useState } from 'react';
import { mens_shirt } from '../../../Data/mens_shirt';
const HomeSectionCarousel = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = mens_shirt.slice(0 , 10).map((item) => <HomeSectionCard key={item} product={item} />);
  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          autoPlayInterval={1000}
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
   { activeIndex !==items.length - 5 &&    <Button
          className="z-50 bg-white"
          variant="contained"
          onClick={slideNext}
          sx={{
            position: 'absolute',
            top: '8rem',
            right: '0rem',
            transform: 'translateX(50%) rotate(90deg)',
            bgcolor: 'white',
          }}
          aria-label="next"
        >
          <KeyboardArrowLeft
            sx={{ transform: 'rotate(90deg)', color: 'black' }}
          />
        </Button>}
        <Button
          className="z-50 bg-white"
          variant="contained"
          onClick={slidePrev}
          sx={{
            position: 'absolute',
            top: '8rem',
            left: '0rem',
            transform: 'translateX(-50%) rotate(-90deg)',
            bgcolor: 'white',
          }}
          aria-label="next"
        >
          <KeyboardArrowLeft
            sx={{ transform: 'rotate(90deg)', color: 'black' }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
