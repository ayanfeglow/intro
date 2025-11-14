import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Contact = () => {
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
    <div className="h-[100vh] bg-gradient-to-b from-blue-200 to-blue-400">
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
            <textarea placeholder="Message" className="h-[100px] w-full rounded-xl border focus:text-blue-700 placeholder:text-bg-red-700 border-none outline-none pl-4" style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}} {...register("message")}></textarea>
            {errors.message && <p className="text-red-500">*{errors.message.message}</p>}
            </div>
          <button type="submit" onClick={handleSubmit(onSubmit)} className="bg-blue-600 rounded-xl px-6 py-1 font-semibold h-13  hover:bg-blue-500">
            Submit
          </button>
        </form>
      </div>

      <footer>
        <div className="text-center p-4 bg-blue-600 text-white mt-[12.8vh]">
            &copy; 2025 Web Development. All rights reserved.
        </div>
    </footer>
    </div>
  );
};

export default Contact;
