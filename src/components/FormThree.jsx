import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const FormThree = () => {
  const schema = yup
    .object()
    .shape({
      name: yup
        .string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      age: yup
        .number()
        .typeError("Age must be a number")
        .min(18, "You must be at least 18 years old")
        .max(100, "Age cannot exceed 100")
        .required("Age is required"),
      address: yup
        .string()
        .min(10, "Address should be more descriptive")
        .required("Address is required"),
      phone: yup
        .string()
        .required("Phone number is required"),
      email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("data:",data);  
    alert("Form submitted successfully");
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-110 border border-gray-100"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-700">Form</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            {...register("name")}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-lg outline-none "
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Age</label>
          <input
            {...register("age")}
            placeholder="Enter your age"
            type="number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Address</label>
          <textarea
            {...register("address")}
            placeholder="Enter your address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
          <input
            {...register("phone")}
            placeholder="e.g. 08123456789"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            {...register("email")}
            placeholder="example@email.com"
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
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

export default FormThree;