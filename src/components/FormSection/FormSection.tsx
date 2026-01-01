"use client";

import { useForm } from "react-hook-form";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";

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
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      comments: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const commentValue = watch("comments") || "";
  const router = useRouter();
  const onSubmit = async (data: FormData) => {
     router.push("/thank-you");
    setLoading(true);
    const response = await fetch(`https://apiserver.cec.edu.in/admission-enquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
     
    } else {
      toast.error("Error submitting form.");
    }
  };

  return (
    <div className="flex justify-center mt-[-10px] bg-gradient-to-b from-white to-transparent opacity-90">
      <div className="w-full max-w-7xl p-10">
        <h2 className="text-center text-[#1A97A2] font-bold text-3xl md:text-3xl mb-12">Ready to Shape Your Future?</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              placeholder="Your Full Name"
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Full name must be at least 2 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Full name cannot exceed 50 characters",
                },
              })}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="md:col-span-2">
            <input
              type="tel"
              placeholder="Your Phone Number"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[\d\s-]{10,15}$/,
                  message: "Please enter a valid phone number (10-15 digits)",
                },
              })}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
          </div>

          <div className="md:col-span-2">
            <textarea
              rows={3}
              maxLength={250}
              placeholder="Your Comments"
              {...register("comments", {
                required: "Comments are required",
                minLength: {
                  value: 2,
                  message: "Comments must be at least 2 characters",
                },
                maxLength: {
                  value: 250,
                  message: "Comments cannot exceed 250 characters",
                },
                validate: {
                  notOnlyWhitespace: (value) => value.trim().length > 0 || "Comments cannot be only whitespace",
                },
              })}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2 resize-none"
            />
            <div className="flex justify-between items-center mt-1">
              <div>{errors.comments && <p className="text-red-500 text-sm">{errors.comments.message}</p>}</div>
              <div className="text-sm text-gray-500">{commentValue.length}/250</div>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#1A97A2] hover:bg-[#178891] text-white text-lg font-semibold px-6 py-2 rounded-full transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? <ClipLoader size={24} color="#fff" /> : "Apply"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CounselingForm;
