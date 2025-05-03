/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "@/lib/auth"
import Link from "next/link"

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const res: any = await signIn(email, password)
      const tokens = res.AuthenticationResult
      localStorage.setItem("accessToken", tokens?.AccessToken || "")
      localStorage.setItem("idToken", tokens?.IdToken || "")
      router.push("/auth/dashBoard")
    } catch (err: any) {
      console.error("Login error:", err)
      setError(err.message || "Login failed")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleForgotPassword = () => {
    router.push("/auth/forgotPassword")
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-6">Log in with your email</p>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Social login buttons */}
          <div className="space-y-4">
            <button
              type="button"
              className="w-full py-3 px-4 border border-gray-300 rounded-md text-black hover:bg-gray-100 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.152 6.896c-..." />
              </svg>
              Login with Apple
            </button>

            <button
              type="button"
              className="w-full py-3 px-4 border border-gray-300 rounded-md text-black hover:bg-gray-100 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v..." />
              </svg>
              Login with Google
            </button>
          </div>

          <div className="relative text-center text-sm">
            <span className="absolute inset-0 flex items-center border-t border-gray-300" />
            <span className="relative z-10 bg-white px-2 text-gray-500">Or continue with</span>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="m@example.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
              <Link href="/auth/forgotPassword" onClick={handleForgotPassword} className="text-sm text-indigo-600 hover:underline">Forgot your password?</Link>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          {/* Redirect to Sign Up */}
          <div className="text-center text-sm">
            Don&apos;t have an account? <a href="/auth/signup" className="text-indigo-600 hover:underline">Sign up</a>
          </div>
        </form>

        {/* Terms and Privacy */}
        <div className="text-center text-xs text-gray-500 mt-6">
          By clicking continue, you agree to our <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
        </div>
      </div>
    </div>
  )
}
