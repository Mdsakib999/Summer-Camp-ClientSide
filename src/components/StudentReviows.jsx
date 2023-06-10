import React from "react";
import Title from "./Title";

const StudentReviows = () => {
  return (
    <div>
      <Title
        heading={"Students Feedback"}
        subHeading={"Review Of Our Some Students"}
      ></Title>
      <div>
        <div className="mb-16 carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="w-[80%] mx-auto  justify-center gap-4 items-center">
              <div className="w-[80%] lg mx-auto text-2xl font-semibold bg-slate-100 p-5 text-center">
                “ <br /> A satisfied customer is one who will continue to buy
                from you, seldom shop around, refer other customers and in
                general be a superstar advocate for your business. <br /> ”
              </div>
              <div className="w-[22%] lg:w-[10%] mx-auto mt-5">
                <img
                  src="https://i.ibb.co/vLHrz6d/happy-cust-4.jpg"
                  className="rounded-full w-[400px] h-[100px]"
                />
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="w-[80%] mx-auto  justify-center gap-4 items-center">
              <div className="w-[80%] lg mx-auto text-2xl font-semibold bg-slate-100 p-5 text-center">
                “ <br /> The goal as a company is to have customer service that is not just the best but legendary. <br /> ”
              </div>
              <div className="w-[22%] lg:w-[10%] mx-auto mt-5">
                <img
                  src="https://i.ibb.co/nBr5zbJ/yes-very-good-smiling-redhead-woman-cheering-up-winking-showing-thumbs-up-approval-praise-great-work.jpg"
                  className="rounded-full w-[400px] h-[100px]"
                />
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="w-[80%] mx-auto  justify-center gap-4 items-center">
              <div className="w-[80%] lg mx-auto text-2xl font-semibold bg-slate-100 p-5 text-center">
                “ <br /> Get closer than ever to your customers. So close, in fact, that you tell them what they need well before they realize it themselves. <br /> ”
              </div>
              <div className="w-[22%] lg:w-[10%] mx-auto mt-5">
                <img
                  src="https://i.ibb.co/qjSgk4S/happy-joyful-guy-showing-ok-gesture.jpg"
                  className="rounded-full w-[400px] h-[100px]"
                />
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="w-[80%] mx-auto  justify-center gap-4 items-center">
              <div className="w-[80%] lg mx-auto text-2xl font-semibold bg-slate-100 p-5 text-center">
                “ <br /> At the heart of a successful business strategy is a customer experience that is elegantly simple and positive, where consumers are likely to come away satisfied. <br /> ”
              </div>
              <div className="w-[22%] lg:w-[10%] mx-auto mt-5">
                <img
                  src="https://i.ibb.co/Rvn5jY8/very-good-smiling-satisfied-businessman-male-entrepreneur-business-suit-show-okay-signs-nod-approval.jpg"
                  className="rounded-full w-[400px] h-[100px]"
                />
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentReviows;
