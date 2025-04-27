import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { signupApi } from "../api/authApi";
import { toast } from "sonner";

const signupSchema = z
  .object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignupPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await signupApi(data);

      if (response.success) {
        toast.success(response.message || "Signup successful");
        navigate("/login");
      } else {
        toast.error(response.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong, please try again!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div
        className="hidden md:flex w-4/6 h-screen bg-blue-500 bg-cover bg-center bg-no-repeat flex-col p-12 text-white"
        style={{ backgroundImage: "url('/Login.svg')" }}
      >
        <div className="flex items-center gap-2 mb-10">
          <img src="/Logo.svg" alt="Quest.Ai Logo" className="w-14 h-14" />
          <h1 className="text-5xl font-bold">
            <span className="font-bold">Ques</span>
            <span className="font-normal">.Ai</span>
          </h1>
        </div>

        <div className="w-1/2">
          <p className="text-6xl font-medium leading-snug">
            Your podcast <br /> will no longer <br /> be just a hobby.
          </p>
          <p className="mt-6 text-2xl">
            Supercharge your distribution <br /> using our AI assistant!
          </p>
        </div>
      </div>

      <div className="w-full md:w-2/6 bg-white flex items-center justify-center p-8">
        <form
          className="w-full flex flex-col gap-2 px-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-center mb-4">
            <img src="/Icone.svg" alt="Quest.Ai Logo" className="w-14 h-14" />
          </div>

          <h2 className="text-2xl main-text font-semibold text-center">
            Welcome to
          </h2>

          <h1 className="text-3xl font-bold text-center mb-6 main-text">
            <span className="font-bold">Quest</span>
            <span className="font-normal">.Ai</span>
          </h1>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name")}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword")}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-main-text text-white rounded-lg transition"
          >
            Sign Up
          </button>

          {/* OR Section */}
          <div className="flex items-center gap-2 my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign Up Button */}
          <button
            type="button"
            className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2"
          >
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>

          {/* Redirect to Login */}
          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
