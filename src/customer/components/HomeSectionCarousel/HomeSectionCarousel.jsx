import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { useState } from 'react';
import PropTypes from 'prop-types';

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(!item);
  console.log(syncActiveIndex);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard key={item} product={item} />);

  return (
    <div className="border">
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
         
        />
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            className="z-50 bg-white"
            variant="contained"
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
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            className="z-50 bg-white"
            variant="contained"
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '0rem',
              transform: 'translateX(-50%) rotate(-90deg)',
              bgcolor: 'white',
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeft
              sx={{ transform: 'rotate(90deg)', color: 'black' }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

HomeSectionCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  sectionName: PropTypes.string,
};

export default HomeSectionCarousel;
