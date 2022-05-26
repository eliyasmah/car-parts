import React from "react";
import image from "../../images/banner/eliyas.png";

const MyPortfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200 rounded">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img className="mx-24" src={image} alt="" />
          <div>
            <h1 className="text-red-400 text-4xl">Hello !</h1>
            <h1 class="text-5xl text-blue-400 font-medium mb-4">
              My name is <br /> Md Eliyas
            </h1>
            <h2 className="text-3xl font-medium text-red-400">
              I Am Front End Developer
            </h2>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-center my-8 font-bold text-primary">
          About Me
        </h1>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <div class="flex flex-col w-full lg:flex-row">
              <div class="grid flex-grow h-24  bg-base-300 rounded-box place-items-center text-2xl text-blue-400 font-medium">
                Projects
                <br />
                15+
              </div>
              <div class="grid flex-grow h-24  bg-base-300 rounded-box place-items-center text-2xl text-blue-400 font-medium">
                Happy Clients
                <br />
                5+
              </div>
            </div>
            <div>
              <p class="py-6">
                He! I am Md Eliyas. I am front end web developer.
              </p>
              <p>Full Name: Md Eliyas</p>
              <p>Age:25</p>
              <p>Address: Bhola, Bangladesh</p>
              <p>Phone Number: 01936261375</p>
              <p>Email Address: eliyasbubt@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
