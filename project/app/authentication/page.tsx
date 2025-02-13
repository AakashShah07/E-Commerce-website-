 "use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, UserCircle, Lock, UserPlus, LogIn } from 'lucide-react';
import {signup, login} from '../../services/authService'
import { useRouter } from "next/navigation"; // ✅ Use Next.js router instead

interface FormInputs {
  username: string;
  password: string;
}



export default function Authentication() {

  const router = useRouter(); // ✅ Use useRouter instead of useNavigate

    const [alertMessage, setAlertMessage] = useState<string | null>(null);
const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

    const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    console.log("Submitting form:", data);
    try {
        const response = isLogin ? await login(data) : await signup(data);
        console.log("Response is ", response);

        router.push("/admin");
        if (response.error) {
            setAlertMessage(response.error);
            setAlertType("error");
        } else {
            setAlertMessage(isLogin ? "Login successful!" : "Account created successfully!");
            setAlertType("success");

            // ✅ Store token in localStorage (only if login was successful)
            if (response.token) {
                localStorage.setItem("token", response.token);
            }
        }
    } catch (error) {
        console.error("Error:", error);
        setAlertMessage("Something went wrong. Please try again.");
        setAlertType("error");
    }

    // Clear the alert after 3 seconds
    setTimeout(() => setAlertMessage(null), 3000);
};


  const toggleMode = () => {
    setIsLogin(!isLogin);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center auth-container">
      <div className="w-full max-w-md p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isLogin ? 'Welcome back' : 'Create account'}
          </h1>
          <p className="text-gray-600">
            {isLogin
              ? 'Enter your credentials to access your account'
              : 'Sign up to get started with your new account'}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.form
            key={isLogin ? 'login' : 'signup'}
            initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <div className="relative">
                <input
                  type="string"
                  {...register('username', {
                    required: true,
                    // pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  placeholder="Enter you userName"
                  className={`${errors.username ? 'border-red-500' : ''}`}
                />
                <UserCircle className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-500">
                    Please enter a valid username address
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: true,
                    minLength: 6,
                  })}
                  placeholder="••••••••"
                  className={`${errors.password ? 'border-red-500' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    Password must be at least 6 characters
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              {isLogin ? (
                <>
                  <LogIn className="h-5 w-5" />
                  Sign In
                </>
              ) : (
                <>
                  <UserPlus className="h-5 w-5" />
                  Create Account
                </>
              )}
            </button>
          </motion.form>
        </AnimatePresence>

        <div className="mt-6 text-center">
          <button
            onClick={toggleMode}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}