import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup
    .object()
    .shape({
      name: yup.string().required("name is required"),
      age: yup.number().required("age is required"),
      address: yup.string().required(),
      phonenumber: yup.string().required(),
      email: yup.string().email().required(),
      username: yup.string().required("username is required"),
      password: yup
        .string()
        .required()
        .min(4, "password must be at least 4 characters")
        .max(12, "password must not exceed 12 characters"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const payload = {
      contact: { email: data.email, number: data.phonenumber },
      name: data.name,
      address: data.address,
      age: data.age,
      password: data.password,
      username: data.username,
    };
    console.log(payload);
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <form
      className="h-screen flex justify-start items-center flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-2 mt-10">
        <div className="flex flex-col">
          <label className="text-sm">Name</label>
          <input
            {...register("name")}
            placeholder="enter your name"
            className="w-96 px-2 py-1 text-sm border border-gray-700 border-2 outline-none rounded-sm"
          />
          {errors?.name && (
            <p className="text-red-500">*{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label>Age</label>
          <input
            type="text"
            placeholder="enter your age"
            {...register("age")}
            className="px-2 py-1 w-96 text-sm border border-gray-700 border-2 outline-none rounded-sm"
          />
          {errors?.age && <p className="text-red-500">*{errors.age.message}</p>}
        </div>

        <div className="flex flex-col">
          <label>Address</label>
          <input
            type="text"
            {...register("address")}
            placeholder="enter your address"
            className="w-96 px-2 py-1 text-sm border border-gray-700 border-2 outline-none rounded-sm"
          />
          {errors?.address && (
            <p className="text-red-500">*{errors.address.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label>Phone number</label>
          <input
            type="text"
            {...register("phonenumber")}
            placeholder="enter your phone number"
            className="w-96 px-2 py-1 text-sm border border-gray-700 border-2 outline-none rounded-sm"
          />
          {errors?.phonenumber && (
            <p className="text-red-500">*{errors.phonenumber.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label>Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="enter your email"
            className="w-96 px-2 py-1 text-sm border border-gray-700 border-2 outline-none rounded-sm"
          />
          {errors?.email && (
            <p className="text-red-500">*{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label>Username</label>
          <input
            type="text"
            {...register("username")}
            placeholder="enter your username"
            className="w-96 px-2 py-1 text-sm border border-gray-700 border-2 outline-none rounded-sm"
          />
          {errors?.username && (
            <p className="text-red-500">*{errors.username.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="grid">Password</label>
          <div className="border-gray-700 border-2 px-2 w-96 flex justify-between items-center rounded-sm">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="enter your password"
              className="w-full px-2 py-1 text-sm outline-none"
            />
            <button
              onClick={togglePasswordVisibility}
              className="text-blue-800"
            >
              {showPassword ? (
                <IoMdEyeOff style={{ fontSize: "20px", color: "black"}} />
              ) : (
                <IoMdEye style={{ fontSize: "20px", color: "black"}} />
              )}
            </button>
          </div>
          {errors?.password && (
            <p className="text-red-500">*{errors.password.message}</p>
          )}
        </div>
      </div>

      <input
        type="submit"
        className="text-white px-6 mt-3 py-2 text-sm font-bold bg-green-500 rounded-sm"
      />
    </form>
  );
};

export default Form;
