import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

export default function Carroussel(props) {
  const [Carousel, setCarousel] = useState(null);
  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadCarousel = async () => {
      const DynamicCarousel = await dynamic(() => import('react-spring-3d-carousel'));
      setCarousel(() => DynamicCarousel);
    };

    loadCarousel();
  }, []);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  useEffect(() => {
    const table = props.cards.map((element, index) => {
      return { ...element, onClick: () => setGoToSlide(index) };
    });
    setCards(table);
  }, [props.cards]);

  if (!Carousel) {
    return null; // Мы рендерим пустоту, если Carousel еще не загружен
  }

  return (
    <div style={{ width: props.width, height: props.height, margin: props.margin }}>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
      />
    </div>
  );
}
