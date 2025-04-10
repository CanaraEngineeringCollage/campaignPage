'use client'

import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  comments: string;
};

const CounselingForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);
  const commentValue = watch("comments") || "";

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setLoading(false);
    if (result.result === "success") {
      toast.success("Form submitted successfully!");
      reset(); // Clear the form fields after submission
    } else {
      toast.error("Error submitting form.");
    }
  };

  return (
    <div className='flex justify-center mt-[-10px] bg-gradient-to-t from-white to-transparent opacity-90'>
    
    {/* Optional: Gradient layer behind the form */}

      <div className="bg-white  w-full max-w-7xl p-10 rounded-xl ">
        {/* Headings */}
        <h2 className="text-center text-[#1A97A2] font-bold text-2xl md:text-3xl mb-2">
          Ready to Shape Your Future?
        </h2>
        

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              placeholder="Your Full Name"
              {...register("fullName", { required: true })}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
            />
          </div>
          <div className="md:col-span-2">
            <input
              type="tel"
              placeholder="Your Phone Number"
              {...register("phoneNumber", { required: true })}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
            />
          </div>
          <div className="md:col-span-2">
            <textarea
              rows={3}
              maxLength={250}
              placeholder="Your Comments"
              {...register("comments")}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2 resize-none"
            />
            <div className="text-right text-sm text-gray-500">{commentValue.length}/250</div>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-[#1A97A2] hover:bg-[#178891] text-white text-lg font-semibold px-6 py-2 rounded-full transition duration-300"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CounselingForm;
