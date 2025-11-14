import React from "react";

const FormFour = () => {
  const schema = yup
    .object()
    .shape({
      firstname: yup.string(),
      lastname: yup.string(),
      email: yup.string(),
      address: yup.string(),
      password: yup.string(),
      phonenumber: yup.string(),
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("data:", data);
    alert("Form submitted successfully");
    reset();
  };

  return (
    <div>
      <h2 className="text-purple-600 font-semibold text-3xl text-center">
        <button onSubmit={handleSubmit(onSubmit)}></button>
        Form Four
      </h2>
      <div className="bg-violet-600 m-auto w-100 h-140 grid rounded-xl items-center justify-center px-6">
        
      </div>
    </div>
  );
};

export default FormFour;
