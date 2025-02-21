"use client"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { loginUser } from "../../../entities/auth/api/authSlice";
import { AppDispatch, RootState } from "../../../app/store/store";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();

  // Getting loading and error state from Redux
  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Dispatch the login action and await the result
    const resultAction = await dispatch(loginUser({ name, password }));

    // Check if the login action was successful
    if (loginUser.fulfilled.match(resultAction)) {
      // If login is successful, redirect and store the token
      localStorage.setItem("token", resultAction.payload.token);
      alert("Login successful!");
      window.location.href = "/";
    } else {
      // If login failed, show error message
      alert(resultAction.error.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <main className="container px-4 py-12">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-semibold text-center mb-8">
            Log in to Explore Stories
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter your username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <a
              href="/forgot-password"
              className="text-sm text-gray-600 hover:text-primary block text-right"
            >
              Forgot Password?
            </a>
            <button
              type="submit"
              className="w-full bg-[#DB4444] hover:bg-[#DB4444]/90 text-white py-2 rounded-md"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
            <Link href="/register">
              <button className="text-sm text-[#DB4444] hover:underline">
                Don't have an account? Sign up
              </button>
            </Link>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
      </main>
    </div>
  );
}
