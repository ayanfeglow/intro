import React from "react";

const Career = () => {
  return (
    <div className="bg-[aliceblue] m-auto h-[100vh] text-white">
      <div className="m-auto h-[40vh] h-[84.2vh] flex justify-center flex-col items-center">
        <h1 className="text-center text-4xl font-bold pt-20 text-blue-600 ">
          Career Page
        </h1>
        <p className="text-center text-xl pt-10 px-20 text-blue-400">
          Explore exciting career opportunities in web development! Join our
          dynamic team and contribute to innovative projects that shape the
          digital landscape. Whether you're a seasoned developer or just
          starting your journey, we offer a collaborative environment where your
          skills can thrive and grow. Discover your potential with us and take
          the next step in your career today!
        </p>
        <div className="text-center pt-10">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500">
            Apply Now
          </button>
        </div>
      </div>
      <footer>
        <div className="text-center p-4 bg-blue-600 text-white mt-[8vh]">
          &copy; 2025 Web Development. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Career;
