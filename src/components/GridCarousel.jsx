import React from "react";
import Carousel from "react-grid-carousel";
import events from "./calendar/events";

const GridCarousel = () => {
  return (
    <Carousel cols={3} rows={1} gap={10} loop>
      {events.map(({ month, dayNo, day, title, time }) => {
        return (
          <Carousel.Item>
            <div id="carousal-item">
              <span className="content">
                <p>{month}</p>
                <h4>{dayNo}</h4>
                <p>{day}</p>
              </span>

              <h5>{title}</h5>
              <p>{time}</p>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default GridCarousel;
