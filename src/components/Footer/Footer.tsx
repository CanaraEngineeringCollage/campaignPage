"use client";
import { useEffect, useState, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  classApplied: string;
  location: string;
}

const Footer = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    classApplied: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    setLoading(false);
    if (result.result === "success") {
      toast.success("Form submitted successfully!");
      reset();
    } else {
      toast.error("Error submitting form.");
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      classApplied: "",
      location: "",
    },
  });
  return (
    <div className="relative flex flex-col items-center bg-[#156A7E] min-h-[100vh]">
      <div className="relative z-10 p-8 md:py-24 rounded-lg shadow-2xl xl:max-w-7xl w-full lg:max-w-4xl bg-white mt-[30vh] mb-20">
        <h2 className="text-center text-[#1A97A2] font-semibold xl:text-[2.5rem] lg:text-[2rem]">Ready to Shape a Future Innovator</h2>
        <h3 className="text-center text-gray-800 font-bold text-xl pb-12  xl:text-[2.8rem] lg:text-[2rem]">Book Your Counselling Session Today!</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-7">
          <input
            type="text"
            placeholder="Your Full Name"
            {...register("fullName", { required: "Your Full Name is required" })}
            className="w-full px-1 pb-[7px] md:col-span-2 text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          <input
            type="tel"
            placeholder="You Phone Number"
            {...register("phoneNumber", { required: "Your Phone is required" })}
            className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          <input
            type="text"
            placeholder="Located in"
            {...register("location", { required: "Location is required" })}
            className="md:col-span-2 px-1 pb-[7px] text-[#040707] bg-transparent border-0 border-b border-black/[20%] focus:outline-none text-xl"
          />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}

          <button
            type="submit"
            className="bg-[#1A97A2] md:col-span-2 mx-auto cursor-pointer text-white py-2 mt-12 px-6 rounded-3xl font-bold text-2xl flex items-center justify-center"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="w-full bg-[#156A7E] text-white p-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-end">
            <Image src="/logo/logo.svg" alt="Logo" width={250} height={200} className="object-cover mt-6" />
          </div>
          <div className="flex flex-col items-end">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {/* Social media icons will be added here */}
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.88">
                    <path
                      opacity="0.4"
                      d="M25.8379 12.8489C25.8379 19.4213 20.3477 24.768 13.5518 24.768C6.75585 24.768 1.26562 19.4213 1.26562 12.8489C1.26562 6.2764 6.75585 0.929688 13.5518 0.929688C20.3477 0.929688 25.8379 6.2764 25.8379 12.8489Z"
                      stroke="white"
                      strokeOpacity="0.88"
                      strokeWidth="0.75"
                    />
                    <path
                      d="M19.4308 18.7309V14.4267C19.4308 12.3112 18.9754 10.6953 16.5075 10.6953C15.3175 10.6953 14.5243 11.3417 14.2011 11.9587H14.1717V10.8863H11.8359V18.7309H14.2745V14.838C14.2745 13.8097 14.4655 12.8254 15.7289 12.8254C16.9776 12.8254 16.9922 13.9859 16.9922 14.8967V18.7162H19.4308V18.7309Z"
                      fill="white"
                      fillOpacity="0.88"
                    />
                    <path d="M7.86719 10.8828H10.3058V18.7274H7.86719V10.8828Z" fill="white" fillOpacity="0.88" />
                    <path
                      d="M9.08996 6.97656C8.31137 6.97656 7.67969 7.60825 7.67969 8.38683C7.67969 9.16542 8.31137 9.8118 9.08996 9.8118C9.86855 9.8118 10.5002 9.16542 10.5002 8.38683C10.5002 7.60825 9.86855 6.97656 9.08996 6.97656Z"
                      fill="white"
                      fillOpacity="0.88"
                    />
                  </g>
                </svg>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"></div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"></div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"></div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/20">
          <div className="flex justify-between items-center text-white/56 text-sm">
            <div>Copyright © 2024 CEC & Canara High School Association. All rights reserved</div>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms-of-use" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
