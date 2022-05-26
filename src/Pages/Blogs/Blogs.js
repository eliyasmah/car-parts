import React from "react";

const Blogs = () => {
  return (
    <div>
      <div class="card w-80% bg-base-100 shadow-xl my-8 bg-gray-100">
        <div class="card-body">
          <h2 class="card-title text-primary font-bold text-2xl">
            1. How will you improve the performance of a React Application?
          </h2>
          <p>
            a) Keeping component state local where necessary.
            <br />
            b) Memoizing React components to prevent unnecessary re-renders.
            <br />
            c) Code-splitting in React using dynamic import().
            <br />
            d) Windowing or list virtualization in React.
            <br />
            e)Lazy loading images in React.
          </p>
        </div>
      </div>
      <div class="card w-80% bg-base-100 shadow-xl mb-8 bg-gray-100">
        <div class="card-body">
          <h2 class="card-title text-primary font-bold text-2xl">
            2. What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            When we talk about state in our applications, it’s important to be
            clear about what types of state actually matter.
            <br />
            There are four main types of state you need to properly manage in
            your React apps:
            <br />
            a) Local state.
            <br />
            b) Global state.
            <br />
            c) Server state.
            <br />
            d) URL state.
          </p>
        </div>
      </div>
      <div class="card w-80% bg-base-100 shadow-xl mb-8 bg-gray-100">
        <div class="card-body">
          <h2 class="card-title text-primary font-bold text-2xl">
            3. How does prototypical inheritance work?
          </h2>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object.getPrototypeOf and Object.prototypical
            inheritance refers to the ability to access object properties from
            another object. We use a JavaScript prototype to add new properties
            and methods to an existing object constructor. We can then
            essentially tell our JS code to inherit properties from a prototype.
            Prototypical inheritance allows us to reuse the properties or
            methods from one JavaScript object to another through a reference
            pointer function.
          </p>
        </div>
      </div>
      <div class="card w-80% bg-base-100 shadow-xl mb-8 bg-gray-100">
        <div class="card-body">
          <h2 class="card-title text-primary font-bold text-2xl">
            4. Why you do not set the state directly in React?
          </h2>
          <p>
            a) If we set it directly, calling the setState() afterward may just
            replace the update made.
            <br />
            b) When directly update the state, it does not change this.state
            immediately. Instead, it creates a pending state transition, and
            accessing it after calling this method will only return the present
            value.
            <br />
            c) We will lose control of the state across all components.
          </p>
        </div>
      </div>
      <div class="card w-80% bg-base-100 shadow-xl mb-8 bg-gray-100">
        <div class="card-body">
          <h2 class="card-title text-primary font-bold text-2xl">
            5. What is a unit test? Why should write unit tests?
          </h2>
          <p>
            Unit testing is a type of software testing where individual units or
            components of a software are tested. The purpose is to validate that
            each unit of the software code performs as expected. Unit Testing is
            done during the development of an application by the developers.
            <br />
            <br />
            Write unit tests because:
            <br /> a) Decrease defects and expose them early in the development
            lifecycle.
            <br />
            b) Increase code readability.
            <br />
            c) Enable code reuse.
            <br />
            d) Improve deployment velocity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
