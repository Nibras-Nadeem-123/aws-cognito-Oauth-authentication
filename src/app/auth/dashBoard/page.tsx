"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import LogoutButton from "@/components/logoutButton"

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("accessToken")

    if (!token) {
      router.push("/login") // Redirect if not authenticated
    } else {
      const email = localStorage.getItem("userEmail")
      setUserEmail(email || "Unknown User")
      setLoading(false)
    }
  }, [router])

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="animate-spin border-t-4 border-indigo-600 border-8 w-16 h-16 rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Your Dashboard</h1>
        <p className="text-lg text-gray-600">
          Logged in as: <strong className="text-indigo-600">{userEmail}</strong>
        </p>
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Example Card 1 */}
        <div className="bg-indigo-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">Recent Activities</h3>
          <p className="text-sm text-gray-600">Check your latest activities.</p>
        </div>

        {/* Example Card 2 */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">Account Settings</h3>
          <p className="text-sm text-gray-600">Manage your account preferences.</p>
        </div>

        {/* Example Card 3 */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">Notifications</h3>
          <p className="text-sm text-gray-600">Stay updated with new notifications.</p>
        </div>
      </div>

      <div className="mt-8">
        <LogoutButton />
      </div>
    </div>
  )
}
