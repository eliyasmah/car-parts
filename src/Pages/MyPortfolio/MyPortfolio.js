import React from "react";
import image from "../../images/banner/eliyas.png";
import coder from "../../images/banner/coder.jpg";
import project1 from "../../images/banner/project1.PNG";
import project2 from "../../images/banner/project2.PNG";
import project3 from "../../images/banner/project3.PNG";

const MyPortfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-gray-600 rounded">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="avatar">
            <div class="w-50% rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-16">
              <img src={image} alt="" />
            </div>
          </div>
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
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div class="card  bg-base-100 shadow-xl">
                <div class="card-body text-primary font-semibold">
                  <h2 class="card-title text-3xl">Happy Clients</h2>
                  <p className="text-5xl">5+</p>
                </div>
              </div>
              <div class="card  bg-base-100 shadow-xl">
                <div class="card-body  text-primary font-semibold">
                  <h2 class="card-title text-3xl">Projects</h2>
                  <p className="text-5xl">10+</p>
                </div>
              </div>
            </div>
            <div className="w-80">
              <p class="py-6">
                He! I am Md Eliyas. I'm a Front End Engineer based in
                Bangladesh. I describe myself as a passionate developer who
                loves coding, open source, and the web platform. Aside from my
                job, I like to create and contribute to open source projects.
                That helps me to learn a ton of new stuff, grow as a developer
                and support other open source projects.
              </p>
              <div className="text-blue-600 text-2xl font-medium">
                <p>Full Name: Md Eliyas</p>
                <p>Age: 26</p>
                <p>Address: Bhola, Bangladesh</p>
                <p>Phone Number: 01936261375</p>
                <p>Email Address: eliyasbubt@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center my-8 font-bold text-primary">
            My Skills
          </h1>
          <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
              <img
                src={coder}
                class="max-w-sm rounded-lg shadow-2xl mr-12"
                alt="img"
              />
              <div>
                <p className="text-blue-400 font-semibold">HTML</p>
                <progress
                  class="progress progress-gray-400 w-80"
                  value="90"
                  max="100"
                ></progress>
                <br />
                <p className="text-blue-400 font-semibold">CSS</p>
                <progress
                  class="progress progress-primary w-80"
                  value="80"
                  max="100"
                ></progress>
                <br />
                <p className="text-blue-400 font-semibold">JavaScript</p>
                <progress
                  class="progress progress-gray-400 w-80"
                  value="70"
                  max="100"
                ></progress>
                <br />
                <p className="text-blue-400 font-semibold">React</p>
                <progress
                  class="progress progress-primary w-80"
                  value="70"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center my-8 font-bold text-primary">
            My Projects
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
              <figure>
                <img src={project1} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-blue-400 font-semibold text-2xl">
                  Single Flash Photography
                </h2>
                <div class="card-actions justify-end ">
                  <a
                    className="btn btn-blue-600 px-6"
                    href="https://provides-services.web.app/"
                    target="/_blank"
                  >
                    VISIT SITE
                  </a>
                </div>
              </div>
            </div>
            <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
              <figure>
                <img src={project2} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-blue-400 font-semibold text-2xl">
                  Hello Organic
                </h2>
                <div class="card-actions justify-end ">
                  <a
                    className="btn btn-blue-600 px-6"
                    href="https://inventory-managing.web.app/"
                    target="/_blank"
                  >
                    VISIT SITE
                  </a>
                </div>
              </div>
            </div>
            <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
              <figure>
                <img src={project3} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-blue-400 font-semibold text-2xl">
                  Single Flash Photography
                </h2>
                <div class="card-actions justify-end ">
                  <a className="btn btn-blue-600 px-6" href="" target="/_blank">
                    VISIT SITE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
