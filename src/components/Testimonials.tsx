import React, { useEffect } from 'react';
import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';
// import swiper styles
import 'swiper/swiper-bundle.css';
import {
  StyledTestimonialItem,
  StyledTestimonialItemContainer,
  StyledTestimonials,
} from '../styles/testimonials.styles';
interface Testimonial {
  _id: string;
  content: string;
  author: string;
  company?: string;
}
interface TestimonialsProps {
  items: Testimonial[];
}

const Testimonials = ({ items }: TestimonialsProps) => {
  useEffect(() => {
    const swiperConfig = {
      grabCursor: true,
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
    };
    Swiper.use([Navigation, Pagination, EffectFade]);
    new Swiper('.swiper-container', swiperConfig);
  }, []);

  return (
    <StyledTestimonials
      data-testid="swiper-container"
      className="swiper-container"
    >
      <div className="swiper-wrapper">
        {items.map((t: Testimonial) => (
          <StyledTestimonialItem
            key={t._id}
            data-testid="testimonial-item"
            className="swiper-slide"
          >
            <StyledTestimonialItemContainer>
              <section className="body">
                <p>{t.content}</p>
              </section>
              <section>
                <div className="author">{t.author}</div>
                {typeof t.company === 'string' && (
                  <div className="company">{t.company}</div>
                )}
              </section>
            </StyledTestimonialItemContainer>
          </StyledTestimonialItem>
        ))}
      </div>
      <div
        data-testid="swiper-arrow"
        className="arrow swiper-button-next swiper-button-white"
      ></div>
      <div
        data-testid="swiper-arrow"
        className="arrow swiper-button-prev swiper-button-white"
      ></div>
      <div data-testid="swiper-pagination" className="swiper-pagination" />
    </StyledTestimonials>
  );
};

export default Testimonials;
