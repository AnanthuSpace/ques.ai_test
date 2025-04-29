import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../api/authApi";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await loginApi(data);
      
      if (response.success) {
        toast.success(response.message || "Login successful");
        sessionStorage.setItem("accessToken", response.token)
        navigate("/");
      } else {
        toast.error(response.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong, please try again!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div
        className="hidden md:flex w-4/6 h-screen bg-blue-500 bg-cover bg-center bg-no-repeat flex-col p-12 text-white relative"
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
            Your podcast
            <br /> will no longer <br /> be just a hobby.
          </p>
          <p className="mt-6 text-2xl">
            Supercharge your distribution <br /> using our AI assistant!
          </p>
        </div>
      </div>

      <div className="w-full md:w-2/6 bg-white flex items-center justify-center p-8">
        <form
          className="w-full flex flex-col gap-4 px-5"
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
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4" />
              <label htmlFor="remember" className="text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-main-text text-white rounded-lg transition"
          >
            Login
          </button>

          <div className="flex items-center gap-2 my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            type="button"
            className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2"
          >
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <p className="text-center text-sm mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
