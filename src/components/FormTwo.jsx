import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormTwo = () => {
  const data = yup
    .object()
    .shape({
      firstName: yup.string().required("First Name Required"),
      lastName: yup.string().required("Last Name required"),
      age: yup.number().required(),
      address: yup.string().required(),
      password: yup.string().required().min(4, "password must be at least 4 characters").max(12, "password must not exceed 12 characters"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(data),
  });

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form
      action="h-screen flex justify-start items-center flex-col"
      onClick={handleSubmit(onSubmit)}
    >
      <div className="space-y-2 mt-10">
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm">
            First Name
          </label>
          <input
            {...register("firstName")}
            placeholder="enter your first name"
            className="w-96 px-2 py-1 text-sm border border-gray-700 border-2 outline-none rounded-sm"
          />
          {errors?.firstName && (
            <p className="text-red-500">*{errors.firstName.message}</p>
          )}
        </div>
        <div className=" flex flex-col">
          <label htmlFor="" className="text-sm">
            Last Name
          </label>
          <input
            {...register("lastName")}
            placeholder="enter your last name"
            className="w-96 px-2 py-1 text-sm border border-gray-700 border-2 outline-none rounded-sm"
          />
          {errors?.lastName && (
            <p className="text-red-500">*{errors.lastName.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Age</label>
          <input
            type="text"
            placeholder="enter your age"
            {...register("age")}
            className=" px-2 py-1 w-96 text-sm border border-gray-700 border-2 outline-none rounded-sm"
          />
          {errors?.age && (
            <p className="text-red-500">*{errors.age.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="">address</label>
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
          <label htmlFor="">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="enter your password"
            className="w-96 px-2 py-1 text-sm border border-gray-700 border-2 outline-none rounded-sm"
          />
          {errors?.password && (
            <p className="text-red-500">*{errors.password.message}</p>
          )}
        </div>
      </div>
      <input type="submit" className="text-white px-6 mt-3 py-2 text-sm font-bold bg-green-500 rounded-sm" />
    </form>
  );
};

export default FormTwo;