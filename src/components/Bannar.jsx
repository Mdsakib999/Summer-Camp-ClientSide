import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Bannar = () => {
  return (
    <Carousel className="mt-10 text-center">
      <div className="rounded-md">
        <img
          className="rounded-md"
          src="https://i.ibb.co/T2h2bDJ/banner-summer-Camp-2-1200x450-1.jpg"
        />
      </div>
      <div className="rounded-md">
        <img
          className="rounded-md"
          src="https://i.ibb.co/Y3T4znV/banner-football-1200x450.jpg"
        />
      </div>
      <div className="rounded-md">
        <img
          className="rounded-md"
          src="https://i.ibb.co/rF4LCrK/banner-crickte-1200x450.jpg"
        />
      </div>
      <div className="rounded-md">
        <img
          className="rounded-md"
          src="https://i.ibb.co/9gxHkyz/basketball-summer-camp-1200x450.jpg"
        />
      </div>
      <div className="rounded-md ">
        <img
          className="rounded-md "
          src="https://i.ibb.co/r5rFbzS/Banner-Swim-2-1200x450.jpg"
        />
      </div>
      <div className="rounded-md">
        <img
          className="rounded-md"
          src="https://i.ibb.co/PFXphDw/banner-summer-Camp-1200x450.jpg"
        />
      </div>
    </Carousel>
  );
};

export default Bannar;
