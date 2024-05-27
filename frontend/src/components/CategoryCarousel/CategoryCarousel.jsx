import React, { useEffect, useState, useCallback } from 'react';
import './CategoryCarousel.css';

const CategoryCarousel = () => {
  const [index, setIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState(null);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState('right');

  const cards = [
    { title: 'Card 1', text: 'Descriptive text here' },
    { title: 'Card 2', text: 'Descriptive text here' },
    { title: 'Card 3', text: 'Descriptive text here' },
    { title: 'Card 4', text: 'Descriptive text here' },
    { title: 'Card 5', text: 'Descriptive text here' },
  ];

  const goToIndex = useCallback((newIndex) => {
    setExitingIndex(index);
    setDirection(newIndex > index ? 'right' : 'left');
    setIndex(newIndex);
    setPaused(true);
    setTimeout(() => setPaused(false), 10000);
  }, [index]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setExitingIndex(index);
      setDirection('right'); // Always set to 'right' for automatic transition
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [index, cards.length, paused]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`carousel-card ${
              i === index ? (direction === 'right' ? 'active' : 'active-left') :
              i === exitingIndex ? (direction === 'right' ? 'exit' : 'exit-left') : ''
            }`}
          >
            <h1>{card.title}</h1>
            <p>{card.text}</p>
            <button className='carousel-button'>See More</button>
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goToIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;







