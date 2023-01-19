import React from "react";
import Carousel from "react-grid-carousel";
import events from "./events";

const GridCarousel = () => {
  return (
    <Carousel cols={3} rows={1} gap={10} loop>
      {events.map((data) => {
        const { month, date, day, title, time } = data;
        return (
          <Carousel.Item>
            <div id="carousal-item">
              <span className="content">
                <p>{data.month}</p>
                <h4>{data.date}</h4>
                <p>{data.day}</p>
              </span>

              <h5>{data.title}</h5>
              <p>{data.time}</p>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default GridCarousel;
