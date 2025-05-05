/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  sendResetEmail,
  confirmPasswordReset,
} from "@/lib/auth"  

export default function ResetPassword() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resendCooldown, setResendCooldown] = useState(0)

  const router = useRouter()

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setMessage("")

    if (!email) {
      setError("Please enter your email address.")
      return
    }

    setIsSubmitting(true)
    try {
      await sendResetEmail(email)
      setMessage("Verification code sent to your email.")
      setStep(2)
    } catch (err: any) {
      setError(err.message || "Failed to send reset email.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setMessage("")

    if (!code) {
      setError("Please enter the verification code.")
      return
    }

    setMessage("Code verified. Now enter your new password.")
    setStep(3)
  }

  const handleResendCode = async () => {
    if (!email) return
    try {
      await sendResetEmail(email)
      setMessage("Verification code resent.")
      setResendCooldown(30) // 30 seconds cooldown
    } catch (err: any) {
      setError(err.message || "Failed to resend code.")
    }
  }

  useEffect(() => {
    if (resendCooldown === 0) return
    const timer = setInterval(() => {
      setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [resendCooldown])


  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setMessage("")

    if (!newPassword || !confirmPassword) {
      setError("Please enter and confirm your new password.")
      return
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setIsSubmitting(true)
    try {
      await confirmPasswordReset(email, code, newPassword)
      setMessage("Password reset successfully. Redirecting to login...")
      setTimeout(() => router.push("/auth/login"), 3000)
    } catch (err: any) {
      setError(err.message || "Failed to reset password.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>

        {step === 1 && (
          <form onSubmit={handleSendCode} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {message && <p className="text-green-600 text-sm">{message}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
            >
              {isSubmitting ? "Sending..." : "Send Verification Code"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Verification Code</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter code sent to your email"
                required
              />
            </div>

            <button
              type="button"
              onClick={handleResendCode}
              disabled={resendCooldown > 0}
              className="text-sm text-indigo-600 hover:underline mt-2"
            >
              {resendCooldown > 0 ? `Resend Code in ${resendCooldown}s` : "Resend Code"}
            </button>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {message && <p className="text-green-600 text-sm">{message}</p>}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Verify Code
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="New Password"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Confirm Password"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {message && <p className="text-green-600 text-sm">{message}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
            >
              {isSubmitting ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}

        <div className="text-center mt-6">
          <a href="/auth/login" className="text-indigo-600 text-sm hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  )
}
