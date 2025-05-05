/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signUp } from "@/lib/auth"

export default function SignUpForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // Validate email
    if (!email ) {
      setError("Please enter a valid email address.")
      setIsSubmitting(false)
      return
    }

    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsSubmitting(false)
      return
    }

    // Check password strength
    if (password.length < 6) {
      setError("Password should be at least 6 characters long.")
      setIsSubmitting(false)
      return
    }

    try {
      await signUp(email, password )
      router.push(`/auth/verify?email=${encodeURIComponent(email)}`)
    } catch (err: any) {
      setError(err.message || "Failed to sign up")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
        <p className="text-center text-gray-600 mb-6">Sign up with your email</p>

        <form onSubmit={handleSubmit} className="space-y-6">
         
          {/* Email */}
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
              aria-invalid={!!error}
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
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

          {/* Confirm Password */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <a href="/auth/login" className="text-indigo-600 hover:underline">Log in</a>
          </div>
        </form>

        <div className="text-center text-xs text-gray-500 mt-6">
          By clicking continue, you agree to our{" "}
          <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and{" "}
          <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
        </div>
      </div>
    </div>
  )
}
