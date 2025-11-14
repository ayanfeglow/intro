import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const AssignmentFour = () => {
  const scheme = yup.object().shape({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required").min(4, "Your password is too short !!").max(10, "Your password is too long !"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(scheme),
  });
  const onSubmit = (data) => {
    console.log(data)
    const email = data.email;
    const password =data.password;

    // const name = data.firstname + " "+ data.lastname;
    const name = `${data.firstname} ${data.lastname}`
    const payload = { name, password, email}
    console.log(payload)
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-110 border border-gray-100  "
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-700">
          Form
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            First Name
          </label>
          <input
            {...register("firstname")}
            placeholder="Enter your first name"
            className="w-full px-4 py-2 border rounded-lg outline-none "
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstname.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Last Name
          </label>
          <input
            {...register("lastname")}
            placeholder="Enter your last name"
            className="w-full px-4 py-2 border rounded-lg outline-none "
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastname.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            email
          </label>
          <input
            {...register("email")}
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border rounded-lg outline-none "
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
           <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg outline-none "
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AssignmentFour;
