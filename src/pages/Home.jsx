import React from "react";
import { useForm } from "react-hook-form";
import image from "../pages/images/image.jpg";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const Home = () => {
    const schema = yup
    .object()
    .shape({
      name: yup.string().required("name is required"),
      email: yup.string().email().required(),
    message: yup.string().required("message is required"),
    })
    .required()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    const onSubmit = (data) => {
        console.log("data:", data);
    }
  return (
    <main>
      <div className="flex justify-center items-center h-[92vh]">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-blue-500 pb-2">
            Web Development
          </h1>
          <p className="text-blue-500 font-semi-bold">
            Web development is a very interesting field from the frontend to the
            backend, all makes sense when you understand better
          </p>
          <button className="px-8 py-2 border border-2 text-blue-500 rounded-md text-center mt-2 hover:bg-blue-500 hover:text-white hover:border-blue-500">
            <Link to="/about">Learn More</Link>
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-l from-blue-400 to-blue-200 h-[100vh]">
        <div className="flex justify-between m-auto px-10 py-17 max-w-[90%]">
          <div className="w-[40%] h-130">
            <h1 className="text-center text-blue-500 font-bold text-4xl">
              About Us
            </h1>
            <p className="text-blue-400 font-semibold text-center py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              nihil voluptatem quidem, officia nisi sint iste temporibus velit
              impedit repellendus debitis accusantium beatae dolore est, odio
              tenetur quaerat fuga omnis quas eligendi adipisci optio vel. Quia
              modi est quo veritatis molestias necessitatibus voluptate voluptas
              nesciunt quae aliquid quibusdam tempore natus omnis, sint facere
              impedit sapiente doloremque minus? Eius voluptates quaerat facere
              et dicta, distinctio aperiam nemo reprehenderit blanditiis
              perspiciatis voluptatem vel, placeat hic, ipsam mollitia fuga?
              Voluptates atque nemo earum praesentium sint natus cumque et
              reprehenderit commodi, tempora vel sapiente saepe laboriosam iusto
              blanditiis culpa iure. Repellendus architecto vero amet sapiente
              ipsum eligendi, nostrum consequatur velit inventore sit
              laudantium! Dolorem quos maiores accusamus rem quia provident ipsa
              et voluptatum cumque aspernatur. Aspernatur, culpa, magnam atque
              autem at quia beatae id, unde eligendi perferendis odio impedit
              dolor officia ad velit necessitatibus assumenda sunt iste optio?
              Excepturi perspiciatis voluptatum quis officiis inventore.
            </p>
          </div>
          <div className="w-[40%]">
            <img src={image} alt="" className="h-[100%] w-110" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-blue-200 to-blue-400 h-[90vh]">
      <div className="text-[#ffe] items-center text-center">
      <h1 className="text-blue-600 text-center text-4xl font-semibold pt-[15vh]">Contact us</h1>
        <p className="text-[20px]">
          Have a question or just want to say hi? We’d love to hear from you!
        </p>
        <form className="max-w-130 grid m-auto h-100 pt-10">
            <div className="max-w-130">
            <input type="text" placeholder="Your Name" className="h-[50px] w-full rounded-xl focus:text-blue-700 border border-none outline-none pl-4" style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}} {...register("name")}/>
            {errors.name && <p className="text-red-500">*{errors.name.message}</p>}
            </div>
            <div className="max-w-130">
            <input type="email" placeholder="Your Email" className="h-[50px] w-full rounded-xl focus:text-blue-700 border border-none outline-none pl-4" style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}} {...register("email")}/>
            {errors.email && <p className="text-red-500">*{errors.email.message}</p>}
            </div>
            <div className="max-w-130">
            <textarea placeholder="Message" className="h-[100px] w-full rounded-xl border focus:text-blue-700 focus:pt-3 placeholder:text-bg-red-700 border-none outline-none pl-4" style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}} {...register("message")}></textarea>
            {errors.message && <p className="text-red-500">*{errors.message.message}</p>}
            </div>
          <button type="submit" onClick={handleSubmit(onSubmit)} className="bg-blue-600 rounded-xl px-6 py-1 font-semibold h-13  hover:bg-blue-500">
            Submit
          </button>
        </form>
      </div>
    </div>
    <div className="bg-blue-900">
        <h1 className="text-center text-4xl font-bold pt-20 text-blue-600">Career Page</h1>
        <p className="text-center text-xl pt-10 px-20 text-white">Explore exciting career opportunities in web development! Join our dynamic team and contribute to innovative projects that shape the digital landscape. Whether you're a seasoned developer or just starting your journey, we offer a collaborative environment where your skills can thrive and grow. Discover your potential with us and take the next step in your career today!</p>
        <div className="text-center pt-10">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 mb-10">Apply Now</button>
        </div>
        </div>
    <footer>
        <div className="text-center p-4 bg-blue-600 text-white">
            &copy; 2025 Web Development. All rights reserved.
        </div>
    </footer>
    </main>
  );
};

export default Home;